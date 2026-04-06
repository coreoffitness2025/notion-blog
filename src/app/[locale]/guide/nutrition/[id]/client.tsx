"use client";

import { useState } from "react";
import type { NutritionItem } from "@/data/nutritionDatabase";

export default function ServingCalculator({
  item,
  locale,
}: {
  item: NutritionItem;
  locale: string;
}) {
  const isEn = locale === "en";
  const defaultGrams = item.serving_size || 100;
  const [grams, setGrams] = useState(defaultGrams);

  const ratio = grams / 100;

  const calc = {
    calories: Math.round(item.calories * ratio),
    protein: +(item.protein * ratio).toFixed(1),
    carbs: +(item.carbs * ratio).toFixed(1),
    fat: +(item.fat * ratio).toFixed(1),
  };

  return (
    <section className="bg-white border border-gray-100 rounded-xl p-6">
      <h3 className="font-bold text-gray-800 mb-4">
        {isEn ? "Serving Calculator" : "섭취량 계산기"}
      </h3>

      <div className="flex items-center gap-3 mb-4">
        <input
          type="number"
          value={grams}
          onChange={(e) => {
            const v = parseInt(e.target.value);
            if (!isNaN(v) && v >= 0 && v <= 9999) setGrams(v);
          }}
          className="w-24 px-3 py-2 border border-gray-200 rounded-lg text-center text-gray-800 focus:border-[var(--corevia-primary)] focus:outline-none"
          min={0}
          max={9999}
        />
        <span className="text-gray-500">g</span>

        {/* Quick buttons */}
        <div className="flex gap-1 ml-auto">
          {[50, 100, item.serving_size].filter(Boolean).map((g) => (
            <button
              key={g}
              onClick={() => setGrams(g!)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                grams === g
                  ? "bg-[var(--corevia-primary)] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {g}g
            </button>
          ))}
        </div>
      </div>

      {/* Calculated values */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-gray-800">{calc.calories}</p>
          <p className="text-xs text-gray-500">{isEn ? "Calories" : "칼로리"}</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-blue-700">{calc.protein}g</p>
          <p className="text-xs text-gray-500">{isEn ? "Protein" : "단백질"}</p>
        </div>
        <div className="bg-yellow-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-yellow-700">{calc.carbs}g</p>
          <p className="text-xs text-gray-500">{isEn ? "Carbs" : "탄수화물"}</p>
        </div>
        <div className="bg-red-50 rounded-lg p-3 text-center">
          <p className="text-2xl font-bold text-red-600">{calc.fat}g</p>
          <p className="text-xs text-gray-500">{isEn ? "Fat" : "지방"}</p>
        </div>
      </div>
    </section>
  );
}
