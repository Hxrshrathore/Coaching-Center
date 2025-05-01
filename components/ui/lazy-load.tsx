"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface LazyLoadProps {
  children: React.ReactNode
  height?: string | number
  width?: string | number
  className?: string
  skeletonClassName?: string
}

export function LazyLoad({ children, height, width, className = "", skeletonClassName = "" }: LazyLoadProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <div className={className} style={{ height, width }}>
        <Skeleton className={`h-full w-full ${skeletonClassName}`} />
      </div>
    )
  }

  return <div className={className}>{children}</div>
}
