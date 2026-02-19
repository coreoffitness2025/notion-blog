"use client";

import { useState } from "react";
import Link from "next/link";

interface TrainingZone {
  name: string;
  percentage: number;
  reps: string;
  weight: number;
  description: string;
  color: string;
}

function calculate1RM(weight: number, reps: number): number {
  if (reps === 1) return weight;
  // Epley Formula
  return Math.round(weight * (1 + reps / 30));
}

function getTrainingZones(oneRepMax: number): TrainingZone[] {
  return [
    {
      name: "최대 근력",
      percentage: 100,
      reps: "1회",
      weight: oneRepMax,
      description: "최대 힘을 발휘하는 구간",
      color: "bg-[var(--corevia-primary)]",
    },
    {
      name: "근력 향상",
      percentage: 90,
      reps: "2-4회",
      weight: Math.round(oneRepMax * 0.9),
      description: "순수 근력 발달에 최적",
      color: "bg-[var(--corevia-primary)]/80",
    },
    {
      name: "근력/근비대",
      percentage: 80,
      reps: "5-6회",
      weight: Math.round(oneRepMax * 0.8),
      description: "근력과 근비대의 균형",
      color: "bg-[var(--corevia-primary)]/60",
    },
    {
      name: "근비대",
      percentage: 70,
      reps: "8-12회",
      weight: Math.round(oneRepMax * 0.7),
      description: "근육 크기 증가에 최적",
      color: "bg-[var(--corevia-primary)]/45",
    },
    {
      name: "근지구력",
      percentage: 60,
      reps: "12-15회",
      weight: Math.round(oneRepMax * 0.6),
      description: "근지구력 향상",
      color: "bg-[var(--corevia-primary)]/30",
    },
    {
      name: "지구력/워밍업",
      percentage: 50,
      reps: "15회+",
      weight: Math.round(oneRepMax * 0.5),
      description: "가벼운 워밍업 및 지구력 향상",
      color: "bg-[var(--corevia-primary)]/15",
    },
  ];
}

export default function OneRepMaxPage() {
  const [weight, setWeight] = useState<string>("");
  const [reps, setReps] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleCalculate = () => {
    const w = parseFloat(weight);
    const r = parseInt(reps);

    if (isNaN(w) || isNaN(r) || w <= 0 || r <= 0 || r > 30) {
      alert("올바른 값을 입력해주세요. (반복 횟수는 1-30 사이)");
      return;
    }

    const oneRM = calculate1RM(w, r);
    setResult(oneRM);
  };

  const zones = result ? getTrainingZones(result) : [];

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/guide"
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            가이드로 돌아가기
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">1RM 계산기</h1>
          <p className="text-gray-500">
            운동 중량과 반복 횟수를 입력하면 1RM(최대 1회 중량)을 계산합니다.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                운동 중량 (kg)
              </label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="예: 60"
                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-2">
                반복 횟수 (1-30)
              </label>
              <input
                type="number"
                value={reps}
                onChange={(e) => setReps(e.target.value)}
                placeholder="예: 8"
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
            1RM 계산하기
          </button>
        </div>

        {/* Result */}
        {result && (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Result */}
            <div className="bg-[var(--corevia-primary)]/10 border border-[var(--corevia-primary)]/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-[var(--corevia-primary)] mb-2">예상 1RM</p>
              <p className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
                {result} kg
              </p>
              <p className="text-gray-600 text-sm">
                {weight}kg × {reps}회 기준 (Epley 공식)
              </p>
            </div>

            {/* Training Zones */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">트레이닝 존 가이드</h2>
              <div className="space-y-3">
                {zones.map((zone) => (
                  <div
                    key={zone.name}
                    className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl"
                  >
                    <div
                      className={`w-2 h-12 rounded-full ${zone.color}`}
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-gray-800">{zone.name}</span>
                        <span className="text-lg font-bold text-gray-800">{zone.weight}kg</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">{zone.description}</span>
                        <span className="text-gray-500">{zone.percentage}% · {zone.reps}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">💡 알아두세요</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                1RM 계산은 Epley 공식(1RM = 중량 × (1 + 반복횟수/30))을 사용합니다.
                실제 1RM은 개인차가 있으므로, 새로운 중량에 도전할 때는 안전을 위해
                스팟터와 함께 운동하시기 바랍니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}



