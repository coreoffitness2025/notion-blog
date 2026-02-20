import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RecordingUI from "@/components/RecordingUI";
import CoachShowcase from "@/components/CoachShowcase";
import PointsCustomization from "@/components/PointsCustomization";
import TrainerSection from "@/components/TrainerSection";
import GuidePreview from "@/components/GuidePreview";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import { getPostsFromCache } from "@/lib/notion";
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

  return (
    <div className="min-h-screen bg-white">
      <HeroSection locale={locale} />
      <FeatureCards locale={locale} />
      <RecordingUI locale={locale} />
      <CoachShowcase locale={locale} />
      <PointsCustomization locale={locale} />
      <TrainerSection locale={locale} />
      <GuidePreview locale={locale} />
      <BlogPreview posts={posts} locale={locale} />
      <FAQ locale={locale} />
      <AppDownloadCTA locale={locale} />
    </div>
  );
}
