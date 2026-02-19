"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { EXERCISE_DATABASE, searchExercises, Exercise } from "@/data/exerciseDatabase";

export default function ExercisesClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.exercises;
  const isEn = locale === "en";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBodyPart, setSelectedBodyPart] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

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
            href={`${prefix}/guide`}
            className="text-gray-500 hover:text-gray-800 transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {dict.guideSubpages.backToGuide}
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

        {/* Results */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredExercises.map((exercise) => (
            <button
              key={exercise.id}
              onClick={() => setSelectedExercise(exercise)}
              className="text-left bg-white border border-gray-100 rounded-xl p-4 hover:border-[var(--corevia-primary)]/30 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-800">{displayName(exercise)}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${difficultyColor(exercise.difficulty)}`}>
                  {difficultyLabel(exercise.difficulty)}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">{secondaryName(exercise)}</p>
              <div className="flex flex-wrap gap-1">
                {exercise.muscles.primary.map((muscle) => (
                  <span key={muscle} className="px-2 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded text-xs">
                    {muscle}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.noResults}</p>
          </div>
        )}
      </div>

      {/* Exercise Detail Modal */}
      {selectedExercise && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedExercise(null)}
        >
          <div
            className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{displayName(selectedExercise)}</h2>
                  <p className="text-gray-500">{secondaryName(selectedExercise)}</p>
                </div>
                <button
                  onClick={() => setSelectedExercise(null)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className={`px-3 py-1 rounded-full text-sm ${difficultyColor(selectedExercise.difficulty)}`}>
                  {difficultyLabel(selectedExercise.difficulty)}
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
                  {selectedExercise.category}
                </span>
              </div>

              {/* Muscles */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-500 mb-2">{t.targetMuscles}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedExercise.muscles.primary.map((muscle) => (
                    <span key={muscle} className="px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-sm">
                      {muscle} {t.primary}
                    </span>
                  ))}
                  {selectedExercise.muscles.secondary.map((muscle) => (
                    <span key={muscle} className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
                      {muscle}
                    </span>
                  ))}
                </div>
              </div>

              {/* Instructions */}
              <div className="mb-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{t.howTo}</h3>
                <ol className="space-y-2">
                  {selectedExercise.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-500">
                      <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">
                        {idx + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tips */}
              <div className="bg-gray-50 rounded-xl p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{t.tips}</h3>
                <ul className="space-y-2">
                  {selectedExercise.tips.map((tip, idx) => (
                    <li key={idx} className="flex gap-2 text-gray-500 text-sm">
                      <span className="text-[var(--corevia-primary)]">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
