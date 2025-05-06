"use client"

import { useTheme } from "next-themes"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ThemeTestPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="p-8">Loading theme test...</div>
  }

  return (
    <div className="container mx-auto p-8 mt-20">
      <h1 className="text-3xl font-bold mb-6">Theme Test Page</h1>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Current Theme Status</h2>
        <p className="mb-2">
          Theme from hook: <span className="font-mono">{theme}</span>
        </p>
        <p className="mb-2">
          Resolved theme: <span className="font-mono">{resolvedTheme}</span>
        </p>
        <p className="mb-2">
          Dark class on html:{" "}
          <span className="font-mono">{document.documentElement.classList.contains("dark") ? "Yes" : "No"}</span>
        </p>
        <p className="mb-2">
          localStorage theme:{" "}
          <span className="font-mono">
            {typeof window !== "undefined" ? localStorage.getItem("theme") || "Not set" : "Unknown"}
          </span>
        </p>
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Theme Controls</h2>
        <div className="flex gap-4">
          <Button onClick={() => setTheme("light")} variant={theme === "light" ? "default" : "outline"}>
            Set Light Theme
          </Button>
          <Button onClick={() => setTheme("dark")} variant={theme === "dark" ? "default" : "outline"}>
            Set Dark Theme
          </Button>
          <Button onClick={() => setTheme("system")} variant={theme === "system" ? "default" : "outline"}>
            Set System Theme
          </Button>
        </div>
      </div>

      <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Theme Appearance Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded">
            <p>Light background in light mode, dark in dark mode</p>
          </div>
          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded">
            <p>Blue background that changes with theme</p>
          </div>
          <div className="p-4 bg-white dark:bg-black text-black dark:text-white rounded">
            <p>White/black background with contrasting text</p>
          </div>
          <div className="p-4 border border-gray-300 dark:border-gray-600 rounded">
            <p>Border that changes with theme</p>
          </div>
        </div>
      </div>
    </div>
  )
}
