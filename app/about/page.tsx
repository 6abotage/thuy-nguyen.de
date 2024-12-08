"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-2">
        <div className="container flex h-14 items-center gap-12">
          <Link
            href="/"
            className="pl-4 text-3xl font-light hover:underline underline"
          >
            Thuy Nguyen
          </Link>
          <nav className="hidden gap-6 lg:flex">
            <Link href="#" className="text-2xl font-light hover:underline">
              Hire me
            </Link>
            <Link href="/about" className="text-2xl font-light hover:underline">
              About me
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4">
                <Link href="#" className="text-lg hover:underline">
                  Hire me
                </Link>
                <Link href="#" className="text-lg hover:underline">
                  About me
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="w-full flex flex-col items-center py-6">
        <div className="mt-4 text-center max-w-prose">
          <h1 className="text-3xl font-light">About Me</h1>
          <p className="mt-2 text-lg font-light text-muted-foreground">
            Hello! I'm Thuy Nguyen, a passionate designer with a love for
            creating visually stunning and meaningful designs. With a background
            in various design disciplines, I strive to bring a unique
            perspective to every project I work on. Let's create something
            amazing together!
          </p>
        </div>
      </main>
    </div>
  );
}
