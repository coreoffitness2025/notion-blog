import Image from "next/image";

// 글·가이드 페이지 하단 체중계 카드 (2026-10-13 대표 지시)
// 네이버 검색 유입(가이드·글)에서 스마트스토어 상품으로 바로 보낸다 — 바깥 홍보 링크는 SS 상품만(decision/promo-links-to-smartstore).
// 문구는 products/scale 페이지와 같은 값만(policy/commerce-sale-terms): 블루투스 체중계 · 24,000 · 무료배송 · Pro 3개월. 체성분·정확도 문구 금지.
// 스마트스토어는 국내 판매만이라 한국어 페이지에서만 보인다.

const SS_SCALE = "https://smartstore.naver.com/coreviafitness_store/products/13779186739";

export default function ScaleStoreCTA({
  locale,
  medium,
  detail,
  className = "mt-8",
}: {
  locale: string;
  medium: "post" | "exercise" | "nutrition" | "mealplan";
  detail: string;
  className?: string;
}) {
  if (locale !== "ko") return null;
  const href = `${SS_SCALE}?nt_source=site&nt_medium=${medium}&nt_detail=${encodeURIComponent(detail)}`;

  return (
    <section className={`not-prose ${className} rounded-2xl border border-gray-200 bg-white overflow-hidden`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 p-4 sm:p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-gray-50">
          <Image src="/products/scale-photo.jpg" alt="코비아 스마트 체중계" fill className="object-cover" sizes="96px" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-semibold text-[var(--corevia-primary)] mb-1">코비아 스마트 체중계</p>
          <p className="text-base sm:text-lg font-bold text-gray-800 leading-snug">
            올라서면 몸무게가 앱에 날짜별로 쌓여요
          </p>
          <p className="text-sm text-gray-500 mt-1">24,000원 · 무료배송 · 앱 Pro 3개월 포함</p>
        </div>
        <span className="hidden sm:inline-flex shrink-0 items-center bg-gray-900 text-white px-4 py-2.5 rounded-xl text-sm font-semibold">
          스마트스토어에서 보기
        </span>
      </a>
    </section>
  );
}
