import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import {
  getNutritionById,
  getNutritionName,
  getNutritionDescription,
  getSimilarNutrition,
  type NutritionItem,
} from "@/data/nutritionDatabase";
import { notFound } from "next/navigation";
import ServingCalculator from "./client";
import AdSense from "@/components/AdSense";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

// ── Static Params: top 200 pre-generated, rest on-demand ISR ──
export const dynamicParams = true;
export const revalidate = 86400; // 24h — nutrition data is stable

export function generateStaticParams() {
  // Import inline to avoid bundling entire DB in client
  const { getPopularNutrition } = require("@/data/nutritionDatabase");
  return getPopularNutrition(200).map((item: NutritionItem) => ({ id: item.id }));
}

// ── SEO Metadata ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { locale, id } = await params;
  const item = getNutritionById(id);
  if (!item) return { title: "Not Found" };

  const isKo = locale === "ko";
  const name = getNutritionName(id, locale);
  const desc = getNutritionDescription(id, locale);
  const path = `/guide/nutrition/${id}`;
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
  const sourceLabel = item.source === "kfda"
    ? isKo ? "식약처" : "KFDA"
    : "USDA";

  const fallbackDesc = isKo
    ? `${name} 100g 기준 ${item.calories}kcal, 단백질 ${item.protein}g, 탄수화물 ${item.carbs}g, 지방 ${item.fat}g. ${sourceLabel} 공식 데이터 기반 영양 정보.`
    : `${name}: ${item.calories}kcal, ${item.protein}g protein, ${item.carbs}g carbs, ${item.fat}g fat per 100g. Based on official ${sourceLabel} data.`;

  return {
    title: isKo
      ? `${name} 칼로리 ${item.calories}kcal, 단백질 ${item.protein}g - 영양성분`
      : `${name} ${item.calories}kcal, ${item.protein}g Protein - Nutrition Facts`,
    description: desc || fallbackDesc,
    keywords: isKo
      ? [name, `${name} 칼로리`, `${name} 영양성분`, `${name} 단백질`,
         ...(name.includes("닭") ? ["치킨 칼로리", "치킨 영양성분"] : []),
         ...(name.includes("치킨") ? ["닭 칼로리", "닭고기 영양성분"] : []),
        ]
      : [name, `${name} calories`, `${name} nutrition`, `${name} protein`,
         ...(name.toLowerCase().includes("chicken") ? ["chicken calories", "chicken nutrition"] : []),
        ],
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}/guide/nutrition/${id}`,
        en: `${siteUrl}/en/guide/nutrition/${id}`,
      },
    },
    openGraph: {
      title: isKo
        ? `${name} 영양성분`
        : `${name} Nutrition Facts`,
      description: isKo
        ? `${item.calories}kcal | 단백질 ${item.protein}g | 탄수 ${item.carbs}g | 지방 ${item.fat}g`
        : `${item.calories}kcal | Protein ${item.protein}g | Carbs ${item.carbs}g | Fat ${item.fat}g`,
      url: pageUrl,
      siteName: "CoreVia",
      locale: isKo ? "ko_KR" : "en_US",
      type: "article",
    },
  };
}

// ── JSON-LD: NutritionInformation + BreadcrumbList ──
function getJsonLd(item: NutritionItem, name: string, locale: string) {
  const isKo = locale === "ko";
  const prefix = isKo ? "" : "/en";
  return [
    {
      "@context": "https://schema.org",
      "@type": "NutritionInformation",
      name: `${name} Nutrition Facts`,
      calories: `${item.calories} calories`,
      proteinContent: `${item.protein} g`,
      carbohydrateContent: `${item.carbs} g`,
      fatContent: `${item.fat} g`,
      ...(item.saturated_fat != null ? { saturatedFatContent: `${item.saturated_fat} g` } : {}),
      ...(item.sodium != null ? { sodiumContent: `${item.sodium} mg` } : {}),
      ...(item.sugar != null ? { sugarContent: `${item.sugar} g` } : {}),
      ...(item.serving_size ? { servingSize: `${item.serving_size} g` } : {}),
      inLanguage: isKo ? "ko" : "en",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: isKo ? "피트니스 가이드" : "Fitness Guide", item: `${siteUrl}${prefix}/guide` },
        { "@type": "ListItem", position: 2, name: isKo ? "영양 가이드" : "Nutrition Guide", item: `${siteUrl}${prefix}/guide/nutrition` },
        { "@type": "ListItem", position: 3, name: name },
      ],
    },
  ];
}

// ── Daily Value percentages (based on 2000kcal diet) ──
function getDailyValue(item: NutritionItem) {
  return {
    calories: Math.round((item.calories / 2000) * 100),
    protein: Math.round((item.protein / 50) * 100),
    carbs: Math.round((item.carbs / 300) * 100),
    fat: Math.round((item.fat / 65) * 100),
    saturated_fat: item.saturated_fat != null ? Math.round((item.saturated_fat / 20) * 100) : null,
    sodium: item.sodium != null ? Math.round((item.sodium / 2300) * 100) : null,
    sugar: item.sugar != null ? Math.round((item.sugar / 50) * 100) : null,
  };
}

// ── Page Component ──
export default async function NutritionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const item = getNutritionById(id);
  if (!item) notFound();

  const dict = getDictionary(locale);
  const isEn = locale === "en";
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const name = getNutritionName(id, locale);
  const secondaryName = getNutritionName(id, locale === "ko" ? "en" : "ko");
  const description = getNutritionDescription(id, locale);
  const dv = getDailyValue(item);

  const sourceLabel = item.source === "kfda"
    ? isEn ? "KFDA (Korea Food & Drug Administration)" : "식품의약품안전처 (KFDA)"
    : "USDA (U.S. Department of Agriculture)";
  const sourceBadge = "bg-[var(--corevia-primary)]/5 text-[var(--corevia-primary)] border-[var(--corevia-primary)]/20";

  // Macro ratio
  const totalMacroKcal = item.protein * 4 + item.carbs * 4 + item.fat * 9;
  const macroRatio = totalMacroKcal > 0
    ? {
        protein: Math.round((item.protein * 4 / totalMacroKcal) * 100),
        carbs: Math.round((item.carbs * 4 / totalMacroKcal) * 100),
        fat: Math.round((item.fat * 9 / totalMacroKcal) * 100),
      }
    : { protein: 0, carbs: 0, fat: 0 };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(item, name, locale)) }}
      />
      <main className="min-h-screen bg-[var(--corevia-bg)]">
        {/* Breadcrumb */}
        <nav className="border-b border-gray-200 py-4 px-4">
          <div className="max-w-4xl mx-auto flex items-center gap-2 text-sm text-gray-500">
            <Link href={`${prefix}/guide`} className="hover:text-gray-800 transition-colors">
              {dict.nav.guide}
            </Link>
            <span>/</span>
            <Link href={`${prefix}/guide/nutrition`} className="hover:text-gray-800 transition-colors">
              {isEn ? "Nutrition Database" : "영양성분 사전"}
            </Link>
            <span>/</span>
            <span className="text-gray-800 font-medium truncate max-w-[200px]">{name}</span>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">{name}</h1>
            <p className="text-lg text-gray-500 mb-3">{secondaryName}</p>
            <div className="flex flex-wrap gap-2">
              <span className={`px-3 py-1 rounded-full text-sm font-medium border ${sourceBadge}`}>
                {item.source.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                {isEn ? "per 100g" : "100g 기준"}
              </span>
            </div>
          </div>

          {description && (
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {description}
            </p>
          )}

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {/* Nutrition Facts Table (FDA-style) */}
            <section className="flex flex-col">
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden flex-1 flex flex-col">
                <div className="bg-[var(--corevia-primary)] text-white px-4 py-3">
                  <h2 className="text-lg font-bold">
                    {isEn ? "Nutrition Facts" : "영양성분"}
                  </h2>
                  <p className="text-sm text-gray-300">
                    {item.serving_size
                      ? isEn
                        ? `Serving size: ${item.serving_size}g`
                        : `1회 제공량: ${item.serving_size}g`
                      : isEn
                        ? "Per 100g"
                        : "100g 기준"}
                  </p>
                </div>

                {/* Calories */}
                <div className="px-4 py-3 border-b-2 border-[var(--corevia-primary)]/30 flex justify-between items-baseline">
                  <span className="text-lg font-bold text-gray-800">
                    {isEn ? "Calories" : "칼로리"}
                  </span>
                  <span className="text-3xl font-black text-gray-900">
                    {item.calories}
                    <span className="text-sm font-normal text-gray-500 ml-1">kcal</span>
                  </span>
                </div>

                {/* Daily Value header */}
                <div className="px-4 py-1.5 text-right text-xs font-medium text-gray-500 border-b border-gray-200">
                  {isEn ? "% Daily Value*" : "% 일일 권장량*"}
                </div>

                {/* Macros */}
                <NutritionRow
                  label={isEn ? "Protein" : "단백질"}
                  value={`${item.protein}g`}
                  dv={dv.protein}
                  bold
                />
                <NutritionRow
                  label={isEn ? "Total Carbohydrates" : "탄수화물"}
                  value={`${item.carbs}g`}
                  dv={dv.carbs}
                  bold
                />
                {item.sugar != null && (
                  <NutritionRow
                    label={isEn ? "  Sugar" : "  당류"}
                    value={`${item.sugar}g`}
                    dv={dv.sugar}
                    indent
                  />
                )}
                <NutritionRow
                  label={isEn ? "Total Fat" : "지방"}
                  value={`${item.fat}g`}
                  dv={dv.fat}
                  bold
                />
                {item.saturated_fat != null && (
                  <NutritionRow
                    label={isEn ? "  Saturated Fat" : "  포화지방"}
                    value={`${item.saturated_fat}g`}
                    dv={dv.saturated_fat}
                    indent
                  />
                )}
                {item.sodium != null && (
                  <NutritionRow
                    label={isEn ? "Sodium" : "나트륨"}
                    value={`${item.sodium}mg`}
                    dv={dv.sodium}
                    bold
                    last
                  />
                )}

                {/* Footnote */}
                <div className="px-4 py-2 text-xs text-gray-400 border-t border-gray-200 mt-auto">
                  {isEn
                    ? "* Percent Daily Values are based on a 2,000 calorie diet."
                    : "* 일일 권장량은 2,000kcal 식단 기준입니다."}
                </div>
              </div>

              {/* Data source — detailed for EEAT */}
              <p className="text-xs text-gray-400 mt-3">
                {isEn ? "Data source: " : "데이터 출처: "}
                {item.source === "kfda"
                  ? isEn
                    ? "KFDA Food Nutrient Database (Updated 2025.12)"
                    : "식품의약품안전처 식품영양성분 데이터베이스 (2025.12 갱신)"
                  : "USDA FoodData Central (SR Legacy)"}
              </p>

            </section>

            {/* Right column: Macro ratio + Calculator + CTA */}
            <div className="space-y-6">
              {/* Macro Ratio */}
              <section className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  {isEn ? "Macro Ratio" : "영양소 비율"}
                </h3>
                <div className="flex gap-0.5 h-6 rounded-full overflow-hidden mb-4">
                  {macroRatio.protein > 0 && (
                    <div
                      className="bg-blue-500 transition-all"
                      style={{ width: `${macroRatio.protein}%` }}
                    />
                  )}
                  {macroRatio.carbs > 0 && (
                    <div
                      className="bg-amber-400 transition-all"
                      style={{ width: `${macroRatio.carbs}%` }}
                    />
                  )}
                  {macroRatio.fat > 0 && (
                    <div
                      className="bg-rose-400 transition-all"
                      style={{ width: `${macroRatio.fat}%` }}
                    />
                  )}
                </div>
                <div className="flex justify-between text-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-gray-600">
                      {isEn ? "Protein" : "단백질"} {macroRatio.protein}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-amber-400 rounded-full" />
                    <span className="text-gray-600">
                      {isEn ? "Carbs" : "탄수"} {macroRatio.carbs}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-rose-400 rounded-full" />
                    <span className="text-gray-600">
                      {isEn ? "Fat" : "지방"} {macroRatio.fat}%
                    </span>
                  </div>
                </div>
              </section>

              {/* Serving Calculator (Client Component) */}
              <ServingCalculator item={item} locale={locale} />

            </div>
          </div>

          {/* AdSense */}
          <AdSense slot="auto" className="mt-8" />

          {/* App CTA — banner style */}
          <section className="mt-8 rounded-2xl overflow-hidden border border-gray-200">
            <img
              src={isEn ? "/cta-banner-en.png" : "/cta-banner.png"}
              alt="CoreVia Fitness - 진짜 온라인 PT"
              className="w-full h-auto"
            />
            <div className="bg-white px-6 py-5 text-center">
              <p className="text-lg font-bold text-gray-800 mb-1">
                {isEn
                  ? "Start your healthy journey with CoreVia Fitness"
                  : "진짜 온라인 PT, CoreVia Fitness와 건강한 식단 관리를 시작해보세요"}
              </p>
              <p className="text-gray-500 text-sm mb-4">
                {isEn
                  ? "AI-powered meal tracking, personalized coaching, and more — all in one app."
                  : "AI 음식 분석, 맞춤 코칭, 운동 기록까지 — 하나의 앱으로."}
              </p>
              <div className="flex justify-center gap-3">
                <a
                  href="https://apps.apple.com/app/corevia-fitness/id6753667196"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-gray-800 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[var(--corevia-primary)] text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-blue-600 transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
                  Google Play
                </a>
              </div>
            </div>
          </section>

          {/* Similar Foods — internal link network */}
          {(() => {
            const similar = getSimilarNutrition(id, 6);
            if (similar.length === 0) return null;
            return (
              <section className="mt-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  {isEn ? "Similar Foods" : "비슷한 음식"}
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {similar.map((s) => (
                    <Link
                      key={s.id}
                      href={`${prefix}/guide/nutrition/${s.id}`}
                      className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[var(--corevia-primary)]/30 transition-all"
                    >
                      <p className="font-medium text-gray-800 text-sm truncate">
                        {getNutritionName(s.id, locale)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {s.calories}kcal · {isEn ? "P" : "단"} {s.protein}g · {isEn ? "C" : "탄"} {s.carbs}g · {isEn ? "F" : "지"} {s.fat}g
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })()}

          {/* Cross-link to Workout */}
          <div className="mt-6 bg-white border border-gray-100 rounded-xl p-4">
            <Link
              href={`${prefix}/guide/workout/exercises`}
              className="flex items-center justify-between text-sm hover:text-[var(--corevia-primary)] transition-colors"
            >
              <span className="text-gray-700 font-medium">
                {isEn ? "Browse exercise guides →" : "운동 자세 가이드 보기 →"}
              </span>
            </Link>
          </div>

          {/* Disclaimer — EEAT Trust */}
          <p className="mt-8 text-xs text-gray-400 text-center">
            {isEn
              ? "This information is for general reference only and does not substitute professional medical or dietary advice."
              : "이 정보는 일반적인 참고용이며, 전문적인 의료 또는 영양 상담을 대체하지 않습니다."}
          </p>
        </div>
      </main>
    </>
  );
}

// ── Nutrition Row Component ──
function NutritionRow({
  label,
  value,
  dv,
  bold,
  indent,
  last,
}: {
  label: string;
  value: string;
  dv: number | null;
  bold?: boolean;
  indent?: boolean;
  last?: boolean;
}) {
  return (
    <div
      className={`px-4 py-2 flex justify-between items-center ${
        last ? "" : "border-b border-gray-200"
      }`}
    >
      <span className={`text-sm ${bold ? "font-bold text-gray-800" : "text-gray-600"} ${indent ? "pl-4" : ""}`}>
        {label} <span className="font-normal text-gray-500">{value}</span>
      </span>
      {dv != null && (
        <span className="text-sm font-medium text-gray-700">{dv}%</span>
      )}
    </div>
  );
}
