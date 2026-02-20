import type { Metadata } from "next";
import Link from "next/link";
import CoachShowcase from "@/components/CoachShowcase";
import PointsCustomization from "@/components/PointsCustomization";
import AppDownloadCTA from "@/components/AppDownloadCTA";
import { getDictionary } from "@/lib/i18n";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/coach";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
  return {
    title: isKo ? "AI 코치 소개" : "AI Coach",
    description: isKo
      ? "4가지 성격의 AI PT 코치가 운동과 식단을 함께 관리해줍니다. 독설형, 격려형, 냉정형, 밸런스형 중 나에게 맞는 코치를 골라보세요."
      : "4 AI PT coaches with different personalities manage both your workouts and diet. Choose from Tough Love, Supportive, Analytical, or Balanced.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "AI 코치 소개 | CoreVia" : "AI Coach | CoreVia",
      description: isKo
        ? "4가지 성격의 AI PT 코치가 운동과 식단을 함께 관리해줍니다."
        : "4 AI PT coaches with different personalities manage your workouts and diet.",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function CoachPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-16 px-4 bg-[var(--corevia-bg)]">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-gray-200/60 text-gray-500 text-sm font-medium rounded-full mb-6">
            {dict.coachPage.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4 tracking-tight">
            {dict.coachPage.title1}
            <br />
            {dict.coachPage.title2}
          </h1>
          <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            {dict.coachPage.subtitle1}
            <br />
            {dict.coachPage.subtitle2}
          </p>
        </div>
      </section>

      <CoachShowcase locale={locale} />
      <PointsCustomization locale={locale} />

      {/* Coach Differences */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 tracking-tight">
            {dict.coachPage.diffTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {dict.coachPage.diffs.map((item) => (
              <div key={item.title} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppDownloadCTA locale={locale} />
    </div>
  );
}
