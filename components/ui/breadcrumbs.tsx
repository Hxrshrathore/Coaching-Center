import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-sm ${className}`}>
      <ol className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </Link>
        </li>

        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <ChevronRight className="h-4 w-4 text-slate-400" />
            {item.href ? (
              <Link
                href={item.href}
                className="ml-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
              >
                {item.label}
              </Link>
            ) : (
              <span className="ml-2 text-slate-700 dark:text-slate-300" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
