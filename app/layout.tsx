import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "お金の選び方研究所 - 先払い買取比較サイト",
  description: "先払い買取サービスの比較・情報サイト",
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
        {children}
      </body>
    </html>
  );
}
