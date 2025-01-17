"use client";

import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowLeft, X } from "lucide-react";
import React, { useState, useEffect } from "react";

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
  const [selectedImage, setSelectedImage] = useState<ProjectImage | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="container mx-auto min-h-full py-8">
      <div className="px-4">
        <Link
          href="/"
          className="inline-flex items-center mb-6 text-sm font-light hover:underline"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>
        <h1 className="text-3xl font-light">{title}</h1>
        <p className="text-lg font-light mb-2">{year}</p>
        <p className="text-lg font-light mb-8">{description}</p>
        {content.map((paragraph, index) => (
          <p
            key={index}
            className={`text-lg font-light mb-10 ${
              paragraph.italic ? "italic" : ""
            }`}
          >
            {paragraph.text}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative mx-auto w-full md:w-auto cursor-pointer"
            onClick={() => setSelectedImage(image)}
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

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1920}
              height={1920}
              className="w-full h-auto max-h-screen object-contain"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectLayout;
