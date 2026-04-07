"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { EXERCISE_DATABASE, searchExercises, Exercise } from "@/data/exerciseDatabase";
import { getExerciseGifUrl } from "@/data/exerciseGifMap";

export default function ExercisesClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.exercises;
  const isEn = locale === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");

  const filteredExercises = useMemo(() => {
    return searchExercises(searchQuery, {
      bodyPart: selectedBodyPart === "all" ? undefined : selectedBodyPart,
      difficulty: selectedDifficulty === "all" ? undefined : selectedDifficulty,
    });
  }, [searchQuery, selectedBodyPart, selectedDifficulty]);

  const difficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner": return "bg-[var(--corevia-primary)]/5 text-[var(--corevia-primary)]/70";
      case "intermediate": return "bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)]";
      case "advanced": return "bg-[var(--corevia-primary)]/20 text-[var(--corevia-primary)]";
      default: return "bg-gray-100 text-gray-500";
    }
  };

  const difficultyLabel = (difficulty: string) => {
    return t.difficulty[difficulty as keyof typeof t.difficulty] || difficulty;
  };

  const displayName = (exercise: Exercise) => isEn ? exercise.nameEn : exercise.name;
  const secondaryName = (exercise: Exercise) => isEn ? exercise.name : exercise.nameEn;

  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Header */}
      <div className="border-b border-gray-200 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href={`${prefix}/guide/workout`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {isEn ? "Workout Guide" : "Workout Guide"}
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{t.title}</h1>
          <p className="text-gray-500">
            {EXERCISE_DATABASE.length} {t.subtitleTemplate}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Search & Filters */}
        <div className="space-y-4 mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-800 placeholder-gray-500 focus:border-[var(--corevia-primary)] focus:outline-none"
          />

          {/* Body Part Filter */}
          <div className="flex flex-wrap gap-2">
            {t.bodyParts.map((part) => (
              <button
                key={part.id}
                onClick={() => setSelectedBodyPart(part.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedBodyPart === part.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {part.name}
              </button>
            ))}
          </div>

          {/* Difficulty Filter */}
          <div className="flex flex-wrap gap-2">
            {(["all", "beginner", "intermediate", "advanced"] as const).map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDifficulty === diff
                    ? "bg-[var(--corevia-primary)] text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {difficultyLabel(diff)}
              </button>
            ))}
          </div>
        </div>

        {/* Results — direct links to detail pages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map((exercise) => {
            const gifUrl = getExerciseGifUrl(exercise.id);
            return (
              <Link
                key={exercise.id}
                href={`${prefix}/guide/workout/exercises/${exercise.id}`}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all"
              >
                {gifUrl && (
                  <div className="relative w-full h-48 bg-gray-50">
                    <Image
                      src={gifUrl}
                      alt={displayName(exercise)}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                )}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-800">{displayName(exercise)}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs flex-shrink-0 ml-2 ${difficultyColor(exercise.difficulty)}`}>
                      {difficultyLabel(exercise.difficulty)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{secondaryName(exercise)}</p>
                  <div className="flex flex-wrap gap-1">
                    {(isEn ? exercise.musclesEn.primary : exercise.muscles.primary).map((muscle) => (
                      <span key={muscle} className="px-2 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded text-xs">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.noResults}</p>
          </div>
        )}
      </div>
    </main>
  );
}
