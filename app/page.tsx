"use client";

import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

import CoverEmotionaleErsteHilfe from "@/app/assets/cover/01_Cover_Emotionale_Erste_Hilfe.jpg";
import CoverDieDreigroschenoper from "@/app/assets/cover/02_Die_Dreigroschenoper.jpg";
import CoverVinyl from "@/app/assets/cover/03_Cover_Vinyl.jpg";
import CoverImSchattenDesStaunens from "@/app/assets/cover/04_Im_Schatten_Des_Staunens.jpg";
import CoverDasDritteBild from "@/app/assets/cover/05_Cover_Das_Dritte_Bild.jpg";
import CoverFridaysForFutureZine from "@/app/assets/cover/06_Cover_Fridays_For_Future_Zine.jpg";
import CoverZwischenDenZeilen from "@/app/assets/cover/07_Cover_Zwischen_Den_Zeilen.jpg";
import CoverBleachBerlin from "@/app/assets/cover/08_Cover_Bleach_Berlin.jpg";

const projects = [
  {
    href: "/emotionale-ersthilfe",
    title: "Emotionale Erste Hilfe",
    subtitle: "[POSTER DESIGN]",
    image: CoverEmotionaleErsteHilfe,
    alt: "Emotionale Erste Hilfe Poster Design",
  },
  {
    href: "/dreigroschenoper",
    title: "Die Dreigroschenoper",
    subtitle: "[POSTER DESIGN]",
    image: CoverDieDreigroschenoper,
    alt: "Die Dreigroschenoper Poster Design",
  },
  {
    href: "/vinyl",
    title: "Musik zum Quadrat",
    subtitle: "[VINYL DESIGN + FOTOGRAFIE]",
    image: CoverVinyl,
    alt: "Musik zum Quadrat Vinyl Design",
  },
  {
    href: "/im-schatten-des-staunens",
    title: "Im Schatten des Staunens",
    subtitle: "[FOTOGRAFIE]",
    image: CoverImSchattenDesStaunens,
    alt: "Im Schatten des Staunens Fotografie",
  },
  {
    href: "/das-dritte-bild",
    title: "Das Dritte Bild",
    subtitle: "[POSTER DESIGN + FOTOGRAFIE]",
    image: CoverDasDritteBild,
    alt: "Das Dritte Bild Fotografie",
  },
  {
    href: "/fridays-for-future-zine",
    title: "Fridays For Future Zine",
    subtitle: "[ZINE DESIGN]",
    image: CoverFridaysForFutureZine,
    alt: "Fridays For Future Zine Design",
  },
  {
    href: "/zwischen-den-zeilen",
    title: "Zwischen den Zeilen",
    subtitle: "[POSTER DESIGN]",
    image: CoverZwischenDenZeilen,
    alt: "Zwischen den Zeilen Poster Design",
  },
  {
    href: "/bleach-berlin",
    title: "Visuelles Konzept für Bleach Berlin",
    subtitle: "[GRAFIKDESIGN]",
    image: CoverBleachBerlin,
    alt: "Bleach Berlin Grafikdesign",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="pt-2">
        <div className="container flex h-14 items-center gap-14">
          <Link
            href="/"
            className="pl-4 text-3xl font-light hover:underline underline"
          >
            Thuy Nguyen
          </Link>
          <nav className="hidden gap-6 lg:flex">
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

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        {/* 
          On mobile (default): 1 column,
          on desktop (md+): 2 columns.
          Each item is a square image + text inside the same Link.
          We use 'divide-y' for horizontal lines between items on mobile,
          plus 'md:divide-x' for vertical lines in 2-col layout on desktop. 
        */}
        <div className="w-full py-6">
          <div
            className="
              border border-black
              grid grid-cols-1 md:grid-cols-2
              divide-y md:divide-y-0 md:divide-x
              divide-black
              w-full
            "
          >
            {projects.map((project, index) => (
              <Link
                key={project.href}
                href={project.href}
                className="flex flex-col"
              >
                {/* Project Info (with optional bottom border to separate text & image) */}
                <div className="p-4  border-b border-black">
                  <h2 className="text-sm font-light uppercase">
                    {project.title}
                  </h2>
                  <p className="text-sm font-light text-muted-foreground">
                    {project.subtitle}
                  </p>
                </div>

                {/* Square Image */}
                <div
                  className={`relative aspect-square border-b border-black ${
                    index < projects.length - 2 ? "mb-8" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    // Let the browser pick correct sizes
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2} // Preload first 2 images
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
