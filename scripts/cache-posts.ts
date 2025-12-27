import { fetchPublishedPosts, getPostFromNotion } from "../src/lib/notion";
import fs from "fs";
import path from "path";

async function cachePosts() {
  console.log("Fetching posts from Notion...");

  const posts = await fetchPublishedPosts();
  const allPosts = [];

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

  const cachePath = path.join(process.cwd(), "posts-cache.json");
  fs.writeFileSync(cachePath, JSON.stringify(allPosts, null, 2), "utf-8");

  console.log(`Successfully cached ${allPosts.length} posts.`);
}

cachePosts().catch((e) => {
  console.error("Error caching posts:", e);
  process.exit(1);
});
