"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import mockup_dreigroschenoper_wand from "./assets/mockup_dreigroschenoper_wand.png";
import mockup_FFF_carson_poster_steinboden from "./assets/mockup_FFF_carson_poster_steinboden.png";
import mockup_flyer_resonanz_minimalism from "./assets/mockup_flyer_resonanz_minimalism.png";
import mockup_gewaltfreiekommunikation_stein from "./assets/mockup_gewaltfreiekommunikation_stein.png";
import mockup_politischeplakate_orangeconcrete from "./assets/mockup_politischeplakate_orangeconcrete.png";
import Vinyl_Mockup_Snowstrippers_coverbild from "./assets/Vinyl_Mockup_Snowstrippers_coverbild.png";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-2">
        <div className="container flex h-14 items-center gap-12">
          <Link
            href="/"
            className="pl-4 text-3xl font-light hover:underline underline"
          >
            Thuy Nguyen
          </Link>
          <nav className="hidden gap-6 lg:flex">
            <Link href="/about" className="text-2xl font-light hover:underline">
              Hire me
            </Link>
            <Link href="/about" className="text-2xl font-light hover:underline">
              About me
            </Link>
          </nav>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="-mr-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="grid gap-4">
                <Link href="#" className="text-lg hover:underline">
                  Hire me
                </Link>
                <Link href="#" className="text-lg hover:underline">
                  About me
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="w-full">
        <div className="w-full py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-black">
            {/* Project 1 */}
            <div className="bg-white border-b border-r border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Snowstrippers Vinyl
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [VINYL COVER DESIGN]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src={Vinyl_Mockup_Snowstrippers_coverbild}
                  alt="Phone case design with blue cloudy pattern"
                  className="max-w-full h-auto"
                  width={1024}
                  height={819}
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border-b border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Dreigroschenoper
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [POSTER DESIGN]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src={mockup_dreigroschenoper_wand}
                  alt="Editorial design showing book spines"
                  className="max-w-full h-auto"
                  width={1024}
                  height={819}
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border-b border-r border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  FFF Carson Poster
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [POSTER DESIGN]
                </p>
              </div>
              <div className="flex justify-center h-[calc(100%-3.5rem)]">
                <Image
                  src={mockup_FFF_carson_poster_steinboden}
                  alt="Project image"
                  className="w-full h-full object-cover"
                  width={819}
                  height={1024}
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Resonanz Minimalism
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [FLYER DESIGN]
                </p>
              </div>
              <div className="flex justify-center h-[calc(100%-3.5rem)]">
                <Image
                  src={mockup_flyer_resonanz_minimalism}
                  alt="Another project image"
                  className="w-full h-full object-cover"
                  width={1024}
                  height={819}
                />
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white border-b border-r border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Gewaltfreie Kommunikation
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [POSTER DESIGN]
                </p>
              </div>
              <div className="flex justify-center h-[calc(100%-3.5rem)]">
                <Image
                  src={mockup_gewaltfreiekommunikation_stein}
                  alt="Another project image"
                  className="w-full h-full object-cover"
                  width={819}
                  height={1024}
                />
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white border-b border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Politische Plakate
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [POSTER DESIGN]
                </p>
              </div>
              <div className="flex justify-center h-[calc(100%-3.5rem)]">
                <Image
                  src={mockup_politischeplakate_orangeconcrete}
                  alt="Another project image"
                  className="w-full h-full object-cover"
                  width={768}
                  height={1024}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
