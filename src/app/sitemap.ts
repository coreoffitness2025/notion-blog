import { getPostsFromCache, Post } from "@/lib/notion";
import { getAllExerciseIds } from "@/data/exerciseDatabase";
import { getAllNutritionIds } from "@/data/nutritionDatabase";
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
    { path: "/guide/nutrition", priority: 0.8, freq: "monthly" as const },
    { path: "/guide/programs", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/meal-plans", priority: 0.7, freq: "monthly" as const },
    { path: "/guide/handbook", priority: 0.7, freq: "monthly" as const },
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

  // Exercise detail pages (99 x 2 locales = 198 URLs)
  const exerciseUrls = getAllExerciseIds().flatMap((id) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale}/guide/exercises/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "" ? 0.6 : 0.5,
      alternates: {
        languages: {
          ko: `${siteUrl}/guide/exercises/${id}`,
          en: `${siteUrl}/en/guide/exercises/${id}`,
        },
      },
    })),
  );

  // Nutrition detail pages (5,672 x 2 locales = 11,344 URLs)
  const nutritionUrls = getAllNutritionIds().flatMap((id) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale}/guide/nutrition/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "" ? 0.5 : 0.4,
      alternates: {
        languages: {
          ko: `${siteUrl}/guide/nutrition/${id}`,
          en: `${siteUrl}/en/guide/nutrition/${id}`,
        },
      },
    })),
  );

  return [...staticUrls, ...postUrls, ...exerciseUrls, ...nutritionUrls];
}
