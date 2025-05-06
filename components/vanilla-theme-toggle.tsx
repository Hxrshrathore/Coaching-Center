"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function VanillaThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (storedTheme) {
      setTheme(storedTheme)
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark")
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  if (!mounted) {
    return (
      <div className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 dark:bg-slate-800">
        <div className="w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
      </div>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <div className="relative">
        <Sun
          className={`h-5 w-5 text-amber-500 transition-all duration-300 ${
            theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-50 absolute"
          }`}
        />
        <Moon
          className={`h-5 w-5 text-indigo-400 transition-all duration-300 ${
            theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-50 absolute"
          }`}
        />
      </div>
      <span className="sr-only">{theme === "light" ? "Switch to dark mode" : "Switch to light mode"}</span>
    </button>
  )
}
