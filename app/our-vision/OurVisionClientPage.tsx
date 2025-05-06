"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Heart, type LucideIcon, Target, Users } from "lucide-react"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/ui/section-heading"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { BackToTop } from "@/components/ui/back-to-top"
import { FadeIn } from "@/components/animations/fade-in"
import { CountUp } from "@/components/animations/count-up"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

interface ValueCardProps {
  icon: LucideIcon
  title: string
  description: string
  color: string
}

const ValueCard = ({ icon: Icon, title, description, color }: ValueCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-6 flex flex-col h-full">
          <div
            className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${color}`}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-blue-800 dark:text-blue-300">{title}</h3>
          <p className="text-slate-600 dark:text-slate-300 flex-grow">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function OurVisionClientPage() {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    // Force repaint on scroll to prevent decorative elements from disappearing
    const handleScroll = () => {
      const decorativeElements = document.querySelectorAll(".will-change-transform")
      decorativeElements.forEach((el) => {
        // Force a repaint by accessing offsetHeight
        // eslint-disable-next-line no-unused-expressions
        el.offsetHeight
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <main className="min-h-screen pb-16">
      <ScrollProgress />
      <BackToTop />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Our Vision", href: "/our-vision", active: true },
            ]}
            className="mb-8 text-white/80"
          />

          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Our Vision & Mission</h1>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Empowering students to achieve academic excellence and personal growth through innovative education and
                personalized guidance.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Decorative elements */}
        <div
          className="absolute -bottom-10 right-10 w-60 h-60 bg-yellow-400 rounded-lg opacity-30 rotate-12 z-0 will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        />
        <div
          className="absolute -top-10 left-10 w-60 h-60 bg-blue-400 rounded-lg opacity-30 -rotate-12 z-0 will-change-transform"
          style={{ backfaceVisibility: "hidden" }}
        />
      </section>

      {/* Vision Statement */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative" style={{ isolation: "isolate" }}>
              <FadeIn>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/modern-education-vision.png"
                    alt="Our Vision for Modern Education"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                </div>

                {/* Decorative shapes */}
                <div
                  className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-600 rounded-lg -z-10 rotate-6 opacity-90 will-change-transform"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
                <div
                  className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-400 rounded-lg -z-10 -rotate-6 opacity-90 will-change-transform"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </FadeIn>
            </div>

            <div>
              <FadeIn>
                <SectionHeading
                  badge="Our Vision"
                  title="Shaping the Future of Education"
                  align="left"
                  className="mb-6"
                />

                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    At Ascent Classes, we envision a future where education transcends traditional boundaries,
                    empowering students to become lifelong learners and innovative thinkers. Our vision is to create an
                    educational ecosystem that nurtures intellectual curiosity, critical thinking, and personal growth.
                  </p>
                  <p>
                    We strive to be at the forefront of educational innovation, combining proven teaching methodologies
                    with cutting-edge technology to provide an unparalleled learning experience. Our goal is to prepare
                    students not just for examinations, but for the challenges and opportunities of the rapidly evolving
                    global landscape.
                  </p>
                  <p>
                    Through personalized guidance, comprehensive resources, and a supportive community, we aim to help
                    every student discover their potential and chart their path to success.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-blue-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2 relative" style={{ isolation: "isolate" }}>
              <FadeIn>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/modern-classroom-study.png"
                    alt="Our Mission in Action"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
                </div>

                {/* Decorative shapes */}
                <div
                  className="absolute -bottom-12 -right-12 w-80 h-80 bg-blue-600 rounded-lg -z-10 -rotate-6 opacity-90 will-change-transform"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
                <div
                  className="absolute -top-12 -left-12 w-64 h-64 bg-yellow-400 rounded-lg -z-10 rotate-6 opacity-90 will-change-transform"
                  style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
                />
              </FadeIn>
            </div>

            <div className="md:order-1">
              <FadeIn>
                <SectionHeading
                  badge="Our Mission"
                  title="Empowering Through Education"
                  align="left"
                  className="mb-6"
                />

                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    Our mission at Ascent Classes is to provide high-quality, accessible education that empowers
                    students to excel academically and grow personally. We are committed to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Delivering comprehensive, structured, and engaging learning experiences</li>
                    <li>Providing personalized guidance that addresses each student's unique needs and aspirations</li>
                    <li>
                      Fostering a supportive community where students can collaborate, learn from each other, and build
                      lasting relationships
                    </li>
                    <li>
                      Continuously innovating our teaching methodologies and learning resources to stay ahead of
                      educational trends
                    </li>
                    <li>Instilling values of integrity, perseverance, and excellence in everything we do</li>
                  </ul>
                  <p>
                    Through our dedicated approach, we aim to transform education from a mere academic pursuit to a
                    holistic journey of discovery and growth.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Our Values"
            title="Principles That Guide Us"
            description="Our core values form the foundation of everything we do at Ascent Classes, shaping our approach to education and our interactions with students, parents, and the community."
            className="mb-12"
          />

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <ValueCard
              icon={GraduationCap}
              title="Academic Excellence"
              description="We are committed to maintaining the highest standards of academic rigor and excellence in all our programs."
              color="bg-blue-600"
            />
            <ValueCard
              icon={Users}
              title="Student-Centered Approach"
              description="We place students at the center of everything we do, tailoring our teaching methods to meet their unique needs and learning styles."
              color="bg-indigo-600"
            />
            <ValueCard
              icon={Heart}
              title="Compassion & Support"
              description="We believe in creating a nurturing environment where students feel supported, valued, and empowered to overcome challenges."
              color="bg-purple-600"
            />
            <ValueCard
              icon={Target}
              title="Innovation & Adaptability"
              description="We continuously evolve our teaching methodologies and embrace new technologies to enhance the learning experience."
              color="bg-red-600"
            />
            <ValueCard
              icon={Briefcase}
              title="Integrity & Ethics"
              description="We uphold the highest ethical standards in all our interactions and instill these values in our students."
              color="bg-green-600"
            />
            <ValueCard
              icon={Users}
              title="Community & Collaboration"
              description="We foster a sense of community and encourage collaboration among students, teachers, and parents."
              color="bg-yellow-600"
            />
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Our Impact"
            description="Over the years, we've helped thousands of students achieve their academic goals and realize their potential."
            className="mb-12 text-white"
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <FadeIn className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={10000} suffix="+" />
              </div>
              <p className="text-white/80">Students Taught</p>
            </FadeIn>

            <FadeIn className="flex flex-col items-center" delay={0.1}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={95} suffix="%" />
              </div>
              <p className="text-white/80">Success Rate</p>
            </FadeIn>

            <FadeIn className="flex flex-col items-center" delay={0.2}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={15} suffix="+" />
              </div>
              <p className="text-white/80">Years of Excellence</p>
            </FadeIn>

            <FadeIn className="flex flex-col items-center" delay={0.3}>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={50} suffix="+" />
              </div>
              <p className="text-white/80">Expert Educators</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-300 mb-6">
                Join Us on This Educational Journey
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                Experience the Ascent Classes difference and take the first step towards academic excellence and
                personal growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-10">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 font-medium"
                >
                  <Link href="/get-enrolled">Get Enrolled Today</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-blue-600 dark:border-blue-400 text-blue-700 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-lg px-8 py-6 h-auto shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 font-medium"
                >
                  <Link href="/reach-out">Contact Us</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
