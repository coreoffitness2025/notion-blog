import Link from "next/link";
import Image from "next/image";
import { getPostsFromCache } from "@/lib/notion";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import { getDictionary } from "@/lib/i18n";
import type { Metadata } from "next";

export const revalidate = 3600;

interface PostsPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

const CATEGORIES_KO = ["전체", "운동", "근비대", "다이어트", "영양", "부상 방지", "보충제", "마인드셋", "부위별 운동", "초보자"] as const;
const CATEGORIES_EN = ["All", "Exercise", "Hypertrophy", "Diet", "Nutrition", "Injury Prevention", "Supplements", "Mindset", "Body Part Training", "Beginner"] as const;
const CATEGORY_KO_TO_EN: Record<string, string> = {
  "운동": "Exercise", "근비대": "Hypertrophy", "다이어트": "Diet", "영양": "Nutrition",
  "부상 방지": "Injury Prevention", "보충제": "Supplements", "마인드셋": "Mindset",
  "부위별 운동": "Body Part Training", "초보자": "Beginner",
};
const CATEGORY_EN_TO_KO: Record<string, string> = Object.fromEntries(
  Object.entries(CATEGORY_KO_TO_EN).map(([ko, en]) => [en, ko])
);
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: PostsPageProps): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const dict = getDictionary(locale);
  const path = "/posts";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: dict.blog.title,
    description: dict.blog.subtitle,
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: dict.blog.title,
      description: dict.blog.subtitle,
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
      images: [
        {
          url: `${siteUrl}/og-${isKo ? "ko" : "en"}.png`,
          width: 1200,
          height: 630,
          alt: dict.blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.blog.title,
      description: dict.blog.subtitle,
      images: [`${siteUrl}/og-${isKo ? "ko" : "en"}.png`],
    },
  };
}

export default async function PostsPage({ params, searchParams }: PostsPageProps) {
  const { locale } = await params;
  const { category: selectedCategory } = await searchParams;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const isKo = locale === "ko";
  const categories = isKo ? CATEGORIES_KO : CATEGORIES_EN;

  // 캐시에서 Blog 타입만 가져오기 (locale에 맞는 언어로 반환)
  const allPosts = getPostsFromCache(undefined, locale);
  // Blog 타입이거나 Type이 없는 것들을 블로그로 표시
  const blogPosts = allPosts.filter((p) => p.type === "Blog" || !p.type);

  // 카테고리 필터 적용 — locale에 맞는 카테고리명으로 비교
  const posts = selectedCategory
    ? blogPosts.filter((p) => p.category === selectedCategory)
    : blogPosts;

  // 카테고리별 글 수 계산 (locale에 맞는 카테고리명 기준)
  const categoryCounts: Record<string, number> = {};
  for (const p of blogPosts) {
    if (p.category) {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    }
  }

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 16px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 900 }}>{dict.blog.title}</h1>
      <p style={{ marginTop: 10, opacity: 0.8 }}>
        {dict.blog.subtitle}
      </p>

      <hr style={{ margin: "24px 0", opacity: 0.2 }} />

      {/* 카테고리 필터 */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
        {categories.map((cat, i) => {
          const isAll = i === 0;
          // locale에 맞는 카테고리명 (post.category와 일치하는 키)
          const categoryKey = isKo
            ? cat
            : cat; // EN일 때 post.category도 영어이므로 그대로 사용
          const isActive = isAll ? !selectedCategory : selectedCategory === categoryKey;
          const count = isAll ? blogPosts.length : categoryCounts[categoryKey] || 0;
          if (!isAll && count === 0) return null;
          const href = isAll
            ? `${prefix}/posts`
            : `${prefix}/posts?category=${encodeURIComponent(categoryKey)}`;
          return (
            <Link
              key={cat}
              href={href}
              style={{
                padding: "8px 16px",
                borderRadius: 20,
                fontSize: 14,
                fontWeight: isActive ? 600 : 400,
                textDecoration: "none",
                color: isActive ? "#fff" : "#333",
                background: isActive ? "#003478" : "#f3f4f6",
                transition: "all 0.2s",
              }}
            >
              {cat} ({count})
            </Link>
          );
        })}
      </div>

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
                    position: "relative",
                    aspectRatio: "16/9",
                    background: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(0,0,0,0.06)",
                    borderBottom: "none",
                  }}
                >
                  <Image
                    src="/logo-horizontal.png"
                    alt="CoreVia Fitness"
                    width={180}
                    height={44}
                    style={{ objectFit: "contain" }}
                  />
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

      {/* Cross-link to Guides */}
      <div
        style={{
          marginTop: 32,
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        }}
      >
        <Link
          href={`${prefix}/guide/workout`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 14 }}>
            {locale === "en" ? "Workout Guide" : "운동 가이드"}
          </span>
          <span style={{ fontSize: 14, opacity: 0.5 }}>→</span>
        </Link>
        <Link
          href={`${prefix}/guide/nutrition`}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 16,
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 12,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <span style={{ fontWeight: 600, fontSize: 14 }}>
            {locale === "en" ? "Nutrition Guide" : "영양 가이드"}
          </span>
          <span style={{ fontSize: 14, opacity: 0.5 }}>→</span>
        </Link>
      </div>
    </div>
  );
}
