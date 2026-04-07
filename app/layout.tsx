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
  title: "Festus Phillip Adebola https://festus-s-portfolio.vercel.app",
  description: "A Frontend Web Developer specialized in NextJS and Typescript technologies to build scalbel and responsive user friendly web applications",
  keywords: ["Portfolio", "Festus", "Frontend", "Developer", "ReactJS"],
  openGraph: {
    title: "Festus Frontend Developer",
    description: "A Frontend Web developer",
    siteName: "https://festus-s-portfolio.vercel.app",
    locale: "en_UK",
    type: "profile",
    images: []
  },
  twitter: {
    card: "summary_large_image",
    title: "Frontend Developer",
    description: "A frontend web Developer",
    creator: "@Othodo_X",
    images: []
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet" : -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
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
          theme="system"
          />
        <Sidebar />
        {children}
        <Contact_Preview />
        <Footer />
      </body>
    </html>
  );
}
