"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const levels = [2, 3, 4, 5] as const;

const levelInfo: Record<number, { label: string; desc: string }> = {
  2: { label: "Lv.2 입문", desc: "첫 기록을 시작한 당신" },
  3: { label: "Lv.3 성장", desc: "꾸준히 기록하고 있어" },
  4: { label: "Lv.4 숙련", desc: "습관이 만들어졌어" },
  5: { label: "Lv.5 마스터", desc: "진짜 달라진 내 모습" },
};

export default function LevelEvolution() {
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            기록할수록 코치가 성장해요
          </h2>
          <p className="text-gray-500 text-lg">
            포인트를 모아 코치의 외형을 진화시키세요
          </p>
        </div>

        {/* 성별 토글 */}
        <div className="flex justify-center mb-10">
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

        {/* 레벨 시퀀스 */}
        <div className="flex items-end justify-center gap-4 md:gap-8">
          {levels.map((lv, i) => (
            <motion.div
              key={`${gender}-${lv}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex flex-col items-center"
            >
              <div
                className="relative bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden mb-3 flex items-end justify-center"
                style={{
                  width: 80 + i * 16,
                  height: 120 + i * 24,
                }}
              >
                <Image
                  src={`/coach/${gender}_${lv}_front.png`}
                  alt={`${levelInfo[lv].label}`}
                  fill
                  className="object-contain p-1"
                  sizes={`${80 + i * 16}px`}
                />
              </div>
              <span
                className={`text-xs font-bold mb-1 ${
                  lv === 5
                    ? "text-[var(--corevia-primary)]"
                    : "text-gray-400"
                }`}
              >
                {levelInfo[lv].label}
              </span>
              <span className="text-[11px] text-gray-400 text-center hidden md:block">
                {levelInfo[lv].desc}
              </span>

              {/* 화살표 (마지막 제외) */}
              {i < levels.length - 1 && (
                <div className="absolute" />
              )}
            </motion.div>
          ))}
        </div>

        {/* 레벨간 화살표 */}
        <div className="flex justify-center mt-4">
          <div className="flex items-center gap-1 text-gray-300">
            <span className="text-xs">기록</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="text-xs">포인트</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <span className="text-xs">성장</span>
          </div>
        </div>
      </div>
    </section>
  );
}
