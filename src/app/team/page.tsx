"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const careers = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "4대 기업 IT 전략팀",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "(전) 삼성전자 반도체 엔지니어",
  },
];

const fitness = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: "생활스포츠지도자 2급 (보디빌딩)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    label: "WNGP, Natural SSA 등 네추럴 보디빌딩 대회 수상 다수",
  },
];

const values = [
  {
    title: "직접 경험한 사람이 만듭니다",
    description:
      "수백 번의 벌크업과 다이어트를 직접 해본 사람만이 아는 디테일. 운동 기록의 어떤 숫자가 중요한지, 식단 분석에서 뭘 봐야 하는지를 체감으로 알고 있습니다.",
  },
  {
    title: "기술로 풀어야 할 문제를 압니다",
    description:
      "대기업 IT 전략팀에서 시스템을 설계하고, 반도체 라인에서 데이터를 다뤘습니다. 어디에 AI를 쓰고, 어디에 사람의 판단을 넣을지 구분할 줄 압니다.",
  },
  {
    title: "운동과 식단, 둘 다 진심입니다",
    description:
      "대부분의 피트니스 앱은 운동이면 운동, 식단이면 식단만 다룹니다. CoreVia는 처음부터 둘 다 제대로 다루겠다는 원칙으로 만들었습니다.",
  },
];

export default function TeamPage() {
  return (
    <section className="bg-white pt-20 pb-24 px-4">
      <div className="max-w-[800px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight mb-4">
            만든 사람
          </h1>
          <p className="text-lg text-gray-500">
            운동도 개발도 직접 합니다
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 rounded-3xl p-8 md:p-12 mb-12"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Avatar */}
            <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-blue-100 to-gray-100 flex items-center justify-center flex-shrink-0">
              <Image
                src="/logo.png"
                alt="James"
                width={80}
                height={80}
                className="rounded-xl"
              />
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-1">James</h2>
              <p className="text-sm text-gray-400 mb-6">Founder & Developer</p>

              {/* Career */}
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Career
                </p>
                <div className="space-y-2.5">
                  {careers.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fitness */}
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  Fitness
                </p>
                <div className="space-y-2.5">
                  {fitness.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span className="text-gray-400">{item.icon}</span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            왜 이 앱을 만드는가
          </h3>
          <div className="space-y-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h4 className="text-base font-semibold text-gray-800 mb-2">
                  {v.title}
                </h4>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-400 mb-4">
            궁금한 점이 있으신가요?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 text-sm font-medium rounded-xl hover:bg-gray-200 transition-colors"
          >
            문의하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
