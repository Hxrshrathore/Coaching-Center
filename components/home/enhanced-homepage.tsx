"use client"

import { useRef, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
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
import { FadeIn } from "@/components/animations/fade-in"
import { BackToTop } from "@/components/ui/back-to-top"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { useMobile } from "@/hooks/use-mobile"

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
}

const fadeInUpVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export function EnhancedHomepage() {
  const isMobile = useMobile()
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const heroRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(0)

  // Set client-side rendering flag and track window width
  useEffect(() => {
    setIsClient(true)
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    // Add resize listener
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
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

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "JEE Advanced AIR 245",
      image: "/student-testimonial-1.png",
      quote:
        "The structured approach and personal attention from faculty at Ascent Classes helped me secure a top rank in JEE Advanced. Their problem-solving techniques and test series were invaluable.",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "NEET AIR 189",
      image: "/student-testimonial-2.png",
      quote:
        "The biology and chemistry faculty at Ascent Classes are exceptional. Their in-depth teaching and regular assessments prepared me thoroughly for NEET, helping me secure admission to a top medical college.",
    },
    {
      id: 3,
      name: "Ananya Gupta",
      role: "International Physics Olympiad Silver Medalist",
      image: "/student-testimonial-3.png",
      quote:
        "The advanced problem-solving techniques and specialized Olympiad training at Ascent Classes gave me the edge to excel at international competitions. The mentors go above and beyond to nurture talent.",
    },
  ]

  // Featured programs data
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

  // Why choose us features
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Add this useEffect after the other useEffect hooks
  useEffect(() => {
    // More efficient scroll handler that won't cause performance issues
    let scrollTimeout

    const handleScroll = () => {
      // Clear previous timeout to prevent multiple executions
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }

      // Schedule the repaint at the next animation frame for better performance
      scrollTimeout = window.requestAnimationFrame(() => {
        const decorativeElements = document.querySelectorAll('[aria-hidden="true"]')
        decorativeElements.forEach((el) => {
          // Force a repaint by accessing offsetHeight
          void el.offsetHeight
        })
      })
    }

    // Add passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup
    return () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout)
      }
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="relative w-full scroll-content">
      {/* Scroll Progress Bar */}
      {isClient && <ScrollProgress />}

      {/* Hero Section with Parallax and Animation Effects */}
      <section
        ref={heroRef}
        className="relative min-h-[90dvh] md:min-h-[85dvh] lg:min-h-[90dvh] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-900 dark:to-blue-950"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/10 dark:bg-white/5"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * 100 - 50],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 leading-tight max-w-5xl mx-auto">
              Unlock Your Academic Potential with <span className="text-yellow-300 inline-block">Ascent Classes</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto"
          >
            Expert coaching for JEE, NEET, Olympiads, and K-12 Science with proven results and personalized attention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              className="text-white/70"
            >
              <ChevronRight size={24} className="rotate-90 sm:h-7 sm:w-7 md:h-8 md:w-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Carousel with Animation */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              badge="Featured Programs"
              title="Discover Our Specialized Coaching Programs"
              description="Comprehensive coaching solutions tailored to help students excel in competitive exams and academic pursuits"
            />
          </FadeIn>

          <div className="mt-6 sm:mt-8">
            <FeaturedCarousel />
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <motion.section
        ref={statsRef}
        className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950 text-white"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                <CountUp end={10000} suffix="+" duration={2.5} />
              </div>
              <p className="text-base sm:text-lg text-blue-100">JEE & NEET Selections</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                <CountUp end={500} suffix="+" duration={2} />
              </div>
              <p className="text-base sm:text-lg text-blue-100">Olympiad Medalists</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                <CountUp end={95} suffix="%" duration={2} />
              </div>
              <p className="text-base sm:text-lg text-blue-100">Success Rate</p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="text-center bg-blue-700 dark:bg-blue-900 rounded-lg p-4 sm:p-6 shadow-lg transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 text-white">
                <CountUp end={15} suffix="+" duration={1.5} />
              </div>
              <p className="text-base sm:text-lg text-blue-100">Years of Excellence</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Programs Section with Interactive Cards */}
      <section className="py-12 sm:py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Our Featured Programs"
              subtitle="Comprehensive coaching for competitive exams and academic excellence"
            />
          </FadeIn>

          <motion.div
            ref={featuresRef}
            variants={containerVariants}
            initial="hidden"
            animate={featuresInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-6 sm:mt-8"
          >
            {featuredPrograms.map((program) => (
              <motion.div key={program.id} variants={itemVariants}>
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-gray-50 dark:bg-slate-800 relative">
        {/* Persistent decorative shapes that won't disappear during scroll */}
        <div
          className="absolute -bottom-8 -left-8 w-48 sm:w-64 h-48 sm:h-64 bg-blue-600/90 rounded-lg transform rotate-6 pointer-events-none prevent-scroll-hide"
          style={{
            zIndex: 0,
            willChange: "transform",
            transform: "translateZ(0) rotate(6deg)",
            backfaceVisibility: "hidden",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute -top-8 -right-8 w-32 sm:w-48 h-32 sm:h-48 bg-yellow-400/90 rounded-lg transform -rotate-6 pointer-events-none prevent-scroll-hide"
          style={{
            zIndex: 0,
            willChange: "transform",
            transform: "translateZ(0) rotate(-6deg)",
            backfaceVisibility: "hidden",
          }}
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div>
              <FadeIn>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-950 dark:text-white mb-4 sm:mb-6">
                  Why Students & Parents Choose Ascent Classes
                </h2>
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-6 sm:mb-8">
                  Our commitment to academic excellence and personalized approach has made us the preferred choice for
                  serious aspirants.
                </p>
              </FadeIn>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                className="space-y-4 sm:space-y-6"
              >
                {features.map((feature, index) => (
                  <motion.div key={index} variants={itemVariants} className="flex gap-3 sm:gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <div className="h-6 w-6 sm:h-8 sm:w-8">{feature.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-blue-700 dark:text-blue-400 mb-1 sm:mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="relative" style={{ isolation: "isolate" }}>
              <div className="relative rounded-lg overflow-hidden shadow-2xl z-10">
                <Image
                  src="/modern-classroom-study.png"
                  alt="Modern classroom at Ascent Classes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover rounded-lg"
                  priority={true}
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
          <FadeIn>
            <SectionHeading
              badge="Success Stories"
              title="What Our Students Say"
              description="Hear from our students who achieved their academic goals with our guidance"
            />
          </FadeIn>

          <div className="mt-8 sm:mt-12 max-w-4xl mx-auto">
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
      <motion.section
        ref={ctaRef}
        variants={fadeInUpVariants}
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-800 dark:to-blue-950"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Begin Your Journey to Success?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Join Ascent Classes today and take the first step towards achieving your academic goals with our expert
            guidance.
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
            <Link href="/reach-out">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}
