// File: app/page.tsx (Home Page)

"use client";

import Link from "next/link";
import Image from "next/image";

// No need to import Button, Sheet, etc. here anymore

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
    <main className="flex-grow">
      {/* MAIN CONTENT */}
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
              {/* Info */}
              <div className="p-4 border-b border-black">
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
  );
}
