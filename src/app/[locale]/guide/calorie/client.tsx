"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

interface CalorieResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const ACTIVITY_VALUES = [1.2, 1.375, 1.55, 1.725, 1.9];
const GOAL_VALUES = [-500, -250, 0, 250, 500];

function calculateBMR(
  gender: "male" | "female",
  weight: number,
  height: number,
  age: number,
  isAsian: boolean
): number {
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  if (isAsian) {
    bmr = bmr * 0.95;
  }
  return Math.round(bmr);
}

export default function CalorieClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.calorie;

  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [activityLevel, setActivityLevel] = useState<number>(1.55);
  const [goal, setGoal] = useState<number>(0);
  const [isAsian, setIsAsian] = useState<boolean>(true);
  const [result, setResult] = useState<CalorieResult | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseInt(age);

    if (isNaN(w) || isNaN(h) || isNaN(a) || w <= 0 || h <= 0 || a <= 0) {
      alert(t.invalidInput);
      return;
    }

    const bmr = calculateBMR(gender, w, h, a, isAsian);
    const tdee = Math.round(bmr * activityLevel);
    const targetCalories = tdee + goal;

    const proteinGrams = Math.round(w * 1.8);
    const fatGrams = Math.round((targetCalories * 0.25) / 9);
    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const carbCalories = targetCalories - proteinCalories - fatCalories;
    const carbGrams = Math.round(carbCalories / 4);

    setResult({
      bmr,
      tdee,
      targetCalories,
      protein: proteinGrams,
      carbs: carbGrams,
      fat: fatGrams,
    });
  };

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {dict.guideSubpages.backToGuide}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-500">{t.subtitle}</p>
        </div>

        {/* Calculator Form */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8">
          {/* Gender */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-500 mb-3">{t.genderLabel}</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "male", label: t.male, icon: "👨" },
                { value: "female", label: t.female, icon: "👩" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setGender(option.value as "male" | "female")}
                  className={`p-4 rounded-xl border transition-all ${
                    gender === option.value
                      ? "border-[var(--corevia-primary)] bg-[var(--corevia-primary)]/10 text-gray-800"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  <span className="text-2xl mr-2">{option.icon}</span>
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">{t.ageLabel}</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder={t.agePlaceholder}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">{t.weightLabel}</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={t.weightPlaceholder}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">{t.heightLabel}</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder={t.heightPlaceholder}
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none"
              />
            </div>
          </div>

          {/* Ethnicity Toggle */}
          <div className="mb-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={isAsian}
                onChange={(e) => setIsAsian(e.target.checked)}
                className="w-5 h-5 rounded border-gray-200 bg-white text-[var(--corevia-primary)] focus:ring-[var(--corevia-primary)]"
              />
              <span className="text-gray-500">{t.asianAdjust}</span>
            </label>
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-500 mb-3">{t.activityLabel}</label>
            <div className="space-y-2">
              {t.activityLevels.map((level, i) => (
                <button
                  key={ACTIVITY_VALUES[i]}
                  type="button"
                  onClick={() => setActivityLevel(ACTIVITY_VALUES[i])}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    activityLevel === ACTIVITY_VALUES[i]
                      ? "border-[var(--corevia-primary)] bg-[var(--corevia-primary)]/10"
                      : "border-gray-100 hover:border-[var(--corevia-primary)]/30"
                  }`}
                >
                  <span className={activityLevel === ACTIVITY_VALUES[i] ? "text-gray-800" : "text-gray-500"}>
                    {level.label}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">- {level.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-500 mb-3">{t.goalLabel}</label>
            <div className="space-y-2">
              {t.goals.map((g, i) => (
                <button
                  key={GOAL_VALUES[i]}
                  type="button"
                  onClick={() => setGoal(GOAL_VALUES[i])}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    goal === GOAL_VALUES[i]
                      ? "border-[var(--corevia-primary)] bg-[var(--corevia-primary)]/10"
                      : "border-gray-100 hover:border-[var(--corevia-primary)]/30"
                  }`}
                >
                  <span className={goal === GOAL_VALUES[i] ? "text-gray-800" : "text-gray-500"}>
                    {g.label}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">- {g.desc}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-[var(--corevia-primary)] text-white font-bold rounded-xl hover:bg-blue-600 transition-all"
          >
            {t.calculate}
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <p className="text-gray-500 text-sm mb-1">{t.bmrLabel}</p>
                <p className="text-3xl font-bold text-gray-800">{result.bmr}</p>
                <p className="text-gray-500 text-sm">{t.kcalDay}</p>
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl p-6 text-center">
                <p className="text-gray-500 text-sm mb-1">{t.tdeeLabel}</p>
                <p className="text-3xl font-bold text-gray-800">{result.tdee}</p>
                <p className="text-gray-500 text-sm">{t.kcalDay}</p>
              </div>
              <div className="bg-[var(--corevia-primary)] rounded-2xl p-6 text-center">
                <p className="text-blue-100 text-sm mb-1">{t.targetCalories}</p>
                <p className="text-3xl font-bold text-white">{result.targetCalories}</p>
                <p className="text-blue-200 text-sm">{t.kcalDay}</p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.macrosTitle}</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[var(--corevia-primary)]/10 border border-[var(--corevia-primary)]/20 rounded-xl p-4 text-center">
                  <p className="text-[var(--corevia-primary)] text-sm mb-1">{t.protein}</p>
                  <p className="text-2xl font-bold text-gray-800">{result.protein}g</p>
                  <p className="text-gray-500 text-sm">{result.protein * 4} kcal</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-gray-600 text-sm mb-1">{t.carbs}</p>
                  <p className="text-2xl font-bold text-gray-800">{result.carbs}g</p>
                  <p className="text-gray-500 text-sm">{result.carbs * 4} kcal</p>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
                  <p className="text-gray-600 text-sm mb-1">{t.fat}</p>
                  <p className="text-2xl font-bold text-gray-800">{result.fat}g</p>
                  <p className="text-gray-500 text-sm">{result.fat * 9} kcal</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">{t.infoTitle}</h3>
              <ul className="text-sm text-gray-500 space-y-1">
                {t.infoItems.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
