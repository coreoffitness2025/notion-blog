"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { getDictionary } from "@/lib/i18n";
import NavbarAuthSection from "./NavbarAuthSection";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
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
    children?: { href: string; label: string; desc: string }[];
  };

  const nav: NavItem[] = [
    { href: `${prefix}/#features`, label: dict.nav.features },
    { href: `${prefix}/guide`, label: dict.nav.guide },
    {
      href: `${prefix}/guide/workout`,
      label: dict.nav.workoutGuide,
      children: [
        {
          href: `${prefix}/guide/workout/1rm`,
          label: isEn ? "1RM Calculator" : "1RM 계산기",
          desc: isEn ? "Calculate your one-rep max" : "최대 중량 계산",
        },
        {
          href: `${prefix}/guide/workout/programs`,
          label: isEn ? "Programs" : "운동 프로그램",
          desc: isEn ? "Custom workout programs" : "맞춤 운동 프로그램",
        },
        {
          href: `${prefix}/guide/workout/exercises`,
          label: isEn ? "Exercise Library" : "운동 도감",
          desc: isEn ? "99 exercises with proper form" : "99개 운동 올바른 자세",
        },
      ],
    },
    {
      href: `${prefix}/guide/nutrition`,
      label: dict.nav.nutritionGuide,
      children: [
        {
          href: `${prefix}/guide/nutrition/calorie`,
          label: isEn ? "Calorie Calculator" : "칼로리 계산기",
          desc: isEn ? "Daily calories & macros" : "일일 칼로리 & 매크로",
        },
        {
          href: `${prefix}/guide/nutrition/meal-plans`,
          label: isEn ? "Meal Plans" : "식단 추천",
          desc: isEn ? "Plans for your goals" : "목표별 식단 플랜",
        },
        {
          href: `${prefix}/guide/nutrition`,
          label: isEn ? "Food Database" : "영양성분 사전",
          desc: isEn ? "5,672 foods nutrition facts" : "5,672개 음식 영양 정보",
        },
      ],
    },
    { href: `${prefix}/posts`, label: dict.nav.blog },
  ];

  const otherLocale = locale === "ko" ? "en" : "ko";
  const switchPath = locale === "ko"
    ? `/en${pathname}`
    : pathname.replace(/^\/en/, "") || "/";

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-[1120px] mx-auto px-[var(--section-px)] py-3 flex items-center justify-between gap-4">
        <Link href={`${prefix}/`} className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CoreVia Logo"
            width={44}
            height={44}
            className="rounded-xl"
          />
          <span className="font-extrabold text-xl text-gray-900">
            CoreVia Fitness
          </span>
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
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-sm font-medium text-gray-800">{child.label}</span>
                          <span className="block text-xs text-gray-400 mt-0.5">{child.desc}</span>
                        </Link>
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
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-sm text-gray-500 hover:text-gray-800"
                    >
                      {child.label}
                    </Link>
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
