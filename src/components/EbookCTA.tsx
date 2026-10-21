import Image from "next/image";
import Link from "next/link";

// 운동·영양 가이드에서 전자책 소개로 (2026-10-21 대표 "전자책 정보로 가는 링크를 뉴트리션 가이드랑 워크아웃 가이드에 둘 다")
// 사이트 /ebook 으로 보낸다(구매는 그 페이지에서 스마트스토어로). 한국어 페이지에서만.

export default function EbookCTA({ locale, from, className = "" }: { locale: string; from: "workout" | "nutrition" | "guide"; className?: string }) {
  if (locale !== "ko") return null;
  const line =
    from === "nutrition"
      ? "식단을 왜 이렇게 짜는지, 원리부터 알고 싶다면"
      : from === "workout"
        ? "운동 순서와 볼륨을 어떻게 잡는지, 원리부터 알고 싶다면"
        : "가이드의 내용을 한 권으로 이어서 읽고 싶다면";
  return (
    <section className={`max-w-[1152px] mx-auto px-4 ${className}`}>
      <Link
        href={`/ebook?from=guide-${from}`}
        className="flex items-center gap-4 sm:gap-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="relative w-16 h-20 sm:w-20 sm:h-[104px] shrink-0 overflow-hidden rounded-md bg-gray-50">
          <Image src="/ebook-cover.png" alt="Core of Fitness 전자책 표지" fill className="object-contain" sizes="80px" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--corevia-primary)] mb-1">전자책 Core of Fitness</p>
          <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug">{line}</p>
          <p className="text-sm text-gray-500 mt-1">체중 감량과 근비대의 핵심, 식단·운동 프로그램까지 · 20,000원</p>
        </div>
        <span className="hidden sm:inline-flex shrink-0 items-center bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold">
          전자책 살펴보기
        </span>
      </Link>
    </section>
  );
}
