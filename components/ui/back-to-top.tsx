"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface BackToTopProps {
  className?: string
  threshold?: number
  smooth?: boolean
  showLabel?: boolean
  position?: "bottom-right" | "bottom-left" | "bottom-center"
}

export function BackToTop({
  className,
  threshold = 300,
  smooth = true,
  showLabel = false,
  position = "bottom-right",
}: BackToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > threshold)
    }

    // Initial check
    toggleVisibility()

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

  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "bottom-center": "bottom-6 left-1/2 transform -translate-x-1/2",
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          className={`fixed ${positionClasses[position]} z-50`}
        >
          <Button
            variant="outline"
            size={showLabel ? "default" : "icon"}
            className={cn(
              "rounded-full bg-white/90 shadow-md backdrop-blur transition-all duration-300 hover:bg-white dark:bg-slate-800/90 dark:hover:bg-slate-800",
              className,
            )}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
            {showLabel && <span className="ml-2">Back to top</span>}
            <span className="sr-only">Scroll back to top</span>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
