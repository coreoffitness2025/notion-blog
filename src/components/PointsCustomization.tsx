"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function PointsCustomization({ locale }: { locale: string }) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const dict = getDictionary(locale);

  const skinLevels = [2, 3, 4, 5];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.points.title}
          </h2>
          <p className="text-base text-gray-500">{dict.points.subtitle}</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 mb-16">
          {dict.points.steps.map((s, i) => (
            <div key={s.step} className="flex items-center gap-4 sm:gap-6 md:gap-10">
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
                <span className="text-xs text-gray-400 mt-1 block">
                  {s.sub}
                </span>
              </motion.div>

              {i < 2 && (
                <svg
                  className="w-4 h-4 text-gray-300 shrink-0 rotate-90 sm:rotate-0"
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
              {dict.points.maleCoach}
            </button>
            <button
              onClick={() => setGender("female")}
              className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                gender === "female"
                  ? "bg-white text-gray-800 shadow-sm"
                  : "text-gray-400"
              }`}
            >
              {dict.points.femaleCoach}
            </button>
          </div>

          <p className="text-base font-medium text-gray-600 mb-8">
            {dict.points.skinGalleryTitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-[800px]">
            {skinLevels.map((level, i) => (
              <motion.div
                key={`${gender}-${level}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center bg-gray-50 rounded-2xl p-4 hover:bg-gray-100/80 transition-colors"
              >
                <div className="relative w-32 h-44 md:w-36 md:h-52 mb-3">
                  <Image
                    src={`/coach/${gender}_${level}_front.png`}
                    alt={dict.points.skins[i]?.name || `Level ${level}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 128px, 144px"
                  />
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {dict.points.skins[i]?.name}
                </span>
                <span className="text-xs text-gray-400 mt-0.5">
                  {dict.points.skins[i]?.desc}
                </span>
              </motion.div>
            ))}
          </div>

          <p className="text-sm text-gray-400 mt-6">
            {dict.points.collectMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
