"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

// Importing images
import Flur from "./assets/01_Flur.jpg";
import Piercing from "./assets/02_Piercing.jpg";
import Plastik from "./assets/03_Plastik.jpg";
import Fenster from "./assets/04_Fenster.jpg";
import Parkhaus from "./assets/05_Parkhaus.jpg";
import Gesicht from "./assets/06_Gesicht.jpg";
import Badewanne from "./assets/07_Badewanne.jpg";
import Treppe from "./assets/08_Treppe.jpg";

// Define the images array
const IMAGES = [
  { src: Flur, alt: "Flur" },
  { src: Piercing, alt: "Piercing" },
  { src: Plastik, alt: "Plastik" },
  { src: Fenster, alt: "Fenster" },
  { src: Parkhaus, alt: "Parkhaus" },
  { src: Gesicht, alt: "Gesicht" },
  { src: Badewanne, alt: "Badewanne" },
  { src: Treppe, alt: "Treppe" },
];

// Define the content paragraphs
const CONTENT = [
  {
    text: "Was fasziniert uns an unheimlichen Bildern, düsteren Geschichten oder schaurigen Filmsequenzen? Warum fühlen wir uns von Dingen angezogen, die Angst und Unbehagen hervorrufen? Und wie verwandelt sich die Konfrontation mit dem Unheimlichen in einen Moment des Staunens und der Faszination?",
  },
  {
    text: "Mit meinem Fotoprojekt untersuche ich, wie das Staunen aus der Auseinandersetzung mit dem Unheimlichen entsteht. In unserer modernen Welt streben wir nach Harmonie und blenden das Verstörende oft aus – dabei sind es gerade diese Momente, die uns die Zerbrechlichkeit und Komplexität unseres Daseins bewusst machen.",
  },
  {
    text: "Durch Bilder, die gleichzeitig irritieren und faszinieren, möchte ich die Betrachter:innen dazu einladen, sich mit ihren eigenen Gefühlen auseinanderzusetzen und Staunen als eine ungewohnte, aber bereichernde Perspektive neu zu entdecken.",
  },
];

const ImSchattenDesStaunens: React.FC = () => {
  return (
    <ProjectLayout
      title="Im Schatten des Staunens"
      description="[Fotografie]"
      year="2024" // Add the year here
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default ImSchattenDesStaunens;
