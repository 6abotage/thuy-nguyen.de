"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

import Instaflyer from "./assets/01_Instaflyer.jpg";
import Instatimetable from "./assets/02_Instatimetable.jpg";

const IMAGES = [
  { src: Instaflyer, alt: "Instagram Flyer - Bleach Berlin" },
  { src: Instatimetable, alt: "Instagram Timetable - Bleach Berlin" },
];

const CONTENT = [
  {
    text: "Im Rahmen meiner Zusammenarbeit mit Bleach Berlin, einem auf Hyperpop, Underground Rap und elektronische Musik spezialisierten Eventlabel, habe ich visuelle Materialien für eines ihrer Events gestaltet.",
  },
  {
    text: "Das Ziel war es, die energiegeladene und zugleich verspielte Atmosphäre der Veranstaltung visuell einzufangen. Für das Projekt habe ich einen Instagram-Post sowie einen Timetable entworfen, die durch auffällige Farbkompositionen und dynamische Layouts die Ästhetik und das Branding von Bleach Berlin widerspiegeln.",
  },
];

const BleachBerlin: React.FC = () => {
  return (
    <ProjectLayout
      title="Visuelles Konzept für Bleach Berlin"
      description="[Grafikdesign]"
      year="2024" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default BleachBerlin;
