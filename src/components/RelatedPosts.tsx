import Link from "next/link";
import type { Post } from "@/lib/notion";

/** 가이드 페이지 하단 '함께 읽으면 좋은 글' — 선정 규칙은 src/lib/relatedPosts.ts */
export default function RelatedPosts({
  posts,
  prefix,
  isEn,
  source,
}: {
  posts: Post[];
  prefix: string;
  isEn: boolean;
  source: "nutrition" | "exercise";
}) {
  if (posts.length === 0) return null;
  return (
    <section className="mt-8" data-related-posts={source}>
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        {isEn ? "Related Articles" : "함께 읽으면 좋은 글"}
      </h2>
      <div className="grid gap-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`${prefix}/posts/${p.slug}`}
            className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[var(--corevia-primary)]/30 transition-all"
          >
            <p className="font-semibold text-gray-800 text-sm">{isEn ? p.titleEn || p.title : p.title}</p>
            {(isEn ? p.descriptionEn : p.description) && (
              <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                {isEn ? p.descriptionEn : p.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
