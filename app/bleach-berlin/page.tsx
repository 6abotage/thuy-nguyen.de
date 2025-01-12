"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Instaflyer from "./assets/01_Instaflyer.jpg";
import Instatimetable from "./assets/02_Instatimetable.jpg";

const IMAGES = [
  { src: Instaflyer, alt: "Instagram Flyer - Bleach Berlin" },
  { src: Instatimetable, alt: "Instagram Timetable - Bleach Berlin" },
];

export default function BleachBerlin() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">
        Visuelles Konzept für Bleach Berlin
      </h1>
      <p className="text-lg font-light mb-8">(Grafikdesign)</p>
      <p className="text-lg font-light mb-10">
        Im Rahmen meiner Zusammenarbeit mit Bleach Berlin, einem auf Hyperpop,
        Underground Rap und elektronische Musik spezialisierten Eventlabel, habe
        ich visuelle Materialien für eines ihrer Events gestaltet.
      </p>
      <p className="text-lg font-light mb-10">
        Das Ziel war es, die energiegeladene und zugleich verspielte Atmosphäre
        der Veranstaltung visuell einzufangen. Für das Projekt habe ich einen
        Instagram-Post sowie einen Timetable entworfen, die durch auffällige
        Farbkompositionen und dynamische Layouts die Ästhetik und das Branding
        von Bleach Berlin widerspiegeln.
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
