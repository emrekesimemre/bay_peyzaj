import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import Header from "@/components/layout/Header";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Bay Peyzaj | Premium Peyzaj & Mimari Tasarım",
    template: "%s | Bay Peyzaj",
  },
  description:
    "Bay Peyzaj; bahçe tasarımı, peyzaj mimarlığı ve dış mekan düzenleme alanlarında lüks ve estetik çözümler sunar.",
  keywords: ["peyzaj", "bahçe tasarımı", "peyzaj mimarlığı", "dış mekan", "bay peyzaj"],
  openGraph: {
    title: "Bay Peyzaj | Premium Peyzaj & Mimari Tasarım",
    description:
      "Bahçe tasarımı, peyzaj mimarlığı ve dış mekan düzenleme alanlarında lüks ve estetik çözümler.",
    url: "https://baypeyzaj.com",
    siteName: "Bay Peyzaj",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-saf-beyaz text-antrasit" suppressHydrationWarning>
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
        </SmoothScroll>
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
