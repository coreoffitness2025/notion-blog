import { fetchPublishedPosts, getPostFromNotion, type Post } from "../src/lib/notion";
import { HANDBOOK_DATA } from "../src/data/handbookData";
import fs from "fs";
import path from "path";

// 핸드북 아티클을 Post 형식으로 변환
function getHandbookPosts(): Post[] {
  return HANDBOOK_DATA.map((article) => ({
    id: `handbook-${article.id}`,
    title: article.title,
    slug: article.id,
    description: article.summary,
    date: article.publishedDate,
    content: article.content,
    author: article.author,
    tags: [article.category],
    category: article.category,
    type: "Blog" as const,
  }));
}

async function cachePosts() {
  const cachePath = path.join(process.cwd(), "posts-cache.json");

  // ENV 확인 - 없으면 핸드북만 캐시
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.warn("[cache-posts] NOTION_TOKEN or NOTION_DATABASE_ID is missing.");
    const handbookPosts = getHandbookPosts();
    fs.writeFileSync(cachePath, JSON.stringify(handbookPosts, null, 2), "utf-8");
    console.log(`[cache-posts] ${handbookPosts.length} handbook posts cached (env missing).`);
    return;
  }

  console.log("Fetching posts from Notion...");

  try {
    // 모든 포스트 가져오기 (Blog + Case 모두)
    const posts = await fetchPublishedPosts({ publishedOnly: true });
    const allPosts: Post[] = [];

    for (const p of posts) {
      try {
        const full = await getPostFromNotion(p.id);
        if (full) allPosts.push(full);
      } catch (e) {
        console.error(`Failed to fetch post detail: ${p.id}`, e);
        // 한 개 글이 깨져도 전체 빌드는 살린다
        continue;
      }
    }

    // 핸드북 아티클 병합
    const handbookPosts = getHandbookPosts();
    const merged = [...allPosts, ...handbookPosts];
    fs.writeFileSync(cachePath, JSON.stringify(merged, null, 2), "utf-8");
    console.log(`Successfully cached ${allPosts.length} Notion + ${handbookPosts.length} handbook = ${merged.length} posts.`);
  } catch (e) {
    console.error("[cache-posts] Error fetching from Notion:", e);
    // 에러가 발생해도 빈 캐시 생성하여 빌드 실패 방지
    fs.writeFileSync(cachePath, JSON.stringify([], null, 2), "utf-8");
    console.log("[cache-posts] 0 posts cached (error occurred).");
  }
}

// 절대 process.exit(1)을 호출하지 않음 - 빌드 실패 방지
cachePosts().catch((e) => {
  console.error("[cache-posts] Unexpected error:", e);
  const cachePath = path.join(process.cwd(), "posts-cache.json");
  fs.writeFileSync(cachePath, JSON.stringify([], null, 2), "utf-8");
  console.log("[cache-posts] 0 posts cached (unexpected error).");
});
