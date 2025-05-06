"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { DirectThemeToggle } from "@/components/direct-theme-toggle"

export function NavbarWithDirectToggle() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white dark:bg-slate-900 shadow-md py-2"
          : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/headlogo.png" alt="Logo" width={50} height={50} />
            {/* No text here - Ascent Classes removed */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div key={link.name} className="relative group">
                    <button className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md flex items-center space-x-1 group">
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900 hover:text-indigo-600 dark:hover:text-indigo-400"
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
                  className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 rounded-md"
                >
                  {link.name}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <DirectThemeToggle />
            <Link
              href="/get-enrolled"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Get Enrolled
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <DirectThemeToggle />
            <button className="text-gray-700 dark:text-gray-200" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && isMobile && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                if (link.submenu) {
                  return (
                    <div key={link.name} className="space-y-2">
                      <div className="px-3 py-2 text-gray-700 dark:text-gray-200 font-medium">{link.name}</div>
                      <div className="pl-6 space-y-2">
                        {link.submenu.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="block px-3 py-1.5 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400"
                            onClick={toggleMenu}
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
                    className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <Link
                href="/get-enrolled"
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-center mt-2"
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
