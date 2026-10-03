import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/sitemap", "/api/sitemap-posts", "/api/rss"],
        disallow: ["/api/", "/private/"],
      },
    ],
    // 블로그 글 전용 사이트맵을 따로 건다 — 메인은 97%가 자동 생성 가이드라 새 글이 묻힌다 (2026-10-03)
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap-posts.xml`],
  };
}
