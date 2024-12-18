"use client";

import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

import EmblaCarousel from "@/components/ui/carousel/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDES = [img1, img2, img3, img4, img5, img6];

export default function Home() {
  return (
    <div className="container mx-auto min-h-full px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-light hover:underline"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to projects
      </Link>
      <h1 className="text-3xl font-light mb-4">Musik zum Quadrat</h1>
      <p className="text-lg font-light mb-6">Eine Hommage an Snowstrippers</p>
      <div className="mb-8">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
      <p className="text-lg font-light mb-6">Eine Hommage an David Carson</p>
      <p className="text-lg font-light mb-6">
        Im Rahmen des Projekts "Musik zum Quadrat" an der ecosign Akademie für
        Gestaltung habe ich eine Vinyl-Platte inklusive Broschüre gestaltet.
        Hierbei handelt es sich um eine Hommage an die amerikanische Band
        Snowstrippers. Der unverwechselbare Stil der Band stand im Mittelpunkt
        meines Konzepts, das ich in einem eigens organisierten Fotoshooting
        visuell umgesetzt habe. Die Gestaltung der Broschüre sowie das
        Plattendesign greifen die Ästhetik und die Atmosphäre ihrer Musik auf
        und vereinen Fotografie und Editorial Design zu einem stimmigen
        Gesamtkunstwerk.
      </p>
    </div>
  );
}
