import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import RecordingUI from "@/components/RecordingUI";
import CoachShowcase from "@/components/CoachShowcase";
import PointsCustomization from "@/components/PointsCustomization";
import GuidePreview from "@/components/GuidePreview";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import AppDownloadCTA from "@/components/AppDownloadCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* S1. Hero */}
      <HeroSection />

      {/* S2. 핵심 기능 4카드 */}
      <FeatureCards />

      {/* S3. 운동/식단 기록 UI */}
      <RecordingUI />

      {/* S4. 코치 캐릭터 쇼케이스 */}
      <CoachShowcase />

      {/* S5. 포인트 & 커스터마이징 */}
      <PointsCustomization />

      {/* S6. 무료 도구 소개 */}
      <GuidePreview />

      {/* S7. 블로그 미리보기 */}
      <BlogPreview />

      {/* S8. FAQ */}
      <FAQ />

      {/* S9. 앱 다운로드 CTA */}
      <AppDownloadCTA />
    </div>
  );
}
