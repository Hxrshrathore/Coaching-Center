"use client"

import { useState, useEffect } from "react"

interface LazySEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  loadingClassName?: string
}

export function LazySEOImage({
  src,
  alt,
  width,
  height,
  className = "",
  loadingClassName = "bg-gray-200 animate-pulse",
}: LazySEOImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    // Set up Intersection Observer to detect when image is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      { rootMargin: "200px" }, // Start loading when image is 200px from viewport
    )

    // Get the current element to observe
    const element = document.getElementById(`lazy-img-${src.replace(/\W/g, "")}`)
    if (element) observer.observe(element)

    // Clean up observer on component unmount
    return () => observer.disconnect()
  }, [src])

  return (
    <div
      id={`lazy-img-${src.replace(/\W/g, "")}`}
      className={`relative ${className} ${!isLoaded && isInView ? loadingClassName : ""}`}
      style={{ width, height, aspectRatio: `${width} / ${height}` }}
    >
      {isInView && (
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover ${!isLoaded ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}
        />
      )}
    </div>
  )
}
