"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--corevia-bg)] pt-16 pb-20 px-4">
      {/* 배경 장식 */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--corevia-primary)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[var(--corevia-accent)]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-[1100px] mx-auto relative">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* 텍스트 */}
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] text-sm font-semibold rounded-full mb-6">
                무료로 시작
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4"
            >
              스마트폰 하나로,
              <br />
              <span className="text-[var(--corevia-primary)]">
                나만의 PT 선생님
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0"
            >
              생체 2급 자격 + 대회 수상 트레이너가 직접 튜닝한
              <br className="hidden sm:block" />
              AI 코치가 운동+식단을 함께 관리해줌
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--corevia-primary)] text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-blue-600 transition-all shadow-lg shadow-blue-200 animate-pulse-glow"
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
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-7 py-3.5 rounded-xl border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
              >
                어떤 앱인지 보기
              </a>
            </motion.div>
          </div>

          {/* 캐릭터 이미지 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 flex justify-center items-end gap-2 md:gap-4 max-w-md"
          >
            <div className="relative w-36 h-72 md:w-48 md:h-96">
              <Image
                src="/coach/hero_male.jpg"
                alt="AI PT 코치 남성"
                fill
                priority
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 144px, 192px"
              />
            </div>
            <div className="relative w-36 h-72 md:w-48 md:h-96">
              <Image
                src="/coach/hero_female.jpg"
                alt="AI PT 코치 여성"
                fill
                priority
                className="object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 144px, 192px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
