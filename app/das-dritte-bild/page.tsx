"use client";

import React from "react";
import ProjectLayout from "../../components/ProjectLayout";

import Cover from "./assets/01_Cover.jpg";
import Ausstellungsposter from "./assets/ausstellungsposter.jpg";
import Orange from "./assets/03_Orange.jpg";
import Zaun from "./assets/04_Zaun.jpg";
import Maus from "./assets/05_Maus.jpg";
import Garten from "./assets/06_Garten.jpg";
import Embryo from "./assets/07_Embryo.jpg";
import Kerze from "./assets/08_Kerze.jpg";
import Weiss from "./assets/09_Weiss.jpg";
import Beine from "./assets/10_Beine.jpg";
import Gesicht from "./assets/11_Gesicht.jpg";

const IMAGES = [
  { src: Cover, alt: "Cover - Resonanz" },
  { src: Ausstellungsposter, alt: "Ausstellungsposter" },
  { src: Orange, alt: "Orange" },
  { src: Zaun, alt: "Zaun" },
  { src: Maus, alt: "Maus" },
  { src: Garten, alt: "Garten" },
  { src: Embryo, alt: "Embryo" },
  { src: Kerze, alt: "Kerze" },
  { src: Weiss, alt: "Weiß" },
  { src: Beine, alt: "Beine" },
  { src: Gesicht, alt: "Gesicht" },
];

const CONTENT = [
  {
    text: "Im interdisziplinären Projekt „Resonanz“ an der ecosign Akademie für Gestaltung, geleitet von Nola Bunke, entstanden im Laufe des Kurses sowohl die Gestaltung eines Ausstellungsplakats für den Kurs als auch ein Fotoprojekt mit dem Titel „Das Dritte Bild“.",
  },
  {
    text: "Die Sprache ist ein Werkzeug, mit dem wir uns Menschen untereinander verständigen können. Doch manchmal ist uns das durch gewisse Barrieren nicht möglich. Die Wechselwirkung von Sprache und Verständnis bringt oft Missverständnisse mit sich. Informationen, Emotionen und Gefühle finden ihr Ziel aber auch über andere Arten der Kommunikation. Diese Arbeit beschäftigt sich mit der Wechselwirkung von Sprache mit Bildern. Wie reagieren sie zueinander oder miteinander?",
  },
  {
    text: "Auch wenn wir das gleiche Bild vor uns sehen, kann es uns etwas anderes sagen und auch eine andere Bedeutung haben. Was siehst du? Was fühlst du, wenn du hinschaust?",
    italic: true,
  },
  {
    text: "Die Bilder laden nicht nur zu einem Austausch untereinander ein, sondern auch dem Austausch unter den Betrachter:innen und der Person, die diese eingefangen hat",
  },
];

const Resonanz: React.FC = () => {
  return (
    <ProjectLayout
      title="Das Dritte Bild"
      description="[Poster Design + Fotografie]"
      year="2024"
      content={CONTENT}
      images={IMAGES}
    />
  );
};

export default Resonanz;
