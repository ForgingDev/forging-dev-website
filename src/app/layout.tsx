import { AnalyticsScripts } from "@/components/analytics-script";
import CookieBanner from "@/components/ui/cookie-banner";
import Footer from "@/components/ui/footer/footer";
import Navbar from "@/components/ui/navbar/navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Forging Dev | Professional Web & Application Development Studio",
  description:
    "Transform your business with custom web development, online stores & applications. Serving clients worldwide with innovative digital solutions.",
  metadataBase: new URL("https://www.forging-dev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Forging Dev | Professional Web & Application Development",
    description:
      "Transform your business with custom web development, online stores & applications. Serving clients worldwide.",
    url: "https://www.forging-dev.com",
    siteName: "Forging Dev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forging Dev - Software Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forging Dev | Web & App Development Studio",
    description:
      "Transform your business with custom web development, online stores & applications.",
    images: ["/images/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
  keywords: [
    "web development",
    "application development",
    "online stores",
    "e-commerce",
    "custom software",
    "Romania",
    "Sibiu",
    "digital transformation",
    "software development Sibiu",
    "website design Romania",
    "mobile app development",
    "custom web solutions",
  ],
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} font-roboto-mono bg-forge-base text-white antialiased`}
      >
        <SpeedInsights />
        <Navbar />
        <div className="container mx-auto py-6 pt-24">{children}</div>
        <Footer />
        <CookieBanner />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
