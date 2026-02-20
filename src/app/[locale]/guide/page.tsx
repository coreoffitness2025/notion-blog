import type { Metadata } from "next";
import Link from "next/link";
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
  const path = "/guide";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "무료 피트니스 가이드 - 1RM 계산기, 칼로리 계산기, 운동 도감"
      : "Free Fitness Guide - 1RM Calculator, Calorie Calculator, Exercise Library",
    description: isKo
      ? "1RM 계산기, 칼로리 계산기, 운동 도감, 운동 프로그램 등 과학적인 피트니스 도구를 무료로 제공합니다. 코비아 피트니스 앱의 핵심 콘텐츠를 웹에서 만나보세요."
      : "Free fitness tools including 1RM calculator, calorie calculator, exercise library, and workout programs. Access CoreVia's core fitness content on the web.",
    keywords: isKo
      ? [
          "피트니스 가이드",
          "1RM 계산기",
          "칼로리 계산기",
          "운동 도감",
          "운동 프로그램",
          "무료 피트니스 도구",
          "헬스 계산기",
        ]
      : [
          "fitness guide",
          "1RM calculator",
          "calorie calculator",
          "exercise library",
          "workout programs",
          "free fitness tools",
        ],
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title: isKo
        ? "무료 피트니스 가이드 | CoreVia"
        : "Free Fitness Guide | CoreVia",
      description: isKo
        ? "1RM 계산기, 칼로리 계산기, 운동 도감 등 무료 피트니스 도구 모음"
        : "Free fitness tools: 1RM calculator, calorie calculator, exercise library and more",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

const guideHrefs = [
  "/guide/1rm",
  "/guide/calorie",
  "/guide/exercises",
  "/guide/handbook",
  "/guide/meal-plans",
  "/guide/programs",
];

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-sm font-medium mb-6">
            {dict.guide.badge}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            {dict.guide.title}
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            {dict.guide.subtitle1}
            <br />
            {dict.guide.subtitle2}
          </p>
        </div>
      </section>

      {/* Guide Grid */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dict.guide.items.map((item, i) => (
            <Link
              key={guideHrefs[i]}
              href={`${prefix}${guideHrefs[i]}`}
              className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-2xl mb-4 block">{item.icon}</span>
              <h2 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-[var(--corevia-primary)] transition-colors">
                {item.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ebook Promotion */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <Link
          href={`${prefix}/ebook`}
          className="block border border-gray-200 rounded-3xl p-8 md:p-10 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all group"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left flex-1 order-2 md:order-1">
              <span className="inline-block px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-xs font-semibold mb-3">
                {dict.guide.ebookBadge}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 group-hover:text-[var(--corevia-primary)] transition-colors">
                {dict.guide.ebookTitle}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
                <span className="text-gray-800 font-semibold">Core of Fitness</span>
                {dict.guide.ebookDesc}
              </p>
            </div>
            <div className="flex-shrink-0 w-[140px] rounded-xl overflow-hidden shadow-sm border border-gray-100 order-1 md:order-2">
              <img src="/ebook-cover.png" alt="Core of Fitness" className="w-full h-auto" />
            </div>
          </div>
        </Link>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {dict.guide.ctaTitle}
          </h2>
          <p className="text-gray-500 mb-8">
            {dict.guide.ctaDesc1}
            <br />
            {dict.guide.ctaDesc2}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl hover:bg-blue-600 transition-all"
            >
              {dict.guide.download}
            </a>
            <Link
              href={`${prefix}/contact`}
              className="px-8 py-3 border border-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all"
            >
              {dict.guide.contactUs}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
