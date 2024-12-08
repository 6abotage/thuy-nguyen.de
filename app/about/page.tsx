"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <header className="pt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
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
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-8 text-center">
            About Me
          </h1>
          <div className="space-y-12">
            <section className="space-y-4">
              <h2 className="text-2xl font-light mb-4">
                Künstlerisches Statement
              </h2>
              <p className="text-lg font-light leading-relaxed">
                Meine Arbeit ist ein kontinuierliches Experiment – eine
                spielerische Herangehensweise in den Feldern Fotografie,
                Grafikdesign und Art Direction, das die Grenzen des Möglichen
                erkundet. Ich arbeite in Räumen, in denen Ordnung auf Chaos
                trifft, in denen nichts so ist, wie es scheint.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Mit meiner Fotografie fange ich Momente ein, die sowohl
                inszeniert als auch tief real wirken – eine Balance zwischen
                Kontrolle und Intuition. Im Design setze ich auf das Unerwartete
                und verdrehe Typografie und visuelle Formen zu neuen Gestalten,
                damit Ideen umso kraftvoller wirken.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Mich zieht es zu den Rändern der Gesellschaft, zu dem, was
                unausgesprochen oder ungesehen bleibt. Es geht darum, das
                Konventionelle zu hinterfragen und das Unkonventionelle zu
                feiern.
              </p>
            </section>
            <section className="space-y-4">
              <h2 className="text-2xl font-light mb-4">Artist Statement</h2>
              <p className="text-lg font-light leading-relaxed">
                My work is an ongoing experiment – a playful approach across the
                fields of photography, graphic design, and art direction,
                exploring the limits of what&apos;s possible. I create in spaces
                where order collides with chaos, where nothing is as it seems.
              </p>
              <p className="text-lg font-light leading-relaxed">
                Through my photography, I capture moments that feel both staged
                and deeply real – balancing control and intuition. In design, I
                lean into the unexpected, twisting typography and visual forms
                into new shapes to make ideas hit with greater impact.
              </p>
              <p className="text-lg font-light leading-relaxed">
                I&apos;m drawn to the edges of society, to what remains unspoken
                or unseen. It&apos;s about questioning the conventional and
                celebrating the unconventional.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
