import { fetchPublishedPosts, getPostFromNotion, type Post } from "../src/lib/notion";
import fs from "fs";
import path from "path";

async function cachePosts() {
  const cachePath = path.join(process.cwd(), "posts-cache.json");
  
  // ENV 확인 - 없으면 빈 캐시 생성하고 종료 (빌드 실패 방지)
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_DATABASE_ID) {
    console.warn("[cache-posts] NOTION_TOKEN or NOTION_DATABASE_ID is missing.");
    console.warn("[cache-posts] Creating empty cache file...");
    fs.writeFileSync(cachePath, JSON.stringify([], null, 2), "utf-8");
    console.log("[cache-posts] 0 posts cached (env missing).");
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

    fs.writeFileSync(cachePath, JSON.stringify(allPosts, null, 2), "utf-8");
    console.log(`Successfully cached ${allPosts.length} posts.`);
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
