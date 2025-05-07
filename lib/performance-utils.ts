"use client"

/**
 * Performance optimization utilities
 */
import { useEffect, useState } from "react"

// Image optimization helper with mobile-specific sizes
export function getImageSizes(type: "hero" | "card" | "thumbnail" | "full" | "carousel", isMobile = false): string {
  if (isMobile) {
    switch (type) {
      case "hero":
        return "100vw" // Full width on mobile
      case "card":
        return "100vw" // Full width on mobile
      case "thumbnail":
        return "120px" // Smaller thumbnails on mobile
      case "carousel":
        return "100vw" // Full width on mobile
      case "full":
      default:
        return "100vw"
    }
  } else {
    switch (type) {
      case "hero":
        return "(max-width: 640px) 100vw, 100vw"
      case "card":
        return "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      case "thumbnail":
        return "(max-width: 640px) 150px, 300px"
      case "carousel":
        return "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      case "full":
      default:
        return "100vw"
    }
  }
}

// Get appropriate image quality based on device and connection
export function getImageQuality(isMobile = false, isSlowConnection = false): number {
  if (isSlowConnection) return 60 // Lower quality for slow connections
  if (isMobile) return 75 // Medium quality for mobile
  return 85 // Higher quality for desktop
}

// Detect slow connections
export function useConnectionQuality() {
  const [isSlowConnection, setIsSlowConnection] = useState(false)

  useEffect(() => {
    // Check if the Network Information API is available
    if ("connection" in navigator) {
      const connection = (navigator as any).connection

      // Initial check
      checkConnection(connection)

      // Listen for changes
      connection.addEventListener("change", () => checkConnection(connection))

      function checkConnection(connection: any) {
        // Consider slow if 2G or if saveData is true
        if (connection.effectiveType === "2g" || connection.saveData) {
          setIsSlowConnection(true)
        } else {
          setIsSlowConnection(false)
        }
      }

      return () => {
        connection.removeEventListener("change", checkConnection)
      }
    }

    // Fallback: check loading time of a tiny image
    const startTime = Date.now()
    const img = new Image()
    img.onload = () => {
      const loadTime = Date.now() - startTime
      setIsSlowConnection(loadTime > 100) // If it takes more than 100ms, consider it slow
    }
    img.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" // 1x1 transparent gif
  }, [])

  return isSlowConnection
}

// Lazy loading helper
export function shouldPrioritize(
  element: "hero" | "above-fold" | "carousel-first" | "below-fold",
  isMobile = false,
): boolean {
  if (isMobile) {
    // On mobile, only prioritize hero and first carousel
    return ["hero", "carousel-first"].includes(element)
  }
  return ["hero", "above-fold", "carousel-first"].includes(element)
}

// Debounce function with mobile-specific timing
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  isMobile = false,
): (...args: Parameters<T>) => void {
  const mobileWait = isMobile ? Math.max(wait / 2, 50) : wait // Faster response on mobile
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>): void => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, mobileWait)
  }
}

// Throttle function with mobile-specific timing
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
  isMobile = false,
): (...args: Parameters<T>) => void {
  const mobileLimit = isMobile ? Math.max(limit * 1.5, 100) : limit // Less frequent on mobile to save battery
  let inThrottle = false

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), mobileLimit)
    }
  }
}

// Calculate aspect ratio from width and height
export function calculateAspectRatio(width: number, height: number): number {
  return width / height
}

// Generate low-quality image placeholder URL
export function getLQIP(src: string, width = 20, isMobile = false): string {
  const mobileWidth = isMobile ? 10 : width // Even smaller for mobile

  if (src.startsWith("http")) {
    // For external images, we can't generate LQIP
    return src
  }

  // For local images, add width parameter to create a tiny version
  return `${src}?w=${mobileWidth}&q=10`
}

// Detect if the user has enabled data saver mode
export function useDataSaverMode() {
  const [isDataSaverEnabled, setIsDataSaverEnabled] = useState(false)

  useEffect(() => {
    if ("connection" in navigator && (navigator as any).connection.saveData) {
      setIsDataSaverEnabled(true)
    }
  }, [])

  return isDataSaverEnabled
}

// Reduce animation based on user preferences and device
export function shouldReduceMotion(isMobile = false) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mediaQuery.matches || isMobile)

    const handleChange = () => setReduceMotion(mediaQuery.matches || isMobile)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [isMobile])

  return reduceMotion
}
