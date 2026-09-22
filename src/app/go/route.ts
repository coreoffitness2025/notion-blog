import { NextRequest, NextResponse } from "next/server";

/**
 * /go — 링크인바이오·콘텐츠에서 앱으로 보내는 단일 진입점 (2026-09-22, 대표 지시).
 *
 * 왜: 리틀리 버튼이 스토어 주소로 바로 가서 설치 출처가 전부 (direct) 로 찍혔다.
 * 안드로이드는 Play `referrer` 를 실어 보내면 Firebase 가 first_open 에 캠페인을 자동으로 붙인다.
 * iOS 는 App Store 가 출처를 지우므로 클릭까지만 본다 — 여기서 더 할 수 있는 게 없다.
 *
 * 사용: /go?c=ig-20260922-rdl        (코비아 피트니스)
 *       /go?app=recovery&c=ig-bio    (코비아 리커버리)
 *       s= 로 출처를 직접 지정 가능. 없으면 c 의 앞 토큰(ig, th, nv, bl…)을 쓴다.
 */

const APPS = {
  fitness: {
    android: "com.corevia.fitness",
    ios: "https://apps.apple.com/kr/app/id6753667196",
  },
  recovery: {
    android: "com.corevia.recoveryapp",
    ios: "https://apps.apple.com/kr/app/id6762050806",
  },
} as const;

const clean = (v: string | null, fallback: string) =>
  (v ?? "").replace(/[^a-zA-Z0-9._-]/g, "").slice(0, 80) || fallback;

export const dynamic = "force-dynamic";

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const appKey = clean(params.get("app"), "fitness") as keyof typeof APPS;
  const app = APPS[appKey] ?? APPS.fitness;

  const campaign = clean(params.get("c"), "unknown");
  const source = clean(params.get("s"), campaign.split("-")[0] || "link");

  // p=android|ios — 스토어 버튼처럼 기기가 이미 정해진 자리에서 쓴다. 없으면 UA 로 판단
  const forced = clean(params.get("p"), "");
  const ua = request.headers.get("user-agent") ?? "";
  const utm = {
    utm_source: source,
    utm_medium: "social",
    utm_campaign: campaign,
  };

  // 안드로이드: Play 링크에 referrer 를 실어야 Firebase 가 설치를 캠페인에 귀속시킨다
  if (forced === "android" || (!forced && /android/i.test(ua))) {
    const referrer = new URLSearchParams(utm).toString();
    return NextResponse.redirect(
      `https://play.google.com/store/apps/details?id=${app.android}&referrer=${encodeURIComponent(referrer)}`,
      302,
    );
  }

  // iOS: 파라미터를 붙여봐야 App Store 가 버린다. 그냥 스토어로 보낸다
  if (forced === "ios" || (!forced && /iphone|ipad|ipod/i.test(ua))) {
    return NextResponse.redirect(app.ios, 302);
  }

  // 데스크톱·기타: 이 링크는 "앱 받기" 버튼이다. 홈으로 보내지 말고 Play 웹 스토어 페이지로 보낸다
  // (2026-09-22 대표 지적: 리틀리는 원래 스토어로 직행했는데 홈으로 가면 링크 의미가 사라진다)
  const referrer = new URLSearchParams(utm).toString();
  return NextResponse.redirect(
    `https://play.google.com/store/apps/details?id=${app.android}&referrer=${encodeURIComponent(referrer)}`,
    302,
  );
}
