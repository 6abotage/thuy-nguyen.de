// pages/ZwischenDenZeilen.tsx

"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import Cover from "./assets/01_Cover.jpg";
import Victimblaming from "./assets/02_Victimblaming.jpg";
import ToxischePositivitaet from "./assets/03_Toxischepositivitaet.jpg";
import Gaslighting from "./assets/04_Gaslighting.jpg";

// Define the ContentParagraph type
type ContentParagraph = {
  text: string;
};

// Define the images array
const IMAGES = [
  { src: Cover, alt: "Cover - Zwischen den Zeilen" },
  { src: Victimblaming, alt: "Victim Blaming Poster" },
  { src: ToxischePositivitaet, alt: "Toxische Positivität Poster" },
  { src: Gaslighting, alt: "Gaslighting Poster" },
];

// Define the content paragraphs
const CONTENT: ContentParagraph[] = [
  {
    text: "In unserer modernen Gesellschaft werden wir oft mit bestimmten Erwartungen konfrontiert, die unser emotionales Wohlbefinden und unsere Wahrnehmung der Realität beeinflussen. Drei Themen, die immer wieder an Bedeutung gewinnen, sind toxische Positivität, Gaslighting und Victim Blaming.",
  },
  {
    text: "Diese drei Themen sind miteinander verflochten und verdeutlichen, wie gesellschaftliche Normen und individuelle Verhaltensweisen auf subtile, aber tiefgreifende Weise psychische Belastungen hervorrufen können. Sie berauben uns unserer Authentizität und machen es schwierig, in einer gesunden Weise mit unseren eigenen Gefühlen, Wahrnehmungen und Erfahrungen umzugehen.",
  },
  {
    text: "Diese Plakatreihe lädt dazu ein, diese Mechanismen zu hinterfragen und ein Bewusstsein für die Auswirkungen dieser Phänomene zu schaffen. Indem wir lernen, unsere Gefühle anzuerkennen, unsere Wahrnehmung zu verteidigen und Verantwortung dort zu suchen, wo sie hingehört, können wir eine Gesellschaft fördern, die gesünder, empathischer und gerechter ist.",
  },
] as const;

const ZwischenDenZeilen: React.FC = () => {
  return (
    <ProjectLayout
      title="Zwischen den Zeilen"
      description="[Poster Design]"
      year="2022" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default ZwischenDenZeilen;
