"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { MEAL_PLAN_DATA, MealPlan } from "@/data/mealPlanData";

const CATEGORIES = [
  { id: "all", name: "전체", icon: "📋" },
  { id: "intermittent", name: "간헐적 단식", icon: "⏰" },
  { id: "lowcarb", name: "저탄수화물", icon: "🥑" },
  { id: "bulk", name: "근비대/벌크업", icon: "💪" },
  { id: "balanced", name: "균형 식단", icon: "⚖️" },
  { id: "korean", name: "전통 한식", icon: "🍚" },
  { id: "quick", name: "간편 식단", icon: "⚡" },
];

export default function MealPlansClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPlan, setSelectedPlan] = useState<MealPlan | null>(null);

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
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            가이드로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">식단 추천</h1>
          <p className="text-gray-500">
            목표에 맞는 {MEAL_PLAN_DATA.length}개의 한국인 맞춤 식단 플랜
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
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
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan)}
              className="text-left bg-white border border-gray-200 rounded-xl p-5 hover:border-[var(--corevia-primary)]/30 transition-all shadow-sm"
            >
              <h3 className="font-bold text-gray-800 mb-2">{plan.title}</h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">{plan.description}</p>

              {/* Macros */}
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-800">{plan.calories}</p>
                  <p className="text-xs text-gray-500">kcal</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-[var(--corevia-primary)]">{plan.protein}g</p>
                  <p className="text-xs text-gray-500">단백질</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-700">{plan.carbs}g</p>
                  <p className="text-xs text-gray-500">탄수화물</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-2">
                  <p className="text-lg font-bold text-gray-700">{plan.fat}g</p>
                  <p className="text-xs text-gray-500">지방</p>
                </div>
              </div>

              {/* Tags */}
              {plan.tags && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {plan.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-xs">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Plan Detail Modal */}
      {selectedPlan && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPlan(null)}
        >
          <div
            className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{selectedPlan.title}</h2>
                <button
                  onClick={() => setSelectedPlan(null)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-500 mb-6">{selectedPlan.description}</p>

              {/* Macros Summary */}
              <div className="grid grid-cols-4 gap-3 mb-6">
                <div className="bg-[var(--corevia-primary)]/10 border border-[var(--corevia-primary)]/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-gray-800">{selectedPlan.calories}</p>
                  <p className="text-xs text-gray-500">kcal</p>
                </div>
                <div className="bg-[var(--corevia-primary)]/10 border border-blue-500/30 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-[var(--corevia-primary)]">{selectedPlan.protein}g</p>
                  <p className="text-xs text-gray-500">단백질</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-gray-700">{selectedPlan.carbs}g</p>
                  <p className="text-xs text-gray-500">탄수화물</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-gray-700">{selectedPlan.fat}g</p>
                  <p className="text-xs text-gray-500">지방</p>
                </div>
              </div>

              {/* Meals */}
              <div className="space-y-4">
                {selectedPlan.meals.map((meal, idx) => (
                  <div key={idx} className="bg-gray-50 rounded-xl p-4">
                    <h3 className="font-bold text-gray-800 mb-2">{meal.name}</h3>
                    <ul className="space-y-1">
                      {meal.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-gray-600 text-sm flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[var(--corevia-primary)]/40 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Tags */}
              {selectedPlan.tags && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {selectedPlan.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
