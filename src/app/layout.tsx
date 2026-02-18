import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviahomepage.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CoreVia - 나만의 AI PT 코치",
    template: "%s | CoreVia",
  },
  description:
    "스마트폰 하나로 운동+식단 AI 코칭. 기록만 하는 앱은 많지만, 기록을 보고 조언해주는 앱은 CoreVia뿐.",
  openGraph: {
    title: "CoreVia - 나만의 AI PT 코치",
    description: "스마트폰 하나로 운동+식단 AI 코칭",
    siteName: "CoreVia",
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreVia - 나만의 AI PT 코치",
    description: "스마트폰 하나로 운동+식단 AI 코칭",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
