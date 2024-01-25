// Importations for Page Layout Setup.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Global Font Setup.

const inter = Inter({ subsets: ["latin"] });

// Page Metadata/Info.

export const metadata: Metadata = {
  title: "kash.fyi",
  description: "Page layout handled by Create-Next-App.",
};

// Layout Instantiation to Allow Next.js to Handle React Structuring.

const RootLayout = (
  { children }: 
  Readonly<{ 
    children: React.ReactNode
  }>) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default RootLayout;
