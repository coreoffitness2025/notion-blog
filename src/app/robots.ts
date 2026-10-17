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
      // 검색 유입이 없는 SEO 분석·해외 수집봇 — 요청의 ~9%. 네이버(Yeti)·구글·빙·OpenAI·Apple 은 유입원이라 둔다 (2026-10-17)
      {
        userAgent: ["AhrefsBot", "SemrushBot", "Bytespider", "PetalBot", "MJ12bot", "DotBot", "DataForSeoBot"],
        disallow: ["/"],
      },
    ],
    // 블로그 글 전용 사이트맵을 따로 건다 — 메인은 97%가 자동 생성 가이드라 새 글이 묻힌다 (2026-10-03)
    sitemap: [`${siteUrl}/sitemap.xml`, `${siteUrl}/sitemap-posts.xml`],
  };
}
