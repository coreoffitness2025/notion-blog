"use client";

import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* 큰 푸른색 원 - 왼쪽 위 */}
      <motion.div
        className="absolute -top-20 -left-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 작은 푸른색 원 - 오른쪽 */}
      <motion.div
        className="absolute top-1/4 -right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-2xl"
        animate={{
          y: [-20, 20, -20],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 플로팅 아이콘 - 덤벨 */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 text-4xl md:text-5xl"
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        💪
      </motion.div>

      {/* 플로팅 아이콘 - 달리기 */}
      <motion.div
        className="absolute bottom-20 left-10 md:left-20 text-4xl md:text-5xl"
        animate={{
          y: [10, -10, 10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        🏃
      </motion.div>

      {/* 플로팅 아이콘 - 타겟 */}
      <motion.div
        className="absolute top-1/3 left-5 md:left-16 text-3xl md:text-4xl"
        animate={{
          y: [-8, 8, -8],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        🎯
      </motion.div>

      {/* 회전하는 원형 장식 */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-32 h-32 border-2 border-dashed border-blue-200/50 rounded-full hidden md:block"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

