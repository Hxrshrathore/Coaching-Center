import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Award, Users, GraduationCap, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function OurVisionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  About Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  Our Vision - Empowering the Next Generation
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  At Ascent Classes, our vision is to redefine the way coaching is delivered. We are not just a tuition
                  center; we are mentors, guides, and enablers of academic excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/modern-education-vision.png"
                alt="Our Vision"
                width={600}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-950 dark:text-white">Our Vision</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    Our focus lies not only in helping students secure high ranks but also in developing their
                    analytical skills, logical reasoning, and confidence. Our core belief is that every student,
                    regardless of their background or school, has the potential to succeed.
                  </p>
                </div>
                <div className="space-y-2 pt-4">
                  <h2 className="text-3xl font-bold tracking-tighter text-blue-950 dark:text-white">Our Mission</h2>
                  <p className="text-slate-600 dark:text-slate-400">
                    We are committed to delivering high-quality coaching for all major competitive exams, ensuring
                    accessibility of education to students in Lucknow, especially Chinhat, Ganeshpur Rahmanpur, and
                    nearby areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Principles
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Our Mission Includes
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  The principles that guide our approach to education
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Quality Coaching</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Delivering high-quality coaching for all major competitive exams with proven methodologies.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Accessibility</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Ensuring accessibility of education to students in Lucknow, especially Chinhat, Ganeshpur Rahmanpur,
                  and nearby areas.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Modern Technology</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Leveraging modern technology, smart classrooms, and digital resources for holistic development.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Nurturing Environment</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Creating a nurturing, disciplined, and goal-oriented learning environment for all students.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Result-Oriented</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Focusing on measurable results and continuous improvement in student performance.
                </p>
              </div>

              <div className="flex flex-col items-center space-y-2 rounded-lg bg-white p-6 text-center shadow-md dark:bg-slate-800">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                  <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Student-First Approach</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Putting students' needs and growth at the center of all our educational strategies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Methodology
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Our Educational Approach
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  How we transform students into achievers
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Conceptual Understanding</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  We focus on building strong conceptual foundations rather than rote memorization. Our teaching
                  methodology ensures students understand the 'why' behind every concept, enabling them to tackle any
                  type of question.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Personalized Attention</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  With limited batch sizes, we ensure each student receives individual attention. Our faculty members
                  identify strengths and weaknesses of each student and provide tailored guidance to maximize their
                  potential.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Regular Assessment</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  We conduct weekly tests and monthly evaluations to track progress. These assessments help students
                  identify areas for improvement and build exam temperament.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Comprehensive Study Material</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  Our meticulously designed study materials cover the entire syllabus with additional practice
                  questions, previous year papers, and shortcuts for quick problem-solving.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md dark:bg-slate-800">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white">Motivational Environment</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  We believe in the power of education to transform lives. With passion, commitment, and a student-first
                  approach, we aim to become the most result-oriented coaching center in Uttar Pradesh.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Vision for Educational Excellence
                </h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of our journey to transform education and empower the next generation of leaders.
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
                    className="border-blue-200 text-blue-400 hover:bg-blue-700 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
