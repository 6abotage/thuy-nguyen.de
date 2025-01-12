"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Cover from "./assets/01_Cover.jpg";
import Victimblaming from "./assets/02_Victimblaming.jpg";
import ToxischePositivitaet from "./assets/03_Toxischepositivitaet.jpg";
import Gaslighting from "./assets/04_Gaslighting.jpg";

const IMAGES = [
  { src: Cover, alt: "Cover - Zwischen den Zeilen" },
  { src: Victimblaming, alt: "Victim Blaming Poster" },
  { src: ToxischePositivitaet, alt: "Toxische Positivität Poster" },
  { src: Gaslighting, alt: "Gaslighting Poster" },
];

export default function ZwischenDenZeilen() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Zwischen den Zeilen</h1>
      <p className="text-lg font-light mb-8">(Poster Design)</p>
      <p className="text-lg font-light mb-10">
        In unserer modernen Gesellschaft werden wir oft mit bestimmten
        Erwartungen konfrontiert, die unser emotionales Wohlbefinden und unsere
        Wahrnehmung der Realität beeinflussen. Drei Themen, die immer wieder an
        Bedeutung gewinnen, sind toxische Positivität, Gaslighting und Victim
        Blaming.
      </p>
      <p className="text-lg font-light mb-10">
        Diese drei Themen sind miteinander verflochten und verdeutlichen, wie
        gesellschaftliche Normen und individuelle Verhaltensweisen auf subtile,
        aber tiefgreifende Weise psychische Belastungen hervorrufen können. Sie
        berauben uns unserer Authentizität und machen es schwierig, in einer
        gesunden Weise mit unseren eigenen Gefühlen, Wahrnehmungen und
        Erfahrungen umzugehen.
      </p>
      <p className="text-lg font-light mb-10">
        Diese Plakatreihe lädt dazu ein, diese Mechanismen zu hinterfragen und
        ein Bewusstsein für die Auswirkungen dieser Phänomene zu schaffen. Indem
        wir lernen, unsere Gefühle anzuerkennen, unsere Wahrnehmung zu
        verteidigen und Verantwortung dort zu suchen, wo sie hingehört, können
        wir eine Gesellschaft fördern, die gesünder, empathischer und gerechter
        ist.
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
