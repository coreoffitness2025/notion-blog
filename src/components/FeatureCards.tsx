"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI PT 코치",
    description: "4가지 성격 중 골라. 독설형부터 격려형까지, 나한테 맞는 코치가 운동+식단 크로스 피드백",
    image: "/coach/female_3_face.png",
    color: "bg-blue-50",
    accent: "text-[var(--corevia-primary)]",
  },
  {
    title: "사진 식단",
    description: "찍으면 끝. 식단 기록의 완전함을 위해. AI가 음식 인식해서 영양소까지 자동 계산",
    icon: (
      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
    color: "bg-green-50",
    accent: "text-green-600",
  },
  {
    title: "기구 인식",
    description: "찍으면 운동 기록까지. 기구 이름부터 사용법, 세트/횟수까지 정확한 기록을 위해 AI가 알려줌",
    icon: (
      <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    color: "bg-orange-50",
    accent: "text-orange-600",
  },
  {
    title: "포인트 & 커스터마이징",
    description: "기록할수록 포인트 적립. 내 취향대로 코치를 꾸미세요. 기록이 곧 동기부여",
    icon: (
      <svg className="w-12 h-12 text-[var(--corevia-ai)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    color: "bg-purple-50",
    accent: "text-[var(--corevia-ai)]",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            당신의 완전한 기록이 당신을 성장시킵니다
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            모든 기록을 보고 최적의 전략을 세워주는,{" "}
            <strong className="text-gray-900">진짜 온라인 PT</strong>
          </p>
        </div>

        {/* 신뢰 배지 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 border border-gray-100 rounded-full">
            <div className="w-8 h-8 bg-[var(--corevia-primary)]/10 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-[var(--corevia-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">생체 2급 + 피트니스 대회 수상</strong> 트레이너가 직접 튜닝한 AI 에이전트
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className={`${f.color} rounded-2xl p-8 hover:shadow-lg transition-shadow`}
            >
              <div className="mb-4">
                {f.image ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden bg-white shadow-sm">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                ) : (
                  f.icon
                )}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${f.accent}`}>
                {f.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
