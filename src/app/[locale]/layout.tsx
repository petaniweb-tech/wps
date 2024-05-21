import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Import Components //

import Navbar from "../components/navbar";
import Footer from "../components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wijaya Putra Santoso",
  description: "PT. Wijaya Putra Santoso (WPS) Transportation",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    defaultLocale: string;
  };
}

export default function RootLayout({
  children,
  params: { defaultLocale },
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={defaultLocale} className={`scroll-smooth ${inter.className}`}>
      <body className="bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
