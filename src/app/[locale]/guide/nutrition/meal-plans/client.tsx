"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { MEAL_PLAN_DATA } from "@/data/mealPlanData";

export default function MealPlansClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.mealPlans;
  const isEn = locale === "en";

  const [selectedCategory, setSelectedCategory] = useState("all");
  const filteredPlans = useMemo(() => {
    if (selectedCategory === "all") return MEAL_PLAN_DATA;
    return MEAL_PLAN_DATA.filter((plan) => plan.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Header */}
      <div className="border-b border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${prefix}/guide/nutrition`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isEn ? "Nutrition Guide" : "Nutrition Guide"}
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-500">
            {t.subtitleTemplate.replace("{count}", String(MEAL_PLAN_DATA.length))}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {t.categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                selectedCategory === cat.id
                  ? "bg-[var(--corevia-primary)] text-white"
                  : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              <span>{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Plan List */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredPlans.map((plan) => (
            <Link
              key={plan.id}
              href={`${prefix}/guide/nutrition/meal-plans/${plan.id}`}
              className="text-left bg-white border border-gray-200 rounded-xl p-5 hover:border-[var(--corevia-primary)]/30 transition-all shadow-sm block"
            >
              <h3 className="font-bold text-gray-800 mb-2">{isEn ? plan.titleEn : plan.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{isEn ? plan.descriptionEn : plan.description}</p>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-800">{plan.calories}</p>
                  <p className="text-xs text-gray-500">kcal</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-800">{plan.protein}g</p>
                  <p className="text-xs text-gray-500">{t.protein}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-700">{plan.carbs}g</p>
                  <p className="text-xs text-gray-500">{t.carbs}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-700">{plan.fat}g</p>
                  <p className="text-xs text-gray-500">{t.fat}</p>
                </div>
              </div>

              {plan.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {(isEn ? plan.tagsEn ?? plan.tags : plan.tags).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
