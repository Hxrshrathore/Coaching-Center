"use client"

import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { usePathname } from "next/navigation"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items = [], className = "" }: BreadcrumbsProps) {
  const pathname = usePathname()

  // If no items are provided, generate them from the pathname
  const breadcrumbItems = items.length > 0 ? items : generateBreadcrumbs(pathname)

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex flex-wrap items-center">
        <li className="flex items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {breadcrumbItems.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700 dark:text-gray-300 font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Helper function to generate breadcrumbs from pathname
function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const paths = pathname.split("/").filter(Boolean)

  if (paths.length === 0) return []

  return paths.map((path, index) => {
    // Format the label to be more readable
    const label = path
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")

    // For the last item, don't include href
    if (index === paths.length - 1) {
      return { label }
    }

    // For other items, include href
    const href = "/" + paths.slice(0, index + 1).join("/")
    return { label, href }
  })
}
