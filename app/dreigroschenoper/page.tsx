// pages/Dreigroschenoper.tsx

"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import CoverOrange from "./assets/01_Cover_Orange.jpg";
import Poster from "./assets/02_Poster.jpg";
import Lila from "./assets/03_Lila.jpg";
import Blau from "./assets/04_Blau.jpg";
import Orange from "./assets/05_Orange.jpg";

// Define the images array
const IMAGES = [
  { src: CoverOrange, alt: "Cover - Orange" },
  { src: Poster, alt: "Poster" },
  { src: Lila, alt: "Lila Poster" },
  { src: Blau, alt: "Blau Poster" },
  { src: Orange, alt: "Orange Poster" },
];

// Define the content paragraphs
const CONTENT = [
  {
    text: "Die „Dreigroschenoper“ von Bertolt Brecht ist ein Theaterstück, das eine scharfe Kritik an der kapitalistischen Gesellschaft und dem moralischen Verfall der Menschen übt. Brecht nutzt das Drama, um die sozialen Ungerechtigkeiten und die Manipulationen der Machtstrukturen zu entlarven.",
  },
  {
    text: "Das Kernelement der Dreigroschenoper ist der Verfremdungseffekt, der durch verschiedene Instrumente und Verfahren die Handlung bzw. die Bühnenrealität unterbricht und ein wesentlicher Bestandteil des epischen Theaters ist. Der Verfremdungseffekt in dieser Plakatreihe ist das Konzept des Risses, der nicht nur eine weitere Ebene innerhalb des Plakates für Betrachter:innen schafft, sondern zusätzlich einen Einblick in das eigentliche Theaterstück gibt. Das Element des Risses geht in alle Plakate über, sodass eine Verknüpfung bzw. Zusammengehörigkeit kreiert wird.",
  },
];

const Dreigroschenoper: React.FC = () => {
  return (
    <ProjectLayout
      title="Die Dreigroschenoper"
      description="[Poster Design]"
      year="2022" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default Dreigroschenoper;
