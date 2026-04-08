"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import {
  searchExercises,
  EXERCISE_DATABASE,
  type Exercise,
} from "@/data/exerciseDatabase";

export default function WorkoutHubClient({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const isEn = locale === "en";
  const t = dict.guideSubpages.exercises;
  const totalCount = EXERCISE_DATABASE.length;

  const [searchQuery, setSearchQuery] = useState("");
  const [bodyPartFilter, setBodyPartFilter] = useState<string | null>(null);

  const results = useMemo(() => {
    if (!searchQuery.trim() && !bodyPartFilter) return [];
    return searchExercises(searchQuery, {
      bodyPart: bodyPartFilter || undefined,
    }).slice(0, 50);
  }, [searchQuery, bodyPartFilter]);

  const hasSearch = searchQuery.trim() || bodyPartFilter;

  const displayName = (ex: Exercise) => (isEn ? ex.nameEn : ex.name);

  const bodyParts = [
    { id: "chest", ko: "가슴", en: "Chest" },
    { id: "back", ko: "등", en: "Back" },
    { id: "shoulder", ko: "어깨", en: "Shoulder" },
    { id: "leg", ko: "하체", en: "Legs" },
    { id: "arm", ko: "팔", en: "Arms" },
    { id: "core", ko: "코어", en: "Core" },
    { id: "cardio", ko: "유산소", en: "Cardio" },
  ];

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      <div className="border-b border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Fitness Guide
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Workout Guide</h1>
          <p className="text-gray-500">
            {isEn
              ? "Workout tools and exercise database"
              : "운동 도구와 운동 데이터베이스"}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Tool Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <Link
            href={`${prefix}/guide/workout/1rm`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block">🏋️</span>
            <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
              {isEn ? "1RM Calculator" : "1RM 계산기"}
            </h2>
            <p className="text-sm text-gray-500">
              {isEn ? "Calculate your one-rep max" : "운동 중량과 반복 횟수로 1RM을 계산하세요"}
            </p>
          </Link>
          <Link
            href={`${prefix}/guide/workout/programs`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all"
          >
            <span className="text-2xl mb-3 block">📋</span>
            <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
              {isEn ? "Workout Programs" : "운동 프로그램"}
            </h2>
            <p className="text-sm text-gray-500">
              {isEn ? "Custom programs for your level and goals" : "레벨과 목표에 맞는 맞춤 운동 프로그램"}
            </p>
          </Link>
        </div>

        {/* Cross-link to Nutrition Guide */}
        <div className="mb-8">
          <Link
            href={`${prefix}/guide/nutrition`}
            className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all flex items-center justify-between"
          >
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
                {isEn ? "Nutrition Guide" : "영양 가이드"}
              </h2>
              <p className="text-sm text-gray-500">
                {isEn
                  ? "Calorie calculator, meal plans & food database"
                  : "칼로리 계산기, 식단 추천, 음식 영양 사전"}
              </p>
            </div>
            <svg className="w-5 h-5 text-gray-400 group-hover:text-[var(--corevia-primary)] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Exercise Database Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-1">
            {isEn ? "Exercise Database" : "운동 가이드"}
          </h2>
          <p className="text-sm text-gray-500">
            {isEn
              ? `Search proper form for ${totalCount} exercises`
              : `${totalCount}개 운동의 올바른 자세를 검색하세요`}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setBodyPartFilter(null); }}
              placeholder={isEn ? "Search exercises (e.g. bench press, squat, deadlift...)" : "운동을 검색하세요 (예: 벤치프레스, 스쿼트, 데드리프트...)"}
              className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-800 placeholder-gray-400 focus:border-[var(--corevia-primary)] focus:outline-none text-lg"
            />
          </div>
        </div>

        {/* Before search */}
        {!hasSearch && (
          <div className="space-y-6">
            {/* Popular searches */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {isEn ? "Popular searches" : "인기 검색어"}
              </p>
              <div className="flex flex-wrap gap-2">
                {(isEn
                  ? ["Bench Press", "Squat", "Deadlift", "Pull Up", "Shoulder Press", "Lat Pulldown", "Leg Press", "Bicep Curl"]
                  : ["벤치프레스", "스쿼트", "데드리프트", "풀업", "숄더프레스", "랫풀다운", "레그프레스", "바벨컬"]
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

            {/* Body part filter */}
            <div>
              <p className="text-sm font-medium text-gray-500 mb-3">
                {isEn ? "Browse by body part" : "부위별 검색"}
              </p>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {bodyParts.map((bp) => (
                  <button
                    key={bp.id}
                    onClick={() => { setBodyPartFilter(bp.id); setSearchQuery(""); }}
                    className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-[var(--corevia-primary)]/30 transition-all"
                  >
                    <p className="font-bold text-gray-800">{isEn ? bp.en : bp.ko}</p>
                    <p className="text-xs text-gray-500">
                      {EXERCISE_DATABASE.filter((e) => e.bodyPart.includes(bp.id)).length}
                      {isEn ? " exercises" : "개"}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Search results */}
        {hasSearch && (
          <>
            {bodyPartFilter && (
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-500">
                  {bodyParts.find((bp) => bp.id === bodyPartFilter)?.[isEn ? "en" : "ko"]}
                </span>
                <button
                  onClick={() => setBodyPartFilter(null)}
                  className="text-xs text-gray-400 hover:text-gray-600 underline"
                >
                  {isEn ? "Clear" : "초기화"}
                </button>
                <span className="text-sm text-gray-400 ml-auto">
                  {results.length}{isEn ? " exercises" : "개"}
                </span>
              </div>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map((exercise) => (
                <Link
                  key={exercise.id}
                  href={`${prefix}/guide/workout/exercises/${exercise.id}`}
                  className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[var(--corevia-primary)]/30 transition-all"
                >
                  <h3 className="font-bold text-gray-800 text-sm mb-1">{displayName(exercise)}</h3>
                  <p className="text-xs text-gray-500 mb-2">{isEn ? exercise.nameEn : exercise.name}</p>
                  <div className="flex flex-wrap gap-1">
                    {(isEn ? exercise.musclesEn.primary : exercise.muscles.primary).slice(0, 2).map((m) => (
                      <span key={m} className="px-2 py-0.5 bg-gray-100 text-gray-500 rounded text-xs">{m}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>

            {results.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500">{isEn ? "No exercises found" : "검색 결과가 없습니다"}</p>
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
}
