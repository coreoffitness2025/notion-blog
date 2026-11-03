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

// 링크 미리보기 수집기(네이버 블로그 링크 카드 등)는 스토어로 보내지 않고 한국어 소개를 준다 (2026-11-03 대표
// "앱 링크가 왜 다 영어야"). 리다이렉트를 따라간 수집기가 Play 웹페이지의 영문 og 를 읽어 카드가 영어로 나왔다.
const PREVIEW_BOT = /Yeti|naver|Daum|kakaotalk-scrap|facebookexternalhit|facebookcatalog|Twitterbot|Slackbot|Discordbot|TelegramBot|LinkedInBot|WhatsApp|Pinterest|SkypeUriPreview|bitlybot|Embedly/i;

const PREVIEW = {
  fitness: {
    title: "코비아 피트니스 — 운동·식단 기록, 한 앱에서 끝",
    description: "사진 한 장으로 식단 기록, 운동 기록, 블루투스 체중계에 올라서면 몸무게 자동 기록까지. 무료로 시작하세요.",
    image: "https://coreviafitness.com/og/app-go-v2.png",
  },
} as const;

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function previewPage(url: string, store: string) {
  const p = PREVIEW.fitness;
  const html = `<!doctype html><html lang="ko"><head><meta charset="utf-8">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<meta property="og:type" content="website"><meta property="og:site_name" content="코비아 피트니스">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.description)}">
<meta property="og:image" content="${p.image}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">
<meta property="og:url" content="${esc(url)}"><meta name="twitter:card" content="summary_large_image">
<meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url=${esc(store)}">
</head><body><a href="${esc(store)}">${esc(p.title)}</a></body></html>`;
  return new NextResponse(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

export function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  if (PREVIEW_BOT.test(request.headers.get("user-agent") ?? "") && (params.get("app") ?? "fitness") === "fitness") {
    return previewPage(request.nextUrl.toString(), `https://play.google.com/store/apps/details?id=${APPS.fitness.android}`);
  }
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
