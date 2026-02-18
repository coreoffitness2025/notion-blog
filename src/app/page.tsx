import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import CoachShowcase from "@/components/CoachShowcase";
import LevelEvolution from "@/components/LevelEvolution";
import GuidePreview from "@/components/GuidePreview";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* S1. Hero */}
      <HeroSection />

      {/* S2-S3. 문제-해결 프레임 + 핵심 기능 4카드 */}
      <FeatureCards />

      {/* S4. 코치 캐릭터 쇼케이스 */}
      <CoachShowcase />

      {/* S4.5. 코치 레벨 진화 */}
      <LevelEvolution />

      {/* S5. 무료 도구 소개 */}
      <GuidePreview />

      {/* S6. 블로그 미리보기 */}
      <BlogPreview />

      {/* S7. FAQ */}
      <FAQ />

      {/* S8. 앱 다운로드 CTA */}
      <AppDownloadCTA />
    </div>
  );
}
