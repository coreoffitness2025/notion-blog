import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import type {
  PageObjectResponse,
  QueryDatabaseResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Post = {
  id: string;
  title: string;
  slug: string;
  publishedDate?: string;
  cover?: string;
  tags: string[];
  excerpt?: string;
  content: string; // markdown
};

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const n2m = new NotionToMarkdown({ notionClient: notion });

const DB_ID = process.env.NOTION_DATABASE_ID;

function requireDbId(): string {
  if (!DB_ID) {
    throw new Error("Missing env: NOTION_DATABASE_ID");
  }
  return DB_ID;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\p{L}\p{N}]+/gu, "-") // 유니코드 문자/숫자 유지
    .replace(/^-+|-+$/g, "");
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

function getTitle(props: any): string {
  // Notion 기본 title 컬럼 이름이 "Name"인 경우가 많음
  const t = props?.Name?.title ?? props?.Title?.title;
  const title = getPlainTextFromRichText(t);
  return title || "Untitled";
}

function getSlug(props: any, fallbackTitle: string): string {
  // Slug가 rich_text일 거라 가정(사용자 DB 화면 기준)
  const rt = props?.Slug?.rich_text;
  const slug = getPlainTextFromRichText(rt);
  return slug ? slugify(slug) : slugify(fallbackTitle);
}

function getDate(props: any): string | undefined {
  return props?.["Published Date"]?.date?.start ?? undefined;
}

function getCoverUrl(props: any): string | undefined {
  // Cover: files & media
  const files = props?.Cover?.files;
  if (!files || files.length === 0) return undefined;

  const f0 = files[0];
  // Notion 파일은 file or external 타입
  return f0?.file?.url ?? f0?.external?.url ?? undefined;
}

function getTags(props: any): string[] {
  const ms = props?.Tags?.multi_select;
  if (!ms || ms.length === 0) return [];
  return ms.map((t: any) => t?.name).filter(Boolean);
}

function getExcerpt(props: any): string | undefined {
  const rt = props?.Excerpt?.rich_text;
  const text = getPlainTextFromRichText(rt);
  return text || undefined;
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
  Array<Pick<Post, "id" | "title" | "slug" | "publishedDate" | "cover" | "tags" | "excerpt">>
> {
  const dbId = requireDbId();

  const statusType = await getStatusPropertyType();

  const baseQuery: any = {
    database_id: dbId,
    sorts: [{ property: "Published Date", direction: "descending" }],
  };

  // Status 타입에 맞춰 필터를 안전하게 구성
  if (statusType === "status") {
    baseQuery.filter = { property: "Status", status: { equals: "Published" } };
  } else if (statusType === "select") {
    baseQuery.filter = { property: "Status", select: { equals: "Published" } };
  } else {
    // 타입을 모르겠으면 필터 없이 가져오되, 아래에서 후처리로 Published만 남김(최후의 안전장치)
    // baseQuery.filter 생략
  }

  const res = await notion.databases.query(baseQuery);

  const posts = res.results
    .filter(isFullPage)
    .map((page) => {
      const props = (page as any).properties;
      const title = getTitle(props);
      return {
        id: page.id,
        title,
        slug: getSlug(props, title),
        publishedDate: getDate(props),
        cover: getCoverUrl(props),
        tags: getTags(props),
        excerpt: getExcerpt(props),
        _statusName:
          props?.Status?.status?.name ??
          props?.Status?.select?.name ??
          undefined,
      };
    });

  // statusType unknown 이면, 결과에서 Published만 남김
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

    // ✅ notion-to-md 버전에 따라 반환 타입이 달라질 수 있어 방어적으로 처리
    const mdBlocks = await n2m.pageToMarkdown(pageId);
    const mdOutput: any = n2m.toMarkdownString(mdBlocks);

    const contentString =
      typeof mdOutput === "string"
        ? mdOutput
        : typeof mdOutput?.parent === "string"
        ? mdOutput.parent
        : "";

    // Excerpt 우선, 없으면 본문 첫 문단에서 생성
    const excerptFromProp = getExcerpt(props);
    const paragraphs = (contentString || "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    const firstParagraph = paragraphs[0] ?? "";
    const excerpt =
      excerptFromProp ||
      (firstParagraph ? firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? "..." : "") : undefined);

    const post: Post = {
      id: page.id,
      title,
      slug,
      publishedDate: getDate(props),
      cover: getCoverUrl(props),
      tags: getTags(props),
      excerpt,
      content: contentString,
    };

    return post;
  } catch (error) {
    console.error("Error getting post:", error);
    return null;
  }
}

// slug로 단건 조회가 필요하면 쓸 수 있게 추가 제공
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const dbId = requireDbId();

  // Slug가 rich_text 라고 가정
  const res = await notion.databases.query({
    database_id: dbId,
    filter: {
      property: "Slug",
      rich_text: { equals: slug },
    },
  });

  const page = res.results.find(isFullPage);
  if (!page) return null;

  return getPostFromNotion(page.id);
}
