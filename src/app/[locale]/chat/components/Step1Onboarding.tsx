"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Award } from "lucide-react";
import { PERSONALITIES } from "@/lib/chat/characters";
import type { Dictionary } from "@/lib/i18n";

interface Step1Props {
  locale: string;
  dict: Dictionary;
  onStart: () => void;
}

const FEATURE_CARDS = [
  {
    icon: Sparkles,
    koTitle: "완전 개인화 코칭",
    enTitle: "Fully Personalized",
    koDesc:
      "목표, 운동 경험, 부상 이력까지 반영한 1:1 맞춤 코칭. 나만의 PT를 받는 것처럼 정확한 가이드를 제공합니다.",
    enDesc:
      "1-on-1 coaching tailored to your goals, experience, and injury history. Guidance as precise as a personal trainer.",
  },
  {
    icon: BookOpen,
    koTitle: "검증된 지식 기반",
    enTitle: "Evidence-Based Knowledge",
    koDesc:
      "운동생리학 교재, 피트니스 가이드, 전자책 등 검증된 지식을 학습한 AI가 근거 있는 답변을 드립니다.",
    enDesc:
      "AI trained on exercise physiology textbooks, fitness guides, and ebooks for evidence-based answers.",
  },
  {
    icon: Award,
    koTitle: "전문가가 직접 튜닝",
    enTitle: "Expert-Tuned AI",
    koDesc:
      "생활체육지도사 2급, 네추럴 보디빌딩 수상 경력의 삼성전자 엔지니어 출신 IT 전략기획자가 직접 튜닝했습니다.",
    enDesc:
      "Tuned by a certified fitness instructor & natural bodybuilding competitor with Samsung engineering background.",
  },
];

export default function Step1Onboarding({ locale, dict, onStart }: Step1Props) {
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";
  const isKo = loc === "ko";

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-[720px] mx-auto px-4 pt-14 pb-16 md:pt-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-blue-50 text-[#4285F4] text-sm font-medium px-4 py-1.5 rounded-full mb-5">
            <Sparkles className="w-4 h-4" />
            {isKo ? "AI 코치 체험" : "Try AI Coach"}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">
            {isKo
              ? "웹에서도 코비아의\n온라인 PT를 경험해보세요"
              : "Experience CoreVia's\nOnline PT on the Web"}
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed whitespace-pre-line">
            {isKo
              ? "코치 케이와 코치 제인이\n당신만의 맞춤 PT를 제공합니다"
              : "Coach Kay and Coach Jane\nprovide personalized PT just for you"}
          </p>
        </motion.div>

        {/* Coach images */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-6 mb-14"
        >
          <div className="text-center">
            <div className="relative w-36 h-56 md:w-44 md:h-72">
              <Image
                src="/coach/male_3_full.png"
                alt={isKo ? "코치 케이" : "Coach Kay"}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
            <p className="text-sm text-gray-600 font-medium mt-2">
              {isKo ? "코치 케이" : "Coach Kay"}
            </p>
          </div>
          <div className="text-center">
            <div className="relative w-36 h-56 md:w-44 md:h-72">
              <Image
                src="/coach/female_3_full.png"
                alt={isKo ? "코치 제인" : "Coach Jane"}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
            <p className="text-sm text-gray-600 font-medium mt-2">
              {isKo ? "코치 제인" : "Coach Jane"}
            </p>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {FEATURE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#4285F4]" />
                </div>
                <h3 className="text-sm font-bold text-gray-800 mb-1.5">
                  {isKo ? card.koTitle : card.enTitle}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {isKo ? card.koDesc : card.enDesc}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Personality previews */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10"
        >
          <p className="text-center text-xs text-gray-400 mb-3">
            {dict.chat.pickPersonality}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {PERSONALITIES.map((p) => (
              <div
                key={p.type}
                className="bg-white rounded-xl border border-gray-100 shadow-sm px-3 py-3 text-center"
              >
                <span className="text-2xl">{p.emoji}</span>
                <p className="text-xs font-medium text-gray-700 mt-1">
                  {p.label[loc]}
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 italic">
                  &ldquo;{dict.chat.personalityPreviews[p.type]}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onStart}
            className="px-8 py-4 bg-[#4285F4] hover:bg-[#4285F4] text-white text-base font-bold rounded-2xl transition-colors shadow-lg shadow-blue-500/20"
          >
            {isKo ? "지금 시작하기" : "Get Started"} &rarr;
          </button>
          <p className="text-sm text-[#4285F4] mt-4">
            {isKo
              ? "가입 시 50pt 무료 지급 (약 6회 대화)"
              : "50pt free on signup (approx. 6 conversations)"}
          </p>
        </motion.div>

        {/* Footer notice */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-400">
            {dict.chat.aiDisclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
