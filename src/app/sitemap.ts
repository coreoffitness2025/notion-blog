import { getPostsFromCache, Post } from "@/lib/notion";
import { getAllExerciseIds } from "@/data/exerciseDatabase";
import { getAllNutritionIds } from "@/data/nutritionDatabase";
import { MEAL_PLAN_DATA } from "@/data/mealPlanData";
import { MetadataRoute } from "next";

/**
 * Sitemap Index: 여러 sitemap으로 분할
 *
 * Next.js App Router의 generateSitemaps()를 사용하면
 * /sitemap/0.xml, /sitemap/1.xml, ... 형태로 자동 분할됨.
 *
 * 분할 기준:
 *   0: 정적 + 블로그 + 운동 + 식단 플랜 (~350 URLs)
 *   1~N: 영양 DB (5,672 x 2 = 11,344 URLs, 2,000개씩 분할)
 */

const NUTRITION_CHUNK_SIZE = 2000;

export async function generateSitemaps() {
  const nutritionIds = getAllNutritionIds();
  const nutritionChunks = Math.ceil((nutritionIds.length * 2) / NUTRITION_CHUNK_SIZE);

  // id 0 = 정적+블로그+운동+식단, id 1~N = 영양 DB 청크
  return Array.from({ length: 1 + nutritionChunks }, (_, i) => ({ id: i }));
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

  const locales = ["", "/en"];

  // ── id 0: 정적 + 블로그 + 운동 + 식단 플랜 ──
  if (id === 0) {
    const posts = getPostsFromCache();

    const staticPages = [
      { path: "", priority: 1, freq: "daily" as const },
      { path: "/coach", priority: 0.9, freq: "weekly" as const },
      { path: "/team", priority: 0.7, freq: "monthly" as const },
      { path: "/ebook", priority: 0.8, freq: "monthly" as const },
      { path: "/guide", priority: 0.8, freq: "weekly" as const },
      { path: "/guide/workout", priority: 0.8, freq: "weekly" as const },
      { path: "/guide/workout/1rm", priority: 0.8, freq: "monthly" as const },
      { path: "/guide/workout/exercises", priority: 0.8, freq: "monthly" as const },
      { path: "/guide/workout/programs", priority: 0.7, freq: "monthly" as const },
      { path: "/guide/nutrition", priority: 0.8, freq: "weekly" as const },
      { path: "/guide/nutrition/calorie", priority: 0.8, freq: "monthly" as const },
      { path: "/guide/nutrition/meal-plans", priority: 0.7, freq: "monthly" as const },
      { path: "/posts", priority: 0.8, freq: "daily" as const },
      { path: "/shop", priority: 0.6, freq: "monthly" as const },
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

    const exerciseUrls = getAllExerciseIds().flatMap((eid) =>
      locales.map((locale) => ({
        url: `${siteUrl}${locale}/guide/workout/exercises/${eid}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: locale === "" ? 0.6 : 0.5,
        alternates: {
          languages: {
            ko: `${siteUrl}/guide/workout/exercises/${eid}`,
            en: `${siteUrl}/en/guide/workout/exercises/${eid}`,
          },
        },
      })),
    );

    const mealPlanUrls = MEAL_PLAN_DATA.flatMap((plan) =>
      locales.map((locale) => ({
        url: `${siteUrl}${locale}/guide/nutrition/meal-plans/${plan.id}`,
        lastModified: new Date(),
        changeFrequency: "monthly" as const,
        priority: locale === "" ? 0.6 : 0.5,
        alternates: {
          languages: {
            ko: `${siteUrl}/guide/nutrition/meal-plans/${plan.id}`,
            en: `${siteUrl}/en/guide/nutrition/meal-plans/${plan.id}`,
          },
        },
      })),
    );

    return [...staticUrls, ...postUrls, ...exerciseUrls, ...mealPlanUrls];
  }

  // ── id 1~N: 영양 DB 청크 ──
  const allNutritionIds = getAllNutritionIds();

  // 각 id에 대해 한/영 2개씩이므로 chunk 계산
  const startIdx = Math.floor(((id - 1) * NUTRITION_CHUNK_SIZE) / 2);
  const endIdx = Math.min(startIdx + NUTRITION_CHUNK_SIZE / 2, allNutritionIds.length);
  const chunkIds = allNutritionIds.slice(startIdx, endIdx);

  return chunkIds.flatMap((nid) =>
    locales.map((locale) => ({
      url: `${siteUrl}${locale}/guide/nutrition/${nid}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: locale === "" ? 0.5 : 0.4,
      alternates: {
        languages: {
          ko: `${siteUrl}/guide/nutrition/${nid}`,
          en: `${siteUrl}/en/guide/nutrition/${nid}`,
        },
      },
    })),
  );
}
