import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Sidebar from "@/components/sidebar/Sidebar";
import Contact_Preview from "@/components/contact-preview/Contact_Preview";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable}  antialiased relative`}
      >
        <Toaster 
          position="bottom-right"
          />
        <Sidebar />
        {children}
        <div id="contact">
        <Contact_Preview />
        </div>
        <Footer />
      </body>
    </html>
  );
}
