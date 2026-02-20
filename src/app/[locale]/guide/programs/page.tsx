import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import ProgramsClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/programs";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "운동 프로그램 - 레벨별 맞춤 운동 루틴"
      : "Workout Programs - Training Routines by Level",
    description: isKo
      ? "초급, 중급, 고급 레벨과 목표에 맞는 맞춤 운동 프로그램을 무료로 제공합니다. 분할 운동, 전신 운동, 홈트 등."
      : "Free workout programs for all levels. Split routines, full body, home workouts and more, tailored to your goals.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
    openGraph: {
      title: isKo ? "운동 프로그램 | CoreVia" : "Workout Programs | CoreVia",
      description: isKo
        ? "레벨별 맞춤 운동 루틴 제공"
        : "Training routines tailored to your level",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <ProgramsClient dict={dict} locale={locale} />;
}
