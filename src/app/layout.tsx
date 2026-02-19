import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://coreviafitness.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CoreVia - 나만의 AI PT 코치 | 운동 식단 AI 코칭 앱",
    template: "%s | CoreVia",
  },
  description:
    "스마트폰 하나로 운동+식단 AI 코칭. 기록만 하는 앱은 많지만, 기록을 보고 조언해주는 앱은 CoreVia뿐. AI가 운동과 식단을 분석하고 맞춤 피드백을 제공합니다.",
  keywords: [
    "AI PT",
    "AI 운동 코치",
    "AI 식단 분석",
    "온라인 PT",
    "운동 기록 앱",
    "식단 관리 앱",
    "피트니스 앱",
    "개인 트레이너",
    "CoreVia",
    "코어비아",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "CoreVia - 나만의 AI PT 코치",
    description:
      "스마트폰 하나로 운동+식단 AI 코칭. AI가 기록을 분석하고 맞춤 피드백을 제공합니다.",
    siteName: "CoreVia",
    locale: "ko_KR",
    type: "website",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "CoreVia - AI PT 코치 앱",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreVia - 나만의 AI PT 코치",
    description:
      "스마트폰 하나로 운동+식단 AI 코칭. AI가 기록을 분석하고 맞춤 피드백을 제공합니다.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "y8H_9PlpPjFc0uOo0TSUmPgHc-70MAbP-W3NGiVzLaI",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "CoreVia",
      url: siteUrl,
      logo: `${siteUrl}/opengraph-image.png`,
      description:
        "AI 기반 개인 맞춤 피트니스 코칭 앱. 운동과 식단을 기록하면 AI 코치가 분석하고 피드백합니다.",
    },
    {
      "@type": "SoftwareApplication",
      name: "CoreVia",
      operatingSystem: "Android, iOS",
      applicationCategory: "HealthApplication",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
      description:
        "AI PT 코치가 운동과 식단을 분석하고 맞춤 피드백을 제공하는 피트니스 앱",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
