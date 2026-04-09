import { getPostsFromCache, Post } from "@/lib/notion";
import { getAllExerciseIds } from "@/data/exerciseDatabase";
import { getAllNutritionIds } from "@/data/nutritionDatabase";
import { MEAL_PLAN_DATA } from "@/data/mealPlanData";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";
const locales = ["", "/en"];

function urlEntry(
  url: string,
  lastmod: string,
  changefreq: string,
  priority: number,
  koUrl: string,
  enUrl: string,
) {
  return `<url>
<loc>${url}</loc>
<lastmod>${lastmod}</lastmod>
<changefreq>${changefreq}</changefreq>
<priority>${priority}</priority>
<xhtml:link rel="alternate" hreflang="ko" href="${koUrl}" />
<xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
</url>`;
}

export async function GET() {
  const now = new Date().toISOString();

  const staticPages = [
    { path: "", priority: 1, freq: "daily" },
    { path: "/coach", priority: 0.9, freq: "weekly" },
    { path: "/team", priority: 0.7, freq: "monthly" },
    { path: "/ebook", priority: 0.8, freq: "monthly" },
    { path: "/guide", priority: 0.8, freq: "weekly" },
    { path: "/guide/workout", priority: 0.8, freq: "weekly" },
    { path: "/guide/workout/1rm", priority: 0.8, freq: "monthly" },
    { path: "/guide/workout/exercises", priority: 0.8, freq: "monthly" },
    { path: "/guide/workout/programs", priority: 0.7, freq: "monthly" },
    { path: "/guide/nutrition", priority: 0.8, freq: "weekly" },
    { path: "/guide/nutrition/calorie", priority: 0.8, freq: "monthly" },
    { path: "/guide/nutrition/meal-plans", priority: 0.7, freq: "monthly" },
    { path: "/posts", priority: 0.8, freq: "daily" },
    { path: "/shop", priority: 0.6, freq: "monthly" },
    { path: "/contact", priority: 0.5, freq: "monthly" },
  ];

  const entries: string[] = [];

  // Static pages
  for (const p of staticPages) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}${p.path}`,
          now,
          p.freq,
          locale === "" ? p.priority : p.priority * 0.9,
          `${siteUrl}${p.path}`,
          `${siteUrl}/en${p.path}`,
        ),
      );
    }
  }

  // Blog posts
  const posts = getPostsFromCache();
  for (const post of posts as Post[]) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/posts/${post.slug}`,
          new Date(post.date).toISOString(),
          "weekly",
          locale === "" ? 0.7 : 0.6,
          `${siteUrl}/posts/${post.slug}`,
          `${siteUrl}/en/posts/${post.slug}`,
        ),
      );
    }
  }

  // Exercises (99)
  for (const eid of getAllExerciseIds()) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/workout/exercises/${eid}`,
          now,
          "monthly",
          locale === "" ? 0.6 : 0.5,
          `${siteUrl}/guide/workout/exercises/${eid}`,
          `${siteUrl}/en/guide/workout/exercises/${eid}`,
        ),
      );
    }
  }

  // Meal plans
  for (const plan of MEAL_PLAN_DATA) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/nutrition/meal-plans/${plan.id}`,
          now,
          "monthly",
          locale === "" ? 0.6 : 0.5,
          `${siteUrl}/guide/nutrition/meal-plans/${plan.id}`,
          `${siteUrl}/en/guide/nutrition/meal-plans/${plan.id}`,
        ),
      );
    }
  }

  // Nutrition DB (5,672)
  for (const nid of getAllNutritionIds()) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/nutrition/${nid}`,
          now,
          "monthly",
          locale === "" ? 0.5 : 0.4,
          `${siteUrl}/guide/nutrition/${nid}`,
          `${siteUrl}/en/guide/nutrition/${nid}`,
        ),
      );
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
