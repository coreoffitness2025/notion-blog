import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import MealPlansClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/meal-plans";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "식단 추천 - 목표별 맞춤 식단 플랜"
      : "Meal Plans - Goal-Based Diet Recommendations",
    description: isKo
      ? "다이어트, 벌크업, 유지 등 목표에 맞는 한국인 맞춤 식단 플랜과 영양 정보를 제공합니다."
      : "Diet plans tailored to your goals: weight loss, bulking, or maintenance. Personalized nutrition info included.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "식단 추천 | CoreVia" : "Meal Plans | CoreVia",
      description: isKo
        ? "목표에 맞는 맞춤 식단 플랜"
        : "Goal-based personalized diet plans",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function MealPlansPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <MealPlansClient dict={dict} locale={locale} />;
}
