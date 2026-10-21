"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import NavbarAuthSection from "./NavbarAuthSection";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  // 가이드 메뉴 하나로 합침(10/21) — /guide 아래 전부
  if (/^(\/en)?\/guide$/.test(href)) { const p = pathname.replace(/^\/en/, ""); return p === "/guide" || p.startsWith("/guide/"); }
  // Product 메뉴: 제품 페이지 전부 + 전자책(/ebook 은 /products 밖에 있다)
  if (/^(\/en)?\/products$/.test(href)) {
    const p = pathname.replace(/^\/en/, "");
    return p === "/products" || p.startsWith("/products/") || p === "/ebook";
  }
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar({ locale }: { locale: string }) {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const isEn = locale === "en";

  type NavItem = {
    href: string;
    label: string;
    children?: { href: string; label: string; desc: string; group?: string }[];
  };

  const nav: NavItem[] = [
    {
      // 2026-10-21 대표: Product = 코비아 SW(코비아 CRM) / 애플리케이션(코비아 피트니스·코비아 리커버리) / 커머스(코비아 스마트 체중계·전자책)
      href: `${prefix}/products`,
      label: dict.nav.features,
      children: [
        {
          group: isEn ? "CoreVia SW" : "코비아 SW",
          href: `${prefix}/products/crm`,
          label: isEn ? "CoreVia CRM (Beta)" : "코비아 CRM (베타)",
          desc: isEn ? "CRM for wellness centers" : "웰니스 센터 CRM",
        },
        {
          group: isEn ? "Apps" : "애플리케이션",
          href: `${prefix}/products/apps#fitness`,
          label: isEn ? "CoreVia Fitness" : "코비아 피트니스",
          desc: isEn ? "Workouts and meals in one log" : "운동·식단을 함께 기록",
        },
        {
          group: isEn ? "Apps" : "애플리케이션",
          href: `${prefix}/products/apps#recovery`,
          label: isEn ? "CoreVia Recovery" : "코비아 리커버리",
          desc: isEn ? "Pain and rehab exercise log" : "통증·재활 운동 기록",
        },
        {
          group: isEn ? "Commerce" : "커머스",
          href: `${prefix}/products/scale`,
          label: isEn ? "CoreVia Smart Scale" : "코비아 스마트 체중계",
          desc: isEn ? "Your weight, saved to the app" : "올라서면 앱에 몸무게 자동 기록",
        },
        {
          group: isEn ? "Commerce" : "커머스",
          href: `${prefix}/ebook`,
          label: isEn ? "Ebook" : "전자책",
          desc: isEn ? "Core of Fitness (PDF)" : "Core of Fitness (PDF)",
        },
      ],
    },
    {
      // 2026-10-21 대표: Fitness·Workout·Nutrition Guide 셋을 하나로 — 기초 / 운동 / 영양. 주소는 그대로(네이버 유입). 전자책은 Product 에만(10/22 대표: 겹침)
      href: `${prefix}/guide`,
      label: dict.nav.guide,
      children: [
        { group: isEn ? "Basics" : "기초", href: `${prefix}/guide`, label: isEn ? "Fitness Guide" : "피트니스 가이드", desc: isEn ? "Training and nutrition principles" : "훈련 원리부터 영양 기초까지" },
        { group: isEn ? "Workout" : "운동", href: `${prefix}/guide/workout/exercises`, label: isEn ? "Exercise Guide" : "운동 가이드", desc: isEn ? "99 exercises with proper form" : "99개 운동 올바른 자세" },
        { group: isEn ? "Workout" : "운동", href: `${prefix}/guide/workout/programs`, label: isEn ? "Programs" : "운동 프로그램", desc: isEn ? "Custom workout programs" : "맞춤 운동 프로그램" },
        { group: isEn ? "Workout" : "운동", href: `${prefix}/guide/workout/1rm`, label: isEn ? "1RM Calculator" : "1RM 계산기", desc: isEn ? "Calculate your one-rep max" : "최대 중량 계산" },
        { group: isEn ? "Nutrition" : "영양", href: `${prefix}/guide/nutrition/calorie`, label: isEn ? "Calorie Calculator" : "칼로리 계산기", desc: isEn ? "Daily calories & macros" : "일일 칼로리 & 매크로" },
        { group: isEn ? "Nutrition" : "영양", href: `${prefix}/guide/nutrition/meal-plans`, label: isEn ? "Meal Plans" : "식단 추천", desc: isEn ? "Plans for your goals" : "목표별 식단 플랜" },
        { group: isEn ? "Nutrition" : "영양", href: `${prefix}/guide/nutrition`, label: isEn ? "Food Database" : "영양성분 사전", desc: isEn ? "5,672 foods nutrition facts" : "5,672개 음식 영양 정보" },
      ],
    },
    { href: `${prefix}/posts`, label: dict.nav.blog },
    { href: `${prefix}/team`, label: isEn ? "About" : "About" },
  ];

  const otherLocale = locale === "ko" ? "en" : "ko";
  const cleanPath = pathname.replace(/^\/(ko|en)/, "") || "/";
  const switchPath = locale === "ko"
    ? `/en${cleanPath}`
    : cleanPath;

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-[1120px] mx-auto pl-4 pr-[var(--section-px)] py-3 flex items-center justify-between gap-4">
        <Link href={`${prefix}/`} className="flex items-center">
          <img
            src="/logo-horizontal.png"
            alt="CoreVia Fitness"
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);

            if (item.children) {
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`text-sm transition-colors inline-flex items-center gap-1 ${
                      active
                        ? "font-bold text-gray-900"
                        : "font-medium text-gray-600 hover:text-[var(--corevia-primary)]"
                    }`}
                  >
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg py-2 min-w-[220px]">
                      {item.children.map((child, ci) => (
                        <div key={child.href}>
                        {child.group && child.group !== item.children![ci - 1]?.group && (
                          <span className={`block px-4 pb-1 text-[11px] font-semibold text-gray-400 ${ci ? "pt-3 mt-1 border-t border-gray-100" : "pt-1"}`}>{child.group}</span>
                        )}
                        <Link
                          href={child.href}
                          className="block px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-800">{child.label}</span>
                          <span className="block text-xs text-gray-400 mt-0.5">{child.desc}</span>
                        </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "font-bold text-gray-900"
                    : "font-medium text-gray-600 hover:text-[var(--corevia-primary)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={switchPath}
            className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            {otherLocale === "en" ? "EN" : "KO"}
          </Link>

          <NavbarAuthSection locale={locale} downloadLabel={dict.nav.download} />
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={dict.nav.menu}
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-100 bg-white px-[var(--section-px)] py-2">
          {nav.map((item) => (
            <div key={item.href}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  isActive(pathname, item.href)
                    ? "font-bold text-gray-900"
                    : "font-medium text-gray-600"
                }`}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="pl-4 pb-2">
                  {item.children.map((child, ci) => (
                    <div key={child.href}>
                      {child.group && child.group !== item.children![ci - 1]?.group && (
                        <span className="block pt-2 text-[11px] font-semibold text-gray-400">{child.group}</span>
                      )}
                      <Link
                        href={child.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 text-sm text-gray-500 hover:text-gray-800"
                      >
                        {child.label}
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="flex items-center gap-3 mt-2 mb-2">
            <Link
              href={switchPath}
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-500 bg-gray-100 rounded-lg text-center flex-1"
            >
              {otherLocale === "en" ? "English" : "한국어"}
            </Link>
            <NavbarAuthSection locale={locale} downloadLabel={dict.nav.download} />
          </div>
        </nav>
      )}
    </header>
  );
}
