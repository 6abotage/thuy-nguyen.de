"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="pt-2">
        <div className="container flex h-14 items-center gap-12">
          <Link
            href="#"
            className="pl-4 text-3xl font-light hover:underline underline"
          >
            Thuy Nguyen
          </Link>
          <nav className="hidden gap-6 lg:flex">
            <Link href="#" className="text-2xl font-light hover:underline">
              Hire me
            </Link>
            <Link href="#" className="text-2xl font-light hover:underline">
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
                  Designbysalome x Casetify
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [CASE DESIGN]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/819/1024?random=1"
                  alt="Phone case design with blue cloudy pattern"
                  className="max-w-full h-auto"
                  width={819}
                  height={1024}
                />
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white border-b border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  02 Books in 01 Slipcase
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [EDITORIAL DESIGN]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/819/1024?random=2"
                  alt="Editorial design showing book spines"
                  className="max-w-full h-auto"
                  width={819}
                  height={1024}
                />
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white border-b border-r border-black">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Creative Branding
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [BRANDING PROJECT]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/819/1024?random=3"
                  alt="Project image"
                  className="max-w-full h-auto"
                  width={819}
                  height={1024}
                />
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white">
              <div className="p-4 space-y-2 border-b border-black">
                <h2 className="text-sm font-light uppercase">
                  Another Project
                </h2>
                <p className="text-sm font-light text-muted-foreground">
                  [PROJECT TYPE]
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://picsum.photos/819/1024?random=4"
                  alt="Another project image"
                  className="max-w-full h-auto"
                  width={819}
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
