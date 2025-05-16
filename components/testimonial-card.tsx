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

export default function TestimonialCard({ name, role, testimonial, imageSrc, className }: TestimonialCardProps) {
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
                  src={imageSrc || "/students/student-group-1.jpeg"}
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
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-bold">{name.charAt(0)}</span>
              </div>
            )}
            <div>
              <h3 className="font-bold text-blue-950 dark:text-white">{name}</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>
            </div>
          </div>
          <Quote
            className={cn("h-6 w-6 text-blue-300 transition-transform duration-300", isHovered ? "rotate-12" : "")}
          />
        </div>
        <p className="text-slate-600 dark:text-slate-400 italic">{testimonial}</p>
      </CardContent>
    </Card>
  )
}
