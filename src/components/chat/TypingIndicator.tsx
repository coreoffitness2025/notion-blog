"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TypingIndicatorProps {
  avatarSrc: string;
  coachName: string;
  avatarClassName?: string;
}

export default function TypingIndicator({
  avatarSrc,
  coachName,
  avatarClassName,
}: TypingIndicatorProps) {
  return (
    <div className="flex gap-2.5 justify-start">
      <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 mt-1 bg-gray-100">
        <Image
          src={avatarSrc}
          alt={coachName}
          width={32}
          height={32}
          className={`w-full h-full ${avatarClassName || "object-cover object-top"}`}
        />
      </div>
      <div className="flex flex-col gap-0.5">
        <span className="text-xs text-gray-400 ml-1">{coachName}</span>
        <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3 flex gap-1.5 items-center">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-2 h-2 bg-gray-400 rounded-full"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
