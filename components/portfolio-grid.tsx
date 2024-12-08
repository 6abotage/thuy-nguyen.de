"use client";
import Image from "next/image";

export function PortfolioGrid() {
  return (
    <main className="container max-w-screen-2xl py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-black">
        {/* Project 1 */}
        <div className="bg-white">
          <div className="p-4 space-y-2 border-b border-black">
            <h2 className="text-sm font-light uppercase">
              Designbysalome x Casetify
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              [CASE DESIGN]
            </p>
          </div>
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Phone case design with blue cloudy pattern"
              className="w-full object-cover"
              width={400}
              height={600}
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white">
          <div className="p-4 space-y-2 border-b border-black">
            <h2 className="text-sm font-light uppercase">
              02 Books in 01 Slipcase
            </h2>
            <p className="text-sm font-light text-muted-foreground">
              [EDITORIAL DESIGN]
            </p>
          </div>
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Editorial design showing book spines"
              className="w-full object-cover"
              width={400}
              height={600}
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-white">
          <div className="p-4 space-y-2 border-b border-black">
            <h2 className="text-sm font-light uppercase">Project Title</h2>
            <p className="text-sm font-light text-muted-foreground">
              [PROJECT TYPE]
            </p>
          </div>
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Project image"
              className="w-full object-cover"
              width={400}
              height={600}
            />
          </div>
        </div>

        {/* Project 4 */}
        <div className="bg-white">
          <div className="p-4 space-y-2 border-b border-black">
            <h2 className="text-sm font-light uppercase">Another Project</h2>
            <p className="text-sm font-light text-muted-foreground">
              [PROJECT TYPE]
            </p>
          </div>
          <div className="p-4">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="Another project image"
              className="w-full object-cover"
              width={400}
              height={600}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
