import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import NutritionHubClient from "./client";
import { getNutritionCount } from "@/data/nutritionDatabase";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const revalidate = 3600; // 1h

export function generateStaticParams() {
  return [{ locale: "ko" }, { locale: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const count = getNutritionCount();
  const path = "/guide/nutrition";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? `음식 영양성분 사전 - ${count.toLocaleString()}개 음식 칼로리 & 영양 정보`
      : `Food Nutrition Database - ${count.toLocaleString()} Foods, Calories & Nutrition Facts`,
    description: isKo
      ? `${count.toLocaleString()}개 음식의 칼로리, 단백질, 탄수화물, 지방 정보를 검색하세요. 식약처(KFDA) & USDA 공식 데이터 기반. 무료 영양성분 사전.`
      : `Search nutrition facts for ${count.toLocaleString()} foods. Calories, protein, carbs & fat data from KFDA & USDA official sources. Free nutrition database.`,
    keywords: isKo
      ? [
          "음식 칼로리",
          "영양성분 검색",
          "칼로리 사전",
          "단백질 함량",
          "식약처 영양정보",
          "USDA 영양정보",
          "다이어트 칼로리",
          "음식 영양소",
        ]
      : [
          "food calories",
          "nutrition facts",
          "calorie database",
          "protein content",
          "KFDA nutrition",
          "USDA nutrition",
          "diet calories",
          "food nutrients",
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
        ? "음식 영양성분 사전"
        : "Food Nutrition Database",
      description: isKo
        ? `${count.toLocaleString()}개 음식의 칼로리와 영양 정보를 무료로 검색하세요`
        : `Search nutrition facts for ${count.toLocaleString()} foods for free`,
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

function getJsonLd(locale: string) {
  const isKo = locale === "ko";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: isKo ? "CoreVia 음식 영양성분 사전" : "CoreVia Food Nutrition Database",
    url: `${siteUrl}${isKo ? "" : "/en"}/guide/nutrition`,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}${isKo ? "" : "/en"}/guide/nutrition?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export default async function NutritionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(locale)) }}
      />
      <NutritionHubClient dict={dict} locale={locale} />
    </>
  );
}
