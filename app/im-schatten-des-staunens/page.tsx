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
        <h1 className="text-3xl font-light">Im Schatten des Staunens</h1>
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
