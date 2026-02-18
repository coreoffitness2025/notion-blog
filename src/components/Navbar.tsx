"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/#features", label: "기능 소개" },
  { href: "/guide", label: "무료 도구" },
  { href: "/posts", label: "블로그" },
  { href: "/contact", label: "문의" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname() || "/";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/appstore.png"
            alt="CoreVia Logo"
            width={36}
            height={36}
            className="rounded-lg"
          />
          <span className="font-extrabold text-xl text-gray-900">
            CoreVia
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
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
          <a
            href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 bg-[var(--corevia-primary)] text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
          >
            앱 다운로드
          </a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="메뉴"
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
        <nav className="md:hidden border-t border-gray-100 bg-white px-4 py-2">
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 text-sm transition-colors ${
                  active
                    ? "font-bold text-gray-900"
                    : "font-medium text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 mb-2 px-4 py-3 bg-[var(--corevia-primary)] text-white text-sm font-semibold rounded-lg text-center"
          >
            앱 다운로드
          </a>
        </nav>
      )}
    </header>
  );
}
