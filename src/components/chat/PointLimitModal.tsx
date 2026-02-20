"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Coins, Smartphone, ShoppingCart } from "lucide-react";

interface PointLimitModalProps {
  show: boolean;
  onClose: () => void;
  locale: string;
}

export default function PointLimitModal({
  show,
  onClose,
  locale,
}: PointLimitModalProps) {
  const isKo = locale !== "en";

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl p-6 max-w-sm w-full space-y-4 text-center"
        >
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <Coins className="w-8 h-8 text-white" />
          </div>

          <h3 className="text-xl font-bold text-gray-800">
            {isKo ? "포인트가 부족해요" : "Not enough points"}
          </h3>
          <p className="text-sm text-gray-500">
            {isKo
              ? "메시지 전송에 8pt가 필요합니다.\n앱에서 운동/식단을 기록하면 포인트를 적립할 수 있어요!"
              : "8pt required per message.\nEarn points by logging workouts & meals in the app!"}
          </p>

          <div className="space-y-2 pt-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--corevia-primary)] text-white font-semibold rounded-xl hover:bg-blue-600 transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              {isKo ? "앱에서 포인트 적립" : "Earn points in app"}
            </a>

            <button
              disabled
              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-100 text-gray-400 font-medium rounded-xl cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" />
              {isKo ? "포인트 충전 (준비 중)" : "Buy points (coming soon)"}
            </button>

            <button
              onClick={onClose}
              className="block w-full py-3 text-gray-500 text-sm font-medium hover:text-gray-700 transition-colors"
            >
              {isKo ? "닫기" : "Close"}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
