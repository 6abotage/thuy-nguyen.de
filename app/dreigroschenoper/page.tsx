"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import CoverOrange from "./assets/01_Cover_Orange.jpg";
import Poster from "./assets/02_Poster.jpg";
import Lila from "./assets/03_Lila.jpg";
import Blau from "./assets/04_Blau.jpg";
import Orange from "./assets/05_Orange.jpg";

const IMAGES = [
  { src: CoverOrange, alt: "Cover - Orange" },
  { src: Poster, alt: "Poster" },
  { src: Lila, alt: "Lila Poster" },
  { src: Blau, alt: "Blau Poster" },
  { src: Orange, alt: "Orange Poster" },
];

export default function Dreigroschenoper() {
  return (
    <div className="container mx-auto min-h-full py-8">
      <div className="px-4">
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-sm font-light hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        <h1 className="text-3xl font-light mb-4">Die Dreigroschenoper</h1>
        <p className="text-lg font-light mb-8">[Poster Design]</p>
        <p className="text-lg font-light mb-10">
          Die „Dreigroschenoper“ von Bertolt Brecht ist ein Theaterstück, das
          eine scharfe Kritik an der kapitalistischen Gesellschaft und dem
          moralischen Verfall der Menschen übt. Brecht nutzt das Drama, um die
          sozialen Ungerechtigkeiten und die Manipulationen der Machtstrukturen
          zu entlarven.
        </p>
        <p className="text-lg font-light mb-10">
          Das Kernelement der Dreigroschenoper ist der Verfremdungseffekt, der
          durch verschiedene Instrumente und Verfahren die Handlung bzw. die
          Bühnenrealität unterbricht und ein wesentlicher Bestandteil des
          epischen Theaters ist. Der Verfremdungseffekt in dieser Plakatreihe
          ist das Konzept des Risses, der nicht nur eine weitere Ebene innerhalb
          des Plakates für Betrachter:innen schafft, sondern zusätzlich einen
          Einblick in das eigentliche Theaterstück gibt. Das Element des Risses
          geht in alle Plakate über, sodass eine Verknüpfung bzw.
          Zusammengehörigkeit kreiert wird.
        </p>
      </div>
      {/* Images displayed vertically with full width on mobile */}
      <div className="grid grid-cols-1 gap-8">
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className="relative w-full"
            style={{
              maxHeight: "80vh",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={1920} // Assuming full-width images
              height={1080} // Adjust for the proper aspect ratio
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
