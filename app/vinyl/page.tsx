// pages/MusikZumQuadrat.tsx

"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import VinylCover from "./assets/01_Vinyl_Cover.jpg";
import VinylBack from "./assets/02_Vinyl_Back.jpg";
import MockupBrochure1 from "./assets/03_Mockup_Brochure_21x21.png";
import MockupBrochure2 from "./assets/04_Mockup_Brochure_21x21.png";
import MockupBrochure3 from "./assets/05_Mockup_Brochure_21x21.png";
import MockupBrochure4 from "./assets/06_Mockup_Brochure_21x21.png";
import MockupBrochure5 from "./assets/07_Mockup_Brochure_21x21.png";
import MockupBrochure6 from "./assets/08_Mockup_Brochure_21x21.png";

// Define the images array
const IMAGES = [
  { src: VinylBack, alt: "Vinyl Cover" },
  { src: VinylCover, alt: "Vinyl Back Cover" },
  { src: MockupBrochure1, alt: "Mockup Brochure Page 1" },
  { src: MockupBrochure2, alt: "Mockup Brochure Page 2" },
  { src: MockupBrochure3, alt: "Mockup Brochure Page 3" },
  { src: MockupBrochure4, alt: "Mockup Brochure Page 4" },
  { src: MockupBrochure5, alt: "Mockup Brochure Page 5" },
  { src: MockupBrochure6, alt: "Mockup Brochure Page 6" },
];

// Define the content paragraphs
const CONTENT = [
  {
    text: "In diesem Projekt setzte ich mich mit dem Musikduo Snow Strippers auseinander, das in seiner Musik Elemente aus EDM, Electropop, New Rave, Witch House und Techno vereint. Ziel war die Entwicklung eines konsistenten Gestaltungskonzepts für eine Schallplatte und ein begleitendes Booklet für ihr Album Night Killaz Vol. 1. Die visuelle Umsetzung wurde durch eigens angefertigte Fotografien ergänzt, um die ästhetische und klangliche Identität des Duos authentisch zu unterstreichen.",
  },
  {
    text: "Das Projekt entstand nicht in Zusammenarbeit mit den Künstler:innen, sondern dient ausschließlich privaten Gestaltungszwecken.",
    italic: true,
  },
];

const MusikZumQuadrat: React.FC = () => {
  return (
    <ProjectLayout
      title="Musik zum Quadrat"
      description="[Hommage an Snow Strippers]"
      year="2025" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default MusikZumQuadrat;
