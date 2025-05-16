"use client"

import type React from "react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
  href?: string
}

export function FeatureCard({ icon, title, description, className, href }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const cardContent = (
    <CardContent className="p-4 sm:p-6">
      <div
        className={cn(
          "mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 transition-transform duration-300",
          isHovered ? "scale-110" : "",
        )}
      >
        {icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold text-blue-600">{title}</h3>
      <p className="mt-1 sm:mt-2 text-sm sm:text-base text-slate-600">{description}</p>
    </CardContent>
  )

  const cardClasses = cn(
    "border-none shadow-md transition-all duration-300 hover:shadow-lg",
    isHovered ? "transform -translate-y-1" : "",
    className,
  )

  if (href) {
    return (
      <Link href={href}>
        <Card className={cardClasses} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {cardContent}
        </Card>
      </Link>
    )
  }

  return (
    <Card className={cardClasses} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {cardContent}
    </Card>
  )
}
