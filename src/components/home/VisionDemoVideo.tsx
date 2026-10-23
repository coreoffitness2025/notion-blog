"use client";

import { useEffect, useRef } from "react";

/** 앱 체형분석 실제 화면 녹화(시뮬레이터·시험 계정·AI 생성 시연 인물). 움직임 줄이기 설정이면 멈춘 첫 장면만 */
export default function VisionDemoVideo({ label }: { label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        v.pause();
        v.removeAttribute("autoplay");
      }
    } catch {}
  }, []);
  return (
    <div className="rounded-[36px] border-[6px] border-gray-900 bg-gray-900 overflow-hidden shadow-xl">
      <video
        ref={ref}
        className="block w-full h-auto rounded-[30px]"
        src="/vision/posture-demo.mp4"
        poster="/vision/posture-demo-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}
