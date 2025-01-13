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
        <h1 className="text-3xl font-light">Die Dreigroschenoper</h1>
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
      {/* Images displayed vertically; each image fits mobile width, 
              centers on desktop, with max height of 80vh */}
      <div className="grid grid-cols-1 gap-8 px-4">
        {IMAGES.map((image, index) => (
          <div
            key={index}
            className="relative mx-auto w-full md:w-auto"
            /* optional: limit the maximum width on large screens if you want
                   style={{ maxWidth: '1200px' }} */
          >
            <Image
              src={image.src}
              alt={image.alt}
              // Provide a large width/height so Next calculates aspect ratio
              width={1920}
              height={1920}
              // Let Tailwind handle responsiveness
              className="w-full md:w-auto max-h-[80vh] object-contain mx-auto"
              // sizes helps the browser determine appropriate image size
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
