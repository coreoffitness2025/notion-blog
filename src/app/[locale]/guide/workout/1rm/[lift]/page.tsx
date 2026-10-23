import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/i18n";
import OneRmClient, { type LiftCopy } from "../client";

/**
 * 종목별 1RM 계산기 (2026-10-23 대표 벤치 흡수 C2 — Lyfta 의 종목별 계산기 진입점).
 * 네이버 검색량 실측(10/23): 종목+1RM 은 도구에 안 잡힐 만큼 작고 '원알엠' 1,270·'벤치프레스 무게' 350 → 4종목만.
 * 운동 가이드(exercises/[id])의 googlebot noindex(10/22)와 분리된 경로라 색인 대상이다.
 */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

const LIFTS: Record<string, { exId: string; ko: string; en: string; noteKo: string; noteEn: string }> = {
  "bench-press": { exId: "bench-press", ko: "벤치프레스", en: "Bench Press",
    noteKo: "벤치프레스는 반복 횟수가 많아질수록 추정 오차가 커집니다. 3~8회로 든 무게로 계산하는 편이 실제에 가깝습니다.",
    noteEn: "Estimates get less reliable as reps go up. Use a set of 3–8 reps for a closer number." },
  squat: { exId: "squat", ko: "스쿼트", en: "Squat",
    noteKo: "스쿼트는 깊이에 따라 같은 무게도 난이도가 달라집니다. 늘 같은 깊이로 앉은 세트로 계산하세요.",
    noteEn: "Depth changes how hard the same weight is. Calculate from sets done to the same depth." },
  deadlift: { exId: "conventional-deadlift", ko: "데드리프트", en: "Deadlift",
    noteKo: "데드리프트는 등이 둥글게 말리기 시작한 반복은 빼고 세는 것이 좋습니다.",
    noteEn: "Don't count reps where your back started to round." },
  "overhead-press": { exId: "overhead-press", ko: "오버헤드프레스", en: "Overhead Press",
    noteKo: "오버헤드프레스는 다른 종목보다 무게 단위가 작아서, 원판 한 장 차이도 1RM 추정이 크게 달라집니다.",
    noteEn: "Small plate jumps change the estimate a lot for overhead press." },
};

export function generateStaticParams() {
  return Object.keys(LIFTS).map((lift) => ({ lift }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; lift: string }> }): Promise<Metadata> {
  const { locale, lift } = await params;
  const L = LIFTS[lift];
  if (!L) return {};
  const isKo = locale === "ko";
  const path = `/guide/workout/1rm/${lift}`;
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
  const title = isKo ? `${L.ko} 1RM 계산기 - ${L.ko} 원알엠 최대 중량 계산` : `${L.en} 1RM Calculator - One Rep Max`;
  const description = isKo
    ? `${L.ko}에서 든 무게와 반복 횟수를 넣으면 1RM(원알엠, 최대 1회 중량)과 훈련 강도별 무게를 계산합니다. Epley 공식, 무료.`
    : `Enter the weight and reps from your ${L.en} set to estimate your 1RM and training-zone weights. Epley formula, free.`;
  return {
    title, description,
    alternates: { canonical: pageUrl, languages: { ko: `${siteUrl}${path}`, en: `${siteUrl}/en${path}` } },
    openGraph: { title, description, url: pageUrl, siteName: "CoreVia", locale: isKo ? "ko_KR" : "en_US", type: "website" },
  };
}

export default async function LiftOneRmPage({ params }: { params: Promise<{ locale: string; lift: string }> }) {
  const { locale, lift } = await params;
  const L = LIFTS[lift];
  if (!L) notFound();
  const isKo = locale === "ko";
  const prefix = isKo ? "" : `/${locale}`;
  const copy: LiftCopy = {
    title: isKo ? `${L.ko} 1RM 계산기` : `${L.en} 1RM Calculator`,
    subtitle: isKo ? `${L.ko}에서 든 무게와 반복 횟수로 최대 1회 중량(원알엠)을 추정합니다` : `Estimate your ${L.en} one rep max from a recent set`,
    note: isKo ? L.noteKo : L.noteEn,
    guideHref: `${prefix}/guide/workout/exercises/${L.exId}`,
    guideLabel: isKo ? `${L.ko} 자세 가이드` : `${L.en} form guide`,
    appHref: `/go?c=site-1rm-${lift}`,
    appLabel: isKo ? "앱에 세트 기록하기" : "Log your sets in the app",
  };
  const pageUrl = isKo ? `${siteUrl}/guide/workout/1rm/${lift}` : `${siteUrl}/${locale}/guide/workout/1rm/${lift}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: copy.title, url: pageUrl, applicationCategory: "HealthApplication", operatingSystem: "All",
    offers: { "@type": "Offer", price: "0", priceCurrency: "KRW" },
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <OneRmClient dict={getDictionary(locale)} locale={locale} lift={copy} />
    </>
  );
}
