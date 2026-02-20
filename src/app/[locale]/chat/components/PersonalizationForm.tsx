"use client";

import { useState } from "react";
import Image from "next/image";
import { COACHES, PERSONALITIES } from "@/lib/chat/characters";
import type { ChatLocale } from "@/lib/chat/personalities";

export interface PersonalizationData {
  fitnessGoal: "lose" | "maintain" | "gain";
  experienceLevel: "beginner" | "intermediate" | "advanced";
  coachGender: "male" | "female";
  personalityType: "tough" | "cheerful" | "cool" | "balanced";
  injuries: string[];
}

interface PersonalizationFormProps {
  locale: string;
  onSubmit: (data: PersonalizationData) => void;
  loading?: boolean;
}

const INJURY_OPTIONS = [
  { id: "lower_back", ko: "허리", en: "Lower back" },
  { id: "knee", ko: "무릎", en: "Knee" },
  { id: "shoulder", ko: "어깨", en: "Shoulder" },
  { id: "wrist", ko: "손목", en: "Wrist" },
  { id: "neck", ko: "목", en: "Neck" },
  { id: "ankle", ko: "발목", en: "Ankle" },
];

export default function PersonalizationForm({
  locale,
  onSubmit,
  loading,
}: PersonalizationFormProps) {
  const loc = (locale === "en" ? "en" : "ko") as ChatLocale;
  const isKo = loc === "ko";

  const [goal, setGoal] = useState<PersonalizationData["fitnessGoal"]>("lose");
  const [exp, setExp] = useState<PersonalizationData["experienceLevel"]>("beginner");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [personality, setPersonality] = useState<PersonalizationData["personalityType"]>("balanced");
  const [injuries, setInjuries] = useState<string[]>([]);

  const toggleInjury = (id: string) =>
    setInjuries((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id],
    );

  const handleSubmit = () =>
    onSubmit({
      fitnessGoal: goal,
      experienceLevel: exp,
      coachGender: gender,
      personalityType: personality,
      injuries,
    });

  const goalOptions = [
    { value: "lose" as const, ko: "감량", en: "Lose" },
    { value: "maintain" as const, ko: "유지", en: "Maintain" },
    { value: "gain" as const, ko: "증량", en: "Gain" },
  ];

  const expOptions = [
    { value: "beginner" as const, ko: "초보", en: "Beginner" },
    { value: "intermediate" as const, ko: "중급", en: "Intermediate" },
    { value: "advanced" as const, ko: "고급", en: "Advanced" },
  ];

  return (
    <div className="space-y-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800 text-center">
        {isKo ? "코칭 개인화 설정" : "Personalize Your Coaching"}
      </h2>

      {/* Goal */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {isKo ? "목표" : "Goal"}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {goalOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setGoal(opt.value)}
              className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                goal === opt.value
                  ? "bg-purple-100 text-purple-700 border-2 border-purple-400"
                  : "bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100"
              }`}
            >
              {isKo ? opt.ko : opt.en}
            </button>
          ))}
        </div>
      </div>

      {/* Experience */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {isKo ? "운동 경험" : "Experience"}
        </label>
        <div className="grid grid-cols-3 gap-2">
          {expOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setExp(opt.value)}
              className={`py-2.5 rounded-xl text-sm font-medium transition-all ${
                exp === opt.value
                  ? "bg-purple-100 text-purple-700 border-2 border-purple-400"
                  : "bg-gray-50 text-gray-600 border-2 border-transparent hover:bg-gray-100"
              }`}
            >
              {isKo ? opt.ko : opt.en}
            </button>
          ))}
        </div>
      </div>

      {/* Coach */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {isKo ? "코치" : "Coach"}
        </label>
        <div className="grid grid-cols-2 gap-3">
          {(["male", "female"] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              className={`flex items-center gap-3 p-3 rounded-2xl transition-all ${
                gender === g
                  ? "bg-purple-50 border-2 border-purple-400"
                  : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                <Image
                  src={COACHES[g].avatarImage}
                  alt={COACHES[g].name[loc]}
                  width={40}
                  height={40}
                  className={`w-full h-full ${
                    g === "male"
                      ? "object-cover object-[center_15%] scale-[2.5]"
                      : "object-cover object-top"
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {COACHES[g].name[loc]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Personality */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {isKo ? "코칭 스타일" : "Coaching Style"}
        </label>
        <div className="grid grid-cols-4 gap-2">
          {PERSONALITIES.map((p) => (
            <button
              key={p.type}
              onClick={() => setPersonality(p.type)}
              className={`flex flex-col items-center gap-1 py-3 rounded-xl text-center transition-all ${
                personality === p.type
                  ? "bg-purple-100 border-2 border-purple-400"
                  : "bg-gray-50 border-2 border-transparent hover:bg-gray-100"
              }`}
            >
              <span className="text-xl">{p.emoji}</span>
              <span className="text-[11px] font-medium text-gray-600">
                {p.label[loc]}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Injuries */}
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">
          {isKo ? "부상 이력" : "Injury History"}
          <span className="text-xs text-gray-400 ml-1">
            ({isKo ? "선택" : "optional"})
          </span>
        </label>
        <div className="flex flex-wrap gap-2">
          {INJURY_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => toggleInjury(opt.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                injuries.includes(opt.id)
                  ? "bg-red-100 text-red-700 border border-red-300"
                  : "bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {isKo ? opt.ko : opt.en}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl transition-colors disabled:opacity-60"
      >
        {loading
          ? "..."
          : isKo
            ? "코칭 시작하기"
            : "Start Coaching"}{" "}
        &rarr;
      </button>
    </div>
  );
}
