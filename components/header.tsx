"use client"

import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Header() {
  return (
    <header className="border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="#" className="text-sm font-light hover:underline">
          Thuy Nguyen
        </Link>
        <nav className="hidden gap-6 lg:flex">
          <Link href="#" className="text-sm font-light hover:underline">
            Hire me
          </Link>
          <Link href="#" className="text-sm font-light hover:underline">
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
  )
}