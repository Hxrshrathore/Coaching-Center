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
  duration = 0.5,
  direction = "up",
  distance = 30,
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

    // Use smaller distance values for better performance
    const animDistance = distance * 0.6

    switch (direction) {
      case "up":
        initial = { ...initial, y: animDistance }
        break
      case "down":
        initial = { ...initial, y: -animDistance }
        break
      case "left":
        initial = { ...initial, x: animDistance }
        break
      case "right":
        initial = { ...initial, x: -animDistance }
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

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}
