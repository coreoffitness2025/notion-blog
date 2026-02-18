"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function PointsCustomization() {
  const [gender, setGender] = useState<"male" | "female">("male");

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            기록하면 포인트, 포인트로 코치 꾸미기
          </h2>
          <p className="text-base text-gray-500">
            꾸준히 기록할수록 포인트가 쌓여요
          </p>
        </div>

        {/* 3단계 플로우 — 미니멀 */}
        <div className="flex items-center justify-center gap-6 md:gap-10 mb-16">
          {[
            { step: "01", title: "기록", sub: "운동 +1  식단 +1" },
            { step: "02", title: "포인트", sub: "주간 +3  스트릭 보너스" },
            { step: "03", title: "꾸미기", sub: "코치 외형 커스터마이징" },
          ].map((s, i) => (
            <div key={s.step} className="flex items-center gap-6 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="text-xs font-medium text-gray-300 block mb-1">
                  {s.step}
                </span>
                <span className="text-base font-semibold text-gray-800 block">
                  {s.title}
                </span>
                <span className="text-xs text-gray-400 mt-1 block hidden md:block">
                  {s.sub}
                </span>
              </motion.div>

              {i < 2 && (
                <svg
                  className="w-4 h-4 text-gray-300 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* 성별 토글 + 캐릭터 */}
        <div className="flex flex-col items-center">
          <div className="inline-flex bg-gray-100 rounded-lg p-1 mb-8">
            <button
              onClick={() => setGender("male")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                gender === "male"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              남성 코치
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                gender === "female"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              여성 코치
            </button>
          </div>

          <motion.div
            key={gender}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-56 h-80 md:w-64 md:h-96"
          >
            <Image
              src={`/coach/${gender}_3_front.png`}
              alt={`${gender === "male" ? "남성" : "여성"} 코치`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </motion.div>

          <p className="text-sm text-gray-400 mt-4">
            포인트를 모아서 나만의 코치를 만들어보세요
          </p>
        </div>
      </div>
    </section>
  );
}
