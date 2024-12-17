"use client";

import img1 from "./output-001.png";
import img2 from "./output-2.png";
import img3 from "./output-002.png";
import img4 from "./output-3.png";
import img5 from "./output-4.png";
import EmblaCarousel from "@/components/ui/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDES = [img1, img2, img3, img4, img5];

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
      <h1 className="text-3xl font-light mb-4">Projekt FFF David Carson</h1>
      <p className="text-lg font-light mb-6">Fridays For Future Zine</p>
      <div className="mb-8">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <p className="text-lg font-light mb-6">Eine Hommage an David Carson</p>
      <p className="text-lg font-light mb-6">
        Das faltbare „Fridays for Future” Zine im Stil von David Carson bietet
        einen informativen Einblick in die Grundlagen und Ziele der Bewegung und
        dient als idealer Ausgangspunkt für alle, die sich dem Kampf für eine
        bessere Zukunft anschließen möchten. Mit dem faltbaren Format lässt sich
        das Zine leicht mitnehmen und teilen. Durch die unkonventionelle
        Anordnung der Typografien und dem außergewöhnlichen Design zieht das
        Zine Aufmerksamkeit auf sich und regt durch die Informationszufuhr zum
        Nachdenken an.
      </p>
    </div>
  );
}
