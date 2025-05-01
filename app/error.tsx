"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SEOHeading } from "@/components/ui/seo-heading"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <SEOHeading level={1} className="mb-4">
        Something went wrong!
      </SEOHeading>

      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400">
        We apologize for the inconvenience. An unexpected error has occurred.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button onClick={reset} className="bg-blue-600 hover:bg-blue-700">
          Try Again
        </Button>

        <Link href="/">
          <Button
            variant="outline"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  )
}
