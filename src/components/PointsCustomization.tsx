"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function PointsCustomization({ locale }: { locale: string }) {
  const [gender, setGender] = useState<"male" | "female">("male");
  const dict = getDictionary(locale);

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

          <motion.div
            key={gender}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="relative w-56 h-80 md:w-64 md:h-96"
          >
            <Image
              src={`/coach/${gender}_3_front.png`}
              alt={gender === "male" ? dict.points.maleAlt : dict.points.femaleAlt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </motion.div>

          <p className="text-sm text-gray-400 mt-4">
            {dict.points.collectMessage}
          </p>
        </div>
      </div>
    </section>
  );
}
