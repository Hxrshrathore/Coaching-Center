import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  subtitle?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "space-y-2 mb-8",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className,
      )}
    >
      {badge && (
        <Badge
          className="inline-flex bg-blue-100 text-blue-800 hover:bg-blue-100 text-xs sm:text-sm transition-colors duration-300"
          variant="outline"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 transition-colors duration-300">
        {title}
      </h2>
      {subtitle && <p className="text-lg sm:text-xl font-medium text-blue-700">{subtitle}</p>}
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-[85%] mx-auto transition-colors duration-300">
          {description}
        </p>
      )}
    </header>
  )
}
