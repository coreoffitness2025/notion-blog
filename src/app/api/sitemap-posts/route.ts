import { getPostsFromCache, Post } from "@/lib/notion";

/**
 * 블로그 글 전용 사이트맵 (2026-10-03).
 *
 * 왜: 메인 sitemap.xml 은 1.17만 URL 중 97%가 자동 생성 가이드다. 구글은 그중 1.16만을
 * "크롤링됨 — 현재 색인 생성 안 됨"으로 두었고, 10/2~3 블로그 글은 "Google 에 알려지지 않은 URL"이었다(GSC 10/3).
 * 새 글만 담은 작은 사이트맵을 robots.txt 에 따로 걸어, 글 발견을 가이드 노이즈와 분리한다.
 * 메인 sitemap.xml 에도 글은 그대로 남는다(중복 등재는 허용됨).
 */
export const dynamic = "force-static";
export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function GET() {
  const posts = (getPostsFromCache("Blog") as Post[])
    .slice()
    .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));
  const urls: string[] = [];
  for (const post of posts) {
    const lastmod = new Date(post.date).toISOString().split("T")[0];
    urls.push(`<url><loc>${siteUrl}/posts/${post.slug}</loc><lastmod>${lastmod}</lastmod></url>`);
    // 영어 본문이 있는 글만 /en 등재 — 없는 글의 /en 은 한국어 중복(메인 사이트맵과 같은 정책, 9/20)
    if (post.contentEn) {
      urls.push(`<url><loc>${siteUrl}/en/posts/${post.slug}</loc><lastmod>${lastmod}</lastmod></url>`);
    }
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;
  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  });
}
