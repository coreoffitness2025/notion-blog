import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import PricingClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/pricing";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "구독 플랜 | CoreVia" : "Pricing Plans | CoreVia",
    description: isKo
      ? "CoreVia 피트니스 앱의 Free, Pro, Max 플랜을 비교하고 나에게 맞는 플랜을 선택하세요."
      : "Compare CoreVia fitness app's Free, Pro, and Max plans and choose the one that fits you.",
    alternates: {
      canonical: pageUrl,
      languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` },
    },
  };
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return <PricingClient dict={dict} locale={locale} />;
}
