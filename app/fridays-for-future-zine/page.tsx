"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import MockupCover from "./assets/01_MOCKUP_COVER.jpg";
import Image12 from "./assets/02_12.jpg";
import Image34 from "./assets/03_34.jpg";
import Image56 from "./assets/04_56.jpg";
import Image7 from "./assets/05_7.jpg";
import Cover from "./assets/06_Cover.jpg";
import Back from "./assets/07_Back.jpg";

const IMAGES = [
  { src: MockupCover, alt: "Mockup Cover" },
  { src: Image12, alt: "Image 12" },
  { src: Image34, alt: "Image 34" },
  { src: Image56, alt: "Image 56" },
  { src: Image7, alt: "Image 7" },
  { src: Cover, alt: "Zine Cover" },
  { src: Back, alt: "Zine Back Cover" },
];

export default function ProjektFFF() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Fridays For Future Zine</h1>
      <p className="text-lg font-light mb-8">(Hommage an David Carson)</p>
      <p className="text-lg font-light mb-10">
        Das faltbare „Fridays for Future” Zine im Stil von David Carson bietet
        einen informativen Einblick in die Grundlagen und Ziele der Bewegung und
        dient als idealer Ausgangspunkt für alle, die sich dem Kampf für eine
        bessere Zukunft anschließen möchten. Mit dem faltbaren Format lässt sich
        das Zine leicht mitnehmen und teilen. Durch die unkonventionelle
        Anordnung der Typografien und dem außergewöhnlichen Design zieht das
        Zine Aufmerksamkeit auf sich und regt durch die Informationszufuhr zum
        Nachdenken an.
      </p>

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
              width={1920} // Assuming a full-width image
              height={1080} // Adjust for the proper aspect ratio
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
