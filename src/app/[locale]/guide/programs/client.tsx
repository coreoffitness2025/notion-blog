"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Dictionary } from "@/lib/i18n";
import { RECOMMENDED_PROGRAMS, PROGRAM_GOALS, PROGRAM_LEVELS, RecommendedProgram } from "@/data/programData";

export default function ProgramsClient({ dict, locale }: { dict: Dictionary; locale: string }) {
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const t = dict.guideSubpages.programs;

  const [selectedGoal, setSelectedGoal] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedProgram, setSelectedProgram] = useState<RecommendedProgram | null>(null);

  const filteredPrograms = useMemo(() => {
    return RECOMMENDED_PROGRAMS.filter((program) => {
      if (selectedGoal !== "all" && program.goal !== selectedGoal) return false;
      if (selectedLevel !== "all" && program.level !== selectedLevel) return false;
      return true;
    });
  }, [selectedGoal, selectedLevel]);

  const translateGoal = (goal: string) => t.goalMap[goal] || goal;
  const translateLevel = (level: string) => t.levelMap[level] || level;

  const goalColor = (goal: string) => {
    switch (goal) {
      case "근력 향상": return "bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)]";
      case "근비대": return "bg-[var(--corevia-primary)]/15 text-[var(--corevia-primary)]";
      case "체지방 감소": return "bg-gray-100 text-gray-600";
      default: return "bg-gray-50 text-gray-500";
    }
  };

  const levelColor = (level: string) => {
    switch (level) {
      case "초급": return "bg-[var(--corevia-primary)]/5 text-[var(--corevia-primary)]/70";
      case "중급": return "bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)]";
      case "고급": return "bg-[var(--corevia-primary)]/20 text-[var(--corevia-primary)]";
      default: return "bg-gray-50 text-gray-500";
    }
  };

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
            {t.subtitleTemplate.replace("{count}", String(RECOMMENDED_PROGRAMS.length))}
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">{t.goalLabel}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedGoal("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedGoal === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {t.all}
              </button>
              {PROGRAM_GOALS.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedGoal === goal.id
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  <span>{goal.icon}</span>
                  {translateGoal(goal.name)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">{t.levelLabel}</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLevel("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {t.all}
              </button>
              {PROGRAM_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedLevel === level.id
                      ? "bg-pink-600 text-white"
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-200"
                  }`}
                >
                  {translateLevel(level.name)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Program List */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredPrograms.map((program, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedProgram(program)}
              className="text-left bg-white border border-gray-200 rounded-xl p-5 hover:border-pink-500/50 transition-all shadow-sm"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-gray-800">{program.name}</h3>
                <span className="text-sm text-gray-500">{program.duration}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs ${goalColor(program.goal)}`}>
                  {translateGoal(program.goal)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${levelColor(program.level)}`}>
                  {translateLevel(program.level)}
                </span>
              </div>

              <p className="text-sm text-gray-500 line-clamp-2">{program.description}</p>

              <p className="text-xs text-gray-500 mt-3">
                {t.exerciseCount.replace("{count}", String(program.exercises.length))}
              </p>
            </button>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">{t.noResults}</p>
          </div>
        )}
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-white border border-gray-200 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{selectedProgram.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${goalColor(selectedProgram.goal)}`}>
                      {translateGoal(selectedProgram.goal)}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${levelColor(selectedProgram.level)}`}>
                      {translateLevel(selectedProgram.level)}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-500 rounded-full text-sm">
                      {selectedProgram.duration}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 hover:bg-gray-50 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-500 mb-6">{selectedProgram.description}</p>

              <div className="space-y-3">
                <h3 className="text-lg font-bold text-gray-800">{t.exerciseList}</h3>
                {selectedProgram.exercises
                  .sort((a, b) => a.order - b.order)
                  .map((exercise, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        exercise.type === "main"
                          ? "bg-pink-50 border border-pink-500/30"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          exercise.type === "main"
                            ? "bg-pink-600 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-medium text-gray-800">{exercise.name}</p>
                          {exercise.notes && (
                            <p className="text-xs text-gray-500">{exercise.notes}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-800 font-medium">
                          {exercise.targetSets} {t.setsReps.replace("{reps}", String(exercise.targetReps))}
                        </p>
                        <p className="text-xs text-gray-500">
                          {exercise.type === "main" ? t.mainExercise : t.accessoryExercise}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
