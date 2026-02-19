import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RecordingUI from "@/components/RecordingUI";
import CoachShowcase from "@/components/CoachShowcase";
import PointsCustomization from "@/components/PointsCustomization";
import GuidePreview from "@/components/GuidePreview";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import { getPostsFromCache } from "@/lib/notion";

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
      <GuidePreview locale={locale} />
      <BlogPreview posts={posts} locale={locale} />
      <FAQ locale={locale} />
      <AppDownloadCTA locale={locale} />
    </div>
  );
}
