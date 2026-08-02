import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lottmart | B2B Marketplace Platform - Trade at Scale. Earn More.",
    template: "%s | Lottmart B2B Platform"
  },
  description: "Lottmart is a premium B2B marketplace platform connecting distributors, retailers, and promoters in India. Trade at scale, reduce inventory costs, and earn commissions.",
  keywords: [
    "B2B Marketplace",
    "Wholesale Platform",
    "Lot Trading",
    "Bulk Buying",
    "Distributor Network",
    "Retail Marketplace",
    "Trade Network",
    "Commission Marketplace",
    "Wholesale App India",
    "Volume Pricing Platform"
  ],
  metadataBase: new URL("https://www.lottmart.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.lottmart.com",
    title: "Lottmart | B2B Marketplace Platform - Trade at Scale. Earn More.",
    description: "Lottmart is a premium B2B marketplace platform connecting distributors, retailers, and promoters in India. Trade at scale, reduce inventory costs, and earn commissions.",
    images: [
      {
        url: "/assets/hero-illustration.png",
        width: 1200,
        height: 630,
        alt: "Lottmart B2B Platform",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Lottmart | B2B Marketplace Platform - Trade at Scale. Earn More.",
    description: "Lottmart is a premium B2B marketplace platform connecting distributors, retailers, and promoters in India. Trade at scale, reduce inventory costs, and earn commissions.",
    images: ["/assets/hero-illustration.png"]
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=3' },
      { url: '/icon.png?v=3', type: 'image/png' },
    ],
    shortcut: '/favicon.ico?v=3',
    apple: '/apple-icon.png?v=3',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-bg-primary text-text-primary">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
