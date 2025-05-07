"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useMobile } from "@/hooks/use-mobile"
import { useConnectionQuality } from "@/lib/performance-utils"

interface HomepageSelectorProps {
  MobileComponent: React.ComponentType
  DesktopComponent: React.ComponentType
}

export function HomepageSelector({ MobileComponent, DesktopComponent }: HomepageSelectorProps) {
  const isMobile = useMobile(768)
  const isSlowConnection = useConnectionQuality()
  const [isClient, setIsClient] = useState(false)

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Show loading state during SSR/hydration
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  // Use mobile version for mobile devices or slow connections
  if (isMobile || isSlowConnection) {
    return <MobileComponent />
  }

  // Use desktop version for desktop devices with good connections
  return <DesktopComponent />
}
