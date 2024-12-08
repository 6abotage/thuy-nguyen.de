"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageSlideshow } from "@/components/ui/image-slideshow";

import Beduerfnisbegriffe from "./output_images/Beduerfnisbegriffe_A0.webp";
import Eaafskript from "./output_images/eaafskript_A0.webp";
import EmotionaleIntelligenz from "./output_images/emotionale_intelligenz_a0.webp";
import GewaltfreieKommunikationImage from "./output_images/gewaltfreie_kommunikation_A0.webp";

const projectImages = [
  Beduerfnisbegriffe,
  Eaafskript,
  EmotionaleIntelligenz,
  GewaltfreieKommunikationImage,
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
      <p className="text-lg font-light mb-6">Emotionale Erste Hilfe</p>
      <div className="mb-8">
        <ImageSlideshow images={projectImages} />
      </div>
      <p className="text-lg font-light mb-6">
        Die informative Plakatreihe „Emotionale Erste Hilfe&quot; thematisiert
        auf Grundlage des Textes „Das hier ist Wasser&quot; von David Foster
        Wallace gewaltfreie Kommunikation und widmet sich der Auseinandersetzung
        mit den eigenen Gefühlen und Bedürfnissen. Viele Missverständnisse, die
        im Alltag entstehen, können auf Misskommunikation zurückgeführt werden.
        Die Vermittlung dieser Kommunikationstechniken soll eine kleine Hilfe zu
        einem harmonischeren Miteinander beitragen und Missverständnisse sowie
        Konflikte reduzieren.
      </p>
    </div>
  );
}
