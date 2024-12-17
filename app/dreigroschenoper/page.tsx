"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import EmblaCarousel from "@/components/ui/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDES = [img1, img2, img3];

export default function ProjektDreigroschenoper() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Projekt Dreigroschenoper</h1>
      <p className="text-lg font-light mb-6">Die Dreigroschenoper</p>
      <div className="mb-8">
        {/* You can include additional elements such as images or slideshows here */}
      </div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      <p className="text-lg font-light mb-6">
        Die „Dreigroschenoper“ von Bertolt Brecht ist ein Theaterstück, das eine
        scharfe Kritik an der kapitalistischen Gesellschaft und dem moralischen
        Verfall der Menschen übt. Brecht nutzt das Drama, um die sozialen
        Ungerechtigkeiten und die Manipulationen der Machtstrukturen zu
        entlarven.
      </p>
      <p className="text-lg font-light mb-6">
        Das Kernelement der Dreigroschenoper ist der Verfremdungseffekt, der
        durch verschiedene Instrumente und Verfahren die Handlung bzw. die
        Bühnenrealität unterbricht und ein wesentlicher Bestandteil des epischen
        Theaters ist.
      </p>
      <p className="text-lg font-light mb-6">
        Der Verfremdungseffekt in dieser Plakatreihe ist das Konzept des Risses,
        der nicht nur eine weitere Ebene innerhalb des Plakates für
        Betrachter:innen schafft, sondern zusätzlich einen Einblick in das
        eigentliche Theaterstück gibt. Das Element des Risses geht in alle
        Plakate über, sodass eine Verknüpfung bzw. Zusammengehörigkeit kreiert
        wird.
      </p>
    </div>
  );
}
