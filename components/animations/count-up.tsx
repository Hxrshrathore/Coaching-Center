"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

interface CountUpProps {
  start?: number
  end: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
  decimal?: string
  onComplete?: () => void
  className?: string
}

export function CountUp({
  start = 0,
  end,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
  decimal = ".",
  onComplete,
  className,
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const countingRef = useRef(false)
  const frameRef = useRef(0)
  const startTimeRef = useRef(0)

  useEffect(() => {
    if (!inView || countingRef.current) return

    // Add delay before starting animation
    const timer = setTimeout(() => {
      countingRef.current = true
      startTimeRef.current = Date.now()

      const animate = () => {
        const now = Date.now()
        const elapsed = now - startTimeRef.current
        const progress = Math.min(elapsed / (duration * 1000), 1)

        if (progress < 1) {
          // Use linear animation for better performance
          setCount(start + (end - start) * progress)
          frameRef.current = requestAnimationFrame(animate)
        } else {
          setCount(end)
          countingRef.current = false
          if (onComplete) onComplete()
        }
      }

      frameRef.current = requestAnimationFrame(animate)
    }, delay * 1000)

    return () => {
      clearTimeout(timer)
      cancelAnimationFrame(frameRef.current)
    }
  }, [inView, start, end, duration, delay, onComplete])

  // Format the number with separators and decimals
  const formatNumber = (num: number): string => {
    const fixedNumber = num.toFixed(decimals)
    const [intPart, decimalPart] = fixedNumber.split(".")

    // Add separator to integer part
    const formattedIntPart = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)

    // Combine with decimal part if it exists
    return decimalPart ? `${formattedIntPart}${decimal}${decimalPart}` : formattedIntPart
  }

  return (
    <span ref={ref} className={cn("font-bold", className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  )
}
