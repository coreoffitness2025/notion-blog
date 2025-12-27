"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "홈" },
  { href: "/company", label: "기업 소개" },
  { href: "/solution", label: "솔루션" },
  { href: "/posts", label: "블로그" }, // ✅ /blog -> /posts 로 변경
  { href: "/cases", label: "고객 사례" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname() || "/";

  return (
    <header style={{ borderBottom: "1px solid rgba(0,0,0,0.08)" }}>
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "14px 16px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <Link href="/" style={{ fontWeight: 800 }}>
          Corevia
        </Link>

        <nav style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          {nav.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                style={{
                  fontWeight: active ? 800 : 500,
                  opacity: active ? 1 : 0.75,
                }}
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
