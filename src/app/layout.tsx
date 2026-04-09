import type { Metadata } from "next";
import { Geist, Geist_Mono, Geologica } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Mira — Your AI Recruiting Team",
  description:
    "Three AI agents analyze demand, scan the market, and source talent in parallel. Get a curated shortlist, not a pile of resumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${geologica.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
