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
 * Tags: multi-selec*
