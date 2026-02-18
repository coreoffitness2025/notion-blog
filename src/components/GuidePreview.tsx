"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const tools = [
  {
    href: "/guide/calorie",
    title: "칼로리 계산기",
    desc: "목표에 맞는 일일 칼로리와 매크로 계산",
    icon: "🔥",
  },
  {
    href: "/guide/1rm",
    title: "1RM 계산기",
    desc: "반복 횟수로 예상 최대 중량 계산",
    icon: "💪",
  },
  {
    href: "/guide/exercises",
    title: "운동 도감",
    desc: "부위별 300+ 운동 검색 및 가이드",
    icon: "📖",
  },
  {
    href: "/guide/programs",
    title: "운동 프로그램",
    desc: "목표별 주간 운동 루틴 추천",
    icon: "📋",
  },
  {
    href: "/guide/meal-plans",
    title: "식단 가이드",
    desc: "다이어트/벌크 식단 템플릿",
    icon: "🥗",
  },
  {
    href: "/guide/handbook",
    title: "피트니스 핸드북",
    desc: "입문자를 위한 필수 개념 정리",
    icon: "📚",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function GuidePreview() {
  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            무료 피트니스 도구
          </h2>
          <p className="text-gray-500 text-lg">
            앱 없이도 바로 쓸 수 있는 무료 도구들
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {tools.map((tool) => (
            <motion.div key={tool.href} variants={item}>
              <Link
                href={tool.href}
                className="block bg-white rounded-xl p-5 border border-gray-100 hover:border-[var(--corevia-primary)]/30 hover:shadow-md transition-all group"
              >
                <span className="text-2xl mb-3 block">{tool.icon}</span>
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
