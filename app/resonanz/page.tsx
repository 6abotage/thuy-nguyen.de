"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import EmblaCarousel from "@/components/ui/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import img7 from "./7.jpg";
import img8 from "./8.jpg";
import img9 from "./9.jpg";
import img10 from "./10.jpg";
import img11 from "./11.jpg";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDES = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
];

export default function Resonanz() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Resonanz</h1>
      <p className="text-lg font-light mb-6">Emotionale Erste Hilfe</p>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      {/* <ImageSlideshow images={projectImages} /> */}
      <p className="text-lg font-light mb-6">
        Die Sprache ist ein Werkzeug, mit dem wir uns Menschen untereinander
        verständigen können. Doch manchmal ist uns dies durch gewisse Barrieren
        nicht möglich. Die Wechselwirkung von Sprache und Verständnis bringt oft
        Missverständnisse mit sich. Informationen, Emotionen und Gefühle finden
        ihr Ziel aber auch über andere Arten der Kommunikation. Diese Arbeit
        beschäftigt sich mit der Wechselwirkung von Sprache mit Bildern. Wie
        reagieren sie zueinander oder miteinander?
      </p>
      <p className="text-lg font-light italic mb-6">
        Auch wenn wir das gleiche Bild vor uns sehen, kann es uns etwas anderes
        sagen und auch eine andere Bedeutung haben. Was siehst du? Was fühlst
        du, wenn du hinschaust?
      </p>
      <p className="text-lg font-light mb-6">
        Die Bildpaare laden nicht nur zu einem Austausch untereinander ein,
        sondern auch dem Austausch unter den Betrachter:innen und der Person,
        die diese eingefangen hat. Eine Sprache, mit der wir uns austauschen
        können, ohne richtig oder falsch zu liegen.
      </p>
    </div>
  );
}
