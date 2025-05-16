import type React from "react"

interface SEOHeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6
  children: React.ReactNode
  className?: string
  id?: string
}

export function SEOHeading({ level, children, className = "", id }: SEOHeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements

  // Generate an ID from the heading text if not provided
  const headingId =
    id ||
    (typeof children === "string"
      ? children
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "")
      : undefined)

  return (
    <Tag id={headingId} className={className}>
      {children}
    </Tag>
  )
}
