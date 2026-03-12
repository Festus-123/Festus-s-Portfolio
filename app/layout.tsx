import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changaOne = Changa_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-Changa-one",
});

export const metadata: Metadata = {
  title: "festus's portfolio",
  description: "A portfolio the describes a software developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${changaOne.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
