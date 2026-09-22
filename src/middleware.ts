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
  matcher: ["/((?!_next|api|go|favicon|ads\\.txt|robots\\.txt|sitemap|.*\\..*).*)" ],
};
