"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MessageCircle } from "lucide-react";
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

  const chatHref = `${prefix}/chat`;
  const isChatActive = isActive(pathname, chatHref);

  const nav = [
    { href: `${prefix}/#features`, label: dict.nav.features },
    { href: `${prefix}/guide`, label: dict.nav.guide },
    { href: `${prefix}/posts`, label: dict.nav.blog },
    { href: `${prefix}/team`, label: dict.nav.team },
  ];

  const otherLocale = locale === "ko" ? "en" : "ko";
  const switchPath = locale === "ko"
    ? `/en${pathname}`
    : pathname.replace(/^\/en/, "") || "/";

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
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
            href={chatHref}
            aria-current={isChatActive ? "page" : undefined}
            className={`flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              isChatActive
                ? "text-[var(--corevia-ai)]"
                : "text-[var(--corevia-ai)] hover:text-blue-700"
            }`}
          >
            <MessageCircle className="w-4 h-4" />
            {dict.nav.aiChat}
          </Link>

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

          <Link
            href={chatHref}
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-2 py-3 text-sm font-semibold text-[var(--corevia-ai)]"
          >
            <MessageCircle className="w-4 h-4" />
            {dict.nav.aiChat}
          </Link>

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
