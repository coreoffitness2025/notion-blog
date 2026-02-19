"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const chapters = [
  {
    num: "0",
    title: "들어가기에 앞서서",
    items: ["책에서 전하고자 하는 메시지", "피트니스, 단순하지만 강력한 원칙"],
  },
  {
    num: "1",
    title: "식단",
    items: [
      "식단의 원칙",
      "목표 칼로리와 매크로 설정",
      "다이어트 식단 추천",
      "피해야 하는 음식들",
      "효과적인 단백질 섭취",
      "운동 후 탄수화물을 먹어야 하는 이유",
      "GI 지수의 진실",
      "다이어트 중에도 지방을 섭취해야 하는 이유",
      "다이어트 정체기를 뚫는 방법",
      "탄수화물 싸이클링",
      "간헐적 단식 / 키토제닉",
      "그 외 21개 주제",
    ],
  },
  {
    num: "2",
    title: "운동",
    items: [
      "운동의 원칙",
      "근육 운동의 중요성",
      "운동 방법과 루틴 구성",
      "부위별 운동 (하체/등/가슴/어깨/팔)",
    ],
  },
  {
    num: "3",
    title: "대회 / 바디프로필",
    items: ["대회 & 바디프로필 준비", "피크위크 전략"],
  },
  {
    num: "4",
    title: "부록 (음식 정보)",
    items: [
      "탄수화물 · 단백질 · 지방",
      "술안주 · 과일 · 외식",
      "양념/소스 · 보충제",
    ],
  },
];

const highlights = [
  { number: "104+", label: "페이지" },
  { number: "5", label: "챕터" },
  { number: "40+", label: "주제" },
];

export default function EbookPage() {
  return (
    <main className="min-h-screen bg-[var(--corevia-bg)]">
      {/* Hero */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-[900px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-10"
          >
            {/* Cover Image */}
            <div className="flex-shrink-0">
              <div className="w-[260px] rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                <Image
                  src="/ebook-cover.png"
                  alt="Core of Fitness 표지"
                  width={260}
                  height={368}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-[var(--corevia-primary)]/10 text-[var(--corevia-primary)] rounded-full text-xs font-semibold mb-4">
                전자책
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight mb-3">
                Core of Fitness
              </h1>
              <p className="text-lg text-gray-500 mb-2">피트니스의 핵심</p>
              <p className="text-sm text-gray-500 leading-relaxed max-w-md mb-6">
                다이어트는 지식보다 실행과 의지의 문제입니다. 하지만 핵심을 이해하지
                못한 채 실행하면 지속하기 어렵습니다.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                이 책은 다이어트와 근비대의 핵심이 무엇인지를 명확하게 하고,
                이를 토대로 한 식단/운동 프로그램을 제공합니다.
                알아두면 유용한 포인트들과 근본에 살을 붙여나갈 운동/영양 지식들을
                수록했습니다.
                <br className="hidden sm:block" /><br className="hidden sm:block" />
                이 책이 여러분들의 건강한 일상을 설계하는 데에 기여할 수 있기를
                희망합니다.
              </p>
              <p className="text-xs text-gray-400">
                저자: James (생활스포츠지도자 2급 · 네추럴 보디빌딩 대회 수상)
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Numbers */}
      <section className="pb-12 px-4">
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
                className="bg-white rounded-2xl p-5 text-center border border-gray-100"
              >
                <p className="text-2xl font-bold text-[var(--corevia-primary)]">
                  {h.number}
                </p>
                <p className="text-xs text-gray-400 mt-1">{h.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TOC Preview Images */}
      <section className="pb-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-xl font-bold text-gray-800 text-center mb-8"
          >
            목차
          </motion.h2>

          {/* TOC Images */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center mb-10"
          >
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-[380px] mx-auto md:mx-0">
              <Image
                src="/ebook-toc1.png"
                alt="목차 1"
                width={380}
                height={536}
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-gray-200 max-w-[380px] mx-auto md:mx-0">
              <Image
                src="/ebook-toc2.png"
                alt="목차 2"
                width={380}
                height={536}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* TOC Text */}
          <div className="space-y-4 max-w-[700px] mx-auto">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.25 + i * 0.05 }}
                className="bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-sm font-bold text-[var(--corevia-primary)]">
                    {ch.num}.
                  </span>
                  <h3 className="text-base font-semibold text-gray-800">
                    {ch.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {ch.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-gray-500 bg-gray-50 px-2.5 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is this for */}
      <section className="bg-white py-16 px-4 border-t border-gray-100">
        <div className="max-w-[600px] mx-auto">
          <h2 className="text-xl font-bold text-gray-800 text-center mb-8">
            이런 분께 추천합니다
          </h2>
          <div className="space-y-3">
            {[
              "운동을 시작했지만 뭘 먹어야 할지 모르겠는 분",
              "식단은 관리하는데 운동 프로그래밍이 막막한 분",
              "유튜브 정보가 너무 많아서 핵심만 정리해서 보고 싶은 분",
              "대회나 바디프로필을 준비하고 있는 분",
            ].map((text) => (
              <div
                key={text}
                className="flex items-start gap-3 bg-[var(--corevia-bg)] rounded-xl p-4"
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
        <div className="max-w-[500px] mx-auto">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
            <p className="text-sm text-gray-400 mb-2">전자책 (PDF)</p>
            <p className="text-3xl font-bold text-gray-800 mb-1">
              ₩11,000
            </p>
            <p className="text-xs text-gray-400 mb-6">결제 후 이메일로 즉시 발송</p>

            {/* TODO: Stripe Checkout 연동 후 href를 /api/checkout으로 변경 */}
            <button
              disabled
              className="w-full py-4 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl opacity-50 cursor-not-allowed mb-3"
            >
              구매하기
            </button>
            <p className="text-xs text-gray-400">
              결제 시스템 준비 중입니다. 곧 구매하실 수 있습니다.
            </p>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/guide/handbook"
              className="text-sm text-gray-500 hover:text-[var(--corevia-primary)] transition-colors"
            >
              무료 핸드북 먼저 보기 →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
