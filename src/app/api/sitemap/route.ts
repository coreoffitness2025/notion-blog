import { getPostsFromCache, Post } from "@/lib/notion";
import { getAllExerciseIds } from "@/data/exerciseDatabase";
import { getAllNutritionIds } from "@/data/nutritionDatabase";
import { MEAL_PLAN_DATA } from "@/data/mealPlanData";

/** 가이드 데이터 최종 갱신일 — src/data/ 의 가이드 데이터를 고치면 같이 올린다 */
const GUIDE_CONTENT_UPDATED = "2026-04-17";
// 음식 페이지 제목·설명을 바꾼 날 (2026-10-05) — 운동 가이드는 그대로라 따로 둔다
const NUTRITION_CONTENT_UPDATED = "2026-10-05";

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
    const koUrl = `${siteUrl}/posts/${post.slug}`;
    const lastmod = new Date(post.date).toISOString().split("T")[0];
    if (!post.contentEn) {
      // 영어 본문 없는 글: /en 은 한국어 중복이라 사이트맵·hreflang 에서 제외 (2026-09-20)
      entries.push(`<url>
<loc>${koUrl}</loc>
<lastmod>${lastmod}</lastmod>
<xhtml:link rel="alternate" hreflang="x-default" href="${koUrl}"/>
<xhtml:link rel="alternate" hreflang="ko" href="${koUrl}"/>
</url>`);
      continue;
    }
    for (const locale of locales) {
      entries.push(urlEntry(`${siteUrl}${locale}/posts/${post.slug}`, koUrl, `${siteUrl}/en/posts/${post.slug}`, lastmod));
    }
  }

  // 가이드 페이지는 자동 생성이라 내용이 거의 안 바뀐다. 빌드 날짜를 쓰면 매일 1만 페이지가
  // 수정된 것처럼 보여 검색엔진이 새 글을 노이즈 속에 묻는다 → 실제 데이터 갱신일로 고정 (2026-09-21).
  // src/data/ 의 가이드 데이터(exerciseDatabase·nutritionDatabase·mealPlanData·exerciseGifMap)를
  // 고칠 때 이 날짜를 같이 올릴 것.
  const guideLastmod = GUIDE_CONTENT_UPDATED;
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

  // 음식 페이지는 한국어만 싣는다 (2026-10-05). 영어판 5,681개는 한국 음식 DB 이름을 옮긴 얇은 페이지라
  // 구글 '크롤링됨-색인 안 함' 1.17만의 절반이었고, 7일 조회 75회 중 검색 유입은 3회였다 → 페이지에서도 noindex.
  for (const nid of getAllNutritionIds()) {
    const koUrl = `${siteUrl}/guide/nutrition/${nid}`;
    entries.push(`<url>
<loc>${koUrl}</loc>
<lastmod>${NUTRITION_CONTENT_UPDATED}</lastmod>
</url>`);
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
