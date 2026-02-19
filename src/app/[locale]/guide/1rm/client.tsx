"use client";

import { useState } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";

function calculate1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  return Math.round(weight * (1 + reps / 30));
}

const ZONE_PERCENTAGES = [100, 90, 80, 70, 60, 50];

export default function OneRmClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.oneRm;

  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0 || r > 30) {
      alert(t.invalidInput);
      return;
    }

    const oneRM = calculate1RM(w, r);
    setResult(oneRM);
  };

  const zones = result
    ? t.zones.map((z, i) => ({
        ...z,
        percentage: ZONE_PERCENTAGES[i],
        weight: Math.round(result * (ZONE_PERCENTAGES[i] / 100)),
        color: [
          "bg-[var(--corevia-primary)]",
          "bg-[var(--corevia-primary)]/80",
          "bg-[var(--corevia-primary)]/60",
          "bg-[var(--corevia-primary)]/45",
          "bg-[var(--corevia-primary)]/30",
          "bg-[var(--corevia-primary)]/15",
        ][i],
      }))
    : [];

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

        {/* Calculator Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">{t.weightLabel}</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder={t.weightPlaceholder}
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">{t.repsLabel}</label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder={t.repsPlaceholder}
                min="1"
                max="30"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none transition-colors"
              />
            </div>
          </div>
          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-[var(--corevia-primary)] text-white font-bold rounded-xl hover:bg-blue-600 transition-all"
          >
            {t.calculate}
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Result */}
            <div className="bg-[var(--corevia-primary)]/10 border border-[var(--corevia-primary)]/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-[var(--corevia-primary)] mb-2">{t.estimated}</p>
              <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
                {result} kg
              </p>
              <p className="text-gray-600 text-sm">
                {weight}kg x {reps}{t.basedOnSuffix}
              </p>
            </div>

            {/* Training Zones */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">{t.zonesTitle}</h2>
              <div className="space-y-3">
                {zones.map((zone) => (
                  <div
                    key={zone.name}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                  >
                    <div className={`w-2 h-12 rounded-full ${zone.color}`} />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">{zone.name}</span>
                        <span className="text-lg font-bold text-gray-800">{zone.weight}kg</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{zone.desc}</span>
                        <span className="text-gray-500">{zone.percentage}% · {zone.reps}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">{t.infoTitle}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t.infoText}</p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
