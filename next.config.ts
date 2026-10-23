import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // 앱 링크 확인 파일(2026-10-23) — 앱이 선언한 도메인이 남의 회사 corevia.fitness 였다. 우리 도메인으로 옮기며 추가.
  // AASA 는 확장자가 없어 기본 Content-Type 이 octet-stream → JSON 으로 내려 준다.
  async headers() {
    return [
      { source: "/.well-known/apple-app-site-association", headers: [{ key: "Content-Type", value: "application/json" }] },
      { source: "/.well-known/assetlinks.json", headers: [{ key: "Content-Type", value: "application/json" }] },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/sitemap.xml", destination: "/api/sitemap" },
        { source: "/sitemap-posts.xml", destination: "/api/sitemap-posts" }, // 블로그 글 전용 (2026-10-03)
        { source: "/rss.xml", destination: "/api/rss" },
        { source: "/feed.xml", destination: "/api/rss" },
        { source: "/llms.txt", destination: "/api/llms" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  async redirects() {
    return [
      // 앱 링크(/app/…)를 앱이 없는 기기에서 열면 스토어로 — /go 가 기기별 스토어·출처 꼬리표를 붙인다(2026-10-23)
      { source: "/app/:path*", destination: "/go?c=applink-web", permanent: false },
      // 빈 Shop(Coming Soon) → 제품 페이지 (2026-10-08)
      { source: "/shop", destination: "/products", permanent: true },
      { source: "/en/shop", destination: "/en/products", permanent: true },
      { source: "/guide/1rm", destination: "/guide/workout/1rm", permanent: true },
      { source: "/guide/programs", destination: "/guide/workout/programs", permanent: true },
      { source: "/guide/exercises", destination: "/guide/workout/exercises", permanent: true },
      { source: "/guide/exercises/:id", destination: "/guide/workout/exercises/:id", permanent: true },
      { source: "/guide/calorie", destination: "/guide/nutrition/calorie", permanent: true },
      { source: "/guide/meal-plans", destination: "/guide/nutrition/meal-plans", permanent: true },
      { source: "/guide/handbook", destination: "/posts", permanent: true },
      { source: "/en/guide/1rm", destination: "/en/guide/workout/1rm", permanent: true },
      { source: "/en/guide/programs", destination: "/en/guide/workout/programs", permanent: true },
      { source: "/en/guide/exercises", destination: "/en/guide/workout/exercises", permanent: true },
      { source: "/en/guide/exercises/:id", destination: "/en/guide/workout/exercises/:id", permanent: true },
      { source: "/en/guide/calorie", destination: "/en/guide/nutrition/calorie", permanent: true },
      { source: "/en/guide/meal-plans", destination: "/en/guide/nutrition/meal-plans", permanent: true },
      { source: "/en/guide/handbook", destination: "/en/posts", permanent: true },
    ];
  },
};

export default nextConfig;
