"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function RecordingUI() {
  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            기록이 쉬워야 빠짐없이 해요
          </h2>
          <p className="text-base text-gray-500">
            부위 선택부터 식단 사진까지, 최소한의 터치로 기록 완료
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
              부위 선택 → 운동 선택 → 바로 시작
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
              사진 한 장이면 AI가 자동 분석
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
