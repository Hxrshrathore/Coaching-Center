import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar, Award, BookOpen, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "NEET Programs | Toppers Maker",
  description: "Comprehensive NEET preparation programs with expert faculty and proven results for medical aspirants.",
  openGraph: {
    title: "NEET Programs | Toppers Maker",
    description:
      "Comprehensive NEET preparation programs with expert faculty and proven results for medical aspirants.",
    url: "/neet-programs",
    siteName: "Toppers Maker",
    locale: "en_US",
    type: "website",
  },
}

export default function NEETProgramsPage() {
  const programs = [
    {
      title: "NEET Foundation",
      description: "A comprehensive foundation program for Class 11 students aiming for NEET",
      features: [
        "Complete syllabus coverage for Class 11",
        "Regular tests and assessments",
        "Focus on building strong fundamentals",
        "Doubt clearing sessions",
      ],
      duration: "1 year",
      batchSize: "30 students",
      suitable: "Class 11 students",
      image: "/placeholder.svg?key=al963",
    },
    {
      title: "NEET Comprehensive",
      description: "Complete preparation for NEET covering both Class 11 and 12 syllabus",
      features: [
        "Comprehensive coverage of NEET syllabus",
        "Weekly mock tests based on NEET pattern",
        "Detailed performance analysis",
        "Special focus on NCERT-based questions",
      ],
      duration: "2 years",
      batchSize: "30 students",
      suitable: "Class 11 & 12 students",
      image: "/placeholder.svg?key=4gcuy",
    },
    {
      title: "NEET Achievers",
      description: "Specialized program for students aiming for top ranks in NEET",
      features: [
        "Advanced problem-solving techniques",
        "Special focus on high-difficulty questions",
        "One-on-one mentoring sessions",
        "Advanced study materials and resources",
      ],
      duration: "1-2 years",
      batchSize: "20 students",
      suitable: "Serious NEET aspirants",
      image: "/placeholder.svg?key=d7azf",
    },
    {
      title: "NEET Crash Course",
      description: "Intensive short-term program for last-minute preparation",
      features: [
        "Rapid revision of entire syllabus",
        "Focus on important topics and questions",
        "Daily practice tests",
        "Tips and tricks for exam day",
      ],
      duration: "3 months",
      batchSize: "25 students",
      suitable: "Class 12 students and droppers",
      image: "/placeholder.svg?key=g8ih6",
    },
    {
      title: "NEET Biology Mastery",
      description: "Specialized program focusing on Biology for NEET",
      features: [
        "In-depth coverage of Botany and Zoology",
        "Extensive practice with NCERT-based questions",
        "Visual learning aids and diagrams",
        "Special focus on previous year questions",
      ],
      duration: "6 months",
      batchSize: "25 students",
      suitable: "Students weak in Biology",
      image: "/placeholder.svg?height=300&width=400&query=NEET%20Biology%20Mastery",
    },
    {
      title: "NEET Physics & Chemistry",
      description: "Specialized program focusing on Physics and Chemistry for NEET",
      features: [
        "Comprehensive coverage of Physics and Chemistry",
        "Special techniques for numerical problems",
        "Regular practice with NEET level questions",
        "Focus on conceptual understanding",
      ],
      duration: "6 months",
      batchSize: "25 students",
      suitable: "Students weak in Physics & Chemistry",
      image: "/placeholder.svg?height=300&width=400&query=NEET%20Physics%20Chemistry",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  NEET Programs
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  NEET Preparation Programs
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Comprehensive coaching programs designed to help you secure top ranks in NEET and fulfill your dream
                  of becoming a doctor
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Offerings
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  NEET Preparation Programs
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Choose the program that best suits your preparation needs and goals
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
              {programs.map((program, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="relative h-48 md:h-full">
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.title}
                          fill
                          className="object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                        />
                      </div>
                      <div className="flex flex-col p-6">
                        <CardHeader className="p-0 pb-4">
                          <CardTitle className="text-xl">{program.title}</CardTitle>
                          <CardDescription>{program.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pb-4 flex-grow">
                          <div className="mt-2 space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-slate-600 dark:text-slate-400">Duration: {program.duration}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-slate-600 dark:text-slate-400">
                                Batch Size: {program.batchSize}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-slate-600 dark:text-slate-400">
                                Suitable for: {program.suitable}
                              </span>
                            </div>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                            <ul className="space-y-1">
                              {program.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter className="p-0 pt-4">
                          <Link href="/get-enrolled" className="w-full">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">Enroll Now</Button>
                          </Link>
                        </CardFooter>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Advantage
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Why Choose Our NEET Programs
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  What sets our NEET preparation programs apart from others
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FadeIn delay={0.1} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Expert Faculty</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Our faculty includes MBBS and MD doctors, experienced educators with proven track records of
                      producing top NEET rankers.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">NCERT-Focused Approach</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Special emphasis on NCERT textbooks which form the core of NEET examination, supplemented with
                      additional practice materials.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Regular Testing</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Weekly tests and monthly mock exams based on the actual NEET pattern to track progress and build
                      exam temperament.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Proven Results</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Consistent track record of producing top rankers in NEET with many students securing admissions in
                      top medical colleges.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.5} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Personalized Attention</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Small batch sizes ensure that each student receives individual attention and guidance from our
                      expert faculty.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.6} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                      <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-2">Doubt Clearing Sessions</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      Regular doubt clearing sessions to ensure that no concept remains unclear, building a strong
                      foundation for advanced topics.
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Begin Your NEET Preparation?
                </h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our comprehensive NEET preparation programs and take the first step towards securing admission in
                  your dream medical college.
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
