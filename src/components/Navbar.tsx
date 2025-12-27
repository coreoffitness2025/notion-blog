"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/", label: "홈" },
  { href: "/company", label: "기업 소개" },
  { href: "/solution", label: "솔루션" },
  { href: "/guide", label: "가이드" },
  { href: "/posts", label: "블로그" },
  { href: "/cases", label: "고객 사례" },
  { href: "/contact", label: "문의" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-40">
      <div className="max-w-[1100px] mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* 로고 영역 */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/appstore.png"
            alt="Corevia Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-extrabold text-xl text-blue-600">Corevia</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex gap-4 flex-wrap">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm transition-colors ${
                  active
                    ? "font-bold text-blue-600"
                    : "font-medium text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-blue-100 bg-white px-4 py-2">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm transition-colors ${
                  active
                    ? "font-bold text-blue-600"
                    : "font-medium text-gray-600 hover:text-blue-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
