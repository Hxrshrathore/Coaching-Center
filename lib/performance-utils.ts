/**
 * Utility functions for performance optimization
 */

import React from "react"

// Image optimization helper
export const getOptimizedImageUrl = (
  src: string,
  width = 800,
  quality = 80,
  format: "webp" | "jpeg" | "png" = "webp",
): string => {
  // For external images, return as is
  if (src.startsWith("http")) {
    return src
  }

  // For local images, add optimization parameters
  // This is a placeholder - in a real app, you'd use your image optimization service
  return `${src}?w=${width}&q=${quality}&fmt=${format}`
}

// Lazy loading helper
export const shouldLazyLoad = (priority: boolean, aboveFold: boolean): boolean => {
  return !priority && !aboveFold
}

// Resource hint generator
export const generateResourceHints = (
  resources: {
    url: string
    type: "preconnect" | "prefetch" | "preload"
    as?: string
    crossOrigin?: boolean
  }[],
): JSX.Element[] => {
  return resources.map((resource, index) => {
    if (resource.type === "preconnect") {
      return (
        <link
          key={`${resource.type}-${index}`}
          rel="preconnect"
          href={resource.url}
          crossOrigin={resource.crossOrigin ? "anonymous" : undefined}
        />
      )
    } else if (resource.type === "prefetch") {
      return <link key={`${resource.type}-${index}`} rel="prefetch" href={resource.url} />
    } else if (resource.type === "preload") {
      return (
        <link
          key={`${resource.type}-${index}`}
          rel="preload"
          href={resource.url}
          as={resource.as}
          crossOrigin={resource.crossOrigin ? "anonymous" : undefined}
        />
      )
    }
    return <React.Fragment key={`${resource.type}-${index}`}></React.Fragment>
  })
}

// Debounce function for performance-sensitive operations
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => func(...args), waitFor)
  }
}

// Throttle function for scroll events
export const throttle = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
): ((...args: Parameters<F>) => void) => {
  let timeout: ReturnType<typeof setTimeout> | null = null
  let lastFunc = 0
  let lastRan = 0

  return (...args: Parameters<F>): void => {
    const now = Date.now()
    if (lastRan + waitFor <= now) {
      func(...args)
      lastRan = now
    } else {
      clearTimeout(timeout!)
      timeout = setTimeout(
        () => {
          if (lastFunc + waitFor <= Date.now()) {
            func(...args)
            lastRan = Date.now()
          }
        },
        waitFor - (now - lastRan),
      )
    }
    lastFunc = now
  }
}

// Add cache headers helper
export const getCacheHeaders = (maxAge = 3600, sMaxAge = 86400): Record<string, string> => {
  return {
    "Cache-Control": `public, max-age=${maxAge}, s-maxage=${sMaxAge}`,
    "X-Content-Type-Options": "nosniff",
  }
}
