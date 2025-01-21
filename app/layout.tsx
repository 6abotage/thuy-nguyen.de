// File: app/layout.tsx or app/RootLayout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

// --- Additional imports for Header ---
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
        {/* HEADER now lives here */}
        <header className="pt-2">
          <div className="flex h-14 items-center justify-between gap-12 lg:justify-start">
            <Link
              href="/"
              className="pl-4 text-3xl font-light hover:underline underline"
            >
              Thuy Nguyen
            </Link>
            <nav className="hidden gap-6 lg:flex">
              <Link
                href="/about"
                className="text-2xl font-light hover:underline"
              >
                About me
              </Link>
            </nav>

            {/* Responsive mobile menu using Sheet */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden ">
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-4">
                  <Link href="#" className="text-lg hover:underline">
                    Hire me
                  </Link>
                  <Link href="/about" className="text-lg hover:underline">
                    About me
                  </Link>
                  <Link
                    href="https://www.instagram.com/itsthuynguyen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-600"
                  >
                    <span>Instagram</span>
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/thu-thuy-nguyen-3345ab20a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-gray-600"
                  >
                    <span>LinkedIn</span>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        {/* MAIN CONTENT (individual pages) */}
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
