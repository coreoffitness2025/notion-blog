import type { Metadata } from "next";
import { getDictionary, locales } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      title: isKo ? "CoreVia - 나만의 AI PT 코치" : "CoreVia - Your AI PT Coach",
      description: isKo
        ? "스마트폰 하나로 운동+식단 AI 코칭. AI가 기록을 분석하고 맞춤 피드백을 제공합니다."
        : "All-in-one workout + diet AI coaching. AI analyzes your records and provides personalized feedback.",
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
      url: isKo ? siteUrl : `${siteUrl}/en`,
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "CoreVia - AI PT Coach App",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isKo ? "CoreVia - 나만의 AI PT 코치" : "CoreVia - Your AI PT Coach",
      description: isKo
        ? "스마트폰 하나로 운동+식단 AI 코칭."
        : "All-in-one workout + diet AI coaching.",
      images: ["/opengraph-image.png"],
    },
    verification: {
      google: "y8H_9PlpPjFc0uOo0TSUmPgHc-70MAbP-W3NGiVzLaI",
      other: {
        "naver-site-verification": ["d2aa7b80e8484a4c96954153259cdeacd915e87e"],
      },
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
      logo: `${siteUrl}/opengraph-image.png`,
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
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}
