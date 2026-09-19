import { fetchPublishedPosts, getPostFromNotion, type Post } from "../src/lib/notion";
import { HANDBOOK_DATA } from "../src/data/handbookData";
import fs from "fs";
import path from "path";
import crypto from "crypto";

// Notion 파일 URL(S3 서명)은 1시간 뒤 만료 → 빌드 때 받아서 public/notion-images 로 고정 (2026-09-19 본문 이미지 깨짐 수정)
const IMG_DIR = path.join(process.cwd(), "public", "notion-images");
const isNotionFile = (u: string) => /amazonaws\.com|notion-static\.com|notion\.so\/image|file\.notion\.so|notionusercontent\.com/.test(u);

async function localize(url: string | undefined): Promise<string | undefined> {
  if (!url || !isNotionFile(url)) return url;
  try {
    const u = new URL(url);
    const ext = (path.extname(u.pathname).toLowerCase().match(/^\.(png|jpe?g|webp|gif|svg|avif)$/) || [".png"])[0];
    const name = crypto.createHash("sha1").update(u.origin + u.pathname).digest("hex").slice(0, 16) + ext;
    const out = path.join(IMG_DIR, name);
    if (!fs.existsSync(out)) {
      const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      fs.mkdirSync(IMG_DIR, { recursive: true });
      fs.writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    }
    return `/notion-images/${name}`;
  } catch (e) {
    console.warn(`[cache-posts] image localize failed, keeping remote URL: ${String(e).slice(0, 120)}`);
    return url;
  }
}

async function localizeMarkdown(md: string | undefined): Promise<string | undefined> {
  if (!md) return md;
  const found = [...md.matchAll(/!\[[^\]]*\]\((https?:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
  let out = md;
  for (const url of new Set(found)) {
    const local = await localize(url);
    if (local && local !== url) out = out.split(url).join(local);
  }
  return out;
}

async function localizePost(p: Post): Promise<Post> {
  return {
    ...p,
    coverImage: await localize(p.coverImage),
    content: (await localizeMarkdown(p.content)) ?? p.content,
    contentEn: await localizeMarkdown(p.contentEn),
  };
}

// 핸드북 아티클을 Post 형식으로 변환
function getHandbookPosts(): Post[] {
  return HANDBOOK_DATA.map((article) => ({
    id: `handbook-${article.id}`,
    title: article.title,
    titleEn: article.titleEn,
    slug: article.id,
    description: article.summary,
    descriptionEn: article.summaryEn,
    date: article.publishedDate,
    content: article.content,
    contentEn: article.contentEn,
    author: article.author,
    tags: [article.category],
    tagsEn: [article.categoryEn],
    category: article.category,
    categoryEn: article.categoryEn,
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
        if (full) allPosts.push(await localizePost(full));
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
