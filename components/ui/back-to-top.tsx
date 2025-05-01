"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface BackToTopProps {
  className?: string
  threshold?: number
  smooth?: boolean
}

export function BackToTop({ className, threshold = 300, smooth = true }: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold)
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      window.scrollTo(0, 0)
    }
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className={cn(
        "fixed bottom-6 right-6 z-50 rounded-full bg-white/80 shadow-md backdrop-blur transition-all duration-300 hover:bg-white dark:bg-slate-800/80 dark:hover:bg-slate-800",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        className,
      )}
      onClick={scrollToTop}
    >
      <ArrowUp className="h-5 w-5 text-brand-blue" />
      <span className="sr-only">Back to top</span>
    </Button>
  )
}
