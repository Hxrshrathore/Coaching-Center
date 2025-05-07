"use client"

import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OptimizedHero() {
  const heroRef = useRef<HTMLDivElement>(null)

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90dvh] md:min-h-[85dvh] lg:min-h-[90dvh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950"
    >
      {/* Static decorative elements instead of animated ones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 dark:bg-white/5"
            style={{
              width: 50 + i * 20,
              height: 50 + i * 20,
              left: `${10 + i * 20}%`,
              top: `${15 + i * 15}%`,
              opacity: 0.1 + i * 0.02,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto">
          Unlock Your Academic Potential with <span className="text-yellow-300 inline-block">Ascent Classes</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto">
          Expert coaching for JEE, NEET, Olympiads, and K-12 Science with proven results and personalized attention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-enrolled">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Enroll Now <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
          <Link href="/scholarship-test">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Take Scholarship Test
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="text-white/70 animate-bounce">
            <ChevronRight size={24} className="rotate-90 sm:h-7 sm:w-7 md:h-8 md:w-8" />
          </div>
        </div>
      </div>
    </section>
  )
}
