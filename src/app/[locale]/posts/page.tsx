import Link from "next/link";
import Image from "next/image";
import { getPostsFromCache } from "@/lib/notion";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/lib/i18n";
import type { Metadata } from "next";

interface PostsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PostsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return {
    title: dict.blog.title,
    description: dict.blog.subtitle,
  };
}

export default async function PostsPage({ params }: PostsPageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  // 캐시에서 Blog 타입만 가져오기 (Type이 없으면 전체 반환)
  const allPosts = getPostsFromCache();
  // Blog 타입이거나 Type이 없는 것들을 블로그로 표시
  const posts = allPosts.filter((p) => p.type === "Blog" || !p.type);

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>{dict.blog.title}</h1>
      <p style={{ marginTop: 10, opacity: 0.8 }}>
        {dict.blog.subtitle}
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      {posts.length === 0 ? (
        <p style={{ opacity: 0.8 }}>{dict.blog.noPosts}</p>
      ) : (
        <div
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          }}
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`${prefix}/posts/${post.slug}`}
              style={{
                display: "block",
                border: "1px solid rgba(0,0,0,0.08)",
                borderRadius: 12,
                overflow: "hidden",
                textDecoration: "none",
                color: "inherit",
                transition: "box-shadow 0.2s",
              }}
            >
              {post.coverImage ? (
                <div style={{ position: "relative", aspectRatio: "16/9" }}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ) : (
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: 24,
                    fontWeight: 700,
                  }}
                >
                  Corevia
                </div>
              )}
              <div style={{ padding: 16 }}>
                <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>
                  {post.title}
                </h2>
                <p
                  style={{
                    fontSize: 14,
                    opacity: 0.75,
                    lineHeight: 1.6,
                    marginBottom: 12,
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                  }}
                >
                  {post.description}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    flexWrap: "wrap",
                  }}
                >
                  <time style={{ fontSize: 13, opacity: 0.6 }}>
                    {format(new Date(post.date), "yyyy.MM.dd")}
                  </time>
                  {post.tags?.slice(0, 3).map((tag) => (
                    <Badge key={tag} variant="outline" style={{ fontSize: 11 }}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
