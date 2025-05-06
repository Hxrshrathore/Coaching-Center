/**
 * Utility functions for scroll-related functionality
 */

/**
 * Calculates the scroll percentage of the page
 * @returns A number between 0 and 1 representing the scroll percentage
 */
export function getScrollPercentage(): number {
  if (typeof window === "undefined") return 0

  const scrollTop = window.scrollY || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight

  if (scrollHeight === 0) return 0
  return Math.min(scrollTop / scrollHeight, 1)
}

/**
 * Smoothly scrolls to a specific element on the page
 * @param elementId The ID of the element to scroll to
 * @param offset Optional offset from the top of the element (in pixels)
 */
export function scrollToElement(elementId: string, offset = 0): void {
  if (typeof window === "undefined") return

  const element = document.getElementById(elementId)
  if (!element) return

  const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
  const offsetPosition = elementPosition - offset

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  })
}

/**
 * Smoothly scrolls to the top of the page
 * @param smooth Whether to use smooth scrolling
 */
export function scrollToTop(smooth = true): void {
  if (typeof window === "undefined") return

  window.scrollTo({
    top: 0,
    behavior: smooth ? "smooth" : "auto",
  })
}
