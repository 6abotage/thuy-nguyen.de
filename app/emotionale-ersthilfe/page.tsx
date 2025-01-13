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
    <div className="container mx-auto min-h-full py-8">
      <div className="px-4">
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-sm font-light hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        <h1 className="text-3xl font-light">Gewaltfreie Kommunikation</h1>
        <p className="text-lg font-light mb-8">[Poster Design]</p>
        <p className="text-lg font-light mb-10">
          Die informative Plakatreihe „Emotionale Erste Hilfe&quot; thematisiert
          auf Grundlage des Textes „Das hier ist Wasser&quot; von David Foster
          Wallace gewaltfreie Kommunikation und widmet sich der
          Auseinandersetzung mit den eigenen Gefühlen und Bedürfnissen. Viele
          Missverständnisse, die im Alltag entstehen, können auf
          Misskommunikation zurückgeführt werden. Die Vermittlung dieser
          Kommunikationstechniken soll eine kleine Hilfe zu einem harmonischeren
          Miteinander beitragen und Missverständnisse sowie Konflikte
          reduzieren.
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
