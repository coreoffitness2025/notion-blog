"use client";

import { useState } from "react";
import Link from "next/link";

interface CalorieResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const activityLevels = [
  { value: 1.2, label: "좌식 생활", description: "운동 거의 안 함" },
  { value: 1.375, label: "가벼운 활동", description: "주 1-3회 가벼운 운동" },
  { value: 1.55, label: "보통 활동", description: "주 3-5회 중간 강도 운동" },
  { value: 1.725, label: "활동적", description: "주 6-7회 강도 높은 운동" },
  { value: 1.9, label: "매우 활동적", description: "하루 2회 이상 운동 또는 육체 노동" },
];

const goals = [
  { value: -500, label: "체중 감량", description: "주당 약 0.5kg 감량" },
  { value: -250, label: "느린 체중 감량", description: "주당 약 0.25kg 감량" },
  { value: 0, label: "체중 유지", description: "현재 체중 유지" },
  { value: 250, label: "느린 체중 증가", description: "주당 약 0.25kg 증가" },
  { value: 500, label: "체중 증가 (벌크업)", description: "주당 약 0.5kg 증가" },
];

function calculateBMR(
  gender: "male" | "female",
  weight: number,
  height: number,
  age: number,
  isAsian: boolean
): number {
  // Mifflin-St Jeor Equation with Asian adjustment
  let bmr: number;
  if (gender === "male") {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }
  // Asian adjustment (slightly lower metabolism)
  if (isAsian) {
    bmr = bmr * 0.95;
  }
  return Math.round(bmr);
}

export default function CalorieCalculatorPage() {
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
      alert("올바른 값을 입력해주세요.");
      return;
    }

    const bmr = calculateBMR(gender, w, h, a, isAsian);
    const tdee = Math.round(bmr * activityLevel);
    const targetCalories = tdee + goal;

    // Macro calculation
    const proteinGrams = Math.round(w * 1.8); // 1.8g per kg for active individuals
    const fatGrams = Math.round((targetCalories * 0.25) / 9); // 25% from fat
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
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/guide"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            가이드로 돌아가기
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">칼로리 계산기</h1>
          <p className="text-gray-400">
            개인 정보와 활동량을 입력하면 일일 권장 칼로리와 매크로를 계산합니다.
          </p>
        </div>

        {/* Calculator Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 mb-8">
          {/* Gender */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">성별</label>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "male", label: "남성", icon: "👨" },
                { value: "female", label: "여성", icon: "👩" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setGender(option.value as "male" | "female")}
                  className={`p-4 rounded-xl border transition-all ${
                    gender === option.value
                      ? "border-blue-500 bg-blue-500/10 text-white"
                      : "border-gray-600 text-gray-400 hover:border-gray-500"
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
              <label className="block text-sm font-medium text-gray-300 mb-2">나이</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="예: 30"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">체중 (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="예: 70"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">키 (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="예: 175"
                className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
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
                className="w-5 h-5 rounded border-gray-600 bg-gray-900 text-blue-500 focus:ring-blue-500"
              />
              <span className="text-gray-300">
                아시아인 체형 보정 적용 (서양인 대비 기초대사량 약 5% 낮음)
              </span>
            </label>
          </div>

          {/* Activity Level */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">활동 수준</label>
            <div className="space-y-2">
              {activityLevels.map((level) => (
                <button
                  key={level.value}
                  type="button"
                  onClick={() => setActivityLevel(level.value)}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    activityLevel === level.value
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <span className={activityLevel === level.value ? "text-white" : "text-gray-300"}>
                    {level.label}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">- {level.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-300 mb-3">목표</label>
            <div className="space-y-2">
              {goals.map((g) => (
                <button
                  key={g.value}
                  type="button"
                  onClick={() => setGoal(g.value)}
                  className={`w-full p-3 rounded-xl border text-left transition-all ${
                    goal === g.value
                      ? "border-blue-500 bg-blue-500/10"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  <span className={goal === g.value ? "text-white" : "text-gray-300"}>
                    {g.label}
                  </span>
                  <span className="text-gray-500 text-sm ml-2">- {g.description}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleCalculate}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl hover:from-orange-600 hover:to-red-600 transition-all"
          >
            칼로리 계산하기
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="space-y-6 animate-fadeIn">
            {/* Main Results */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-1">기초대사량 (BMR)</p>
                <p className="text-3xl font-bold text-white">{result.bmr}</p>
                <p className="text-gray-500 text-sm">kcal/일</p>
              </div>
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center">
                <p className="text-gray-400 text-sm mb-1">총 에너지 소비량 (TDEE)</p>
                <p className="text-3xl font-bold text-white">{result.tdee}</p>
                <p className="text-gray-500 text-sm">kcal/일</p>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-center">
                <p className="text-orange-100 text-sm mb-1">목표 칼로리</p>
                <p className="text-3xl font-bold text-white">{result.targetCalories}</p>
                <p className="text-orange-200 text-sm">kcal/일</p>
              </div>
            </div>

            {/* Macros */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-4">권장 매크로 영양소</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <p className="text-blue-400 text-sm mb-1">단백질</p>
                  <p className="text-2xl font-bold text-white">{result.protein}g</p>
                  <p className="text-gray-500 text-sm">{result.protein * 4} kcal</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4 text-center">
                  <p className="text-green-400 text-sm mb-1">탄수화물</p>
                  <p className="text-2xl font-bold text-white">{result.carbs}g</p>
                  <p className="text-gray-500 text-sm">{result.carbs * 4} kcal</p>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 text-center">
                  <p className="text-yellow-400 text-sm mb-1">지방</p>
                  <p className="text-2xl font-bold text-white">{result.fat}g</p>
                  <p className="text-gray-500 text-sm">{result.fat * 9} kcal</p>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-300 mb-2">💡 참고사항</h3>
              <ul className="text-sm text-gray-400 space-y-1">
                <li>• 기초대사량은 Mifflin-St Jeor 공식을 기반으로 계산됩니다.</li>
                <li>• 단백질은 체중 kg당 1.8g으로 계산됩니다 (운동하는 분 기준).</li>
                <li>• 실제 필요량은 개인차가 있으므로 2-4주 후 체중 변화를 확인하며 조절하세요.</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}


