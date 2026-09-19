import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/api/sitemap", "/api/rss"],
        disallow: ["/api/", "/private/"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
