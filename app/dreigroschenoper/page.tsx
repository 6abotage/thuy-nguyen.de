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
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Die Dreigroschenoper</h1>
      <p className="text-lg font-light mb-8">(Poster Design)</p>
      <p className="text-lg font-light mb-10">
        Die „Dreigroschenoper“ von Bertolt Brecht ist ein Theaterstück, das eine
        scharfe Kritik an der kapitalistischen Gesellschaft und dem moralischen
        Verfall der Menschen übt. Brecht nutzt das Drama, um die sozialen
        Ungerechtigkeiten und die Manipulationen der Machtstrukturen zu
        entlarven.
      </p>
      <p className="text-lg font-light mb-10">
        Das Kernelement der Dreigroschenoper ist der Verfremdungseffekt, der
        durch verschiedene Instrumente und Verfahren die Handlung bzw. die
        Bühnenrealität unterbricht und ein wesentlicher Bestandteil des epischen
        Theaters ist. Der Verfremdungseffekt in dieser Plakatreihe ist das
        Konzept des Risses, der nicht nur eine weitere Ebene innerhalb des
        Plakates für Betrachter:innen schafft, sondern zusätzlich einen Einblick
        in das eigentliche Theaterstück gibt. Das Element des Risses geht in
        alle Plakate über, sodass eine Verknüpfung bzw. Zusammengehörigkeit
        kreiert wird.
      </p>

      {/* Images displayed vertically with spacing */}
      <div className="grid grid-cols-1 gap-8">
        {IMAGES.map((image, index) => (
          <div key={index} className="relative">
            <div
              className="relative w-full mx-auto"
              style={{
                maxHeight: "80vh",
                height: "auto",
                aspectRatio: "1080 / 1920",
                overflow: "hidden",
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
                className="absolute inset-0"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
