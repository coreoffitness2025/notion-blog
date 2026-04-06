import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/lib/i18n";
import {
  getNutritionById,
  getNutritionName,
  type NutritionItem,
} from "@/data/nutritionDatabase";
import { notFound } from "next/navigation";
import ServingCalculator from "./client";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

// ── Static Params: top 200 pre-generated, rest on-demand ISR ──
export const dynamicParams = true;

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
  const path = `/guide/nutrition/${id}`;
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;
  const sourceLabel = item.source === "kfda"
    ? isKo ? "식약처" : "KFDA"
    : "USDA";

  return {
    title: isKo
      ? `${name} 칼로리, 단백질, 영양성분 | CoreVia`
      : `${name} Calories, Protein, Nutrition Facts | CoreVia`,
    description: isKo
      ? `${name} 100g 기준 ${item.calories}kcal, 단백질 ${item.protein}g, 탄수화물 ${item.carbs}g, 지방 ${item.fat}g. ${sourceLabel} 공식 데이터 기반 영양 정보.`
      : `${name}: ${item.calories}kcal, ${item.protein}g protein, ${item.carbs}g carbs, ${item.fat}g fat per 100g. Based on official ${sourceLabel} data.`,
    keywords: isKo
      ? [name, `${name} 칼로리`, `${name} 영양성분`, `${name} 단백질`]
      : [name, `${name} calories`, `${name} nutrition`, `${name} protein`],
    alternates: {
      canonical: pageUrl,
      languages: {
        ko: `${siteUrl}/guide/nutrition/${id}`,
        en: `${siteUrl}/en/guide/nutrition/${id}`,
      },
    },
    openGraph: {
      title: isKo
        ? `${name} 영양성분 | CoreVia`
        : `${name} Nutrition Facts | CoreVia`,
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

// ── JSON-LD: NutritionInformation ──
function getJsonLd(item: NutritionItem, name: string) {
  return {
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
  };
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
  const dv = getDailyValue(item);

  const sourceLabel = item.source === "kfda"
    ? isEn ? "KFDA (Korea Food & Drug Administration)" : "식품의약품안전처 (KFDA)"
    : "USDA (U.S. Department of Agriculture)";
  const sourceBadge = item.source === "kfda"
    ? "bg-blue-50 text-blue-700 border-blue-200"
    : "bg-green-50 text-green-700 border-green-200";

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(item, name)) }}
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

          <div className="grid md:grid-cols-2 gap-6">
            {/* Nutrition Facts Table (FDA-style) */}
            <section>
              <div className="bg-white border-2 border-gray-800 rounded-xl overflow-hidden">
                <div className="bg-gray-800 text-white px-4 py-3">
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
                <div className="px-4 py-3 border-b-4 border-gray-800 flex justify-between items-baseline">
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
                <div className="px-4 py-2 text-xs text-gray-400 border-t border-gray-200">
                  {isEn
                    ? "* Percent Daily Values are based on a 2,000 calorie diet."
                    : "* 일일 권장량은 2,000kcal 식단 기준입니다."}
                </div>
              </div>

              {/* Data source */}
              <p className="text-xs text-gray-400 mt-3">
                {isEn ? "Data source: " : "데이터 출처: "}
                {sourceLabel}
              </p>
            </section>

            {/* Right column: Macro ratio + Calculator + CTA */}
            <div className="space-y-6">
              {/* Macro Ratio */}
              <section className="bg-white border border-gray-100 rounded-xl p-6">
                <h3 className="font-bold text-gray-800 mb-4">
                  {isEn ? "Macro Ratio" : "영양소 비율"}
                </h3>
                <div className="flex gap-1 h-6 rounded-full overflow-hidden mb-4">
                  {macroRatio.protein > 0 && (
                    <div
                      className="bg-blue-500 transition-all"
                      style={{ width: `${macroRatio.protein}%` }}
                    />
                  )}
                  {macroRatio.carbs > 0 && (
                    <div
                      className="bg-yellow-400 transition-all"
                      style={{ width: `${macroRatio.carbs}%` }}
                    />
                  )}
                  {macroRatio.fat > 0 && (
                    <div
                      className="bg-red-400 transition-all"
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
                    <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="text-gray-600">
                      {isEn ? "Carbs" : "탄수"} {macroRatio.carbs}%
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="text-gray-600">
                      {isEn ? "Fat" : "지방"} {macroRatio.fat}%
                    </span>
                  </div>
                </div>
              </section>

              {/* Serving Calculator (Client Component) */}
              <ServingCalculator item={item} locale={locale} />

              {/* App CTA */}
              <section className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl p-6 text-center">
                <p className="text-lg font-bold text-gray-800 mb-2">
                  {isEn
                    ? "Track your meals with AI"
                    : "AI로 식단을 기록하세요"}
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  {isEn
                    ? "Just take a photo — CoreVia AI analyzes your food and logs nutrition automatically."
                    : "사진만 찍으면 AI가 음식을 분석하고 영양소를 자동으로 기록합니다."}
                </p>
                <div className="flex justify-center gap-3">
                  <a
                    href="https://apps.apple.com/app/corevia-fitness/id6739446554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Google Play
                  </a>
                </div>
              </section>
            </div>
          </div>
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
