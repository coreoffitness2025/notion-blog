"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "기록",
    desc: "운동/식단 기록",
    detail: "식단 +1pt, 운동 +1pt",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "포인트",
    desc: "자동 적립",
    detail: "주간 +3pt, 스트릭 보너스",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    title: "커스터마이징",
    desc: "내 취향대로",
    detail: "코치 외형 꾸미기",
  },
];

export default function PointsCustomization() {
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            기록하면 포인트, 포인트로 나만의 코치
          </h2>
          <p className="text-gray-500 text-lg">
            꾸준히 기록할수록 포인트가 쌓이고, 내 취향대로 코치를 꾸밀 수 있어요
          </p>
        </div>

        {/* 3단계 플로우 */}
        <div className="flex items-center justify-center gap-3 md:gap-6 mb-14">
          {steps.map((step, i) => (
            <div key={step.title} className="flex items-center gap-3 md:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 rounded-full bg-[var(--corevia-primary)]/10 flex items-center justify-center text-[var(--corevia-primary)] mb-2">
                  {step.icon}
                </div>
                <span className="text-sm font-bold text-gray-900">{step.title}</span>
                <span className="text-xs text-gray-400 mt-0.5">{step.desc}</span>
                <span className="text-[11px] text-[var(--corevia-primary)] mt-0.5 hidden md:block">{step.detail}</span>
              </motion.div>

              {i < steps.length - 1 && (
                <svg className="w-5 h-5 text-gray-300 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* 성별 토글 */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setGender("male")}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${
                gender === "male"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              남성 코치
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-5 py-2 rounded-md text-sm font-semibold transition-all ${
                gender === "female"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500"
              }`}
            >
              여성 코치
            </button>
          </div>
        </div>

        {/* 코치 커스터마이징 비주얼 */}
        <motion.div
          key={gender}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center"
        >
          <div className="relative">
            {/* 메인 코치 이미지 */}
            <div className="relative w-48 h-72 md:w-56 md:h-80 mx-auto">
              <Image
                src={`/coach/${gender}_3_front.png`}
                alt={`${gender === "male" ? "남성" : "여성"} 코치`}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>

            {/* 커스터마이징 힌트 뱃지들 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute top-8 -left-4 md:left-[-60px] bg-white rounded-xl shadow-md px-3 py-2 text-xs font-semibold text-[var(--corevia-ai)]"
            >
              외형 선택
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute top-20 -right-4 md:right-[-60px] bg-white rounded-xl shadow-md px-3 py-2 text-xs font-semibold text-green-600"
            >
              성별 선택
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-16 -left-4 md:left-[-60px] bg-white rounded-xl shadow-md px-3 py-2 text-xs font-semibold text-orange-600"
            >
              성격 선택
            </motion.div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-6">
            포인트를 모아서 나만의 코치를 만들어보세요
          </p>
        </motion.div>
      </div>
    </section>
  );
}
