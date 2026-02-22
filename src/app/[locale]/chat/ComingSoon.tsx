"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Download } from "lucide-react";

export default function ComingSoon({ locale }: { locale: string }) {
  const isKo = locale === "ko";

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden">
      <div className="max-w-[720px] mx-auto px-4 pt-20 pb-24 md:pt-28">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-[#4285F4] text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Coming Soon
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-center mb-4"
        >
          <h1 className="text-[clamp(1.75rem,4vw+0.5rem,3rem)] font-bold text-gray-900 tracking-tight leading-[1.2] whitespace-pre-line">
            {isKo
              ? "AI 코치,\n곧 웹에서도 만나요"
              : "AI Coach,\nComing to the Web"}
          </h1>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-gray-500 text-base md:text-lg leading-relaxed max-w-md mx-auto mb-16 whitespace-pre-line"
        >
          {isKo
            ? "코치 케이와 코치 제인이\n앱에서 먼저 만나실 수 있습니다"
            : "Meet Coach Kay and Coach Jane\nin the app first"}
        </motion.p>

        {/* Coach characters */}
        <div className="flex justify-center items-end gap-8 md:gap-14 mb-16">
          {/* Coach Kay — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-36 h-56 md:w-48 md:h-72"
            >
              <Image
                src="/coach/male_3_full.png"
                alt={isKo ? "코치 케이" : "Coach Kay"}
                fill
                className="object-contain object-bottom drop-shadow-lg"
                sizes="(max-width: 768px) 144px, 192px"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.0 }}
              className="text-sm font-semibold text-gray-700 mt-3"
            >
              {isKo ? "코치 케이" : "Coach Kay"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.1 }}
              className="text-xs text-gray-400 mt-0.5"
            >
              {isKo ? "남성 AI 코치" : "Male AI Coach"}
            </motion.p>
          </motion.div>

          {/* Coach Jane — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.65,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3,
                delay: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-36 h-56 md:w-48 md:h-72"
            >
              <Image
                src="/coach/female_3_full.png"
                alt={isKo ? "코치 제인" : "Coach Jane"}
                fill
                className="object-contain object-bottom drop-shadow-lg"
                sizes="(max-width: 768px) 144px, 192px"
                priority
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.15 }}
              className="text-sm font-semibold text-gray-700 mt-3"
            >
              {isKo ? "코치 제인" : "Coach Jane"}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 1.25 }}
              className="text-xs text-gray-400 mt-0.5"
            >
              {isKo ? "여성 AI 코치" : "Female AI Coach"}
            </motion.p>
          </motion.div>
        </div>

        {/* Personality preview chips */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {[
            { emoji: "\uD83D\uDD25", ko: "\uB3C5\uC124\uD615", en: "Tough Love" },
            { emoji: "\uD83D\uDCAA", ko: "\uACA9\uB824\uD615", en: "Supportive" },
            { emoji: "\uD83E\uDDCA", ko: "\uB0C9\uC815\uD615", en: "Analytical" },
            { emoji: "\u2696\uFE0F", ko: "\uBC38\uB7F0\uC2A4\uD615", en: "Balanced" },
          ].map((p, i) => (
            <motion.span
              key={p.ko}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1.1 + i * 0.08 }}
              className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-600 text-xs font-medium px-3.5 py-2 rounded-full"
            >
              <span>{p.emoji}</span>
              {isKo ? p.ko : p.en}
            </motion.span>
          ))}
        </motion.div>

        {/* App download CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="text-center"
        >
          <p className="text-sm text-gray-400 mb-5">
            {isKo
              ? "지금 앱에서 AI 코치를 만나보세요"
              : "Try the AI Coach in the app now"}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://apps.apple.com/app/corevia-fitness/id6744396445"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-800 transition-colors"
            >
              <Download className="w-4 h-4" />
              Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
