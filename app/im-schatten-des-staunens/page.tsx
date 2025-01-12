"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Flur from "./assets/01_Flur.jpg";
import Piercing from "./assets/02_Piercing.jpg";
import Plastik from "./assets/03_Plastik.jpg";
import Fenster from "./assets/04_Fenster.jpg";
import Parkhaus from "./assets/05_Parkhaus.jpg";
import Gesicht from "./assets/06_Gesicht.jpg";
import Badewanne from "./assets/07_Badewanne.jpg";
import Treppe from "./assets/08_Treppe.jpg";

const IMAGES = [
  { src: Flur, alt: "Flur" },
  { src: Piercing, alt: "Piercing" },
  { src: Plastik, alt: "Plastik" },
  { src: Fenster, alt: "Fenster" },
  { src: Parkhaus, alt: "Parkhaus" },
  { src: Gesicht, alt: "Gesicht" },
  { src: Badewanne, alt: "Badewanne" },
  { src: Treppe, alt: "Treppe" },
];

export default function ImSchattenDesStaunens() {
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
        <h1 className="text-3xl font-light mb-4">Im Schatten des Staunens</h1>
        <p className="text-lg font-light mb-8">[Fotografie]</p>
        <p className="text-lg font-light mb-10">
          Was fasziniert uns an unheimlichen Bildern, düsteren Geschichten oder
          schaurigen Filmsequenzen? Warum fühlen wir uns von Dingen angezogen,
          die Angst und Unbehagen hervorrufen? Und wie verwandelt sich die
          Konfrontation mit dem Unheimlichen in einen Moment des Staunens und
          der Faszination?
        </p>
        <p className="text-lg font-light mb-10">
          Mit meinem Fotoprojekt untersuche ich, wie das Staunen aus der
          Auseinandersetzung mit dem Unheimlichen entsteht. In unserer modernen
          Welt streben wir nach Harmonie und blenden das Verstörende oft aus –
          dabei sind es gerade diese Momente, die uns die Zerbrechlichkeit und
          Komplexität unseres Daseins bewusst machen.
        </p>
        <p className="text-lg font-light mb-10">
          Durch Bilder, die gleichzeitig irritieren und faszinieren, möchte ich
          die Betrachter:innen dazu einladen, sich mit ihren eigenen Gefühlen
          auseinanderzusetzen und Staunen als eine ungewohnte, aber bereichernde
          Perspektive neu zu entdecken.
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
