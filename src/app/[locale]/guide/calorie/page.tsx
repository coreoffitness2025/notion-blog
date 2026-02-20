import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n";
import CalorieClient from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/guide/calorie";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo
      ? "칼로리 계산기 - 일일 권장 칼로리 & 매크로 계산"
      : "Calorie Calculator - Daily Calorie & Macro Estimator",
    description: isKo
      ? "성별, 나이, 체중, 키, 활동량을 입력하면 일일 권장 칼로리(TDEE)와 매크로 영양소(탄단지)를 계산합니다. Mifflin-St Jeor 공식 기반, 아시아인 체형 보정 지원. 다이어트/벌크업 목표별 계산."
      : "Calculate your daily calories (TDEE) and macros based on gender, age, weight, height, and activity level. Uses Mifflin-St Jeor formula with Asian body type adjustment. Free online calculator.",
    keywords: isKo
      ? [
          "칼로리 계산기",
          "일일 칼로리 계산",
          "TDEE 계산기",
          "매크로 계산기",
          "다이어트 칼로리",
          "기초대사량 계산",
          "BMR 계산기",
          "탄단지 비율",
          "벌크업 칼로리",
          "무료 칼로리 계산",
        ]
      : [
          "calorie calculator",
          "TDEE calculator",
          "macro calculator",
          "daily calorie calculator",
          "BMR calculator",
          "diet calories",
          "bulking calories",
          "Mifflin-St Jeor",
          "free calorie calculator",
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
        ? "칼로리 계산기 - TDEE & 매크로 무료 계산 | CoreVia"
        : "Calorie Calculator - Free TDEE & Macro Estimator | CoreVia",
      description: isKo
        ? "Mifflin-St Jeor 공식으로 일일 권장 칼로리와 탄단지 비율을 계산하세요."
        : "Calculate your daily calories and macro ratios with the Mifflin-St Jeor formula.",
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "website",
    },
  };
}

function getJsonLd(locale: string) {
  const isKo = locale === "ko";
  const path = "/guide/calorie";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: isKo ? "칼로리 계산기" : "Calorie Calculator",
        url: pageUrl,
        applicationCategory: "HealthApplication",
        operatingSystem: "All",
        offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
        description: isKo
          ? "일일 권장 칼로리(TDEE)와 매크로 영양소를 계산하는 무료 온라인 도구"
          : "Free online tool to calculate your daily calories (TDEE) and macros",
      },
      {
        "@type": "FAQPage",
        mainEntity: isKo
          ? [
              {
                "@type": "Question",
                name: "TDEE란 무엇인가요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDEE(Total Daily Energy Expenditure)는 하루 동안 소비하는 총 칼로리입니다. 기초대사량(BMR)에 활동 수준을 곱하여 계산합니다.",
                },
              },
              {
                "@type": "Question",
                name: "Mifflin-St Jeor 공식은 어떻게 계산하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "남성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) + 5. 여성: BMR = (10 x 체중kg) + (6.25 x 키cm) - (5 x 나이) - 161. TDEE = BMR x 활동계수(1.2~1.9).",
                },
              },
              {
                "@type": "Question",
                name: "다이어트 시 칼로리를 얼마나 줄여야 하나요?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "일반적으로 TDEE에서 300~500kcal을 줄이면 주당 0.3~0.5kg 감량할 수 있습니다. 너무 급격한 제한은 근손실과 요요를 유발할 수 있으므로 주의하세요.",
                },
              },
            ]
          : [
              {
                "@type": "Question",
                name: "What is TDEE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "TDEE (Total Daily Energy Expenditure) is the total number of calories you burn per day. It's calculated by multiplying your BMR by an activity factor.",
                },
              },
              {
                "@type": "Question",
                name: "How does the Mifflin-St Jeor formula work?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Male: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age) + 5. Female: BMR = (10 x weight in kg) + (6.25 x height in cm) - (5 x age) - 161. TDEE = BMR x activity factor (1.2-1.9).",
                },
              },
              {
                "@type": "Question",
                name: "How much should I reduce calories for weight loss?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "A deficit of 300-500 kcal below TDEE typically results in 0.3-0.5 kg of weight loss per week. Avoid extreme restrictions as they can cause muscle loss and rebound weight gain.",
                },
              },
            ],
      },
    ],
  };
}

export default async function CaloriePage({
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
      <CalorieClient dict={dict} locale={locale} />
    </>
  );
}
