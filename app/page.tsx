"use client";

import { Menu } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Ausstellungsplakat_Resonanz from "@/app/assets/Ausstellungsplakat_Resonanz.png";
import Dreigroschenoper_Cover from "@/app/assets/Dreigroschenoper_Cover.png";
import EmotionaleErsteHilfe_GewaltfreieKommunikation from "@/app/assets/EmotionaleErsteHilfe_GewaltfreieKommunikation.png";
import FFF_DavidCarson from "@/app/assets/FFF_DavidCarson.png";
import PolitischesPlakat from "@/app/assets/PolitischesPlakat.png";
import PolitischesPlakat_Victimblaming from "@/app/assets/PolitischesPlakat_Victimblaming.png";

const projects = [
  {
    href: "/resonanz",
    title: "Ausstellungsplakat Resonanz",
    subtitle: "[POSTER DESIGN]",
    image: Ausstellungsplakat_Resonanz,
    alt: "Ausstellungsplakat Resonanz poster design",
  },
  {
    href: "/dreigroschenoper",
    title: "Dreigroschenoper",
    subtitle: "[COVER DESIGN]",
    image: Dreigroschenoper_Cover,
    alt: "Dreigroschenoper cover design",
  },
  {
    href: "/gewaltfrei",
    title: "Gewaltfreie Kommunikation",
    subtitle: "[POSTER DESIGN]",
    image: EmotionaleErsteHilfe_GewaltfreieKommunikation,
    alt: "Emotionale Erste Hilfe - Gewaltfreie Kommunikation poster design",
  },
  {
    href: "/fff",
    title: "FFF David Carson",
    subtitle: "[POSTER DESIGN]",
    image: FFF_DavidCarson,
    alt: "FFF David Carson poster design",
  },
  {
    href: "/vinyl",
    title: "Politisches Plakat",
    subtitle: "[POSTER DESIGN]",
    image: PolitischesPlakat,
    alt: "Politisches Plakat design",
  },
  {
    href: "/zeilen",
    title: "VICTIMBLAMING - ZWISCHEN DEN ZEILEN",
    subtitle: "[POSTER DESIGN]",
    image: PolitischesPlakat_Victimblaming,
    alt: "Politisches Plakat - Victimblaming design",
  },
];

export default function Home() {
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
            <Link href="/about" className="text-2xl font-light hover:underline">
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
      <main className="flex-grow">
        <div className="w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black w-full">
            {projects.map((project, index) => (
              <Link
                key={project.href}
                href={project.href}
                className={`bg-white border-b border-black ${index % 2 === 0 ? "md:border-r" : ""
                  }`}
              >
                <div className="p-4 space-y-2 border-b border-black">
                  <h2 className="text-sm font-light uppercase">
                    {project.title}
                  </h2>
                  <p className="text-sm font-light text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>
                <div className="relative" style={{ aspectRatio: "9 / 13.5", height: "auto", maxHeight: "70vh", margin: "0 auto" }}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

