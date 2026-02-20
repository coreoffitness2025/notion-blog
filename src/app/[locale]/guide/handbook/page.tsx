import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import HandbookClient from "./client";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/handbook";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "피트니스 핸드북 - 운동 & 영양 심층 가이드"
      : "Fitness Handbook - In-Depth Workout & Nutrition Guide",
    description: isKo
      ? "운동과 영양에 대한 심층 가이드 아티클 모음. 과학적 근거에 기반한 피트니스 지식을 무료로 제공합니다."
      : "In-depth guide articles on workout and nutrition. Science-based fitness knowledge, free to access.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "피트니스 핸드북 | CoreVia" : "Fitness Handbook | CoreVia",
      description: isKo
        ? "운동과 영양에 대한 심층 가이드"
        : "In-depth workout and nutrition guides",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function HandbookPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <HandbookClient dict={dict} locale={locale} />;
}
