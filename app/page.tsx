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
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
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
import { BackToTop } from "@/components/ui/back-to-top"
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
      icon: <Users className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
      title: "Small Batch Sizes",
      description: "Limited students per batch ensuring personalized attention and better learning outcomes.",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
      title: "Comprehensive Study Material",
      description: "Well-researched and regularly updated study materials covering the entire syllabus.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
      title: "Regular Mock Tests",
      description: "Weekly tests and assessments to track progress and build exam temperament.",
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
      title: "Flexible Timings",
      description: "Morning and evening batches to accommodate school and college schedules.",
    },
    {
      icon: <Zap className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
      title: "Doubt Clearing Sessions",
      description: "Dedicated sessions to resolve doubts and ensure complete understanding of concepts.",
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-brand-blue dark:text-brand-blue" />,
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
      <Navbar />
      <main className="flex-1">
        {/* Featured Carousel Section */}
        <section className="w-full">
          <FeaturedCarousel />
        </section>

        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-brand-bg-light to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge
                    className="inline-flex mb-2 bg-brand-light text-brand-blue hover:bg-brand-light dark:bg-brand-blue/20 dark:text-brand-blue"
                    variant="outline"
                  >
                    Excellence in Education
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-brand-text-dark dark:text-brand-text-light">
                    Ascent Coaching Classes - Top Coaching Center in Chinhat, Lucknow
                  </h1>
                  <p className="max-w-[600px] text-brand-text-muted md:text-xl dark:text-slate-300">
                    Specialized coaching for SSC, Bank, JEE, NEET, and Olympiads. Transform your preparation journey
                    with expert guidance.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/get-enrolled">
                    <Button variant="brand" size="lg" className="gap-1 transition-all duration-300 hover:scale-105">
                      Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/program-path">
                    <Button size="lg" variant="brandOutline" className="transition-all duration-300">
                      Explore Courses
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-brand-text-muted dark:text-slate-300">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-brand-blue dark:text-brand-blue" />
                    <span>Hundreds of Successful Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4 text-brand-blue dark:text-brand-blue" />
                    <span>Proven Track Record</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4 text-brand-blue dark:text-brand-blue" />
                    <span>Expert Faculty</span>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex items-center justify-center">
                <Image
                  src="/hero-students-studying.png"
                  alt="Students at Ascent Classes"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover shadow-lg transition-all duration-500 hover:shadow-xl"
                  priority
                />
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-light dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Our Advantage"
              title="Why Choose Ascent Classes"
              description="What sets us apart from other coaching institutes"
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-16">
              <FadeIn direction="up">
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">
                    Our Commitment to Excellence
                  </h3>
                  <div className="grid gap-8 md:grid-cols-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue dark:text-brand-blue mb-2">
                        <CountUp end={100} suffix="%" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">Dedication</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue dark:text-brand-blue mb-2">
                        <CountUp end={95} suffix="%" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">Success Rate</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue dark:text-brand-blue mb-2">
                        <CountUp end={20} suffix="+" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">Expert Faculty</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-brand-blue dark:text-brand-blue mb-2">
                        <CountUp end={5} suffix="+" />
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">Years Experience</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/our-vision">
                <Button variant="brandOutline" className="transition-all duration-300 hover:scale-105">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Top Programs"
              title="Courses Offered"
              description="Explore our most popular courses designed to help you excel in competitive exams"
              className="mb-10"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                      icon={<BookCheck className="h-10 w-10 text-brand-blue dark:text-brand-blue" />}
                      duration="4-6 months"
                      color="brand"
                    />
                  </FadeIn>
                  <FadeIn delay={0.2} direction="up">
                    <CourseCard
                      title="JEE (Main + Advanced)"
                      description="Foundation to Advanced level coaching in Physics, Chemistry, and Mathematics"
                      icon={<GraduationCap className="h-10 w-10 text-brand-blue dark:text-brand-blue" />}
                      duration="12 months"
                      color="brand"
                    />
                  </FadeIn>
                  <FadeIn delay={0.3} direction="up">
                    <CourseCard
                      title="NEET Coaching"
                      description="Integrated preparation for Class 11 & 12 Boards + NEET"
                      icon={<GraduationCap className="h-10 w-10 text-brand-blue dark:text-brand-blue" />}
                      duration="12 months"
                      color="brand"
                    />
                  </FadeIn>
                </>
              )}
            </div>

            <FadeIn delay={0.4} direction="up" className="mt-12">
              <div className="bg-brand-light dark:bg-slate-800 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-6">How to Enroll</h3>
                <NumberedList
                  items={enrollmentSteps}
                  numberClassName="bg-brand-blue text-white h-10 w-10"
                  titleClassName="text-lg font-semibold text-brand-dark dark:text-white"
                />
                <div className="mt-8 flex justify-center">
                  <Link href="/get-enrolled">
                    <Button variant="brand" size="lg" className="transition-all duration-300 hover:scale-105">
                      Start Enrollment Process
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>

            <div className="mt-12 flex justify-center">
              <Link href="/program-path">
                <Button variant="brand" size="lg" className="transition-all duration-300 hover:scale-105">
                  View All Courses
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-light dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Success Stories"
              title="What Our Students Say"
              description="Hear from students who achieved their dreams with Ascent Classes"
              className="mb-10"
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

            <div className="mt-12 flex justify-center">
              <Link href="/toppers-tales">
                <Button variant="brandOutline" className="transition-all duration-300 hover:scale-105">
                  Read More Success Stories
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Find Us"
              title="Our Location"
              description="Located in the heart of Chinhat, Lucknow"
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn direction="left" delay={0.2}>
                <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.67795370925!2d81.03387433955077!3d26.87256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f33f24d0dd%3A0x384b9f1df7177468!2sChinhat%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651921234567!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ascent Classes Location"
                  ></iframe>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">Address</h3>
                  <p className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-brand-blue dark:text-brand-blue mt-1 flex-shrink-0" />
                    <span>
                      Dayal Residency, A-300B, Vasundhara State, Chinhat, Ganeshpur Rahmanpur, Lucknow, Uttar Pradesh
                      226028
                    </span>
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">Contact</h3>
                  <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2 mb-2 transition-all duration-300 hover:text-brand-blue dark:hover:text-brand-blue">
                    <Phone className="h-5 w-5 text-brand-blue dark:text-brand-blue" />
                    <a href="tel:+919565292454">+91-9565292454</a>
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 flex items-center gap-2 transition-all duration-300 hover:text-brand-blue dark:hover:text-brand-blue">
                    <Mail className="h-5 w-5 text-brand-blue dark:text-brand-blue" />
                    <a href="mailto:ascentcoachingclasses.lko@gmail.com">ascentcoachingclasses.lko@gmail.com</a>
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark dark:text-white mb-2">Hours</h3>
                  <p className="text-slate-600 dark:text-slate-400">Monday to Sunday: 8:00 AM to 8:00 PM</p>
                </div>
                <div className="pt-4">
                  <Link href="/reach-out">
                    <Button variant="brand" className="transition-all duration-300 hover:scale-105">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-blue text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Stay Updated with Ascent Classes
                </h2>
                <p className="text-blue-100 md:text-xl/relaxed">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-brand-dark text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <FadeIn direction="left" delay={0.2} className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Ready to Begin Your Success Journey?
                  </h2>
                  <p className="max-w-[600px] text-slate-200 md:text-xl">
                    Take the first step towards academic excellence. Join Ascent Classes today and transform your
                    preparation strategy.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/get-enrolled">
                    <Button
                      size="lg"
                      className="gap-1 bg-white text-brand-dark hover:bg-brand-light transition-all duration-300 hover:scale-105 font-medium"
                    >
                      Enroll Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link href="/reach-out">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-white text-white hover:bg-white/10 transition-all duration-300 font-medium"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.4} className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 md:gap-8">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4 text-center transition-all duration-300 hover:bg-white/20">
                    <div className="text-3xl font-bold text-white">
                      <CountUp end={500} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-200">Students Enrolled</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4 text-center transition-all duration-300 hover:bg-white/20">
                    <div className="text-3xl font-bold text-white">
                      <CountUp end={95} suffix="%" />
                    </div>
                    <div className="text-sm text-slate-200">Success Rate</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4 text-center transition-all duration-300 hover:bg-white/20">
                    <div className="text-3xl font-bold text-white">
                      <CountUp end={20} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-200">Expert Faculty</div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg bg-white/10 p-4 text-center transition-all duration-300 hover:bg-white/20">
                    <div className="text-3xl font-bold text-white">
                      <CountUp end={5} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-200">Years Experience</div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
