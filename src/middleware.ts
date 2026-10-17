import { NextRequest, NextResponse } from "next/server";

const locales = ["ko", "en"];
const defaultLocale = "ko";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files (ads.txt, robots.txt, etc.)
  if (pathname.includes(".")) return;

  // Check if the pathname already has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Rewrite to default locale internally (URL stays clean for Korean)
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(request.nextUrl);
}

export const config = {
  // go = 앱 다운로드 리다이렉트(로케일 프리픽스를 붙이면 안 된다)
  // ko/·en/ = 이미 로케일이 붙은 주소는 할 일이 없는데 매 요청 함수가 돌았다(요청의 ~37%, 2026-10-17 Vercel 사용량 정리)
  matcher: ["/((?!_next|api|go|favicon|ads\\.txt|robots\\.txt|sitemap|ko/|ko$|en/|en$|.*\\..*).*)" ],
};
