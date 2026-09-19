import { getPostsFromCache, Post } from "@/lib/notion";

// 블로그 RSS 2.0 (네이버 서치어드바이저 RSS 제출용, 2026-09-20). /rss.xml·/feed.xml → next.config rewrite
export const dynamic = "force-static";
export const revalidate = 3600;

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

function esc(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export async function GET() {
  const posts = (getPostsFromCache("Blog") as Post[])
    .filter((p) => p.slug && p.title)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 50);

  const items = posts
    .map((p) => {
      const url = `${siteUrl}/posts/${encodeURI(p.slug)}`;
      return `<item>
<title>${esc(p.title)}</title>
<link>${url}</link>
<guid isPermaLink="true">${url}</guid>
<pubDate>${new Date(p.date).toUTCString()}</pubDate>
<description>${esc(p.description || "")}</description>${p.category ? `\n<category>${esc(p.category)}</category>` : ""}
</item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>코비아 피트니스 블로그</title>
<link>${siteUrl}/posts</link>
<description>운동·식단을 연구 근거로 정리하는 코비아 피트니스 블로그</description>
<language>ko</language>
<atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
