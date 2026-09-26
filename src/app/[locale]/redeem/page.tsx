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
    title: isKo ? "사은품 코드 등록 - 코비아 피트니스" : "Redeem a code - CoreVia Fitness",
    description: isKo
      ? "전자책·체중계 구매 시 받으신 코드를 등록하면 코비아 피트니스 Pro를 이용하실 수 있습니다."
      : "Register the code you received with your purchase to activate CoreVia Fitness Pro.",
    alternates: { canonical: pageUrl },
    // 코드 등록 페이지는 검색에 노출될 이유가 없다. 메일·상세페이지로만 들어온다.
    robots: { index: false, follow: false },
  };
}

export default async function RedeemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isKo = locale === "ko";

  return (
    <main className="mx-auto w-full max-w-[640px] px-5 py-14">
      <h1 className="text-2xl font-bold text-[#1B2433]">
        {isKo ? "사은품 코드 등록" : "Redeem a code"}
      </h1>
      <p className="mt-3 leading-7 text-gray-600">
        {isKo
          ? "전자책이나 체중계를 구매하시면서 받으신 코드를 등록해 주세요. 앱에 로그인한 계정에 Pro 이용 기간이 더해집니다."
          : "Enter the code you received with your purchase. Pro access will be added to the account you sign in with."}
      </p>
      <div className="mt-8">
        <RedeemClient />
      </div>
    </main>
  );
}
