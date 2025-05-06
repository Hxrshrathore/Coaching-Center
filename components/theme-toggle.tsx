"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  // Only show the toggle after mounting to prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true)
    console.log("Theme toggle mounted, resolved theme:", resolvedTheme)
  }, [resolvedTheme])

  // Simple direct toggle function
  const toggleTheme = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark"
    console.log(`Toggling theme from ${resolvedTheme} to ${newTheme}`)
    setTheme(newTheme)
  }, [resolvedTheme, setTheme])

  // Don't render anything until mounted
  if (!mounted) {
    return <div className="w-10 h-10"></div>
  }

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200 border border-gray-300 dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600"
      aria-label="Toggle theme"
      type="button"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-700" />
      )}
    </button>
  )
}
