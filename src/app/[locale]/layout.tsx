import type { Metadata } from "next";
import { getDictionary, locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProviderWrapper from "@/lib/auth/AuthProviderWrapper";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const isKo = locale === "ko";

  return {
    title: {
      default: dict.metadata.homeTitle,
      template: "%s | CoreVia",
    },
    description: dict.metadata.homeDesc,
    keywords: isKo
      ? [
          "AI PT",
          "AI 운동 코치",
          "AI 식단 분석",
          "온라인 PT",
          "운동 기록 앱",
          "식단 관리 앱",
          "피트니스 앱",
          "CoreVia",
          "코어비아",
        ]
      : [
          "AI PT",
          "AI fitness coach",
          "AI diet analysis",
          "online personal trainer",
          "workout tracker",
          "diet tracker",
          "fitness app",
          "CoreVia",
        ],
    alternates: {
      languages: {
        ko: siteUrl,
        en: `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: isKo ? "코비아 피트니스 | 웰니스를 AI로 혁신합니다" : "CoreVia Fitness | Reinventing Wellness with AI",
      description: isKo
        ? "당신의 모든 피트니스, 코비아 피트니스. 운동·식단 코칭 앱부터 스마트 체중계까지."
        : "All your fitness, CoreVia Fitness. From a coaching app to a smart scale.",
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
      url: isKo ? siteUrl : `${siteUrl}/en`,
      images: [
        {
          url: isKo ? "/og-ko.png" : "/og-en.png",
          width: 1024,
          height: 500,
          alt: isKo ? "코비아 피트니스 | 웰니스를 AI로 혁신합니다" : "CoreVia Fitness | Reinventing Wellness with AI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isKo ? "코비아 피트니스 | 웰니스를 AI로 혁신합니다" : "CoreVia Fitness | Reinventing Wellness with AI",
      description: isKo
        ? "당신의 모든 피트니스, 코비아 피트니스."
        : "All your fitness, CoreVia Fitness.",
      images: [isKo ? "/og-ko.png" : "/og-en.png"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "CoreVia",
      url: siteUrl,
      logo: `${siteUrl}/og-ko.png`,
      description:
        "AI-powered personalized fitness coaching app. Record workouts and diet, get AI coach feedback.",
    },
    {
      "@type": "SoftwareApplication",
      name: "CoreVia",
      operatingSystem: "Android, iOS",
      applicationCategory: "HealthApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
      description:
        "AI PT coach analyzes your workouts and diet to provide personalized feedback.",
    },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AuthProviderWrapper>
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </AuthProviderWrapper>
    </>
  );
}
