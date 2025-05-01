"use client"

import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  className?: string
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className={cn(
        "border-none shadow-md transition-all duration-300 hover:shadow-lg",
        isHovered ? "transform -translate-y-1" : "",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-6">
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-light dark:bg-brand-blue/20 transition-transform duration-300",
            isHovered ? "scale-110" : "",
          )}
        >
          {icon}
        </div>
        <h3 className="text-xl font-bold text-brand-text-dark dark:text-brand-text-light">{title}</h3>
        <p className="mt-2 text-brand-text-muted dark:text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}
