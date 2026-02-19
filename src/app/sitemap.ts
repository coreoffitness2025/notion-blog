import { getPostsFromCache, Post } from "@/lib/notion";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

  const locales = ["", "/en"];

  const posts = getPostsFromCache();

  const staticPages = [
    { path: "", priority: 1, freq: "daily" as const },
    { path: "/coach", priority: 0.9, freq: "weekly" as const },
    { path: "/team", priority: 0.7, freq: "monthly" as const },
    { path: "/ebook", priority: 0.8, freq: "monthly" as const },
    { path: "/guide", priority: 0.8, freq: "weekly" as const },
    { path: "/guide/calorie", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/1rm", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/exercises", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/programs", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/meal-plans", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/handbook", priority: 0.7, freq: "monthly" as const },
    { path: "/pricing", priority: 0.9, freq: "monthly" as const },
    { path: "/posts", priority: 0.8, freq: "daily" as const },
    { path: "/contact", priority: 0.5, freq: "monthly" as const },
  ];

  const staticUrls = staticPages.flatMap((p) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale}${p.path}`,
      lastModified: new Date(),
      changeFrequency: p.freq,
      priority: locale === "" ? p.priority : p.priority * 0.9,
      alternates: {
        languages: {
          ko: `${siteUrl}${p.path}`,
          en: `${siteUrl}/en${p.path}`,
        },
      },
    })),
  );

  const postUrls = posts.flatMap((post: Post) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale}/posts/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "weekly" as const,
      priority: locale === "" ? 0.7 : 0.6,
      alternates: {
        languages: {
          ko: `${siteUrl}/posts/${post.slug}`,
          en: `${siteUrl}/en/posts/${post.slug}`,
        },
      },
    })),
  );

  return [...staticUrls, ...postUrls];
}
