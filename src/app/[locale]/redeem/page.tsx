import type { Metadata } from "next";
import RedeemClient from "./client";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isKo = locale === "ko";
  const path = "/redeem";
  const pageUrl = isKo ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`;

  return {
    title: isKo ? "Pro 이용권 · 전자책 받기 - 코비아 피트니스" : "Get your ebook - CoreVia Fitness",
    description: isKo
      ? "주문번호와 주문자 성함을 넣으면 코비아 피트니스 Pro 이용권이 적용되고, 전자책이 포함된 주문이면 PDF를 받으실 수 있습니다."
      : "Enter your order number or code to get your ebook and CoreVia Fitness Pro.",
    alternates: { canonical: pageUrl },
    // 코드 등록 페이지는 검색에 노출될 이유가 없다. 메일·상세페이지로만 들어온다.
    robots: { index: false, follow: false },
  };
}

export default async function RedeemPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ c?: string }>;
}) {
  const { locale } = await params;
  // 메일 링크가 `?c=CV-...` 로 코드를 실어 온다 — 받는 사람은 입력할 게 없다
  const { c } = await searchParams;
  const isKo = locale === "ko";

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-14">
      <h1 className="text-2xl font-bold text-[#1B2433]">
        {isKo ? "Pro 이용권 · 전자책 받기" : "Get your ebook"}
      </h1>
      <p className="mt-3 leading-7 text-gray-600">
        {isKo
          ? "주문자 성함과 Pro를 받으실 앱 계정 이메일을 적어 주세요. 그 계정에 주문하신 상품의 Pro 기간이 바로 적용되고, 전자책이 포함된 주문이면 PDF도 이 자리에서 내려받으실 수 있습니다."
          : "Enter your order number (or the code you received). You will get the ebook PDF, and Pro access will be added to the account you sign in with."}
      </p>
      <div className="mt-8">
        <RedeemClient initialCode={c ?? ""} />
      </div>
    </main>
  );
}
