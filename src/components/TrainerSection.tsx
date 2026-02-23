"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

export default function TrainerSection({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const dir = locale === "ko" ? "/store-screenshots" : "/store-screenshots-en";

  return (
    <section className="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--corevia-bg,#F8FAFC)]">
      <div className="max-w-[1120px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-wider text-blue-500 bg-blue-50 px-3 py-1 rounded-full mb-4 uppercase">
            {dict.trainer.badge}
          </span>
          <h2 className="text-[length:var(--text-heading)] font-bold text-gray-800 mb-3 tracking-tight">
            {dict.trainer.title}
          </h2>
        </motion.div>

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
                src={`${dir}/${dict.trainer.screenshot}`}
                alt="Trainer Mode"
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
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              {dict.trainer.subtitle}
            </h3>
            <p className="text-base md:text-lg text-gray-500 leading-relaxed">
              {dict.trainer.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
