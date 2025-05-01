"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-950/60 transition-all duration-300 ${
        isScrolled ? "bg-white/95 dark:bg-slate-950/95 shadow-md" : "bg-white/80 dark:bg-slate-950/80"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/headlogo.png"
              alt="Ascent Coaching Classes Logo"
              width={180}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/our-vision"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Our Vision
          </Link>
          <Link
            href="/program-path"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Program Path
          </Link>
          <Link
            href="/resources-hub"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Resources Hub
          </Link>
          <Link
            href="/whats-new"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            What's New
          </Link>
          <Link
            href="/toppers-tales"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Topper's Tales
          </Link>
          <Link
            href="/get-enrolled"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Get Enrolled
          </Link>
          <Link
            href="/reach-out"
            className="text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400 transition-colors duration-200"
          >
            Reach Out
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/get-enrolled" className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700 transition-colors duration-300">Get Started</Button>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/our-vision"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Our Vision
                </Link>
                <Link
                  href="/program-path"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Program Path
                </Link>
                <Link
                  href="/resources-hub"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Resources Hub
                </Link>
                <Link
                  href="/whats-new"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  What's New
                </Link>
                <Link
                  href="/toppers-tales"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Topper's Tales
                </Link>
                <Link
                  href="/get-enrolled"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Get Enrolled
                </Link>
                <Link
                  href="/reach-out"
                  className="text-lg font-medium text-slate-700 hover:text-blue-600 dark:text-slate-200 dark:hover:text-blue-400"
                >
                  Reach Out
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/get-enrolled">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
