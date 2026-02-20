"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, BookOpen, Wrench } from "lucide-react";
import { COACHES, PERSONALITIES } from "@/lib/chat/characters";
import type { Dictionary } from "@/lib/i18n";

interface Step1Props {
  locale: string;
  dict: Dictionary;
  onStart: () => void;
}

const FEATURE_CARDS = [
  {
    icon: Sparkles,
    koTitle: "개인화 설정",
    enTitle: "Personalized Setup",
    koDesc: "목표, 경험, 부상 이력 반영 맞춤 코칭",
    enDesc: "Coaching tailored to your goals, experience, and injury history",
  },
  {
    icon: BookOpen,
    koTitle: "피트니스 가이드 기반",
    enTitle: "Guide-Based Coaching",
    koDesc: "검증된 가이드와 전자책 지식 기반",
    enDesc: "Built on verified guides and ebook knowledge",
  },
  {
    icon: Wrench,
    koTitle: "트레이너 출신 개발자가 직접 튜닝",
    enTitle: "Tuned by a Trainer-Developer",
    koDesc: "생체 2급 + 대기업 전략 출신 대표의 PT AI",
    enDesc: "Certified trainer & corporate strategist tuned AI",
  },
];

export default function Step1Onboarding({ locale, dict, onStart }: Step1Props) {
  const loc = (locale === "en" ? "en" : "ko") as "ko" | "en";
  const isKo = loc === "ko";

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-[720px] mx-auto px-4 pt-14 pb-16 md:pt-20">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium text-purple-400 mb-3 tracking-wide uppercase">
            AI PT COACH
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight">
            {isKo
              ? "완전히 개인화된 온라인 PT"
              : "Fully Personalized Online PT"}
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
            {isKo
              ? "지금 경험해보세요"
              : "Experience it now"}
          </p>
        </motion.div>

        {/* Coach images */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-6 mb-12"
        >
          {(["male", "female"] as const).map((gender) => (
            <div key={gender} className="relative w-32 h-44 md:w-40 md:h-56">
              <Image
                src={COACHES[gender].cardImage}
                alt={COACHES[gender].name[loc]}
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 768px) 128px, 160px"
              />
              <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-sm text-gray-300 font-medium whitespace-nowrap">
                {COACHES[gender].name[loc]}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mt-10"
        >
          {FEATURE_CARDS.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1">
                  {isKo ? card.koTitle : card.enTitle}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
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
          <p className="text-center text-xs text-gray-500 mb-3">
            {dict.chat.pickPersonality}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {PERSONALITIES.map((p) => (
              <div
                key={p.type}
                className="bg-white/5 rounded-xl border border-white/10 px-3 py-3 text-center"
              >
                <span className="text-2xl">{p.emoji}</span>
                <p className="text-xs font-medium text-gray-300 mt-1">
                  {p.label[loc]}
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 italic">
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
            className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white text-base font-bold rounded-2xl transition-colors shadow-lg shadow-purple-600/20"
          >
            {isKo ? "지금 시작하기" : "Get Started"} &rarr;
          </button>
          <p className="text-sm text-purple-300 mt-4">
            {isKo
              ? "가입 시 50pt 무료 지급 (약 6회 대화)"
              : "50pt free on signup (approx. 6 conversations)"}
          </p>
        </motion.div>

        {/* Footer notice */}
        <div className="text-center mt-12">
          <p className="text-xs text-gray-600">
            {dict.chat.aiDisclaimer}
          </p>
        </div>
      </div>
    </div>
  );
}
