"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <header className="bg-white border-b border-blue-100 sticky top-0 z-40">
      <div className="max-w-[1100px] mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link href="/" className="font-extrabold text-xl text-blue-600">
          Corevia
        </Link>

        <nav className="flex gap-4 flex-wrap">
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
      </div>
    </header>
  );
}
