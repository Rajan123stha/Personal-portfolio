import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Rajan Shrestha — Frontend & Fullstack Developer",
  description:
    "Portfolio of Rajan Shrestha — Frontend & Fullstack Developer specializing in React, Next.js, CMS architectures, and AWS deployments.",
  authors: [{ name: "Rajan Shrestha" }],
  keywords: [
    "Rajan Shrestha",
    "Frontend Developer",
    "Fullstack Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "AWS",
    "Payload CMS",
    "Wagtail",
    "Portfolio",
    "Kathmandu",
    "Nepal",
  ],
  openGraph: {
    title: "Rajan Shrestha — Frontend & Fullstack Developer",
    description:
      "Building scalable, CMS-driven web applications with clean architecture.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajan Shrestha — Frontend & Fullstack Developer",
    description:
      "Building scalable, CMS-driven web applications with clean architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${geist.variable} ${geistMono.variable}`}
    >
      <body className={`${geist.className} antialiased`}>
        <CustomCursor />
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6YX0QRV1BJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-6YX0QRV1BJ');
          `}
        </Script>
      </body>
    </html>
  );
}
