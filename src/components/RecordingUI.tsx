"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RecordingUI() {
  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            이전의 나를 넘는 기록
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            운동은 점진적 과부하를 위해 지난 기록과 비교하며,
            <br className="hidden sm:block" />
            식단은 AI가 사진 한 장으로 칼로리를 바로 측정해줘요
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* 운동 입력 UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] rounded-[32px] overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/app-ui-workout.png"
                alt="운동 기록 UI"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-800">운동 기록</p>
            <p className="text-xs text-gray-400 mt-1">
              지난 무게/횟수 확인 → 오늘 더 나은 기록
            </p>
          </motion.div>

          {/* 식단 입력 UI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] rounded-[32px] overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/app-ui-food.png"
                alt="식단 기록 UI"
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-800">식단 기록</p>
            <p className="text-xs text-gray-400 mt-1">
              사진 한 장 → AI가 칼로리/영양소 즉시 분석
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
