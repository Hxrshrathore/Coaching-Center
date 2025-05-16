"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image, { type ImageProps } from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  fallbackSrc?: string
  aspectRatio?: number
  previewSrc?: string
  containerClassName?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  fallbackSrc = "/students/student-group-1.jpeg",
  aspectRatio,
  previewSrc,
  className,
  containerClassName,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)
  const imageRef = useRef<HTMLImageElement>(null)

  // Calculate aspect ratio for container
  const containerStyle: React.CSSProperties = {}
  if (aspectRatio) {
    containerStyle.paddingBottom = `${(1 / aspectRatio) * 100}%`
  } else if (width && height) {
    containerStyle.paddingBottom = `${(height / width) * 100}%`
  }

  // Handle image load
  const handleLoad = () => {
    setIsLoaded(true)
  }

  // Handle image error
  const handleError = () => {
    setError(true)
  }

  // Use IntersectionObserver to detect when image is in viewport
  useEffect(() => {
    if (!imageRef.current || priority) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set the src attribute when the image is in viewport
            const img = entry.target as HTMLImageElement
            if (img.dataset.src) {
              img.src = img.dataset.src
            }
            observer.unobserve(img)
          }
        })
      },
      { rootMargin: "200px" }, // Load images 200px before they come into view
    )

    observer.observe(imageRef.current)

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [priority])

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-200 dark:bg-gray-800",
        containerClassName,
        aspectRatio || (width && height) ? "w-full" : "",
      )}
      style={aspectRatio || (width && height) ? containerStyle : undefined}
    >
      {/* Low quality placeholder */}
      {previewSrc && !isLoaded && (
        <Image
          src={previewSrc || "/placeholder.svg"}
          alt=""
          fill={!width || !height}
          width={width}
          height={height}
          className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 transform"
          aria-hidden="true"
        />
      )}

      {/* Main image */}
      <Image
        ref={imageRef as any}
        src={error ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        fill={!width || !height}
        className={cn("transition-opacity duration-300", isLoaded ? "opacity-100" : "opacity-0", className)}
        sizes={sizes}
        priority={priority}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />

      {/* Loading skeleton */}
      {!isLoaded && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" aria-hidden="true" />}
    </div>
  )
}
