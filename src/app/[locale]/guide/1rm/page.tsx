import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import OneRmClient from "./client";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/1rm";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "1RM 계산기 - 최대 중량 계산 (Epley 공식)"
      : "1RM Calculator - Estimate Your One Rep Max (Epley Formula)",
    description: isKo
      ? "운동 중량과 반복 횟수를 입력하면 1RM(최대 1회 중량)을 계산합니다. Epley 공식 기반, 트레이닝 존 가이드 포함. 벤치프레스, 스쿼트, 데드리프트 1RM을 무료로 계산하세요."
      : "Calculate your 1RM (One Rep Max) from weight and reps using the Epley formula. Includes training zone guide for bench press, squat, and deadlift. Free online calculator.",
    keywords: isKo
      ? [
          "1RM 계산기",
          "1rm 계산",
          "원알엠 계산기",
          "최대 중량 계산",
          "벤치프레스 1RM",
          "스쿼트 1RM",
          "데드리프트 1RM",
          "Epley 공식",
          "트레이닝 존",
          "무료 1RM 계산",
        ]
      : [
          "1RM calculator",
          "one rep max calculator",
          "Epley formula",
          "bench press 1RM",
          "squat 1RM",
          "deadlift 1RM",
          "training zones",
          "max weight calculator",
          "free 1RM calculator",
        ],
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}${path}`,
        en: `${siteUrl}/en${path}`,
      },
    },
    openGraph: {
      title: isKo
        ? "1RM 계산기 - 최대 중량 무료 계산 | CoreVia"
        : "1RM Calculator - Free One Rep Max Estimator | CoreVia",
      description: isKo
        ? "Epley 공식으로 1RM을 계산하고, 트레이닝 존별 권장 중량을 확인하세요."
        : "Calculate your 1RM with the Epley formula and get training zone recommendations.",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

function getJsonLd(locale: string) {
  const isKo = locale === "ko";
  const path = "/guide/1rm";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: isKo ? "1RM 계산기" : "1RM Calculator",
        url: pageUrl,
        applicationCategory: "HealthApplication",
        operatingSystem: "All",
        offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
        description: isKo
          ? "운동 중량과 반복 횟수로 1RM(최대 1회 중량)을 계산하는 무료 온라인 도구"
          : "Free online tool to calculate your 1RM from weight and reps",
      },
      {
        "@type": "FAQPage",
        mainEntity: isKo
          ? [
              {
                "@type": "Question",
                name: "1RM이란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1RM(One Repetition Maximum)은 올바른 자세로 1회만 들어올릴 수 있는 최대 중량입니다. 운동 강도를 설정하는 기준으로 사용됩니다.",
                },
              },
              {
                "@type": "Question",
                name: "Epley 공식은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Epley 공식: 1RM = 중량 x (1 + 반복횟수/30). 예를 들어 60kg으로 8회 반복 시 예상 1RM은 60 x (1 + 8/30) = 76kg입니다.",
                },
              },
              {
                "@type": "Question",
                name: "1RM 계산은 어떤 운동에 적용할 수 있나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "벤치프레스, 스쿼트, 데드리프트 등 바벨/덤벨 복합 운동에 가장 정확합니다. 머신 운동이나 고립 운동에서는 오차가 클 수 있습니다.",
                },
              },
            ]
          : [
              {
                "@type": "Question",
                name: "What is 1RM?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "1RM (One Repetition Maximum) is the maximum weight you can lift with proper form for one repetition. It's used as a baseline for setting training intensity.",
                },
              },
              {
                "@type": "Question",
                name: "How does the Epley formula work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Epley formula: 1RM = Weight x (1 + Reps/30). For example, if you lift 60kg for 8 reps, your estimated 1RM is 60 x (1 + 8/30) = 76kg.",
                },
              },
              {
                "@type": "Question",
                name: "Which exercises work best with the 1RM calculator?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The calculator is most accurate for compound barbell/dumbbell exercises like bench press, squat, and deadlift. It may be less accurate for machine or isolation exercises.",
                },
              },
            ],
      },
    ],
  };
}

export default async function OneRmPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const jsonLd = getJsonLd(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <OneRmClient dict={dict} locale={locale} />
    </>
  );
}
