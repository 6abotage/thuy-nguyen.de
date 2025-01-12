"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import CoverImage from "./assets/01_Cover.jpg";
import Beduerfnisbegriffe from "./assets/02_Beduerfnisbegriffe.jpg";
import Eaafskript from "./assets/03_Eeafskript.jpg";
import GewaltfreieKommunikationImage from "./assets/04_Gewaltfreiekommunikation.jpg";
import EmotionaleIntelligenz from "./assets/05_Emotionaleintelligenz.jpg";

const IMAGES = [
  { src: CoverImage, alt: "Cover - Emotionale Erste Hilfe" },
  { src: Beduerfnisbegriffe, alt: "Bedürfnisbegriffe Poster" },
  { src: Eaafskript, alt: "Eaafskript Poster" },
  {
    src: GewaltfreieKommunikationImage,
    alt: "Gewaltfreie Kommunikation Poster",
  },
  { src: EmotionaleIntelligenz, alt: "Emotionale Intelligenz Poster" },
];

export default function GewaltfreieKommunikation() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Gewaltfreie Kommunikation</h1>
      <p className="text-lg font-light mb-8">Emotionale Erste Hilfe</p>
      <p className="text-lg font-light mb-10">
        Die informative Plakatreihe „Emotionale Erste Hilfe&quot; thematisiert
        auf Grundlage des Textes „Das hier ist Wasser&quot; von David Foster
        Wallace gewaltfreie Kommunikation und widmet sich der Auseinandersetzung
        mit den eigenen Gefühlen und Bedürfnissen. Viele Missverständnisse, die
        im Alltag entstehen, können auf Misskommunikation zurückgeführt werden.
        Die Vermittlung dieser Kommunikationstechniken soll eine kleine Hilfe zu
        einem harmonischeren Miteinander beitragen und Missverständnisse sowie
        Konflikte reduzieren.
      </p>

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
