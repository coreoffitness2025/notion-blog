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
            {isEn ? "Nutrition Guide" : "Nutrition Guide"}
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
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {isEn
              ? `Food Nutrition Database`
              : `음식 영양성분 사전`}
          </h2>
          <p className="text-sm text-gray-500">
            {isEn
              ? `Search nutrition facts from ${totalCount.toLocaleString()} foods (KFDA & USDA)`
              : `${totalCount.toLocaleString()}개 음식의 영양 정보를 검색하세요 (식약처 & USDA)`}
          </p>
        </div>

        {/* Search Bar — prominent */}
        <div className="mb-6">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isEn ? "Search food name (e.g. chicken breast, rice, salmon...)" : "음식 이름을 검색하세요 (예: 닭가슴살, 현미밥, 연어...)"}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-[var(--corevia-primary)] focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Before search: Quick search suggestions + Source filter */}
        {!searchQuery.trim() && (
          <div className="space-y-6 mb-8">
            {/* Quick search keywords */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {isEn ? "Popular searches" : "인기 검색어"}
              </p>
              <div className="flex flex-wrap gap-2">
                {(isEn
                  ? ["Chicken Breast", "Rice", "Egg", "Salmon", "Tofu", "Sweet Potato", "Oatmeal", "Banana", "Milk", "Beef"]
                  : ["닭가슴살", "현미밥", "계란", "연어", "두부", "고구마", "귀리", "바나나", "우유", "소고기"]
                ).map((keyword) => (
                  <button
                    key={keyword}
                    onClick={() => setSearchQuery(keyword)}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-[var(--corevia-primary)] hover:text-[var(--corevia-primary)] transition-colors"
                  >
                    {keyword}
                  </button>
                ))}
              </div>
            </div>

            {/* Source filter as cards */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {isEn ? "Browse by source" : "데이터 출처별 검색"}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => { setSourceFilter("kfda"); setSearchQuery(" "); }}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-[var(--corevia-primary)]/30 transition-all"
                >
                  <p className="font-bold text-gray-800 mb-0.5">{isEn ? "KFDA" : "식약처 (KFDA)"}</p>
                  <p className="text-xs text-gray-500">{isEn ? "4,745 Korean foods" : "4,745개 한국 음식"}</p>
                </button>
                <button
                  onClick={() => { setSourceFilter("usda"); setSearchQuery(" "); }}
                  className="bg-white border border-gray-200 rounded-xl p-4 text-left hover:border-[var(--corevia-primary)]/30 transition-all"
                >
                  <p className="font-bold text-gray-800 mb-0.5">USDA</p>
                  <p className="text-xs text-gray-500">{isEn ? "927 international foods" : "927개 해외 음식"}</p>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Search results — only when searching */}
        {searchQuery.trim() && (
          <>
            {/* Source filter pills */}
            <div className="flex flex-wrap gap-2 mb-4">
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
                    ? isEn ? "All" : "전체"
                    : source === "kfda"
                      ? "KFDA"
                      : "USDA"}
                </button>
              ))}
              <span className="text-sm text-gray-400 self-center ml-2">
                {results.length}{isEn ? " results" : "건"}
              </span>
            </div>

            {/* Results Table */}
            <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
              <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100 text-xs font-medium text-gray-500 uppercase">
                <div className="col-span-5">{isEn ? "Food" : "음식"}</div>
                <div className="col-span-2 text-right">{isEn ? "Cal" : "칼로리"}</div>
                <div className="col-span-1 text-right">{isEn ? "P" : "단백"}</div>
                <div className="col-span-1 text-right">{isEn ? "C" : "탄수"}</div>
                <div className="col-span-1 text-right">{isEn ? "F" : "지방"}</div>
                <div className="col-span-2 text-center">{isEn ? "Source" : "출처"}</div>
              </div>

              {results.map((item) => (
                <Link
                  key={item.id}
                  href={`${prefix}/guide/nutrition/${item.id}`}
                  className="grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors items-center"
                >
                  <div className="col-span-5 font-medium text-gray-800 text-sm truncate">
                    {getNutritionName(item.id, locale)}
                  </div>
                  <div className="col-span-2 text-right text-sm font-semibold text-gray-800">
                    {item.calories} <span className="font-normal text-gray-400 text-xs">kcal</span>
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
                  <div className="col-span-2 text-center">
                    <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-[var(--corevia-primary)]/5 text-[var(--corevia-primary)]">
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

            <p className="text-xs text-gray-400 mt-4 text-center">
              {isEn
                ? "Nutrition values per 100g. Data from KFDA & USDA."
                : "100g 기준 영양 정보. 식약처(KFDA) 및 USDA 데이터 기반."}
            </p>
          </>
        )}
      </div>
    </main>
  );
}
