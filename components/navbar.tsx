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
            <Image src="/logo.png" alt="Ascent Classes Logo" width={150} height={40} className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/our-vision"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Our Vision
          </Link>
          <Link
            href="/program-path"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Program Path
          </Link>
          <Link
            href="/resources-hub"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Resources Hub
          </Link>
          <Link
            href="/whats-new"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            What's New
          </Link>
          <Link
            href="/toppers-tales"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Topper's Tales
          </Link>
          <Link
            href="/get-enrolled"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Get Enrolled
          </Link>
          <Link
            href="/reach-out"
            className="text-sm font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue transition-colors duration-200"
          >
            Reach Out
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/get-enrolled" className="hidden md:block">
            <Button className="bg-brand-blue hover:bg-brand-dark transition-colors duration-300">Get Started</Button>
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
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Our Vision
                </Link>
                <Link
                  href="/program-path"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Program Path
                </Link>
                <Link
                  href="/resources-hub"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Resources Hub
                </Link>
                <Link
                  href="/whats-new"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  What's New
                </Link>
                <Link
                  href="/toppers-tales"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Topper's Tales
                </Link>
                <Link
                  href="/get-enrolled"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Get Enrolled
                </Link>
                <Link
                  href="/reach-out"
                  className="text-lg font-medium text-brand-text-dark hover:text-brand-blue dark:text-brand-text-light dark:hover:text-brand-blue"
                >
                  Reach Out
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Link href="/get-enrolled">
                    <Button className="w-full bg-brand-blue hover:bg-brand-dark">Get Started</Button>
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
