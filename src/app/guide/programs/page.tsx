"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { RECOMMENDED_PROGRAMS, PROGRAM_GOALS, PROGRAM_LEVELS, RecommendedProgram } from "@/data/programData";

export default function ProgramsPage() {
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

  const goalColor = (goal: string) => {
    switch (goal) {
      case "근력 향상": return "bg-blue-500/20 text-blue-400";
      case "근비대": return "bg-green-500/20 text-green-400";
      case "체지방 감소": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  const levelColor = (level: string) => {
    switch (level) {
      case "초급": return "bg-green-500/20 text-green-400";
      case "중급": return "bg-blue-500/20 text-blue-400";
      case "고급": return "bg-purple-500/20 text-purple-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <div className="border-b border-gray-800 py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/guide"
            className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-2 mb-4"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            가이드로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">운동 프로그램</h1>
          <p className="text-gray-400">
            목표와 레벨에 맞는 {RECOMMENDED_PROGRAMS.length}개의 맞춤 프로그램
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filters */}
        <div className="space-y-4 mb-8">
          {/* Goal Filter */}
          <div>
            <p className="text-sm text-gray-400 mb-2">목표</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedGoal("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedGoal === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                전체
              </button>
              {PROGRAM_GOALS.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setSelectedGoal(goal.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                    selectedGoal === goal.id
                      ? "bg-pink-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  <span>{goal.icon}</span>
                  {goal.name}
                </button>
              ))}
            </div>
          </div>

          {/* Level Filter */}
          <div>
            <p className="text-sm text-gray-400 mb-2">레벨</p>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedLevel("all")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedLevel === "all"
                    ? "bg-pink-600 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                전체
              </button>
              {PROGRAM_LEVELS.map((level) => (
                <button
                  key={level.id}
                  onClick={() => setSelectedLevel(level.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedLevel === level.id
                      ? "bg-pink-600 text-white"
                      : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                  }`}
                >
                  {level.name}
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
              className="text-left bg-gray-800/50 border border-gray-700 rounded-xl p-5 hover:border-pink-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-bold text-white">{program.name}</h3>
                <span className="text-sm text-gray-500">{program.duration}</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-3">
                <span className={`px-2 py-1 rounded-full text-xs ${goalColor(program.goal)}`}>
                  {program.goal}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${levelColor(program.level)}`}>
                  {program.level}
                </span>
              </div>

              <p className="text-sm text-gray-400 line-clamp-2">
                {program.description}
              </p>

              <p className="text-xs text-gray-500 mt-3">
                {program.exercises.length}개의 운동
              </p>
            </button>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">조건에 맞는 프로그램이 없습니다</p>
          </div>
        )}
      </div>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="bg-gray-900 border border-gray-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProgram.name}</h2>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className={`px-3 py-1 rounded-full text-sm ${goalColor(selectedProgram.goal)}`}>
                      {selectedProgram.goal}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm ${levelColor(selectedProgram.level)}`}>
                      {selectedProgram.level}
                    </span>
                    <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
                      {selectedProgram.duration}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                >
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <p className="text-gray-400 mb-6">{selectedProgram.description}</p>

              {/* Exercises */}
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-white">운동 목록</h3>
                {selectedProgram.exercises
                  .sort((a, b) => a.order - b.order)
                  .map((exercise, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-4 rounded-xl ${
                        exercise.type === "main"
                          ? "bg-pink-500/10 border border-pink-500/30"
                          : "bg-gray-800/50 border border-gray-700"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          exercise.type === "main"
                            ? "bg-pink-600 text-white"
                            : "bg-gray-700 text-gray-300"
                        }`}>
                          {idx + 1}
                        </span>
                        <div>
                          <p className="font-medium text-white">{exercise.name}</p>
                          {exercise.notes && (
                            <p className="text-xs text-gray-400">{exercise.notes}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">
                          {exercise.targetSets}세트 × {exercise.targetReps}회
                        </p>
                        <p className="text-xs text-gray-500">
                          {exercise.type === "main" ? "메인 운동" : "보조 운동"}
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



