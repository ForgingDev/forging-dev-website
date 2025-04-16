import Navbar from "@/components/ui/navbar/navbar";
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
  title: "Forging Dev",
  description: "Software Development Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} font-roboto-mono bg-forge-base container mx-auto px-4 py-6 text-white antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
