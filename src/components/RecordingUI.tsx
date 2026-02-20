"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function RecordingUI({ locale }: { locale: string }) {
  const dict = getDictionary(locale);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            {dict.recording.title}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            {dict.recording.subtitle1}
            <br className="hidden sm:block" />
            {dict.recording.subtitle2}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-[260px] h-[520px] md:w-[280px] md:h-[560px] rounded-[32px] overflow-hidden border border-gray-200 shadow-sm bg-white">
              <Image
                src="/app-ui-workout.png"
                alt={dict.recording.workoutAlt}
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-800">
              {dict.recording.workoutLabel}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {dict.recording.workoutDesc}
            </p>
          </motion.div>

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
                alt={dict.recording.dietAlt}
                fill
                className="object-cover object-top"
                sizes="280px"
              />
            </div>
            <p className="mt-4 text-sm font-medium text-gray-800">
              {dict.recording.dietLabel}
            </p>
            <p className="text-xs text-gray-400 mt-1">
              {dict.recording.dietDesc}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
