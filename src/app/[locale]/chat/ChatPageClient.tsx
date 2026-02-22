"use client";

import dynamic from "next/dynamic";
import type { Dictionary } from "@/lib/i18n";

const ComingSoon = dynamic(() => import("./ComingSoon"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[calc(100vh-64px)] bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#4285F4] border-t-transparent rounded-full animate-spin" />
    </div>
  ),
});

export default function ChatPageClient({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  return <ComingSoon locale={locale} />;
}
