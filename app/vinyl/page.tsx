"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import VinylCover from "./assets/01_Vinyl_Cover.jpg";
import VinylBack from "./assets/02_Vinyl_Back.jpg";
import MockupBrochure1 from "./assets/03_Mockup_Brochure_21x21.png";
import MockupBrochure2 from "./assets/04_Mockup_Brochure_21x21.png";
import MockupBrochure3 from "./assets/05_Mockup_Brochure_21x21.png";
import MockupBrochure4 from "./assets/06_Mockup_Brochure_21x21.png";
import MockupBrochure5 from "./assets/07_Mockup_Brochure_21x21.png";
import MockupBrochure6 from "./assets/08_Mockup_Brochure_21x21.png";

const IMAGES = [
  { src: VinylBack, alt: "Vinyl Cover" },
  { src: VinylCover, alt: "Vinyl Back Cover" },
  { src: MockupBrochure1, alt: "Mockup Brochure Page 1" },
  { src: MockupBrochure2, alt: "Mockup Brochure Page 2" },
  { src: MockupBrochure3, alt: "Mockup Brochure Page 3" },
  { src: MockupBrochure4, alt: "Mockup Brochure Page 4" },
  { src: MockupBrochure5, alt: "Mockup Brochure Page 5" },
  { src: MockupBrochure6, alt: "Mockup Brochure Page 6" },
];

export default function MusikZumQuadrat() {
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
        <h1 className="text-3xl font-light">Musik zum Quadrat</h1>
        <p className="text-lg font-light mb-8">[Hommage an Snow Strippers]</p>
        <p className="text-lg font-light mb-10">
          In diesem Projekt setzte ich mich mit dem Musikduo Snow Strippers
          auseinander, das in seiner Musik Elemente aus EDM, Electropop, New
          Rave, Witch House und Techno vereint. Ziel war die Entwicklung eines
          konsistenten Gestaltungskonzepts für eine Schallplatte und ein
          begleitendes Booklet für ihr Album Night Killaz Vol. 1. Die visuelle
          Umsetzung wurde durch eigens angefertigte Fotografien ergänzt, um die
          ästhetische und klangliche Identität des Duos authentisch zu
          unterstreichen. Das Projekt entstand nicht in Zusammenarbeit mit den
          Künstler:innen, sondern dient ausschließlich privaten
          Gestaltungszwecken.
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
