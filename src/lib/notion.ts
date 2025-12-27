import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import fs from "fs";
import path from "path";

export interface Post {
  id: string;
  title: string;
  slug: string;
  coverImage?: string;
  description: string;
  date: string;
  content: string;
  author?: string;
  tags: string[];
  category?: string;
  type?: "Blog" | "Case"; // Blog 또는 Case 구분
}

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const databaseId = process.env.NOTION_DATABASE_ID;

if (!databaseId) {
  // 빌드/런타임에서 env 누락이면 Notion 호출 자체가 불가능
  console.warn("[notion] NOTION_DATABASE_ID is missing.");
}

const n2m = new NotionToMarkdown({ notionClient: notion });

/** ---------------------------
 * Helpers (Notion property safe getters)
 * -------------------------- */
function plainTextFromTitle(prop: any): string {
  const arr = prop?.title ?? [];
  return arr.map((t: any) => t?.plain_text ?? "").join("").trim();
}

function plainTextFromRichText(prop: any): string {
  const arr = prop?.rich_text ?? [];
  return arr.map((t: any) => t?.plain_text ?? "").join("").trim();
}

function firstUrlFromFiles(prop: any): string | undefined {
  const files = prop?.files;
  if (!Array.isArray(files) || files.length === 0) return undefined;

  const f = files[0];
  if (f?.type === "external") return f?.external?.url;
  if (f?.type === "file") return f?.file?.url;
  return undefined;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9가-힣]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getPostTitle(properties: any): string {
  // Notion 기본 Title 컬럼명이 보통 "Name" 임 (너 스샷도 Name)
  const name = plainTextFromTitle(properties?.Name);
  if (name) return name;

  const title = plainTextFromTitle(properties?.Title);
  if (title) return title;

  return "Untitled";
}

function getPostSlug(properties: any, fallbackTitle: string): string {
  // DB에 Slug 컬럼이 있으면 그걸 최우선 사용 (rich_text 추천)
  const slugFromProp = plainTextFromRichText(properties?.Slug) || plainTextFromTitle(properties?.Slug);
  if (slugFromProp) return slugify(slugFromProp);

  return slugify(fallbackTitle) || "untitled";
}

function getPostDate(properties: any): string {
  // "Published Date" 컬럼명 기준
  const d = properties?.["Published Date"]?.date?.start;
  return d ?? new Date().toISOString();
}

function getPostCover(properties: any): string | undefined {
  // 너 스샷의 컬럼명이 "Cover" 임. (Files & media)
  const cover = firstUrlFromFiles(properties?.Cover);
  if (cover) return cover;

  // 템플릿이 "Featured Image" 같은 이름을 쓰는 경우도 대비
  const featured = properties?.["Featured Image"]?.url || firstUrlFromFiles(properties?.["Featured Image"]);
  if (featured) return featured;

  return undefined;
}

function getPostExcerpt(properties: any): string | undefined {
  // 너 스샷의 컬럼명이 "Excerpt" 임 (rich_text)
  const ex = plainTextFromRichText(properties?.Excerpt);
  return ex || undefined;
}

function getPostTags(properties: any): string[] {
  const tags = properties?.Tags?.multi_select;
  if (!Array.isArray(tags)) return [];
  return tags.map((t: any) => t?.name).filter(Boolean);
}

function getPostCategory(properties: any): string | undefined {
  const c = properties?.Category?.select?.name;
  return c || undefined;
}

function getPostAuthor(properties: any): string | undefined {
  const people = properties?.Author?.people;
  if (!Array.isArray(people) || people.length === 0) return undefined;
  return people[0]?.name || undefined;
}

function getPostType(properties: any): "Blog" | "Case" | undefined {
  // Type 컬럼 (Select)에서 Blog/Case 구분
  const typeName = properties?.Type?.select?.name;
  if (typeName === "Blog" || typeName === "Case") return typeName;
  return undefined;
}

/** ---------------------------
 * Notion query: build Status filter dynamically
 * -------------------------- */
async function buildPublishedFilter(): Promise<any | undefined> {
  if (!databaseId) return undefined;

  const db = (await notion.databases.retrieve({ database_id: databaseId })) as any;
  const statusProp = db?.properties?.Status;

  // Status 컬럼이 없다면 필터 없이 전체 가져오는 쪽으로
  if (!statusProp) return undefined;

  // Notion property type에 맞춰 filter 키를 맞춰야 함
  if (statusProp.type === "status") {
    return { property: "Status", status: { equals: "Published" } };
  }
  if (statusProp.type === "select") {
    return { property: "Status", select: { equals: "Published" } };
  }

  // 혹시 checkbox로 운용하는 경우
  if (statusProp.type === "checkbox") {
    return { property: "Status", checkbox: { equals: true } };
  }

  // 그 외 타입이면 일단 필터 없이
  return undefined;
}

/** ---------------------------
 * Public API
 * -------------------------- */

export interface FetchPostsOptions {
  type?: "Blog" | "Case";
  limit?: number;
  publishedOnly?: boolean;
}

// Notion에서 글 목록을 가져옴
export async function fetchPublishedPosts(options: FetchPostsOptions = {}): Promise<any[]> {
  if (!databaseId) return [];

  const { type, limit, publishedOnly = true } = options;
  
  try {
    // 필터 조건들을 모음
    const filterConditions: any[] = [];
    
    // Status 필터 (publishedOnly일 때)
    if (publishedOnly) {
      const statusFilter = await buildPublishedFilter();
      if (statusFilter) {
        filterConditions.push(statusFilter);
      }
    }
    
    // Type 필터 (Blog/Case 구분)
    if (type) {
      filterConditions.push({
        property: "Type",
        select: { equals: type }
      });
    }

    const queryParams: any = {
      database_id: databaseId,
      sorts: [
        {
          property: "Published Date",
          direction: "descending",
        },
      ],
    };

    // 필터 조건이 있으면 and로 묶어서 적용
    if (filterConditions.length > 0) {
      queryParams.filter = filterConditions.length === 1 
        ? filterConditions[0] 
        : { and: filterConditions };
    }

    if (limit) {
      queryParams.page_size = limit;
    }

    const res = await notion.databases.query(queryParams);
    return res.results as any[];
  } catch (error) {
    console.error("[notion] fetchPublishedPosts error:", error);
    return [];
  }
}

export async function getPostFromNotion(pageId: string): Promise<Post | null> {
  try {
    const page = (await notion.pages.retrieve({ page_id: pageId })) as any;

    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const md = n2m.toMarkdownString(mdBlocks);

    // ✅ split 방어 (undefined 가능)
    const contentString = (md?.parent ?? "") as string;

    // Excerpt 컬럼이 있으면 그걸 우선 사용, 없으면 첫 문단 자동 생성
    const properties = page.properties as any;
    const manualExcerpt = getPostExcerpt(properties);

    const paragraphs = (contentString ?? "")
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    const firstParagraph = paragraphs[0] ?? "";
    const autoDescription =
      firstParagraph.length > 160 ? firstParagraph.slice(0, 160) + "..." : firstParagraph;

    const title = getPostTitle(properties);
    const slug = getPostSlug(properties, title);
    const coverImage = getPostCover(properties);
    const date = getPostDate(properties);

    const post: Post = {
      id: page.id,
      title,
      slug,
      coverImage,
      description: manualExcerpt ?? autoDescription,
      date,
      content: contentString,
      author: getPostAuthor(properties),
      tags: getPostTags(properties),
      category: getPostCategory(properties),
      type: getPostType(properties),
    };

    return post;
  } catch (error) {
    console.error("Error getting post:", error);
    return null;
  }
}

/**
 * 빌드 시 scripts/cache-posts.ts가 생성하는 파일을 읽어옴
 * (레포 루트의 posts-cache.json)
 */
export function getPostsFromCache(type?: "Blog" | "Case"): Post[] {
  try {
    const cachePath = path.join(process.cwd(), "posts-cache.json");
    if (!fs.existsSync(cachePath)) return [];
    const raw = fs.readFileSync(cachePath, "utf8");
    const posts = JSON.parse(raw);
    const allPosts = Array.isArray(posts) ? (posts as Post[]) : [];
    
    // type 필터가 있으면 해당 type만 반환
    if (type) {
      return allPosts.filter((p) => p.type === type);
    }
    return allPosts;
  } catch (e) {
    console.error("[notion] failed to read posts-cache.json:", e);
    return [];
  }
}

/**
 * 캐시에서 slug로 단건 찾기
 */
export function getPostBySlugFromCache(slug: string, type?: "Blog" | "Case"): Post | undefined {
  const posts = getPostsFromCache(type);
  return posts.find((p) => p.slug === slug);
}

export function getWordCount(markdown: string): number {
  const text = (markdown ?? "").replace(/[#>*_`\[\]()-]/g, " ");
  return text.trim().split(/\s+/).filter(Boolean).length;
}
