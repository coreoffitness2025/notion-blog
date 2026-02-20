"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ChatBubbleProps {
  role: "user" | "coach";
  text: string;
  avatarSrc?: string;
  coachName?: string;
  isStreaming?: boolean;
}

export default function ChatBubble({
  role,
  text,
  avatarSrc,
  coachName,
  isStreaming,
}: ChatBubbleProps) {
  const isCoach = role === "coach";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex gap-2.5 ${isCoach ? "justify-start" : "justify-end"}`}
    >
      {isCoach && avatarSrc && (
        <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-1 bg-gray-100">
          <Image
            src={avatarSrc}
            alt={coachName || "Coach"}
            width={32}
            height={32}
            className="object-cover object-top w-full h-full"
          />
        </div>
      )}

      <div className="flex flex-col gap-0.5 max-w-[80%]">
        {isCoach && coachName && (
          <span className="text-xs text-gray-400 ml-1">{coachName}</span>
        )}
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
            isCoach
              ? "bg-gray-100 text-gray-700 rounded-tl-md"
              : "bg-[var(--corevia-primary)] text-white rounded-tr-md"
          } ${isStreaming ? "animate-pulse" : ""}`}
        >
          {text}
        </div>
      </div>
    </motion.div>
  );
}
