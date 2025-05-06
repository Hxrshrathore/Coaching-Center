"use client"

import { useState, useEffect } from "react"
import { Moon, Sun } from "lucide-react"

export function DirectThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Initialize based on current state
    setIsDark(document.documentElement.classList.contains("dark"))

    // Add listener for theme changes from other sources
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"))
        }
      })
    })

    observer.observe(document.documentElement, { attributes: true })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    console.log("Direct toggle clicked, current isDark:", isDark)

    if (isDark) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }

    setIsDark(!isDark)
    console.log("Theme toggled, new isDark:", !isDark)
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle theme directly"
      type="button"
    >
      {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
    </button>
  )
}
