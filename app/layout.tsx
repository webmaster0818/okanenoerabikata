import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Header from "./components/Header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "先払い買取とは？おすすめ業者比較【2026年最新版】業界最高水準95%｜お金の選び方研究所",
  description: "先払い買取の仕組み・安全性・おすすめ優良業者4社を徹底比較。最高買取率95%、最短5分入金。古物商許可取得業者のみ厳選。違法業者の見分け方、トラブル回避法も解説。2026年最新情報。",
  robots: {
    index: false,
    follow: false,
  },
};

// 構造化データ: Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "お金の選び方研究所",
  "url": "https://8bb6ef92.okanenoerabikata-deploy.pages.dev",
  "logo": "https://8bb6ef92.okanenoerabikata-deploy.pages.dev/images/logo.png",
  "description": "先払い買取サービスの比較・情報サイト",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service"
  }
};

// 構造化データ: WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "お金の選び方研究所",
  "url": "https://8bb6ef92.okanenoerabikata-deploy.pages.dev",
  "description": "先払い買取サービスの比較・情報サイト",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://8bb6ef92.okanenoerabikata-deploy.pages.dev/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
