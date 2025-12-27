import "server-only";

import fs from "fs";
import path from "path";
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;

  // 템플릿이 쓰는 필드명으로 맞춤
  title: string;
  slug: string;

  // 템플릿: post.date, post.description, post.coverImage, post.tags, post.author, post.category
  date: string; // ISO or yyyy-mm-dd
  description: string;
  coverImage?: string;
  tags: string[];
  author?: string;
  category?: string;

  content: string; // markdown
};

const notion = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: notion });
const DB_ID = process.env.NOTION_DATABASE_ID;

function requireDbId(): string {
  if (!DB_ID) throw new Error("Missing env: NOTION_DATABASE_ID");
  return DB_ID;
}

function isFullPage(
  r: QueryDatabaseResponse["results"][number]
): r is PageObjectResponse {
  return (r as any).object === "page" && !!(r as any).properties;
}

function getPlainTextFromRichText(rt: any[] | undefined): string {
  if (!rt || rt.length === 0) return "";
  return rt.map((t) => t?.plain_text ?? "").join("");
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

/** ---- Notion property getters (네 DB 기준) ----
 * Name: title
 * Status: select (Published)
 * Slug: rich_text
 * Published Date: date
 * Cover: files
 * Tags: multi-select
 * Excerpt: rich_text
 * (선택) Author / Category: 있으면 읽고, 없으면 undefined
 */
function getTitle(props: any): string {
  const t = props?.Name?.title ?? props?.Title?.title;
  return getPlainTextFromRichText(t) || "Untitled";
}

function getSlug(props: any, fallbackTitle: string): string {
  const rt = props?.Slug?.rich_text;
  const s = getPlainTextFromRichText(rt);
  return s ? slugify(s) : slugify(fallbackTitle);
}

function getDate(props: any): string {
  return (
    props?.["Published Date"]?.date?.start ??
    new Date().toISOString().slice(0, 10)
  );
}

function getCoverUrl(props: any): string | undefined {
  const files = props?.Cover?.files;
  if (!files || files.length === 0) return undefined;
  const f0 = files[0];
  return f0?.file?.url ?? f0?.external?.url ?? undefined;
}

function getTags(props: any): string[] {
  const ms = props?.Tags?.multi_select;
  if (!ms || ms.length === 0) return [];
  return ms.map((t: any) => t?.name).filter(Boolean);
}

function getExcerpt(props: any): string {
  const rt = props?.Excerpt?.rich_text;
  return getPlainTextFromRichText(rt) || "";
}

function getAuthor(props: any): string | undefined {
  // DB에 Author가 없을 수도 있으니 안전하게
  const author =
    props?.Author?.rich_text
      ? getPlainTextFromRichText(props.Author.rich_text)
      : props?.Author?.people?.[0]?.name;
  return author || undefined;
}

function getCategory(props: any): string | undefined {
  // DB에 Category가 없을 수도 있으니 안전하게
  const c =
    props?.Category?.select?.name ??
    getPlainTextFromRichText(props?.Category?.rich_text);
  return c || undefined;
}

async function getStatusPropertyType(): Promise<"status" | "select" | "unknown"> {
  const dbId = requireDbId();
  const db = (await notion.databases.retrieve({
    database_id: dbId,
  })) as DatabaseObjectResponse;

  const statusProp = (db as any)?.properties?.Status;
  const t = statusProp?.type;
  if (t === "status") return "status";
  if (t === "select") return "select";
  return "unknown";
}

export async function fetchPublishedPosts(): Promise<
  Array<Pick<Post, "id" | "title" | "slug" | "date" | "description" | "coverImage" | "tags" | "author" | "category">>
> {
  const dbId = requireDbId();
  const statusType = await getStatusPropertyType();

  const query: any = {
    database_id: dbId,
    sorts: [{ property: "Published Date", direction: "descending" }],
  };

  // Status 타입에 맞춰 필터 자동 구성
  if (statusType === "status") {
    query.filter = { property: "Status", status: { equals: "Published" } };
  } else if (statusType === "select") {
    query.filter = { property: "Status", select: { equals: "Published" } };
  }

  const res = await notion.databases.query(query);

  const posts = res.results
    .filter(isFullPage)
    .map((page) => {
      const props = (page as any).properties;
      const title = getTitle(props);

      // 템플릿 필드명에 맞춰 리턴
      return {
        id: page.id,
        title,
        slug: getSlug(props, title),
        date: getDate(props),
        coverImage: getCoverUrl(props),
        tags: getTags(props),
        description: getExcerpt(props) || "",
        author: getAuthor(props),
        category: getCategory(props),
        _statusName:
          props?.Status?.status?.name ??
          props?.Status?.select?.name ??
          undefined,
      };
    });

  // statusType unknown이면 후처리로 Published만 남김
  if (statusType === "unknown") {
    return posts
      .filter((p: any) => p._statusName === "Published")
      .map(({ _statusName, ...rest }: any) => rest);
  }

  return posts.map(({ _statusName, ...rest }: any) => rest);
}

export async function getPostFromNotion(pageId: string): Promise<Post | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;

    const props = (page as any).properties;
    const title = getTitle(props);
    const slug = getSlug(props, title);

    // notion-to-md 버전에 따라 반환 타입(string vs { parent })이 달라서 방어 처리
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdOutput: any = n2m.toMarkdownString(mdBlocks);

    const contentString =
      typeof mdOutput === "string"
        ? mdOutput
        : typeof mdOutput?.parent === "string"
        ? mdOutput.parent
        : "";

    // description: Excerpt 우선, 없으면 본문 첫 문단으로 생성
    const excerptFromProp = getExcerpt(props);
    const firstLine =
      contentString
        .split("\n")
        .map((l) => l.trim())
        .filter(Boolean)[0] ?? "";

    const description =
      excerptFromProp ||
      (firstLine ? firstLine.slice(0, 160) + (firstLine.length > 160 ? "..." : "") : "");

    const post: Post = {
      id: page.id,
      title,
      slug,
      date: getDate(props),
      coverImage: getCoverUrl(props),
      tags: getTags(props),
      description: description || "",
      author: getAuthor(props),
      category: getCategory(props),
      content: contentString,
    };

    return post;
  } catch (error) {
    console.error("Error getting post:", error);
    return null;
  }
}

/** ---- Cache helpers ----
 * scripts/cache-posts.ts 가 생성한 posts-cache.json 읽기
 */
export function getPostsFromCache(): Post[] {
  try {
    const cachePath = path.join(process.cwd(), "posts-cache.json");
    if (!fs.existsSync(cachePath)) return [];
    const raw = fs.readFileSync(cachePath, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Post[]) : [];
  } catch (e) {
    console.error("Failed to read posts-cache.json:", e);
    return [];
  }
}

export function getWordCount(markdown: string): number {
  if (!markdown) return 0;
  // 대충 markdown 문법 제거 후 단어 카운트
  const text = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/!\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/\[[^\]]*]\([^)]*\)/g, " ")
    .replace(/[#>*_~\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return 0;
  return text.split(" ").filter(Boolean).length;
}
