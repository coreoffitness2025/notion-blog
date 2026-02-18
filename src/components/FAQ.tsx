"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "무료인가요?",
    a: "네, 무료로 시작할 수 있어요. 기본 기능(운동/식단 기록, AI 코치 채팅)은 무료입니다. 더 많은 기능은 Pro/Max 플랜에서 제공돼요.",
  },
  {
    q: "AI가 진짜 내 기록을 보고 조언하나요?",
    a: "네! 일반 AI 챗봇과 다르게, CoreVia AI 코치는 내 운동 기록, 식단, 체형 분석 데이터를 실제로 참고해서 개인화된 피드백을 줍니다. 게다가 실제 트레이너 자격을 갖춘 피트니스 대회 수상자인 대표가 직접 AI를 튜닝해서, 진짜 PT 경험이 녹아있어요.",
  },
  {
    q: "iOS에서도 쓸 수 있나요?",
    a: "현재는 Android(Google Play)에서 다운로드할 수 있어요. iOS 버전은 준비 중이며, 곧 App Store에서도 만나볼 수 있습니다.",
  },
  {
    q: "코치 성격을 나중에 바꿀 수 있나요?",
    a: "물론이죠! 설정에서 언제든 코치 성격을 변경할 수 있어요. 독설형이 맞지 않으면 격려형으로 바꿔보세요.",
  },
  {
    q: "사진 식단 인식은 정확한가요?",
    a: "Google Gemini AI를 사용해서 음식을 인식하고, 한국 음식 커뮤니티 DB로 정확도를 높였어요. 김치찌개도, 제육볶음도 인식됩니다.",
  },
  {
    q: "오프라인 PT 대신 쓸 수 있나요?",
    a: "AI 코치가 24시간 운동+식단 피드백을 주지만, 실제 PT와 완전히 같진 않아요. 다만 비용 부담 없이 꾸준한 코칭을 받고 싶은 분에게 좋은 대안입니다.",
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
        <span className="font-semibold text-gray-900 group-hover:text-[var(--corevia-primary)] transition-colors pr-4">
          {q}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
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
            <p className="pb-5 text-gray-500 leading-relaxed">{a}</p>
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
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">
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
