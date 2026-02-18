"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    title: "AI PT 코치",
    description:
      "4가지 성격 중 골라요. 내 운동 기록, 식단까지 다 보고 크로스 피드백해줘요",
    image: "/coach/female_3_face.png",
  },
  {
    title: "사진으로 식단 기록",
    description:
      "찍으면 끝. 칼로리 세는 거 귀찮잖아요. 빠짐없이 기록해야 제대로 된 코칭을 받을 수 있어요",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"
        />
      </svg>
    ),
  },
  {
    title: "기구 인식",
    description:
      "이름 모르는 기구, 그냥 찍으면 돼요. 사용법부터 세트/횟수까지 바로 기록할 수 있어요",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "포인트로 코치 꾸미기",
    description:
      "기록하면 포인트가 쌓여요. 모은 포인트로 코치 외형을 내 맘대로 꾸며보세요",
    icon: (
      <svg
        className="w-10 h-10 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function FeatureCards() {
  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 tracking-tight">
            빠짐없이 기록하면, 진짜 달라져요
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            운동도 식단도 다 보고 코칭해주는, 진짜 온라인 PT
          </p>
        </div>

        {/* 신뢰 요소 — 간결하게 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mb-14"
        >
          생체 2급 + 피트니스 대회 수상 트레이너가 직접 만든 AI
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100/80 transition-colors"
            >
              <div className="mb-5">
                {f.image ? (
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-white border border-gray-100">
                    <Image
                      src={f.image}
                      alt={f.title}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                ) : (
                  f.icon
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {f.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
