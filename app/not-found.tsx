"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center">
        <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="relative w-40 h-40 md:w-60 md:h-60">
              <Image src="/404-illustration.png" alt="404 Illustration" fill className="object-contain" priority />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-blue-950 dark:text-white">
                Oops! Page Not Found
              </h1>
              <p className="max-w-[600px] text-slate-600 md:text-xl dark:text-slate-400">
                The page you're looking for doesn't exist or has been moved. Let's get you back on track.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </Button>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  <Home className="h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
