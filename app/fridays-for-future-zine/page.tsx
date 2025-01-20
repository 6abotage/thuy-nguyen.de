// pages/ProjektFFF.tsx

"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import MockupCover from "./assets/01_MOCKUP_COVER.jpg";
import Image12 from "./assets/02_12.jpg";
import Image34 from "./assets/03_34.jpg";
import Image56 from "./assets/04_56.jpg";
import Image7 from "./assets/05_7.jpg";
import Cover from "./assets/06_Cover.jpg";
import Back from "./assets/07_Back.jpg";

// Define the images array
const IMAGES = [
  { src: MockupCover, alt: "Mockup Cover" },
  { src: Image12, alt: "Image 12" },
  { src: Image34, alt: "Image 34" },
  { src: Image56, alt: "Image 56" },
  { src: Image7, alt: "Image 7" },
  { src: Cover, alt: "Zine Cover" },
  { src: Back, alt: "Zine Back Cover" },
];

// Define the content paragraphs
const CONTENT = [
  {
    text: "Das faltbare „Fridays for Future” Zine im Stil von David Carson bietet einen informativen Einblick in die Grundlagen und Ziele der Bewegung und dient als idealer Ausgangspunkt für alle, die sich dem Kampf für eine bessere Zukunft anschließen möchten. Mit dem faltbaren Format lässt sich das Zine leicht mitnehmen und teilen. Durch die unkonventionelle Anordnung der Typografien und dem außergewöhnlichen Design zieht das Zine Aufmerksamkeit auf sich und regt durch die Informationszufuhr zum Nachdenken an.",
  },
  {
    text: "Das Projekt entstand nicht in Zusammenarbeit mit den Künstler:innen, sondern dient ausschließlich privaten Gestaltungszwecken.",
    italic: true,
  },
];

const ProjektFFF: React.FC = () => {
  return (
    <ProjectLayout
      title="Fridays For Future Zine"
      description="(Hommage an David Carson)"
      year="2023" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default ProjektFFF;
