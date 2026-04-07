import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import { EXERCISE_DATABASE } from "@/data/exerciseDatabase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/workout";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "Workout Guide - 1RM 계산기, 운동 프로그램, 운동 도감 | CoreVia"
      : "Workout Guide - 1RM Calculator, Programs & Exercise Library | CoreVia",
    description: isKo
      ? `1RM 계산기, 운동 프로그램, ${EXERCISE_DATABASE.length}개 운동 가이드를 무료로 제공합니다.`
      : `Free 1RM calculator, workout programs, and ${EXERCISE_DATABASE.length} exercise guides.`,
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title: isKo ? "Workout Guide | CoreVia" : "Workout Guide | CoreVia",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

const tools = [
  {
    href: "/guide/workout/1rm",
    icon: "🏋️",
    titleKo: "1RM 계산기",
    titleEn: "1RM Calculator",
    descKo: "운동 중량과 반복 횟수로 1RM을 계산하세요",
    descEn: "Calculate your one-rep max from weight and reps",
  },
  {
    href: "/guide/workout/programs",
    icon: "📋",
    titleKo: "운동 프로그램",
    titleEn: "Workout Programs",
    descKo: "레벨과 목표에 맞는 맞춤 운동 프로그램",
    descEn: "Custom programs for your level and goals",
  },
  {
    href: "/guide/workout/exercises",
    icon: "💪",
    titleKo: "운동 도감",
    titleEn: "Exercise Library",
    descKo: `${EXERCISE_DATABASE.length}개 운동의 올바른 자세와 방법`,
    descEn: `Proper form for ${EXERCISE_DATABASE.length} exercises`,
  },
];

export default async function WorkoutGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const isEn = locale === "en";

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      <div className="border-b border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {dict.guideSubpages.backToGuide}
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isEn ? "Workout Guide" : "Workout Guide"}
          </h1>
          <p className="text-gray-500">
            {isEn
              ? "Tools and guides for your training"
              : "운동에 필요한 도구와 가이드"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-4">
          {tools.map((tool) => (
            <Link
              key={tool.href}
              href={`${prefix}${tool.href}`}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl mb-4 block">{tool.icon}</span>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--corevia-primary)] transition-colors">
                {isEn ? tool.titleEn : tool.titleKo}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {isEn ? tool.descEn : tool.descKo}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
