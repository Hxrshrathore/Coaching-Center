"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"

export function EnhancedHomepage() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="overflow-x-hidden">
      {/* Scroll Progress Bar */}
      {isMounted && <ScrollProgress />}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
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
                Enroll Now
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
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Our Featured Programs</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "JEE Preparation",
                description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven results.",
                href: "/program-path/jee",
              },
              {
                title: "NEET Preparation",
                description:
                  "Specialized medical entrance exam preparation with focus on Biology, Physics, and Chemistry.",
                href: "/program-path/neet",
              },
              {
                title: "Olympiad Training",
                description: "Expert coaching for Science, Math and other Olympiads to excel in competitions.",
                href: "/olympiad-programs",
              },
            ].map((program, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{program.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={program.href}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 dark:bg-blue-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg sm:text-xl mb-8">
              Join Ascent Classes today and take the first step towards academic excellence and a successful career.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Link href="/get-enrolled">Enroll Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/reach-out">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
