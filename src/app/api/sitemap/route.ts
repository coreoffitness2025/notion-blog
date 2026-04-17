import { getPostsFromCache, Post } from "@/lib/notion";
import { getAllExerciseIds } from "@/data/exerciseDatabase";
import { getAllNutritionIds } from "@/data/nutritionDatabase";
import { MEAL_PLAN_DATA } from "@/data/mealPlanData";

export const dynamic = "force-static";
export const revalidate = 3600;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";
const locales = ["", "/en"];

function urlEntry(loc: string, koUrl: string, enUrl: string, lastmod?: string) {
  return `<url>
<loc>${loc}</loc>${lastmod ? `\n<lastmod>${lastmod}</lastmod>` : ""}
<xhtml:link rel="alternate" hreflang="x-default" href="${koUrl}"/>
<xhtml:link rel="alternate" hreflang="ko" href="${koUrl}"/>
<xhtml:link rel="alternate" hreflang="en" href="${enUrl}"/>
</url>`;
}

export async function GET() {
  const staticPages = [
    "",
    "/coach",
    "/team",
    "/ebook",
    "/guide",
    "/guide/workout",
    "/guide/workout/1rm",
    "/guide/workout/exercises",
    "/guide/workout/programs",
    "/guide/nutrition",
    "/guide/nutrition/calorie",
    "/guide/nutrition/meal-plans",
    "/posts",
    "/shop",
    "/contact",
  ];

  const entries: string[] = [];

  for (const p of staticPages) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}${p}`,
          `${siteUrl}${p}`,
          `${siteUrl}/en${p}`,
        ),
      );
    }
  }

  const posts = getPostsFromCache();
  for (const post of posts as Post[]) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/posts/${post.slug}`,
          `${siteUrl}/posts/${post.slug}`,
          `${siteUrl}/en/posts/${post.slug}`,
          new Date(post.date).toISOString().split("T")[0],
        ),
      );
    }
  }

  const guideLastmod = new Date().toISOString().split("T")[0];
  for (const eid of getAllExerciseIds()) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/workout/exercises/${eid}`,
          `${siteUrl}/guide/workout/exercises/${eid}`,
          `${siteUrl}/en/guide/workout/exercises/${eid}`,
          guideLastmod,
        ),
      );
    }
  }

  for (const plan of MEAL_PLAN_DATA) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/nutrition/meal-plans/${plan.id}`,
          `${siteUrl}/guide/nutrition/meal-plans/${plan.id}`,
          `${siteUrl}/en/guide/nutrition/meal-plans/${plan.id}`,
          guideLastmod,
        ),
      );
    }
  }

  for (const nid of getAllNutritionIds()) {
    for (const locale of locales) {
      entries.push(
        urlEntry(
          `${siteUrl}${locale}/guide/nutrition/${nid}`,
          `${siteUrl}/guide/nutrition/${nid}`,
          `${siteUrl}/en/guide/nutrition/${nid}`,
          guideLastmod,
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
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
