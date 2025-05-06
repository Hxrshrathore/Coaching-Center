"use client"

import { useEffect } from "react"
import { useTheme } from "next-themes"

export function useThemeEffect(callback: (theme: string | undefined) => void) {
  const { theme } = useTheme()

  useEffect(() => {
    callback(theme)
  }, [theme, callback])

  return theme
}
