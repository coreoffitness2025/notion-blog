"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "무료인가요?",
    a: "네, 무료로 시작할 수 있어요. 운동/식단 기록이랑 AI 코치 채팅은 무료예요. 더 많은 기능은 Pro/Max 플랜에서 쓸 수 있어요.",
  },
  {
    q: "AI가 진짜 내 기록을 보고 조언해요?",
    a: "네. 일반 AI 챗봇이랑 달라요. 내 운동 기록, 식단, 체형 분석까지 실제로 보고 피드백해줘요. 생체 2급 자격 트레이너가 직접 AI를 튜닝해서 진짜 PT 받는 느낌이에요.",
  },
  {
    q: "iOS에서도 쓸 수 있나요?",
    a: "지금은 Android만 돼요. iOS는 준비 중이고, 곧 App Store에서도 만나볼 수 있어요.",
  },
  {
    q: "코치 성격 바꿀 수 있어요?",
    a: "물론이죠. 설정에서 언제든 바꿀 수 있어요. 독설형이 안 맞으면 격려형으로 바꿔보세요.",
  },
  {
    q: "사진 식단 인식 정확해요?",
    a: "Google Gemini AI 쓰고, 한국 음식 전용 DB로 정확도 높였어요. 김치찌개, 제육볶음 다 돼요.",
  },
  {
    q: "오프라인 PT 대신 쓸 수 있나요?",
    a: "생체 2급 트레이너가 만든 AI가 24시간 운동+식단을 같이 봐줘요. PT 갈 시간이나 비용이 부담될 때 좋은 대안이에요.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-medium text-gray-800 group-hover:text-gray-600 transition-colors pr-4">
          {q}
        </span>
        <svg
          className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-gray-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center tracking-tight">
          자주 묻는 질문
        </h2>
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.q} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
