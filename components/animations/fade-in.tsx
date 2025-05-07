"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { motion, useInView, type Variants } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  threshold?: number
  once?: boolean
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.3, // Reduced duration
  direction = "up",
  distance = 10, // Reduced distance to minimize layout shift
  threshold = 0.1,
  once = true,
  className,
}: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, threshold })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)
    }
  }, [isInView, hasAnimated])

  // Define animation variants based on direction
  const getVariants = (): Variants => {
    let initial = { opacity: 0 }

    switch (direction) {
      case "up":
        initial = { ...initial, y: distance }
        break
      case "down":
        initial = { ...initial, y: -distance }
        break
      case "left":
        initial = { ...initial, x: distance }
        break
      case "right":
        initial = { ...initial, x: -distance }
        break
    }

    return {
      hidden: initial,
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
          duration,
          delay,
          ease: "easeOut",
        },
      },
    }
  }

  // If not in view yet, reserve the space with the same dimensions
  // This prevents layout shifts when the element animates in
  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{
        minHeight: hasAnimated ? undefined : "0px",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </motion.div>
  )
}
