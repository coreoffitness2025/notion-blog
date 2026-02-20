"use client";

import { Coins } from "lucide-react";

interface PointBalanceBadgeProps {
  balance: number;
  costPerMessage?: number;
}

export default function PointBalanceBadge({
  balance,
  costPerMessage = 8,
}: PointBalanceBadgeProps) {
  const isLow = balance < costPerMessage;

  return (
    <div
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
        isLow
          ? "bg-red-50 text-red-600"
          : "bg-purple-50 text-purple-700"
      }`}
    >
      <Coins className="w-3.5 h-3.5" />
      <span>{balance}pt</span>
    </div>
  );
}
