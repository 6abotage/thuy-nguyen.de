// File: app/layout.tsx or app/(whatever)/layout.tsx or RootLayout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Thuy Nguyen",
  description: "Artist Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* FOOTER */}
        <footer className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm flex flex-row justify-between py-4">
          <div className="ml-6 space-x-4">
            <Link href="/impressum">Impressum</Link>

            <Link href="/datenschutz">Datenschutz</Link>
          </div>
          <div className="text-right text-sm font-light mr-6 mb-2">
            © 2025 Thuy Nguyen. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
