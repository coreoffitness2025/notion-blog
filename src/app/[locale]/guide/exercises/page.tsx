import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import ExercisesClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/exercises";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "운동 도감 - 부위별 운동 방법 & 올바른 자세"
      : "Exercise Library - Workout Guide by Muscle Group",
    description: isKo
      ? "가슴, 등, 어깨, 하체, 팔, 코어 등 부위별 운동 방법과 올바른 자세를 확인하세요. 초급부터 고급까지 난이도별 필터 제공."
      : "Browse exercises by muscle group with proper form guides. Filter by difficulty from beginner to advanced. Free exercise library.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "운동 도감 | CoreVia" : "Exercise Library | CoreVia",
      description: isKo
        ? "부위별 운동 방법과 올바른 자세 가이드"
        : "Exercise guide by muscle group with proper form",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function ExercisesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <ExercisesClient dict={dict} locale={locale} />;
}
