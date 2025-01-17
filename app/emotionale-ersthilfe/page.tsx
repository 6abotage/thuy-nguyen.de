// pages/GewaltfreieKommunikation.tsx

"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import CoverImage from "./assets/01_Cover.jpg";
import Beduerfnisbegriffe from "./assets/02_Beduerfnisbegriffe.jpg";
import Eaafskript from "./assets/03_Eeafskript.jpg";
import GewaltfreieKommunikationImage from "./assets/04_Gewaltfreiekommunikation.jpg";
import EmotionaleIntelligenz from "./assets/05_Emotionaleintelligenz.jpg";

// Define the images array
const IMAGES = [
  { src: CoverImage, alt: "Cover - Emotionale Erste Hilfe" },
  { src: Beduerfnisbegriffe, alt: "Bedürfnisbegriffe Poster" },
  { src: Eaafskript, alt: "Eaafskript Poster" },
  {
    src: GewaltfreieKommunikationImage,
    alt: "Gewaltfreie Kommunikation Poster",
  },
  { src: EmotionaleIntelligenz, alt: "Emotionale Intelligenz Poster" },
];

// Define the content paragraphs
const CONTENT = [
  {
    text: 'Die informative Plakatreihe „Emotionale Erste Hilfe" thematisiert auf Grundlage des Textes „Das hier ist Wasser" von David Foster Wallace gewaltfreie Kommunikation und widmet sich der Auseinandersetzung mit den eigenen Gefühlen und Bedürfnissen. Viele Missverständnisse, die im Alltag entstehen, können auf Misskommunikation zurückgeführt werden. Die Vermittlung dieser Kommunikationstechniken soll eine kleine Hilfe zu einem harmonischeren Miteinander beitragen und Missverständnisse sowie Konflikte reduzieren.',
  },
];

const GewaltfreieKommunikation: React.FC = () => {
  return (
    <ProjectLayout
      title="Emotionale Erste Hilfe"
      description="[Poster Design]"
      year="2023" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default GewaltfreieKommunikation;
