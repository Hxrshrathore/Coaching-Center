import type React from "react"
import { cn } from "@/lib/utils"

interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
}

export function SEOHeading({ level, children, className = "", id }: SEOHeadingProps) {
  const baseStyles = "font-bold tracking-tight text-blue-950 dark:text-white"

  const styles = {
    1: "text-3xl sm:text-4xl md:text-5xl",
    2: "text-2xl sm:text-3xl md:text-4xl",
    3: "text-xl sm:text-2xl md:text-3xl",
    4: "text-lg sm:text-xl md:text-2xl",
    5: "text-base sm:text-lg md:text-xl",
    6: "text-sm sm:text-base md:text-lg",
  }

  const combinedClassName = cn(baseStyles, styles[level], className)

  switch (level) {
    case 1:
      return (
        <h1 id={id} className={combinedClassName}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 id={id} className={combinedClassName}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 id={id} className={combinedClassName}>
          {children}
        </h3>
      )
    case 4:
      return (
        <h4 id={id} className={combinedClassName}>
          {children}
        </h4>
      )
    case 5:
      return (
        <h5 id={id} className={combinedClassName}>
          {children}
        </h5>
      )
    case 6:
      return (
        <h6 id={id} className={combinedClassName}>
          {children}
        </h6>
      )
  }
}
