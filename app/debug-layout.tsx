import type React from "react"
import { ThemeDebug } from "@/components/theme-debug"

export default function DebugLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      {process.env.NODE_ENV === "development" && <ThemeDebug />}
    </>
  )
}
