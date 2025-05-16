import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label?: string
  name?: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <ol className={cn("flex flex-wrap items-center text-sm", className)} aria-label="Breadcrumb">
      <li className="flex items-center">
        <Link href="/" className="text-blue-600 hover:text-blue-700">
          <Home className="h-4 w-4" />
          <span className="sr-only">Home</span>
        </Link>
      </li>

      {items.map((item, index) => {
        // Support both name and label properties
        const displayText = item.label || item.name || ""

        return (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-700 font-medium">{displayText}</span>
            ) : (
              <Link href={item.href} className="text-blue-600 hover:text-blue-700">
                {displayText}
              </Link>
            )}
          </li>
        )
      })}
    </ol>
  )
}
