"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import {
  Stethoscope,
  Trophy,
  GraduationCap,
  BookOpen,
  ChevronRight,
  Users,
  Award,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { CountUp } from "@/components/animations/count-up"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { useConnectionQuality, shouldReduceMotion } from "@/lib/performance-utils"

// Testimonials data - moved outside component to prevent re-creation
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "JEE Advanced AIR 245",
    image: "/student-testimonial-1.png",
    quote:
      "The structured approach and personal attention from faculty at Ascent Classes helped me secure a top rank in JEE Advanced.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "NEET AIR 189",
    image: "/student-testimonial-2.png",
    quote:
      "The biology and chemistry faculty at Ascent Classes are exceptional. Their in-depth teaching prepared me thoroughly for NEET.",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "International Physics Olympiad Silver Medalist",
    image: "/student-testimonial-3.png",
    quote:
      "The advanced problem-solving techniques and specialized Olympiad training at Ascent Classes gave me the edge to excel.",
  },
]

// Featured programs data - moved outside component
const featuredPrograms = [
  {
    id: 1,
    title: "JEE Preparation",
    description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven results.",
    href: "/program-path/jee",
    icon: <BookOpen className="h-5 w-5 sm:h-6 sm:w-6" />,
    stats: "95% selection rate",
  },
  {
    id: 2,
    title: "NEET Preparation",
    description: "Specialized medical entrance exam preparation with focus on Biology, Physics, and Chemistry.",
    href: "/program-path/neet",
    icon: <Stethoscope className="h-5 w-5 sm:h-6 sm:w-6" />,
    stats: "Top 500 ranks every year",
  },
  {
    id: 3,
    title: "Olympiad Training",
    description:
      "Expert coaching for Science, Math and other Olympiads to excel in national and international competitions.",
    href: "/olympiad-programs",
    icon: <Trophy className="h-5 w-5 sm:h-6 sm:w-6" />,
    stats: "500+ medalists",
  },
  {
    id: 4,
    title: "Class 4-12 Science Coaching",
    description: "Foundation and advanced courses for PCMB subjects for students from Class 4 to 12.",
    href: "/k12-science-coaching",
    icon: <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />,
    stats: "15+ years of excellence",
  },
]

// Features data - moved outside component
const features = [
  {
    icon: <Users className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators with proven track records of producing top rankers.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Personalized Attention",
    description: "Small batch sizes ensure individual attention and personalized learning paths.",
  },
  {
    icon: <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Comprehensive Study Material",
    description: "Meticulously crafted study materials aligned with the latest exam patterns.",
  },
  {
    icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Regular Assessments",
    description: "Frequent tests and detailed performance analysis to track progress and improve.",
  },
]

// Hero section component - extracted for better code splitting
function MobileOptimizedHero() {
  const reduceMotion = shouldReduceMotion(true)

  return (
    <section className="relative min-h-[90dvh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      {/* Static decorative elements instead of animated ones */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {!reduceMotion &&
          Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white/10 dark:bg-white/5"
              style={{
                width: 40 + i * 15,
                height: 40 + i * 15,
                left: `${15 + i * 25}%`,
                top: `${20 + i * 20}%`,
                opacity: 0.1 + i * 0.02,
              }}
            />
          ))}
      </div>

      <div className="container relative z-10 px-4 py-12 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight max-w-5xl mx-auto">
          Unlock Your Academic Potential with <span className="text-yellow-300 inline-block">Ascent Classes</span>
        </h1>

        <p className="text-base sm:text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
          Expert coaching for JEE, NEET, Olympiads, and K-12 Science with proven results.
        </p>

        <div className="flex flex-col gap-3 justify-center">
          <Link href="/get-enrolled" className="w-full">
            <Button
              size="lg"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-base px-6 py-3 rounded-full shadow-lg"
            >
              Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/scholarship-test" className="w-full">
            <Button
              size="lg"
              variant="outline"
              className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base px-6 py-3 rounded-full"
            >
              Take Scholarship Test
            </Button>
          </Link>
        </div>

        {!reduceMotion && (
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="text-white/70 animate-bounce">
              <ChevronRight size={20} className="rotate-90" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export function MobileOptimizedHomepage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const isSlowConnection = useConnectionQuality()
  const reduceMotion = shouldReduceMotion(true)

  // Set client-side rendering flag
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Intersection observers for scroll-triggered animations
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [featuresRef, featuresInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [testimonialsRef, testimonialsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Auto-rotate testimonials - only if not reduced motion
  useEffect(() => {
    if (reduceMotion) return

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [reduceMotion])

  return (
    <div className="relative w-full scroll-content">
      {/* Scroll Progress Bar - only render on client */}
      {isClient && !reduceMotion && <ScrollProgress />}

      {/* Hero Section - highest priority for LCP */}
      <MobileOptimizedHero />

      {/* Featured Carousel with Animation */}
      <section className="py-10 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Featured Programs"
            title="Discover Our Specialized Coaching Programs"
            description="Comprehensive coaching solutions tailored to help students excel"
          />

          <div className="mt-6">
            <FeaturedCarousel />
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section
        ref={statsRef}
        className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-3">
            {statsInView && (
              <>
                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold mb-1 text-white">
                    <CountUp end={10000} suffix="+" duration={1} />
                  </div>
                  <p className="text-sm text-blue-100">JEE & NEET Selections</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold mb-1 text-white">
                    <CountUp end={500} suffix="+" duration={1} />
                  </div>
                  <p className="text-sm text-blue-100">Olympiad Medalists</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold mb-1 text-white">
                    <CountUp end={95} suffix="%" duration={1} />
                  </div>
                  <p className="text-sm text-blue-100">Success Rate</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-3 shadow-lg">
                  <div className="text-xl font-bold mb-1 text-white">
                    <CountUp end={15} suffix="+" duration={1} />
                  </div>
                  <p className="text-sm text-blue-100">Years of Excellence</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Programs Section with Interactive Cards */}
      <section className="py-10 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading title="Our Featured Programs" subtitle="Comprehensive coaching for competitive exams" />

          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {featuredPrograms.map((program) => (
              <div key={program.id}>
                <Link href={program.href}>
                  <Card className="h-full border-none shadow-md bg-white dark:bg-slate-800">
                    <CardContent className="p-4">
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        {program.icon}
                      </div>
                      <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400 mb-2">{program.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                        {program.description}
                      </p>
                      <div className="flex items-center text-xs text-blue-500 font-medium">
                        <Star className="h-3 w-3 mr-1" />
                        {program.stats}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-10 bg-gray-50 dark:bg-slate-800 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-950 dark:text-white mb-4">
                Why Students & Parents Choose Ascent Classes
              </h2>
              <p className="text-base text-slate-600 dark:text-slate-300 mb-6">
                Our commitment to academic excellence and personalized approach has made us the preferred choice.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-6 w-6">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg">
              <OptimizedImage
                src="/modern-classroom-study.png"
                alt="Modern classroom at Ascent Classes"
                fill
                sizes="100vw"
                className="object-cover"
                loading="lazy"
                mobileSizes="100vw"
                mobileQuality={isSlowConnection ? 60 : 75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4">
                <p className="text-base font-medium text-white">
                  "Our mission is to provide quality education that transforms students into achievers."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Animation */}
      <section ref={testimonialsRef} className="py-10 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Success Stories"
            title="What Our Students Say"
            description="Hear from our students who achieved their academic goals"
          />

          <div className="mt-6 max-w-4xl mx-auto">
            {/* Fixed height container to prevent layout shift */}
            <div className="relative h-[400px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-2xl shadow-lg flex flex-col gap-4 h-full">
                    <div className="flex-shrink-0 flex justify-center">
                      {/* Fixed size container for image */}
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-500">
                        <OptimizedImage
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                          mobileSizes="80px"
                          mobileQuality={isSlowConnection ? 60 : 75}
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-center">
                      <div className="flex justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-200 italic mb-2">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="text-base font-bold text-blue-700 dark:text-blue-400">{testimonial.name}</h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-blue-600 w-4" : "bg-blue-300 dark:bg-blue-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section
        ref={ctaRef}
        className="py-10 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Begin Your Journey to Success?</h2>
          <p className="text-base text-blue-100 mb-6 max-w-2xl mx-auto">
            Join Ascent Classes today and take the first step towards achieving your academic goals.
          </p>
          <div className="flex flex-col gap-3 justify-center">
            <Link href="/get-enrolled" className="w-full">
              <Button
                size="lg"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold text-base px-6 py-3 rounded-full shadow-lg"
              >
                Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/reach-out" className="w-full">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base px-6 py-3 rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Top Button - only if not reduced motion */}
      {!reduceMotion && <BackToTop />}
    </div>
  )
}
