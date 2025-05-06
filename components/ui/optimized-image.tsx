"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  loading?: "eager" | "lazy"
  quality?: number
  useModernFormat?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  loading = "lazy",
  quality = 80,
  useModernFormat = true,
  ...props
}: OptimizedImageProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [isLoaded, setIsLoaded] = useState(false)

  // For static export, we need to handle both local and remote images
  const isRemoteImage = src.startsWith("http")

  // Use modern image formats if available and requested
  useEffect(() => {
    if (!isRemoteImage && useModernFormat && !src.includes("placeholder")) {
      // Check if we have an optimized version available
      const fileExt = src.split(".").pop()?.toLowerCase()
      const baseName = src.substring(0, src.lastIndexOf("."))

      // Try to use WebP format first
      const webpSrc = `/optimized${baseName.substring(baseName.lastIndexOf("/"))}.webp`

      // Create a new Image to check if the WebP version exists
      const img = new Image()
      img.onload = () => {
        setImgSrc(webpSrc)
      }
      img.onerror = () => {
        // Fallback to original image
        setImgSrc(src)
      }
      img.src = webpSrc
    }
  }, [src, isRemoteImage, useModernFormat])

  return (
    <div className={cn("overflow-hidden relative", !isLoaded && "bg-gray-200 animate-pulse", className)}>
      <Image
        src={imgSrc || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        loading={loading}
        quality={quality}
        className={cn(
          "object-cover w-full h-full transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className,
        )}
        onLoad={() => setIsLoaded(true)}
        unoptimized={isRemoteImage} // Unoptimized for remote images in static export
        {...props}
      />
    </div>
  )
}
