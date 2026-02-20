"use client";

import { MessageCircle } from "lucide-react";

interface MessageLimitBannerProps {
  remaining: number;
  limit: number;
  labels: {
    remaining: string;
    of: string;
    unlimited: string;
  };
}

export default function MessageLimitBanner({
  remaining,
  limit,
  labels,
}: MessageLimitBannerProps) {
  const isLow = remaining <= 2;

  return (
    <div
      className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium ${
        isLow
          ? "bg-red-50 text-red-600"
          : "bg-gray-50 text-gray-500"
      }`}
    >
      <MessageCircle className="w-3.5 h-3.5" />
      <span>
        {labels.remaining}: {remaining}/{limit}
      </span>
    </div>
  );
}
