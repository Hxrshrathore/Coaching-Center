import Image from "next/image"

interface SEOOptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function SEOOptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
}: SEOOptimizedImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw"
      />
    </div>
  )
}
