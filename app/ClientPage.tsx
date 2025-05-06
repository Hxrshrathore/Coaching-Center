"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { FadeIn } from "@/components/animations/fade-in"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ClientPage({ structuredData }: { structuredData: any }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "JEE Advanced 2023 | AIR 245",
      content:
        "The faculty at Ascent Classes is exceptional. Their teaching methodology and personal attention helped me crack JEE Advanced with a great rank. The study material and test series were comprehensive and aligned perfectly with the exam pattern.",
      avatar: "/student-testimonial-1.png",
    },
    {
      id: 2,
      name: "Priya Patel",
      role: "NEET 2023 | AIR 189",
      content:
        "I joined Ascent Classes for NEET preparation, and it was the best decision. The biology faculty especially made complex concepts easy to understand. Regular tests and personalized feedback helped me improve consistently.",
      avatar: "/student-testimonial-2.png",
    },
    {
      id: 3,
      name: "Amit Kumar",
      role: "JEE Main 2023 | 99.8 Percentile",
      content:
        "The problem-solving approach taught at Ascent Classes helped me tackle even the toughest questions in JEE Main. The faculty is always available for doubt clearing, and the competitive environment pushed me to excel.",
      avatar: "/student-testimonial-3.png",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-950 dark:text-white leading-tight">
                  Empowering Students for <span className="text-blue-600 dark:text-blue-400">Academic Excellence</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
                  Ascent Classes provides expert coaching for JEE, NEET, Olympiads, and K-12 Science with personalized
                  attention and proven results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/get-enrolled">
                    <Button size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                      Get Enrolled <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/our-vision">
                    <Button size="lg" variant="outline" className="gap-2">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/modern-classroom-study.png"
                  alt="Students studying in a modern classroom environment"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Programs Carousel */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Featured Programs"
            title="Explore Our Top Programs"
            description="Discover our specialized coaching programs designed for different competitive exams"
            className="mb-10"
          />

          <FeaturedCarousel />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-blue-50 dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Success Stories"
            title="What Our Students Say"
            description="Hear from our students who achieved their dreams with our guidance"
            className="mb-10"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <FadeIn key={testimonial.id} delay={0.1 * testimonial.id} direction="up">
                <TestimonialCard
                  name={testimonial.name}
                  role={testimonial.role}
                  content={testimonial.content}
                  avatar={testimonial.avatar}
                />
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/toppers-tales">
              <Button variant="outline" className="gap-2">
                View More Success Stories <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Begin Your Success Journey?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join Ascent Classes today and transform your preparation strategy with our expert guidance and
                comprehensive study material.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/get-enrolled">
                <Button size="lg" className="gap-1 bg-white text-blue-600 hover:bg-blue-50">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/reach-out">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-50 hover:bg-blue-700 hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
