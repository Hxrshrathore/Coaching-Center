import type React from "react"
import Link from "next/link"

interface SEOLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
  target?: "_blank" | "_self" | "_parent" | "_top"
  rel?: string
}

export function SEOLink({ href, children, className = "", title, target, rel }: SEOLinkProps) {
  // Determine if the link is external
  const isExternal = href.startsWith("http") || href.startsWith("//")

  // Set appropriate rel attribute for external links
  const linkRel = isExternal ? `${rel || ""} noopener noreferrer`.trim() : rel

  return (
    <Link href={href} className={className} title={title} target={target} rel={linkRel || undefined}>
      {children}
    </Link>
  )
}
