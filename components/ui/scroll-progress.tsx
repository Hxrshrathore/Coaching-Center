"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

interface ScrollProgressProps {
  color?: string
  height?: number
  zIndex?: number
  position?: "top" | "bottom"
}

export function ScrollProgress({
  color = "bg-blue-600 dark:bg-blue-500",
  height = 3,
  zIndex = 50,
  position = "top",
}: ScrollProgressProps) {
  const [isClient, setIsClient] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <motion.div
      className={`fixed ${position}-0 left-0 right-0 ${color} origin-left`}
      style={{
        scaleX,
        height: `${height}px`,
        zIndex: zIndex,
      }}
      aria-hidden="true"
    />
  )
}
