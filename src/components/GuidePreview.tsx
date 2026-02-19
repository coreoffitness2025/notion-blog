"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

const hrefs = [
  "/guide/calorie",
  "/guide/1rm",
  "/guide/exercises",
  "/guide/programs",
  "/guide/meal-plans",
  "/guide/handbook",
];

const icons = ["🔥", "💪", "📖", "📋", "🥗", "📚"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function GuidePreview({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;

  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            {dict.guidePreview.title}
          </h2>
          <p className="text-gray-500 text-lg">
            {dict.guidePreview.subtitle}
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {dict.guidePreview.tools.map((tool, i) => (
            <motion.div key={hrefs[i]} variants={item}>
              <Link
                href={`${prefix}${hrefs[i]}`}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-3 block">{icons[i]}</span>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[var(--corevia-primary)] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-500">{tool.desc}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
