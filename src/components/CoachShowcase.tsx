"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const personalities = [
  {
    id: "tough",
    label: "독설형",
    emoji: "😤",
    color: "bg-red-500",
    lightColor: "bg-red-50",
    textColor: "text-red-600",
    image: "/coach/male_4_side.png",
    chat: [
      { role: "coach", text: "오늘 운동 빠졌네? 또?" },
      { role: "user", text: "오늘 좀 피곤해서..." },
      { role: "coach", text: "피곤한 건 운동 안 해서야. 15분만 해. 안 하면 내일 더 귀찮아짐." },
    ],
  },
  {
    id: "warm",
    label: "격려형",
    emoji: "🤗",
    color: "bg-pink-500",
    lightColor: "bg-pink-50",
    textColor: "text-pink-600",
    image: "/coach/female_4_front.png",
    chat: [
      { role: "coach", text: "오늘 식단 기록 완벽이네! 대단해 👏" },
      { role: "user", text: "근데 저녁에 치킨 먹었어..." },
      { role: "coach", text: "괜찮아! 점심까지 잘 했으니까. 내일 단백질 좀 더 채우면 돼. 넌 잘하고 있어!" },
    ],
  },
  {
    id: "cool",
    label: "냉정형",
    emoji: "🧊",
    color: "bg-cyan-500",
    lightColor: "bg-cyan-50",
    textColor: "text-cyan-600",
    image: "/coach/male_3_front.png",
    chat: [
      { role: "coach", text: "이번 주 운동 3회, 식단 기록률 71%. 분석 결과 공유할게." },
      { role: "user", text: "어떤 분석?" },
      { role: "coach", text: "등 운동 후 단백질 섭취가 평균 15g 부족해. 운동 후 30분 내 보충하면 근합성 효율 올라감." },
    ],
  },
  {
    id: "balance",
    label: "밸런스형",
    emoji: "⚖️",
    color: "bg-violet-500",
    lightColor: "bg-violet-50",
    textColor: "text-violet-600",
    image: "/coach/female_5_side.png",
    chat: [
      { role: "coach", text: "오늘 하체 운동 했네. 스쿼트 볼륨 좋았어!" },
      { role: "user", text: "근데 무릎이 좀 아프던데" },
      { role: "coach", text: "무릎 통증이면 깊이를 좀 줄여봐. 풀 스쿼트 대신 패러렐까지만. 다음에도 아프면 말해줘, 대체 운동 짜줄게." },
    ],
  },
];

export default function CoachShowcase() {
  const [active, setActive] = useState("tough");
  const current = personalities.find((p) => p.id === active)!;

  return (
    <section className="py-20 px-4 bg-[var(--corevia-bg)]">
      <div className="max-w-[1100px] mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            4가지 성격의 AI 코치
          </h2>
          <p className="text-gray-500 text-lg">나한테 맞는 코치를 골라봐</p>
        </div>

        {/* 성격 탭 */}
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {personalities.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                active === p.id
                  ? `${p.color} text-white shadow-lg scale-105`
                  : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200"
              }`}
            >
              {p.emoji} {p.label}
            </button>
          ))}
        </div>

        {/* 콘텐츠 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-14"
          >
            {/* 캐릭터 이미지 */}
            <div className="relative w-48 h-72 md:w-56 md:h-80 shrink-0">
              <Image
                src={current.image}
                alt={`${current.label} 코치`}
                fill
                className="object-contain drop-shadow-lg"
                sizes="(max-width: 768px) 192px, 224px"
              />
            </div>

            {/* 채팅 말풍선 */}
            <div className="flex-1 max-w-lg space-y-3">
              {current.chat.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: msg.role === "coach" ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`px-5 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                      msg.role === "coach"
                        ? `${current.lightColor} ${current.textColor} rounded-tl-md`
                        : "bg-gray-100 text-gray-700 rounded-tr-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
