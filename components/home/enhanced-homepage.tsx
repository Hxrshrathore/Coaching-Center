"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
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
import { useMobile } from "@/hooks/use-mobile"

// Simplified animation variants to reduce JS execution
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { y: 5, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.3 },
  },
}

const fadeInUpVariants = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
}

// Testimonials data - moved outside component to prevent re-creation
const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "JEE Advanced AIR 245",
    image: "/students/student-group-1.jpeg",
    quote:
      "The structured approach and personal attention from faculty at Ascent Coaching Classes helped me secure a top rank in JEE Advanced. Their problem-solving techniques and test series were invaluable.",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "NEET AIR 189",
    image: "/students/student-group-2.jpeg",
    quote:
      "The biology and chemistry faculty at Ascent Coaching Classes are exceptional. Their in-depth teaching and regular assessments prepared me thoroughly for NEET, helping me secure admission to a top medical college.",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "International Physics Olympiad Silver Medalist",
    image: "/students/student-group-3.jpeg",
    quote:
      "The advanced problem-solving techniques and specialized Olympiad training at Ascent Coaching Classes gave me the edge to excel at international competitions. The mentors go above and beyond to nurture talent.",
  },
]

// Featured programs data - moved outside component
const featuredPrograms = [
  {
    id: 1,
    title: "JEE Preparation",
    description: "Comprehensive coaching for JEE Main & Advanced with expert faculty and proven results.",
    href: "/program-path/jee",
    icon: <BookOpen className="h-6 w-6" />,
    stats: "95% selection rate",
  },
  {
    id: 2,
    title: "NEET Preparation",
    description: "Specialized medical entrance exam preparation with focus on Biology, Physics, and Chemistry.",
    href: "/program-path/neet",
    icon: <Stethoscope className="h-6 w-6" />,
    stats: "Top 500 ranks every year",
  },
  {
    id: 3,
    title: "Olympiad Training",
    description:
      "Expert coaching for Science, Math and other Olympiads to excel in national and international competitions.",
    href: "/olympiad-programs",
    icon: <Trophy className="h-6 w-6" />,
    stats: "500+ medalists",
  },
  {
    id: 4,
    title: "Class 4-12 Science Coaching",
    description: "Foundation and advanced courses for PCMB subjects for students from Class 4 to 12.",
    href: "/k12-science-coaching",
    icon: <GraduationCap className="h-6 w-6" />,
    stats: "15+ years of excellence",
  },
]

// Features data - moved outside component
const features = [
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Expert Faculty",
    description: "Learn from experienced educators with proven track records of producing top rankers.",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "Personalized Attention",
    description: "Small batch sizes ensure individual attention and personalized learning paths.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    title: "Comprehensive Study Material",
    description: "Meticulously crafted study materials aligned with the latest exam patterns.",
  },
  {
    icon: <Award className="h-8 w-8 text-blue-500" />,
    title: "Regular Assessments",
    description: "Frequent tests and detailed performance analysis to track progress and improve.",
  },
]

// Hero section component - extracted for better code splitting
function HeroSection() {
  return (
    <section className="relative min-h-[90dvh] md:min-h-[85dvh] lg:min-h-[90dvh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950">
      {/* Reduced number of animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 dark:bg-white/5"
            style={{
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.1,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto">
          Unlock Your Academic Potential with{" "}
          <span className="text-yellow-300 inline-block">Ascent Coaching Classes</span>
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

export function EnhancedHomepage() {
  const isMobile = useMobile()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef(null)

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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full scroll-content">
      {/* Scroll Progress Bar - only render on client */}
      {isClient && <ScrollProgress />}

      {/* Hero Section - highest priority for LCP */}
      <HeroSection />

      {/* Featured Carousel with Animation */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Featured Programs"
            title="Discover Our Specialized Coaching Programs"
            description="Comprehensive coaching solutions tailored to help students excel in competitive exams and academic pursuits"
          />

          <div className="mt-6 sm:mt-8">
            <FeaturedCarousel />
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section
        ref={statsRef}
        className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {statsInView && (
              <>
                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    <CountUp end={10000} suffix="+" duration={1} />
                  </div>
                  <p className="text-base sm:text-lg text-blue-100">JEE & NEET Selections</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    <CountUp end={500} suffix="+" duration={1} />
                  </div>
                  <p className="text-base sm:text-lg text-blue-100">Olympiad Medalists</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    <CountUp end={95} suffix="%" duration={1} />
                  </div>
                  <p className="text-base sm:text-lg text-blue-100">Success Rate</p>
                </div>

                <div className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                    <CountUp end={15} suffix="+" duration={1} />
                  </div>
                  <p className="text-base sm:text-lg text-blue-100">Years of Excellence</p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Featured Programs Section with Interactive Cards */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Featured Programs"
            subtitle="Comprehensive coaching for competitive exams and academic excellence"
          />

          <div ref={featuresRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8">
            {featuredPrograms.map((program) => (
              <div key={program.id}>
                <Link href={program.href}>
                  <Card className="h-full border-none shadow-md transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 bg-white dark:bg-slate-800">
                    <CardContent className="p-4 sm:p-6">
                      <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 transition-transform duration-300 group-hover:scale-110">
                        {program.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        {program.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mb-3 sm:mb-4">
                        {program.description}
                      </p>
                      <div className="flex items-center text-xs sm:text-sm text-blue-500 font-medium">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
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
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-800 relative">
        {/* Fixed position decorative shapes to prevent layout shift */}
        <div
          className="absolute -bottom-8 -left-8 w-48 h-48 bg-blue-600/90 rounded-lg transform rotate-6 pointer-events-none"
          style={{
            zIndex: 0,
            position: "absolute",
            transform: "rotate(6deg)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400/90 rounded-lg transform -rotate-6 pointer-events-none"
          style={{
            zIndex: 0,
            position: "absolute",
            transform: "rotate(-6deg)",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4 sm:mb-6">
                Why Students & Parents Choose Ascent Coaching Classes
              </h2>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
                Our commitment to academic excellence and personalized approach has made us the preferred choice for
                serious aspirants.
              </p>

              <div className="space-y-4 sm:space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 sm:h-8 sm:w-8">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative" style={{ isolation: "isolate" }}>
              {/* Pre-sized container to prevent layout shift */}
              <div className="relative rounded-lg overflow-hidden shadow-2xl z-10 w-full aspect-[4/3]">
                <Image
                  src="/students/interactive-learning-1.jpeg"
                  alt="Interactive learning at Ascent Coaching Classes with students engaging with digital content"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
                  <p className="text-base sm:text-lg font-medium text-white">
                    "Our mission is to provide quality education that transforms students into achievers."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Animation */}
      <section ref={testimonialsRef} className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Success Stories"
            title="What Our Students Say"
            description="Hear from our students who achieved their academic goals with our guidance"
          />

          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
            {/* Fixed height container to prevent layout shift */}
            <div className="relative h-[450px] sm:h-[350px] md:h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === activeTestimonial ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="bg-gray-50 dark:bg-slate-800 p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg flex flex-col md:flex-row gap-4 sm:gap-6 h-full">
                    <div className="flex-shrink-0 flex justify-center md:justify-start">
                      {/* Fixed size container for image */}
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-500">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                      <div className="flex justify-center md:justify-start mb-2 sm:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 italic mb-2 sm:mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-blue-700 dark:text-blue-400">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 sm:mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial ? "bg-blue-600 w-4 sm:w-6" : "bg-blue-300 dark:bg-blue-700"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section with Animation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Begin Your Success Journey?
              </h2>
              <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Take the first step towards academic excellence. Join Ascent Classes today and transform your
                preparation strategy.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/get-enrolled">
                <Button size="lg" variant="white-blue" className="gap-1">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/reach-out">
                <Button size="lg" variant="outline-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
