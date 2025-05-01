"use client"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

interface CanonicalURLProps {
  baseUrl?: string
  path?: string
}

export function CanonicalURL({ baseUrl = "https://ascentclasses.com", path }: CanonicalURLProps) {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const canonicalPath = path || pathname
  const canonicalUrl = `${baseUrl}${canonicalPath}`

  return <link rel="canonical" href={canonicalUrl} />
}
