/**
 * Performance optimization utilities
 */

// Image optimization helper
export function getImageSizes(type: "hero" | "card" | "thumbnail" | "full" | "carousel"): string {
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

// Lazy loading helper
export function shouldPrioritize(element: "hero" | "above-fold" | "carousel-first" | "below-fold"): boolean {
  return ["hero", "above-fold", "carousel-first"].includes(element)
}

// Debounce function for performance-sensitive operations
export function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<T>): void => {
    const later = () => {
      timeout = null
      func(...args)
    }

    if (timeout !== null) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(func: T, limit: number): (...args: Parameters<T>) => void {
  let inThrottle = false

  return (...args: Parameters<T>): void => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

// Calculate aspect ratio from width and height
export function calculateAspectRatio(width: number, height: number): number {
  return width / height
}

// Generate low-quality image placeholder URL
export function getLQIP(src: string, width = 20): string {
  if (src.startsWith("http")) {
    // For external images, we can't generate LQIP
    return src
  }

  // For local images, add width parameter to create a tiny version
  return `${src}?w=${width}&q=10`
}
