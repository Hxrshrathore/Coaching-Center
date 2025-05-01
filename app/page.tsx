"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Calendar,
  BookCheck,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"
import { NumberedList } from "@/components/ui/numbered-list"
import { FeatureCard } from "@/components/ui/feature-card"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { PageLoader } from "@/components/loading/page-loader"
import { SkeletonCard } from "@/components/loading/skeleton-card"
import { SkeletonTestimonial } from "@/components/loading/skeleton-testimonial"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import { FeaturedCarousel } from "@/components/featured-carousel"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    const contentTimer = setTimeout(() => {
      setShowContent(true)
    }, 1200)

    return () => {
      clearTimeout(timer)
      clearTimeout(contentTimer)
    }
  }, [])

  const enrollmentSteps = [
    {
      title: "Schedule a Counseling Session",
      description: "Visit our center or call us to schedule a free counseling session with our experts.",
    },
    {
      title: "Assessment Test",
      description: "Take a brief assessment test to help us understand your current knowledge level.",
    },
    {
      title: "Personalized Program",
      description: "Get a customized study plan tailored to your goals and learning pace.",
    },
    {
      title: "Complete Enrollment",
      description: "Complete the admission formalities and join our community of achievers.",
    },
  ]

  const features = [
    {
      icon: <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Small Batch Sizes",
      description: "Limited students per batch ensuring personalized attention and better learning outcomes.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Comprehensive Study Material",
      description: "Well-researched and regularly updated study materials covering the entire syllabus.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Regular Mock Tests",
      description: "Weekly tests and assessments to track progress and build exam temperament.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Flexible Timings",
      description: "Morning and evening batches to accommodate school and college schedules.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Doubt Clearing Sessions",
      description: "Dedicated sessions to resolve doubts and ensure complete understanding of concepts.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      title: "Performance Tracking",
      description: "Regular progress reports and parent-teacher meetings to keep track of improvement.",
    },
  ]

  const testimonials = [
    {
      name: "Priya Singh",
      role: "NEET Rank 2087 (2024)",
      testimonial:
        "The structured approach and personal mentoring at Ascent Classes helped me crack NEET with a top rank. The faculty's guidance was invaluable throughout my preparation journey.",
      imageSrc: "/young-indian-female-student.png",
    },
    {
      name: "Rajat Tiwari",
      role: "SSC CGL Final Selection (2023)",
      testimonial:
        "Joining Ascent Classes was the best decision I made. The faculty's expertise and regular mock tests helped me secure my dream government job through SSC CGL.",
      imageSrc: "/young-indian-male-student.png",
    },
    {
      name: "Meenal Yadav",
      role: "JEE Advanced AIR 8932 (2023)",
      testimonial:
        "The JEE coaching at Ascent Classes is exceptional. The problem-solving techniques and conceptual clarity provided by the teachers helped me crack JEE Advanced.",
      imageSrc: "/young-indian-professional-male.png",
    },
    {
      name: "Ankit Sharma",
      role: "Bank PO (2024)",
      testimonial:
        "The banking exam preparation at Ascent Classes is comprehensive and focused. The current affairs sessions and mock interviews were particularly helpful.",
      imageSrc: "/student-testimonial-1.png",
    },
    {
      name: "Ritu Patel",
      role: "NEET Rank 5432 (2023)",
      testimonial:
        "The biology faculty at Ascent Classes is outstanding. Their approach to teaching complex concepts made my NEET preparation much easier and effective.",
      imageSrc: "/student-testimonial-2.png",
    },
    {
      name: "Mohit Verma",
      role: "JEE Main 99.2 Percentile (2024)",
      testimonial:
        "The problem-solving techniques taught at Ascent Classes helped me tackle even the toughest questions in JEE Main. Highly recommended for serious aspirants.",
      imageSrc: "/student-testimonial-3.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <PageLoader />
      <main>
        {/* Featured Carousel Section */}
        <section className="w-full">
          <FeaturedCarousel />
        </section>

        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    className="inline-flex mb-2 bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300"
                    variant="outline"
                  >
                    Excellence in Education
                  </Badge>
                  <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-blue-950 dark:text-white">
                    Ascent Classes - Top Coaching Center in Chinhat, Lucknow
                  </h1>
                  <p className="max-w-[600px] text-sm sm:text-base md:text-xl text-slate-600 dark:text-slate-400">
                    Specialized coaching for SSC, Bank, JEE, NEET, and Olympiads. Transform your preparation journey
                    with expert guidance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/get-enrolled" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto gap-1 bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/program-path" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950 transition-all duration-300"
                    >
                      Explore Courses
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-400" />
                    <span>Hundreds of Successful Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-400" />
                    <span>Proven Track Record</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600 dark:text-blue-400" />
                    <span>Expert Faculty</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex items-center justify-center mt-6 lg:mt-0">
                <Image
                  src="/modern-classroom-study.png"
                  alt="Students at Ascent Classes"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-lg transition-all duration-500 hover:shadow-xl w-full max-w-md mx-auto"
                  priority
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Our Advantage"
              title="Why Choose Ascent Classes"
              description="What sets us apart from other coaching institutes"
              className="mb-6 md:mb-10"
            />

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => <SkeletonCard key={i} />)
                : features.map((feature, index) => (
                    <FadeIn key={index} delay={0.1 * index} direction="up">
                      <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </FadeIn>
                  ))}
            </div>

            <div className="mt-10 md:mt-16">
              <FadeIn direction="up">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white mb-4 md:mb-6 text-center">
                    Our Commitment to Excellence
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                        <CountUp end={100} suffix="%" />
                      </div>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Dedication</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                        <CountUp end={95} suffix="%" />
                      </div>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                        <CountUp end={20} suffix="+" />
                      </div>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Expert Faculty</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1 md:mb-2">
                        <CountUp end={5} suffix="+" />
                      </div>
                      <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">Years Experience</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="mt-8 md:mt-12 flex justify-center">
              <Link href="/our-vision">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Top Programs"
              title="Courses Offered"
              description="Explore our most popular courses designed to help you excel in competitive exams"
              className="mb-6 md:mb-10"
            />

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading ? (
                Array(3)
                  .fill(0)
                  .map((_, i) => <SkeletonCard key={i} />)
              ) : (
                <>
                  <FadeIn delay={0.1} direction="up">
                    <CourseCard
                      title="SSC & Banking"
                      description="Full syllabus coverage of SSC CGL, CHSL, and Bank PO/Clerk exams"
                      icon={<BookCheck className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />}
                      duration="4-6 months"
                      fee="Affordable"
                      color="blue"
                    />
                  </FadeIn>
                  <FadeIn delay={0.2} direction="up">
                    <CourseCard
                      title="JEE (Main + Advanced)"
                      description="Foundation to Advanced level coaching in Physics, Chemistry, and Mathematics"
                      icon={<GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />}
                      duration="12 months"
                      fee="Competitive"
                      color="blue"
                    />
                  </FadeIn>
                  <FadeIn delay={0.3} direction="up">
                    <CourseCard
                      title="NEET Coaching"
                      description="Integrated preparation for Class 11 & 12 Boards + NEET"
                      icon={<GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 dark:text-blue-400" />}
                      duration="12 months"
                      fee="Competitive"
                      color="blue"
                    />
                  </FadeIn>
                </>
              )}
            </div>

            <FadeIn delay={0.4} direction="up" className="mt-8 md:mt-12">
              <div className="bg-blue-50 dark:bg-slate-800 rounded-lg p-4 sm:p-6 md:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white mb-4 md:mb-6">
                  How to Enroll
                </h3>
                <NumberedList
                  items={enrollmentSteps}
                  numberClassName="bg-blue-600 text-white h-8 w-8 sm:h-10 sm:w-10"
                  titleClassName="text-base sm:text-lg font-semibold text-blue-950 dark:text-white"
                />
                <div className="mt-6 md:mt-8 flex justify-center">
                  <Link href="/get-enrolled" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                    >
                      Start Enrollment Process
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <div className="mt-8 md:mt-12 flex justify-center">
              <Link href="/program-path" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105"
                >
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Success Stories"
              title="What Our Students Say"
              description="Hear from students who achieved their dreams with Ascent Classes"
              className="mb-6 md:mb-10"
            />

            <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {isLoading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => <SkeletonTestimonial key={i} />)
                : testimonials.map((testimonial, index) => (
                    <FadeIn key={index} delay={0.1 * (index % 3)} direction="up">
                      <TestimonialCard
                        name={testimonial.name}
                        role={testimonial.role}
                        testimonial={testimonial.testimonial}
                        imageSrc={testimonial.imageSrc}
                      />
                    </FadeIn>
                  ))}
            </div>

            <div className="mt-8 md:mt-12 flex justify-center">
              <Link href="/toppers-tales">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950 transition-all duration-300 hover:scale-105"
                >
                  Read More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Find Us"
              title="Our Location"
              description="Located in the heart of Chinhat, Lucknow"
              className="mb-6 md:mb-10"
            />

            <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2">
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-[300px] sm:h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.67795370925!2d81.03387433955077!3d26.87256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f33f24d0dd%3A0x384b9f1df7177468!2sChinhat%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651921234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ascent Classes Location"
                  ></iframe>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex flex-col justify-center space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white mb-2">Address</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                    <span>
                      Dayal Residency, A-300B, Vasundhara State, Chinhat, Ganeshpur Rahmanpur, Lucknow, Uttar Pradesh
                      226028
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white mb-2">Contact</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a href="tel:+919565292454">+91-9565292454</a>
                  </p>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 flex items-center gap-2 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <a href="mailto:ascentcoachingclasses.lko@gmail.com" className="break-all">
                      ascentcoachingclasses.lko@gmail.com
                    </a>
                  </p>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950 dark:text-white mb-2">Hours</h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Monday to Sunday: 8:00 AM to 8:00 PM
                  </p>
                </div>
                <div className="pt-2 md:pt-4">
                  <Link href="/reach-out" className="block w-full sm:w-auto sm:inline-block">
                    <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 transition-all duration-300 hover:scale-105">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Stay Updated with Ascent Classes
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-blue-100">
                  Subscribe to our newsletter to receive the latest updates, announcements, and educational resources.
                </p>
              </div>
              <div className="mx-auto w-full max-w-md">
                <NewsletterForm darkMode={true} buttonText="Subscribe Now" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-950 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                    Ready to Begin Your Success Journey?
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg max-w-[600px] text-blue-200">
                    Take the first step towards academic excellence. Join Ascent Classes today and transform your
                    preparation strategy.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/get-enrolled" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto gap-1 bg-white text-blue-950 hover:bg-blue-100 transition-all duration-300 hover:scale-105"
                    >
                      Enroll Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/reach-out" className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto border-blue-400 text-blue-400 hover:bg-blue-900 hover:text-white transition-all duration-300"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex items-center justify-center mt-6 lg:mt-0">
                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-md">
                  <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 rounded-lg bg-blue-900 p-3 sm:p-4 text-center transition-all duration-300 hover:bg-blue-800">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      <CountUp end={500} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">Students Enrolled</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 rounded-lg bg-blue-900 p-3 sm:p-4 text-center transition-all duration-300 hover:bg-blue-800">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      <CountUp end={95} suffix="%" />
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">Success Rate</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 rounded-lg bg-blue-900 p-3 sm:p-4 text-center transition-all duration-300 hover:bg-blue-800">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      <CountUp end={20} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">Expert Faculty</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-1 sm:space-y-2 rounded-lg bg-blue-900 p-3 sm:p-4 text-center transition-all duration-300 hover:bg-blue-800">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      <CountUp end={5} suffix="+" />
                    </div>
                    <div className="text-xs sm:text-sm text-blue-200">Years Experience</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
