"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

// -- Types --
interface ContentParagraph {
  text: string;
  italic?: boolean;
}

interface ProjectImage {
  src: StaticImageData;
  alt: string;
}

interface ProjectLayoutProps {
  title: string;
  description: string;
  year: string | number;
  content: ContentParagraph[];
  images: ProjectImage[];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  description,
  year,
  content,
  images,
}) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [fadeIn, setFadeIn] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFullscreen();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  useEffect(() => {
    if (selectedIndex !== null) {
      // Trigger fade-in whenever we open fullscreen
      setFadeIn(false);
      requestAnimationFrame(() => setFadeIn(true));
    }
  }, [selectedIndex]);

  const openFullscreen = (index: number) => setSelectedIndex(index);
  const closeFullscreen = () => setSelectedIndex(null);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
  };

  // Preload next image (optional optimization)
  const nextIndex =
    selectedIndex !== null ? (selectedIndex + 1) % images.length : null;

  return (
    <div className="max-w-4xl mx-auto min-h-full sm:py-8">
      {/* --- PAGE CONTENT --- */}
      <div className="px-4">
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-xs sm:text-sm font-light hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        {/* Title and Meta Info */}
        <h1 className="text-xl sm:text-3xl font-light mb-2">{title}</h1>
        <p className="text-sm sm:text-base font-light mb-6">
          {description} - {year}
        </p>

        {/* Paragraphs */}
        {content.map((paragraph, index) => (
          <p
            key={index}
            className={`text-sm sm:text-base font-light mb-6 ${
              paragraph.italic ? "italic" : ""
            }`}
          >
            {paragraph.text}
          </p>
        ))}
      </div>

      {/* --- IMAGE GRID --- */}
      <div className="grid grid-cols-1 gap-6 px-4 sm:gap-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mx-auto w-full md:w-auto cursor-pointer"
            onClick={() => openFullscreen(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1920}
              height={1920}
              className="w-full md:w-auto max-h-[80vh] object-contain mx-auto"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        ))}
      </div>

      {/* --- FULLSCREEN OVERLAY --- */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
          onClick={closeFullscreen}
        >
          <div
            className="relative w-full h-full max-h-full flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE Button (always top-right) */}
            <button
              className="absolute top-4 right-4 z-10 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
              onClick={closeFullscreen}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>

            {/* PREV Button (mobile at bottom-left, desktop center-left) */}
            {images.length > 1 && (
              <button
                className={`
                  absolute
                  bottom-4 left-4
                  md:top-1/2 md:bottom-auto md:-translate-y-1/2
                  z-10 text-white bg-black bg-opacity-50 rounded-full p-2 
                  hover:bg-opacity-75 focus:outline-none
                `}
                onClick={handlePrev}
                aria-label="Previous Image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* NEXT Button (mobile at bottom-right, desktop center-right) */}
            {images.length > 1 && (
              <button
                className={`
                  absolute
                  bottom-4 right-4
                  md:top-1/2 md:bottom-auto md:-translate-y-1/2
                  z-10 text-white bg-black bg-opacity-50 rounded-full p-2 
                  hover:bg-opacity-75 focus:outline-none
                `}
                onClick={handleNext}
                aria-label="Next Image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* FULLSCREEN IMAGE with fade-in transition */}
            <div
              className={`transition-opacity duration-300 ${
                fadeIn ? "opacity-100" : "opacity-0"
              } relative w-full h-full`}
            >
              <Image
                src={images[selectedIndex].src}
                alt={images[selectedIndex].alt}
                fill
                className="object-contain pointer-events-none"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* --- PRELOAD THE NEXT IMAGE (HIDDEN) --- */}
      {nextIndex !== null && (
        <div className="hidden">
          <Image
            src={images[nextIndex].src}
            alt={images[nextIndex].alt}
            width={1920}
            height={1920}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectLayout;
