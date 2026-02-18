"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "쉬운 운동/식단 기록",
    description:
      "부위별 운동, 사진 식단 인식, 기구 촬영까지. 터치 몇 번이면 기록 끝",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
        />
      </svg>
    ),
  },
  {
    title: "AI PT 코치 채팅",
    description:
      "4가지 성격의 캐릭터 코치가 내 기록을 보고 운동+식단 크로스 피드백해줘요",
    image: "/coach/female_3_face.png",
  },
  {
    title: "기록 → 포인트 적립",
    description:
      "운동 기록 +1pt, 식단 기록 +1pt. 꾸준히 기록할수록 포인트가 쌓여요",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "포인트로 코치 꾸미기",
    description:
      "모은 포인트로 코치 캐릭터 외형을 내 취향대로. 나만의 코치를 만들어보세요",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            빠짐없이 기록하면, 진짜 달라져요
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            운동도 식단도 다 보고 코칭해주는, 진짜 온라인 PT
          </p>
        </div>

        {/* 신뢰 요소 — 간결하게 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mb-14"
        >
          생체 2급 + 대회 수상 트레이너이자 IT 대기업 전략팀 출신 대표가 직접 튜닝한 AI
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100/80 transition-colors"
            >
              <div className="mb-5">
                {f.image ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-100">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  f.icon
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
