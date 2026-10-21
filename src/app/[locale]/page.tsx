import type { Metadata } from "next";
import HomeRenewal from "@/components/home/HomeRenewal";
import BlogPreview from "@/components/BlogPreview";
import { getPostsFromCache } from "@/lib/notion";

export const revalidate = 86400;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const pageUrl = isKo ? siteUrl : `${siteUrl}/en`;

  return {
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getPostsFromCache("Blog").slice(0, 3);

  // 10/21 리뉴얼 — docs/site-renewal-2026-10.md
  return <HomeRenewal locale={locale} blog={<BlogPreview posts={posts} locale={locale} />} />;
}
