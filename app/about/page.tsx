"use client";

import Image from "next/image";
import Link from "next/link";
import thuy from "./thuy.jpeg";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
        {/* Top Section: Image, Heading, Social Links */}
        <div className="flex flex-col items-center gap-6">
          {/* Image */}

          <div className="relative w-full max-w-sm mx-auto lg:mb-12">
            <Image
              src={thuy}
              alt="Thuy Nguyen"
              width={600}
              height={600}
              className="object-cover shadow-xl" // keeps a box shadow
            />
          </div>
          {/* Heading */}
        </div>

        {/* Paragraphs Section */}
        <div className="mt-8 space-y-6 text-sm md:text-base leading-relaxed text-justify">
          <p>Hey! Mein Name ist Thuy Nguyen</p>
          <p>
            Ich bin angehende Grafikdesignerin und wohne zurzeit in Köln. Meine
            Arbeit ist ein kontinuierliches Experiment – eine spielerische
            Herangehensweise in den Feldern Grafikdesign und Fotografie, das die
            Grenzen des Möglichen erkundet. Ich arbeite in Räumen, in denen
            Ordnung auf Chaos trifft, in denen nichts so ist, wie es scheint.
          </p>
          <p>
            Mit meiner Fotografie fange ich Momente ein, die sowohl inszeniert
            als auch tief real sind. Im Design setze ich auf das Unerwartete und
            verdrehe Typografie und visuelle Formen zu neuen Gestalten, damit
            Ideen umso kraftvoller wirken.
          </p>
          <p>
            Mich zieht es zu den Rändern der Gesellschaft, zu dem, was
            unausgesprochen oder ungesehen bleibt. Es geht darum, das
            Konventionelle zu hinterfragen und das Unkonventionelle zu feiern.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 justify-end lg:pt-12">
            <Link
              href="https://www.instagram.com/itsthuynguyen"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/thu-thuy-nguyen-3345ab20a/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              LinkedIn
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
