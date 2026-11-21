import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oriptos CRM",
  description: "Multi-tenant CRM for business management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}