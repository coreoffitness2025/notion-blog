import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import EbookPageClient from "./client";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/ebook";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "Core of Fitness 전자책 - 피트니스 핵심 이론"
      : "Core of Fitness Ebook - Essential Fitness Theory",
    description: isKo
      ? "운동과 영양의 핵심을 담은 무료 전자책. 초보자부터 중급자까지, 알아두면 유용한 피트니스 지식과 실전 노하우를 수록했습니다."
      : "Free ebook covering the essentials of fitness and nutrition. Practical knowledge and tips for beginners to intermediate lifters.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "Core of Fitness 전자책 | CoreVia" : "Core of Fitness Ebook | CoreVia",
      description: isKo
        ? "운동과 영양의 핵심을 담은 무료 전자책"
        : "Free ebook covering fitness and nutrition essentials",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function EbookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <EbookPageClient dict={dict} locale={locale} />;
}
