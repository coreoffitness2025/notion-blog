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
    title: isKo ? "전자책 받기 · 코드 등록 - 코비아 피트니스" : "Get your ebook - CoreVia Fitness",
    description: isKo
      ? "주문번호 또는 코드를 넣으면 전자책 PDF와 코비아 피트니스 Pro 이용 기간을 받으실 수 있습니다."
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
        {isKo ? "전자책 받기" : "Get your ebook"}
      </h1>
      <p className="mt-3 leading-7 text-gray-600">
        {isKo
          ? "주문번호(또는 받으신 코드)를 넣어 주세요. 전자책 PDF를 내려받으실 수 있고, 앱에 로그인한 계정에 Pro 이용 기간이 함께 더해집니다."
          : "Enter your order number (or the code you received). You will get the ebook PDF, and Pro access will be added to the account you sign in with."}
      </p>
      <div className="mt-8">
        <RedeemClient initialCode={c ?? ""} />
      </div>
    </main>
  );
}
