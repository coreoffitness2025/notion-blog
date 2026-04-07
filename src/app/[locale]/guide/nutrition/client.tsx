"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import {
  searchNutrition,
  getPopularNutrition,
  getNutritionName,
  getNutritionCount,
  type NutritionItem,
} from "@/data/nutritionDatabase";

export default function NutritionHubClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const isEn = locale === "en";
  const totalCount = getNutritionCount();

  const [searchQuery, setSearchQuery] = useState("");
  const [sourceFilter, setSourceFilter] = useState<"all" | "kfda" | "usda">("all");

  const results = useMemo(() => {
    let items: NutritionItem[];
    if (searchQuery.trim()) {
      items = searchNutrition(searchQuery, locale, 200);
    } else {
      items = getPopularNutrition(sourceFilter !== "all" ? 500 : 100);
    }
    if (sourceFilter !== "all") {
      items = items.filter((item) => item.source === sourceFilter);
    }
    return items.slice(0, 100);
  }, [searchQuery, sourceFilter, locale]);

  const sourceLabel = (source: string) => {
    if (source === "kfda") return isEn ? "KFDA" : "식약처";
    if (source === "usda") return "USDA";
    return source;
  };

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Header */}
      <div className="border-b border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {dict.guideSubpages.backToGuide}
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {isEn ? "Nutrition Guide" : "Nutrition Guide"}
          </h1>
          <p className="text-gray-500">
            {isEn
              ? "Nutrition tools and food database"
              : "영양 도구와 음식 데이터베이스"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tool Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href={`${prefix}/guide/nutrition/calorie`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block">🔥</span>
            <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
              {isEn ? "Calorie Calculator" : "칼로리 계산기"}
            </h2>
            <p className="text-sm text-gray-500">
              {isEn
                ? "Calculate your daily calories and macros"
                : "일일 칼로리와 매크로 영양소를 계산하세요"}
            </p>
          </Link>
          <Link
            href={`${prefix}/guide/nutrition/meal-plans`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block">🥗</span>
            <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
              {isEn ? "Meal Plans" : "식단 추천"}
            </h2>
            <p className="text-sm text-gray-500">
              {isEn
                ? "Meal plans tailored to your goals"
                : "목표에 맞는 식단 플랜"}
            </p>
          </Link>
        </div>

        {/* Food Database Section */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          {isEn
            ? `Food Database (${totalCount.toLocaleString()} foods)`
            : `음식 영양성분 사전 (${totalCount.toLocaleString()}개)`}
        </h2>
        {/* Search & Filters */}
        <div className="space-y-4 mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={isEn ? "Search by food name..." : "음식 이름으로 검색..."}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none"
          />

          {/* Source Filter */}
          <div className="flex flex-wrap gap-2">
            {(["all", "kfda", "usda"] as const).map((source) => (
              <button
                key={source}
                onClick={() => setSourceFilter(source)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  sourceFilter === source
                    ? "bg-[var(--corevia-primary)] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {source === "all"
                  ? isEn ? "All Sources" : "전체"
                  : source === "kfda"
                    ? isEn ? "KFDA (Korea)" : "식약처 (KFDA)"
                    : "USDA"}
              </button>
            ))}
          </div>
        </div>

        {/* Results Table */}
        <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 text-xs font-medium text-gray-500 uppercase">
            <div className="col-span-5">{isEn ? "Food" : "음식"}</div>
            <div className="col-span-1 text-right">{isEn ? "Cal" : "칼로리"}</div>
            <div className="col-span-1 text-right">{isEn ? "Prot" : "단백질"}</div>
            <div className="col-span-1 text-right">{isEn ? "Carbs" : "탄수"}</div>
            <div className="col-span-1 text-right">{isEn ? "Fat" : "지방"}</div>
            <div className="col-span-1 text-right">{isEn ? "Serv" : "제공량"}</div>
            <div className="col-span-2 text-center">{isEn ? "Source" : "출처"}</div>
          </div>

          {/* Results */}
          {results.map((item) => (
            <Link
              key={item.id}
              href={`${prefix}/guide/nutrition/${item.id}`}
              className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors items-center"
            >
              <div className="col-span-5 font-medium text-gray-800 text-sm truncate">
                {getNutritionName(item.id, locale)}
              </div>
              <div className="col-span-1 text-right text-sm text-gray-700">
                {item.calories}
              </div>
              <div className="col-span-1 text-right text-sm text-gray-600">
                {item.protein}g
              </div>
              <div className="col-span-1 text-right text-sm text-gray-600">
                {item.carbs}g
              </div>
              <div className="col-span-1 text-right text-sm text-gray-600">
                {item.fat}g
              </div>
              <div className="col-span-1 text-right text-sm text-gray-500">
                {item.serving_size ? `${item.serving_size}g` : "-"}
              </div>
              <div className="col-span-2 text-center">
                <span
                  className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[var(--corevia-primary)]/5 text-[var(--corevia-primary)]"
                >
                  {sourceLabel(item.source)}
                </span>
              </div>
            </Link>
          ))}

          {results.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                {isEn ? "No results found" : "검색 결과가 없습니다"}
              </p>
            </div>
          )}
        </div>

        {/* Note */}
        <p className="text-xs text-gray-400 mt-4 text-center">
          {isEn
            ? "Nutrition values per 100g. Data from KFDA (Korea Food & Drug Administration) and USDA."
            : "100g 기준 영양 정보입니다. 식품의약품안전처(KFDA) 및 미국 농무부(USDA) 데이터 기반."}
        </p>
      </div>
    </main>
  );
}
