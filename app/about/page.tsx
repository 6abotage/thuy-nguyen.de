"use client";

import Link from "next/link";
import Image from "next/image";
import thuy from "./thuy.jpeg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen space-y-4">
      {/* HEADER (Old Navbar) */}
      <header className="pt-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container flex h-14 items-center gap-4 lg:gap-12">
          <Link
            href="/"
            className="pl-4 text-3xl font-light hover:underline underline"
          >
            Thuy Nguyen
          </Link>
          <Link
            href="https://www.instagram.com/itsthuynguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-600"
          >
            <span>Instagram</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/thu-thuy-nguyen-3345ab20a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-gray-600"
          >
            <span>LinkedIn</span>
          </Link>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow container mx-auto px-4  lg:py-36 max-w-4xl">
        {/* Heading + Image in One Div */}
        <div className="flex flex-col-reverse md:flex-row md:justify-between md:items-start gap-14 mb-4 lg:mb-24">
          {/* About Me Headline */}
          <h1 className="text-3xl sm:text-4xl font-light lg:self-end self-auto">
            About Me
          </h1>
          {/* Image */}
          <div className="relative w-44 h-44 lg:w-80 lg:h-80 sm:w-48 sm:h-48 self-end md:self-auto">
            <Image
              src={thuy}
              alt="Thuy Nguyen"
              fill
              className="object-cover rounded-full shadow-xl ring-2 ring-white dark:ring-gray-900"
            />
          </div>
        </div>

        {/* Paragraphs below */}
        <div className="space-y-2 lg:space-y-12 text-lg">
          <p className="lg:text-2xl  font-light leading-relaxed text-justify">
            Hey! Mein Name ist Thuy Nguyen, bin 25 Jahre alt und wohne zurzeit
            in Köln. Ich bin angehende Grafikdesignerin und meine Arbeit ist ein
            kontinuierliches Experiment – eine spielerische Herangehensweise in
            den Feldern Grafikdesign und Fotografie, das die Grenzen des
            Möglichen erkundet. Ich arbeite in Räumen, in denen Ordnung auf
            Chaos triﬀt, in denen nichts so ist, wie es scheint.
          </p>
          <p className="lg:text-2xl   font-light leading-relaxed text-justify">
            Mit meiner Fotografie fange ich Momente ein, die sowohl inszeniert
            als auch tief real sind. Im Design setze ich auf das Unerwartete und
            verdrehe Typografie und visuelle Formen zu neuen Gestalten, damit
            Ideen umso kraftvoller wirken.
          </p>
          <p className="lg:text-2xl   font-light leading-relaxed text-justify">
            Mich zieht es zu den Rändern der Gesellschaft, zu dem, was
            unausgesprochen oder ungesehen bleibt. Es geht darum, das
            Konventionelle zu hinterfragen und das Unkonventionelle zu feiern.
          </p>
        </div>
      </main>
    </div>
  );
}
