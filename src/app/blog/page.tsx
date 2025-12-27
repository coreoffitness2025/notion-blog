import Link from "next/link";
import { fetchPublishedPosts } from "@/lib/notion";

export default async function BlogPage() {
  const posts = await fetchPublishedPosts();

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>블로그</h1>
      <p style={{ marginTop: 10, opacity: 0.8 }}>
        Notion DB에 글을 추가하면 여기에 자동으로 노출됩니다.
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      {posts.length === 0 ? (
        <p style={{ opacity: 0.8 }}>아직 게시된 글이 없습니다.</p>
      ) : (
        <ul style={{ display: "grid", gap: 14, padding: 0, listStyle: "none" }}>
          {posts.map((p) => (
            <li key={p.id} style={{ border: "1px solid rgba(0,0,0,0.08)", padding: 14, borderRadius: 10 }}>
              <Link href={`/posts/${p.slug}`} style={{ fontWeight: 800 }}>
                {p.title}
              </Link>
              <div style={{ marginTop: 6, opacity: 0.75, fontSize: 14 }}>
                {p.publishedDate || ""}
              </div>
              {p.excerpt ? (
                <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
                  {p.excerpt}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
