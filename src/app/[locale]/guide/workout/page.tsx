import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import { EXERCISE_DATABASE } from "@/data/exerciseDatabase";
import WorkoutHubClient from "./client";

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
      ? `Workout Guide - 1RM 계산기, 운동 프로그램, ${EXERCISE_DATABASE.length}개 운동 도감 | CoreVia`
      : `Workout Guide - 1RM Calculator, Programs & ${EXERCISE_DATABASE.length} Exercises | CoreVia`,
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
      title: "Workout Guide | CoreVia",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

export default async function WorkoutGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return <WorkoutHubClient dict={dict} locale={locale} />;
}
