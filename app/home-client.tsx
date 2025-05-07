"use client"

import { Suspense } from "react"
import dynamic from "next/dynamic"

// Dynamically import components with SSR disabled to prevent hydration issues
const EnhancedHomepage = dynamic(
  () => import("@/components/home/enhanced-homepage").then((mod) => ({ default: mod.EnhancedHomepage })),
  { ssr: true },
)

const MobileOptimizedHomepage = dynamic(
  () => import("@/components/home/mobile-optimized-homepage").then((mod) => ({ default: mod.MobileOptimizedHomepage })),
  { ssr: true },
)

// Client component to detect device and render appropriate homepage
const HomepageSelector = dynamic(
  () => import("@/components/home/homepage-selector").then((mod) => ({ default: mod.HomepageSelector })),
  { ssr: false },
)

export function HomeClient() {
  return (
    <Suspense fallback={<HomepageLoading />}>
      <HomepageSelector MobileComponent={MobileOptimizedHomepage} DesktopComponent={EnhancedHomepage} />
    </Suspense>
  )
}

function HomepageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-900">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}
