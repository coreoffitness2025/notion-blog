"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { getDictionary } from "@/lib/i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function GuidePreview({ locale }: { locale: string }) {
  const dict = getDictionary(locale);
  const prefix = locale === "ko" ? "" : `/${locale}`;
  const isEn = locale === "en";

  const categories = [
    {
      title: isEn ? "Fitness Guide" : "피트니스 가이드",
      desc: isEn
        ? "All-in-one fitness hub with calculators, programs, and guides"
        : "계산기, 프로그램, 가이드를 한 곳에서",
      href: `${prefix}/guide`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      children: [
        { label: isEn ? "1RM Calculator" : "1RM 계산기", href: `${prefix}/guide/workout/1rm` },
        { label: isEn ? "Calorie Calculator" : "칼로리 계산기", href: `${prefix}/guide/nutrition/calorie` },
        { label: isEn ? "Programs" : "운동 프로그램", href: `${prefix}/guide/workout/programs` },
      ],
    },
    {
      title: isEn ? "Workout Guide" : "운동 가이드",
      desc: isEn
        ? "99 exercises with proper form, target muscles, and step-by-step instructions"
        : "99개 운동의 올바른 자세, 타겟 근육, 단계별 가이드",
      href: `${prefix}/guide/workout/exercises`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
      children: [
        { label: isEn ? "Chest" : "가슴 운동", href: `${prefix}/guide/workout/exercises` },
        { label: isEn ? "Back" : "등 운동", href: `${prefix}/guide/workout/exercises` },
        { label: isEn ? "Legs" : "하체 운동", href: `${prefix}/guide/workout/exercises` },
      ],
    },
    {
      title: isEn ? "Nutrition Guide" : "영양 가이드",
      desc: isEn
        ? "5,672 food nutrition facts, meal plans, and calorie tracking"
        : "5,672개 음식 영양 정보, 식단 추천, 칼로리 관리",
      href: `${prefix}/guide/nutrition`,
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      ),
      children: [
        { label: isEn ? "Food Database" : "영양성분 사전", href: `${prefix}/guide/nutrition` },
        { label: isEn ? "Meal Plans" : "식단 추천", href: `${prefix}/guide/nutrition/meal-plans` },
        { label: isEn ? "Calorie Calculator" : "칼로리 계산기", href: `${prefix}/guide/nutrition/calorie` },
      ],
    },
  ];

  return (
    <section className="py-[var(--section-py)] px-[var(--section-px)] bg-[var(--corevia-bg)]">
      <div className="max-w-[1120px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[length:var(--text-heading)] font-bold text-gray-900 mb-3 tracking-tight">
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
          className="grid md:grid-cols-3 gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat.href} variants={item}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full hover:border-[var(--corevia-primary)]/30 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[var(--corevia-primary)] flex items-center justify-center mb-4">
                  {cat.icon}
                </div>
                <Link href={cat.href}>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 hover:text-[var(--corevia-primary)] transition-colors">
                    {cat.title}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{cat.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {cat.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-[var(--corevia-primary)] transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
