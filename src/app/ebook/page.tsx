"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const chapters = [
  { icon: "🏋️", title: "운동 원리", desc: "점진적 과부하, 복합 운동, 분할 프로그래밍" },
  { icon: "🔬", title: "근비대의 과학", desc: "반복 범위, 볼륨, 주간 빈도 최적화" },
  { icon: "🥩", title: "영양과 매크로", desc: "단백질 타이밍, 칼로리 설계, 식단 구성" },
  { icon: "🔥", title: "다이어트 전략", desc: "체지방 감량의 실전 원칙과 유지법" },
  { icon: "💊", title: "보충제 가이드", desc: "필수 vs 불필요, 근거 기반 보충제 선택" },
  { icon: "🛡️", title: "부상 방지", desc: "관절 보호, 워밍업, 오버트레이닝 예방" },
  { icon: "🎯", title: "부위별 운동", desc: "가슴, 등, 어깨, 팔, 하체 완벽 가이드" },
  { icon: "🌱", title: "초보자 로드맵", desc: "첫 3개월 프로그램과 습관 형성" },
  { icon: "🧠", title: "마인드셋", desc: "꾸준함의 기술, 정체기 돌파법" },
];

const highlights = [
  { number: "130+", label: "페이지" },
  { number: "27", label: "심층 아티클" },
  { number: "9", label: "카테고리" },
];

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-medium mb-6">
              전자책
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4">
              Core of Fitness
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mb-3">
              가장 핵심적이고 직관적인 피트니스의 핵심을
              <br className="hidden sm:block" />
              130페이지에 담았습니다.
            </p>
            <p className="text-sm text-gray-400">
              생체 2급 + 네추럴 보디빌딩 대회 수상 경력의 저자가 직접 집필
            </p>
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="pb-16 px-4">
        <div className="max-w-[600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="grid grid-cols-3 gap-4"
          >
            {highlights.map((h) => (
              <div
                key={h.label}
                className="bg-gray-50 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl font-bold text-gray-800">{h.number}</p>
                <p className="text-xs text-gray-400 mt-1">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="pb-20 px-4">
        <div className="max-w-[800px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-xl font-bold text-gray-800 text-center mb-8"
          >
            목차
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-3">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.04 }}
                className="bg-gray-50 rounded-xl p-5"
              >
                <span className="text-xl mb-2 block">{ch.icon}</span>
                <h3 className="text-sm font-semibold text-gray-800 mb-1">
                  {ch.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {ch.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-8">
            이런 분께 추천합니다
          </h2>
          <div className="space-y-3">
            {[
              "운동을 시작했지만 뭘 먹어야 할지 모르겠는 분",
              "식단은 관리하는데 운동 프로그래밍이 막막한 분",
              "유튜브 정보가 너무 많아서 핵심만 정리해서 보고 싶은 분",
              "PT 없이도 혼자 체계적으로 운동하고 싶은 분",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 bg-white rounded-xl p-4"
              >
                <svg
                  className="w-5 h-5 text-[var(--corevia-primary)] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-sm text-gray-700">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            준비 중입니다
          </h2>
          <p className="text-gray-500 mb-8">
            곧 구매하실 수 있습니다. 출시 알림을 받으시려면 문의를 남겨주세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors"
            >
              출시 알림 받기
            </Link>
            <Link
              href="/guide/handbook"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors"
            >
              무료 핸드북 먼저 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
