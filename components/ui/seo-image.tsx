import Image from "next/image"
import { cn } from "@/lib/utils"

interface SEOImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
  sizes?: string
  caption?: string
  credit?: string
}

export function SEOImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "100vw",
  caption,
  credit,
  ...props
}: SEOImageProps) {
  return (
    <figure className={cn("overflow-hidden", className)}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes={sizes}
        className="object-cover w-full h-full"
        unoptimized={true} // For static export
        {...props}
      />
      {(caption || credit) && (
        <figcaption className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {caption && <span>{caption}</span>}
          {caption && credit && <span> - </span>}
          {credit && <span className="italic">{credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
