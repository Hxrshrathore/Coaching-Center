"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { VanillaThemeToggle } from "@/components/vanilla-theme-toggle"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const isMobile = useMobile()
  const headerRef = useRef<HTMLElement>(null)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  useEffect(() => {
    const handleScroll = () => {
      // Update scrolled state for header styling
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Calculate scroll progress for the progress bar
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      setScrollProgress(scrollPercent * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  const navLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Our Vision",
      href: "/our-vision",
    },
    {
      name: "Programs",
      href: "/program-path",
      submenu: [
        {
          name: "JEE Programs",
          href: "/program-path/jee",
        },
        {
          name: "NEET Programs",
          href: "/program-path/neet",
        },
        {
          name: "Olympiad Programs",
          href: "/olympiad-programs",
        },
        {
          name: "Class 4-12 Science",
          href: "/k12-science-coaching",
        },
      ],
    },
    {
      name: "Resources",
      href: "/resources-hub",
    },
    {
      name: "What's New",
      href: "/whats-new",
    },
    {
      name: "Toppers' Tales",
      href: "/toppers-tales",
    },
    {
      name: "Scholarship Test",
      href: "/scholarship-test",
    },
  ]

  return (
    <nav
      ref={headerRef}
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-slate-900/95 shadow-lg py-2"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4",
      )}
    >
      {/* Scroll Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center group relative overflow-hidden" aria-label="Ascent Classes Home">
            <div className="relative z-10 flex items-center">
              <Image
                src="/headlogo.png"
                alt="Ascent Classes Logo"
                width={50}
                height={50}
                className="transition-transform duration-300 group-hover:scale-110"
              />
              <span className="ml-2 font-bold text-lg text-gray-800 dark:text-white hidden sm:block">
                Ascent Classes
              </span>
            </div>
            <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.name} className="relative group">
                    <button
                      className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md flex items-center space-x-1 group relative"
                      aria-expanded={activeSubmenu === link.name}
                      aria-haspopup="true"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                    </button>
                    <div className="absolute left-0 mt-1 w-56 bg-white dark:bg-slate-800 rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 dark:border-gray-700 overflow-hidden">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-150"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md relative group"
                >
                  <span>{link.name}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            })}
          </div>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <VanillaThemeToggle />
            <Link
              href="/get-enrolled"
              className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-5 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get Enrolled
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <VanillaThemeToggle />
            <button
              className={cn(
                "text-gray-700 dark:text-gray-200 p-1.5 rounded-md transition-colors",
                isOpen ? "bg-gray-100 dark:bg-slate-800" : "",
              )}
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && isMobile && (
          <div className="md:hidden mt-4 pb-4 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-1 bg-gray-50 dark:bg-slate-800/50 rounded-lg p-2">
              {navLinks.map((link) => {
                if (link.submenu) {
                  const isActive = activeSubmenu === link.name
                  return (
                    <div key={link.name} className="space-y-1">
                      <button
                        onClick={() => toggleSubmenu(link.name)}
                        className={cn(
                          "w-full px-3 py-2.5 text-left text-gray-700 dark:text-gray-200 font-medium rounded-md flex justify-between items-center",
                          isActive ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400" : "",
                        )}
                      >
                        <span>{link.name}</span>
                        {isActive ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                      </button>
                      {isActive && (
                        <div className="pl-4 space-y-1 border-l-2 border-indigo-200 dark:border-indigo-800 ml-3">
                          {link.submenu.map((sublink) => (
                            <Link
                              key={sublink.name}
                              href={sublink.href}
                              className="block px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md text-sm"
                              onClick={toggleMenu}
                            >
                              {sublink.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  )
                }
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="px-3 py-2.5 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-md"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                href="/get-enrolled"
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-4 py-2.5 rounded-md hover:from-indigo-700 hover:to-blue-700 transition-colors text-center mt-2 shadow-md"
                onClick={toggleMenu}
              >
                Get Enrolled
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
