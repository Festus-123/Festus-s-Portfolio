import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Changa_One,
  Poppins,
  Montserrat,
  Oswald
} from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";

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
  variable: "--font-changa-one",
});

const poppins = Poppins({
  weight: ["400", "600", "700"], // normal, semi-bold, bold
  subsets: ["latin"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  weight: ["400", "600", "700"], // normal, semi-bold, bold
  subsets: ["latin"],
  variable: "--font-oswald",
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
        className={`${geistSans.variable} ${geistMono.variable} ${changaOne.variable} ${poppins.variable} ${oswald.variable} antialiased relative`}
      >
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
