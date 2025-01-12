"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

import Cover from "./assets/01_Cover.jpg";
import Ausstellungsposter from "./assets/02_Ausstellungsposter.jpg";
import Orange from "./assets/03_Orange.jpg";
import Zaun from "./assets/04_Zaun.jpg";
import Maus from "./assets/05_Maus.jpg";
import Garten from "./assets/06_Garten.jpg";
import Embryo from "./assets/07_Embryo.jpg";
import Kerze from "./assets/08_Kerze.jpg";
import Weiss from "./assets/09_Weiss.jpg";
import Beine from "./assets/10_Beine.jpg";
import Gesicht from "./assets/11_Gesicht.jpg";

const IMAGES = [
  { src: Cover, alt: "Cover - Resonanz" },
  { src: Ausstellungsposter, alt: "Ausstellungsposter" },
  { src: Orange, alt: "Orange" },
  { src: Zaun, alt: "Zaun" },
  { src: Maus, alt: "Maus" },
  { src: Garten, alt: "Garten" },
  { src: Embryo, alt: "Embryo" },
  { src: Kerze, alt: "Kerze" },
  { src: Weiss, alt: "Weiß" },
  { src: Beine, alt: "Beine" },
  { src: Gesicht, alt: "Gesicht" },
];

export default function Resonanz() {
  return (
    <div className="container mx-auto min-h-full  py-8">
      <div className="px-4">
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-sm font-light hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        <h1 className="text-3xl font-light mb-4">Resonanz</h1>
        <p className="text-lg font-light mb-8">[Fotografie]</p>
        <p className="text-lg font-light mb-10">
          Die Sprache ist ein Werkzeug, mit dem wir uns Menschen untereinander
          verständigen können. Doch manchmal ist uns dies durch gewisse
          Barrieren nicht möglich. Die Wechselwirkung von Sprache und
          Verständnis bringt oft Missverständnisse mit sich. Informationen,
          Emotionen und Gefühle finden ihr Ziel aber auch über andere Arten der
          Kommunikation. Diese Arbeit beschäftigt sich mit der Wechselwirkung
          von Sprache mit Bildern. Wie reagieren sie zueinander oder
          miteinander?
        </p>
        <p className="text-lg font-light italic mb-10">
          Auch wenn wir das gleiche Bild vor uns sehen, kann es uns etwas
          anderes sagen und auch eine andere Bedeutung haben. Was siehst du? Was
          fühlst du, wenn du hinschaust?
        </p>
        <p className="text-lg font-light mb-10">
          Die Bilder laden nicht nur zu einem Austausch untereinander ein,
          sondern auch dem Austausch unter den Betrachter:innen und der Person,
          die diese eingefangen hat. Eine Sprache, mit der wir uns austauschen
          können, ohne richtig oder falsch zu liegen.
        </p>
      </div>
      {/* Images displayed vertically with spacing */}
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
