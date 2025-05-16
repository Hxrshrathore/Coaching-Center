"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { ArrowRight, BookOpen, Target, Users, Award, Lightbulb, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"

// Animation variants
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

// Value Card Component
const ValueCard = ({ icon, title, description, className = "" }) => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <Card
      className={`border-none shadow-md hover:shadow-lg transition-all duration-300 ${
        isDark ? "bg-slate-800 text-white" : "bg-white"
      } ${className}`}
    >
      <CardContent className="p-6">
        <div
          className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
            isDark ? "bg-blue-900 text-blue-400" : "bg-blue-100 text-blue-600"
          }`}
        >
          {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-blue-400" : "text-blue-600"}`}>{title}</h3>
        <p className={isDark ? "text-slate-300" : "text-slate-600"}>{description}</p>
      </CardContent>
    </Card>
  )
}

export function OurVisionClientPage() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  // Set mounted state to true after component mounts
  useEffect(() => {
    setMounted(true)
  }, [])

  // Core values data
  const coreValues = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from teaching methodologies to student support services.",
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Knowledge",
      description:
        "We believe in imparting deep conceptual understanding rather than rote learning for long-term success.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Personalization",
      description: "We recognize each student's unique potential and tailor our approach to their individual needs.",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Integrity",
      description:
        "We uphold the highest standards of ethics and integrity in our interactions with students and parents.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We continuously innovate our teaching methods to adapt to changing educational landscapes.",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Accountability",
      description: "We take responsibility for our students' progress and are committed to their success.",
    },
  ]

  // Breadcrumb items
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Our Vision", href: "/our-vision" },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-4 pt-28">
          <Breadcrumbs
            items={[
              { name: "Home", href: "/" },
              { name: "Our Vision", href: "/our-vision" },
            ]}
          />
        </div>

        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-12 pt-28">
            <Breadcrumbs items={breadcrumbItems} />

            {/* Hero Section */}
            <section
              className={`relative py-12 md:py-20 rounded-2xl overflow-hidden mb-16 ${
                isDark
                  ? "bg-gradient-to-br from-blue-900 to-slate-900 text-white"
                  : "bg-gradient-to-br from-blue-50 via-white to-blue-50"
              }`}
            >
              {/* Decorative elements */}
              <div
                className={`absolute -top-24 -right-24 w-64 h-64 rounded-full ${
                  isDark ? "bg-blue-800/30" : "bg-blue-200/50"
                } blur-3xl`}
                aria-hidden="true"
              />
              <div
                className={`absolute -bottom-24 -left-24 w-64 h-64 rounded-full ${
                  isDark ? "bg-blue-800/30" : "bg-blue-200/50"
                } blur-3xl`}
                aria-hidden="true"
              />

              <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 items-center">
                  <div>
                    <FadeIn>
                      <h1
                        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
                          isDark ? "text-white" : "text-slate-800"
                        }`}
                      >
                        Our Vision & Mission
                      </h1>
                      <p className={`text-lg ${isDark ? "text-blue-100" : "text-slate-600"} mb-6 max-w-xl`}>
                        At Ascent Classes, we envision a future where every student has the opportunity to realize their
                        full academic potential and achieve their dreams through quality education.
                      </p>
                      <div className="flex flex-wrap gap-4">
                        <Link href="/program-path">
                          <Button
                            size="lg"
                            className={`gap-1 ${
                              isDark
                                ? "bg-blue-600 hover:bg-blue-700 text-white"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                            }`}
                          >
                            Explore Our Programs <ArrowRight className="h-4 w-4" />
                          </Button>
                        </Link>
                        <Link href="/reach-out">
                          <Button
                            size="lg"
                            variant="outline"
                            className={
                              isDark
                                ? "border-blue-400 text-blue-400 hover:bg-blue-950"
                                : "border-blue-200 text-blue-600 hover:bg-blue-50"
                            }
                          >
                            Contact Us
                          </Button>
                        </Link>
                      </div>
                    </FadeIn>
                  </div>
                  <div className="relative">
                    <div
                      className={`absolute inset-0 rounded-lg ${
                        isDark ? "bg-gradient-to-br from-blue-500/10 to-purple-500/10" : "bg-blue-100/50"
                      }`}
                      style={{ transform: "rotate(-3deg)" }}
                      aria-hidden="true"
                    />
                    <div className="relative rounded-lg overflow-hidden shadow-xl">
                      <Image
                        src="/students/student-group-1.jpeg"
                        alt="Students at Ascent Coaching Classes representing our vision"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Mission Statement Section */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                  <SectionHeading
                    title="Our Mission"
                    subtitle="Empowering Students Through Quality Education"
                    description="We are committed to providing comprehensive, high-quality coaching that empowers students to excel in competitive exams and beyond."
                  />
                </FadeIn>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <FadeIn>
                      <div
                        className={`p-6 rounded-lg ${
                          isDark ? "bg-slate-800 border border-slate-700" : "bg-white shadow-lg"
                        }`}
                      >
                        <h3
                          className={`text-xl md:text-2xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-800"}`}
                        >
                          Our Commitment to Excellence
                        </h3>
                        <ul className="space-y-3">
                          {[
                            "Provide personalized attention to each student",
                            "Foster a supportive and competitive learning environment",
                            "Employ innovative teaching methodologies",
                            "Continuously update our curriculum to align with changing exam patterns",
                            "Maintain a team of experienced and dedicated faculty",
                            "Track and monitor student progress through regular assessments",
                          ].map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle className={`h-5 w-5 mt-0.5 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                              <span className={isDark ? "text-slate-300" : "text-slate-700"}>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </FadeIn>
                  </div>
                  <div className="order-1 md:order-2">
                    <FadeIn>
                      <div className="relative">
                        <blockquote
                          className={`text-xl md:text-2xl italic font-medium p-6 rounded-lg ${
                            isDark
                              ? "bg-blue-900/30 text-blue-100 border border-blue-800"
                              : "bg-blue-50 text-blue-800 border-l-4 border-blue-500"
                          }`}
                        >
                          "Our mission at Ascent Classes is not just to prepare students for exams, but to instill in
                          them a love for learning, critical thinking abilities, and the confidence to face any
                          challenge in life."
                          <footer className="mt-4 text-base font-normal">
                            <cite className={isDark ? "text-blue-300" : "text-blue-700"}>
                              — Dr. Rajesh Kumar, Founder & Director
                            </cite>
                          </footer>
                        </blockquote>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </section>

            {/* Core Values Section */}
            <section className={`py-12 md:py-16 ${isDark ? "bg-slate-900" : "bg-gray-50"} rounded-2xl my-12`}>
              <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                  <SectionHeading
                    title="Our Core Values"
                    subtitle="Principles That Guide Us"
                    description="These fundamental beliefs shape our approach to education and guide our interactions with students, parents, and the community."
                  />
                </FadeIn>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {coreValues.map((value, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <ValueCard
                        icon={value.icon}
                        title={value.title}
                        description={value.description}
                        className={isDark ? "bg-slate-800" : ""}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>

            {/* Approach Section */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 md:px-6">
                <FadeIn>
                  <SectionHeading
                    title="Our Approach"
                    subtitle="How We Deliver Excellence"
                    description="Our teaching methodology is designed to bring out the best in every student through a balanced approach."
                  />
                </FadeIn>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <FadeIn delay={0.1}>
                    <div
                      className={`p-6 rounded-lg ${
                        isDark
                          ? "bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-800"
                          : "bg-gradient-to-br from-blue-50 to-white border border-blue-100"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                          isDark ? "bg-blue-800 text-blue-300" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                        Conceptual Understanding
                      </h3>
                      <p className={isDark ? "text-slate-300" : "text-slate-600"}>
                        We focus on building strong conceptual foundations rather than rote memorization. Our teaching
                        methods encourage students to understand the 'why' behind every concept.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.2}>
                    <div
                      className={`p-6 rounded-lg ${
                        isDark
                          ? "bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-800"
                          : "bg-gradient-to-br from-blue-50 to-white border border-blue-100"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                          isDark ? "bg-blue-800 text-blue-300" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <Users className="h-6 w-6" />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                        Personalized Attention
                      </h3>
                      <p className={isDark ? "text-slate-300" : "text-slate-600"}>
                        We maintain small batch sizes to ensure that each student receives individual attention. Our
                        faculty regularly monitors progress and provides personalized guidance.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn delay={0.3}>
                    <div
                      className={`p-6 rounded-lg ${
                        isDark
                          ? "bg-gradient-to-br from-blue-900 to-slate-800 border border-blue-800"
                          : "bg-gradient-to-br from-blue-50 to-white border border-blue-100"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${
                          isDark ? "bg-blue-800 text-blue-300" : "bg-blue-100 text-blue-600"
                        }`}
                      >
                        <Award className="h-6 w-6" />
                      </div>
                      <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-800"}`}>
                        Comprehensive Assessment
                      </h3>
                      <p className={isDark ? "text-slate-300" : "text-slate-600"}>
                        Regular tests and assessments help students gauge their preparation level. Detailed performance
                        analysis identifies strengths and areas for improvement.
                      </p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
              <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                      Join Us in Our Educational Journey
                    </h2>
                    <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      Be a part of our vision to transform education and empower the next generation of leaders.
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
          </div>
        </div>
      </main>
    </div>
  )
}
