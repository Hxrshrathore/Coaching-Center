import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  badge?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center" | "right"
}

export function SectionHeading({ badge, title, description, className, align = "center" }: SectionHeadingProps) {
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
          className="inline-flex bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300 text-xs sm:text-sm"
          variant="outline"
        >
          {badge}
        </Badge>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-blue-950 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-[85%] mx-auto">
          {description}
        </p>
      )}
    </header>
  )
}
