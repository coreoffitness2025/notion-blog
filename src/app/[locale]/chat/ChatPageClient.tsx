"use client";

import dynamic from "next/dynamic";
import type { Dictionary } from "@/lib/i18n";

const ChatFlowContainer = dynamic(() => import("./ChatFlowContainer"), {
  ssr: false,
  loading: () => (
    <div className="min-h-[calc(100vh-64px)] bg-gray-900 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin" />
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
  return <ChatFlowContainer locale={locale} dict={dict} />;
}
