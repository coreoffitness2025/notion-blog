"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--corevia-bg)] pt-20 pb-24 px-4">
      {/* 배경 장식 — 단색 그라데이션, 최소화 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-[1100px] mx-auto relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl lg:text-[72px] font-bold text-gray-800 leading-tight mb-6 tracking-tight"
          >
            진짜 온라인 PT,
            <br />
            <span className="text-[var(--corevia-primary)]">
              코비아 피트니스
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            점진적 과부하를 위한 운동 기록,
            <br className="hidden sm:block" />
            AI가 한 번에 측정하는 음식 칼로리.
            <br className="hidden sm:block" />
            운동과 식단을 같이 봐주는 AI 코치까지.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white font-medium px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all shadow-sm"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
              </svg>
              앱 다운로드
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-600 font-medium px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              어떤 앱인지 보기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
