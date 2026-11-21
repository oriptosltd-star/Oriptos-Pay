import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Using basic fonts for now if localFont fails, or we rely on the Google Font in globals.css
// But keeping the structure clean.

export const metadata: Metadata = {
  title: "Layyah Wallet",
  description: "SuperPay PK - The Future of Digital Payments",
  manifest: "/manifest.json", 
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
