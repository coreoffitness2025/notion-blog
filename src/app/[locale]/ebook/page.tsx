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
      ? "체중 감량과 근비대의 핵심을 담은 전자책. 초보자부터 중급자까지, 식단/운동 프로그램과 실전 노하우를 수록했습니다."
      : "An ebook covering the core of weight loss and hypertrophy. Meal/workout programs and practical tips for beginners to intermediate lifters.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "Core of Fitness 전자책 | CoreVia" : "Core of Fitness Ebook | CoreVia",
      description: isKo
        ? "체중 감량과 근비대의 핵심을 담은 전자책"
        : "An ebook covering the core of weight loss and hypertrophy",
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
