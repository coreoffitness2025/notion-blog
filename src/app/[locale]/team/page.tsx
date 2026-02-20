import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import TeamPageClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/team";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "팀 소개" : "Our Team",
    description: isKo
      ? "CoreVia 피트니스 팀을 소개합니다."
      : "Meet the CoreVia fitness team.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <TeamPageClient dict={dict} locale={locale} />;
}
