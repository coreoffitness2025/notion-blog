"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function RecordingUI({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const dir = locale === "ko" ? "/store-screenshots" : "/store-screenshots-en";

  return (
    <section className="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--corevia-bg)]">
      <div className="max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-[length:var(--text-heading)] font-bold text-gray-800 mb-3 tracking-tight">
            {dict.recording.title}
          </h2>
          {dict.recording.subtitle && (
            <p className="text-base text-gray-500 max-w-2xl mx-auto">
              {dict.recording.subtitle}
            </p>
          )}
        </motion.div>

        <div className="space-y-16 md:space-y-20">
          {/* 운동 섹션 */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[220px] h-[476px] md:w-[260px] md:h-[562px] lg:w-[300px] lg:h-[649px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={`${dir}/${dict.recording.workout.screenshot}`}
                  alt="Workout"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-[var(--corevia-primary)]">
                  {dict.recording.workout.stat}
                </span>
                <span className="ml-2 text-lg md:text-xl font-semibold text-gray-700">
                  {dict.recording.workout.statLabel}
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {dict.recording.workout.description}
              </p>
            </motion.div>
          </div>

          {/* 식단 섹션 (방향 반전) */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="relative w-[220px] h-[476px] md:w-[260px] md:h-[562px] lg:w-[300px] lg:h-[649px] rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src={`${dir}/${dict.recording.nutrition.screenshot}`}
                  alt="Nutrition"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 260px, 300px"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1 text-center md:text-left"
            >
              <div className="mb-4">
                <span className="text-4xl md:text-5xl font-bold text-[var(--corevia-primary)]">
                  {dict.recording.nutrition.stat}
                </span>
                <span className="ml-2 text-lg md:text-xl font-semibold text-gray-700">
                  {dict.recording.nutrition.statLabel}
                </span>
              </div>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                {dict.recording.nutrition.description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
