import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) {
  // For static export, we need to handle both local and remote images
  const isRemoteImage = src.startsWith("http")

  return (
    <div className={cn("overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="object-cover w-full h-full"
        unoptimized={isRemoteImage} // Unoptimized for remote images in static export
        {...props}
      />
    </div>
  )
}
