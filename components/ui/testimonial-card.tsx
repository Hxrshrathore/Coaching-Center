"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  name: string
  role: string
  testimonial: string
  imageSrc?: string
  className?: string
}

export function TestimonialCard({ name, role, testimonial, imageSrc, className }: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "border-none shadow-md transition-all duration-300",
        isHovered ? "shadow-lg transform -translate-y-1" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div className="mb-4 flex justify-between items-start">
          <div className="flex items-center gap-4">
            {imageSrc ? (
              <div className="overflow-hidden rounded-full">
                <Image
                  src={imageSrc || "/placeholder.svg"}
                  alt={name}
                  width={48}
                  height={48}
                  className={cn(
                    "h-12 w-12 object-cover transition-transform duration-300",
                    isHovered ? "scale-110" : "",
                  )}
                />
              </div>
            ) : (
              <div className="h-12 w-12 rounded-full bg-brand-light flex items-center justify-center">
                <span className="text-brand-blue font-bold">{name.charAt(0)}</span>
              </div>
            )}
            <div>
              <h3 className="font-bold text-brand-text-dark dark:text-brand-text-light">{name}</h3>
              <p className="text-sm text-brand-text-muted dark:text-slate-400">{role}</p>
            </div>
          </div>
          <Quote
            className={cn("h-6 w-6 text-brand-blue/60 transition-transform duration-300", isHovered ? "rotate-12" : "")}
          />
        </div>
        <p className="text-brand-text-muted dark:text-slate-300 italic">{testimonial}</p>
      </CardContent>
    </Card>
  )
}
