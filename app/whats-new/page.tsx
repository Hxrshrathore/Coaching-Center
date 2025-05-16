import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Calendar, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { Navbar } from "@/components/navbar"
// import { Footer } from "@/components/footer"
import { NewsletterForm } from "@/components/ui/newsletter-form"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "What's New | Ascent Classes",
  description: "Stay updated with the latest news, events, and announcements from Ascent Classes.",
}

export default function WhatsNewPage() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "What's New", href: "/whats-new" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 pt-28">
          {" "}
          {/* Added pt-28 for top padding */}
          <Breadcrumbs items={breadcrumbItems} />
          {/* Rest of the content */}
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Latest Updates</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950">What's New</h1>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Stay updated with the latest announcements, events, and additions at Toppers Maker
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Latest Announcements Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Announcements</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                    Latest Announcements
                  </h2>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Important updates and announcements from Toppers Maker
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-none shadow-md">
                  <CardHeader>
                    <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">New Course</Badge>
                    <CardTitle className="mt-2">JEE Advanced Intensive</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-slate-500">
                      <Calendar className="h-4 w-4" /> Starting from June 15, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      A new intensive course for JEE Advanced aspirants with personalized mentoring and weekly
                      assessments. Limited seats available. Early bird discounts for the first 50 registrations.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/program-path" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardHeader>
                    <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">Event</Badge>
                    <CardTitle className="mt-2">National Scholarship Test</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-slate-500">
                      <Calendar className="h-4 w-4" /> July 10, 2025
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      Participate in our National Scholarship Test and win up to 100% scholarship on any course of your
                      choice. Open to all students from Class 9 to Class 12. Registration deadline: June 30, 2025.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/whats-new/scholarship-test" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        Register Now
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardHeader>
                    <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-100">Resource Update</Badge>
                    <CardTitle className="mt-2">New Mock Test Series</CardTitle>
                    <CardDescription className="flex items-center gap-1 text-slate-500">
                      <Calendar className="h-4 w-4" /> Available Now
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-slate-600">
                      We've added 50 new mock tests across all exam categories with detailed solutions and performance
                      analytics. These tests are designed based on the latest exam patterns and trends.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Link href="/resources-hub/mock-tests" className="w-full">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                      >
                        Access Tests
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </section>
          {/* Upcoming Events Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Calendar</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                    Upcoming Events
                  </h2>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Mark your calendar for these important events and workshops
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        <span className="text-xl font-bold">15</span>
                        <span className="text-xs">June</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-950">JEE Advanced Workshop</h3>
                        <p className="text-sm text-slate-600">
                          Intensive problem-solving workshop for JEE Advanced aspirants
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" /> 10:00 AM - 4:00 PM
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="h-3 w-3" /> Limited to 50 participants
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href="/get-enrolled?event=jee-advanced-workshop">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        <span className="text-xl font-bold">22</span>
                        <span className="text-xs">June</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-950">Parent-Teacher Meeting</h3>
                        <p className="text-sm text-slate-600">
                          Discuss your child's progress and get insights from our expert faculty
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" /> 11:00 AM - 3:00 PM
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="h-3 w-3" /> For parents of enrolled students
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href="/reach-out?meeting=parent-teacher">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Schedule Meeting</Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        <span className="text-xl font-bold">10</span>
                        <span className="text-xs">July</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-950">National Scholarship Test</h3>
                        <p className="text-sm text-slate-600">
                          Compete for scholarships worth up to 100% of course fees
                        </p>
                        <div className="mt-2 flex items-center gap-4">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" /> 10:00 AM - 1:00 PM
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="h-3 w-3" /> Open to all students
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href="/get-enrolled?event=national-scholarship-test">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg bg-white p-6 shadow-md">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 flex-col items-center justify-center rounded-lg bg-blue-100 text-blue-900">
                        <span className="text-xl font-bold">25</span>
                        <span className="text-xs">July</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-blue-950">Career Counseling Session</h3>
                        <p className="text-sm text-slate-600">Get guidance on career options after competitive exams</p>
                        <div className="mt-2 flex items-center gap-4">
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Clock className="h-3 w-3" /> 3:00 PM - 5:00 PM
                          </span>
                          <span className="flex items-center gap-1 text-xs text-slate-500">
                            <Users className="h-3 w-3" /> Open to all students and parents
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link href="/reach-out?counseling=career-guidance">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* New Faculty Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">New Additions</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                    New Faculty Members
                  </h2>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Meet the newest additions to our expert faculty team
                  </p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="bg-white border-none shadow-md">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/students/student-group-4.jpeg"
                        alt="Students at Ascent Coaching Classes"
                        width={120}
                        height={120}
                        className="aspect-square object-cover"
                      />
                    </div>
                    <CardTitle>Dr. Vikram Singh</CardTitle>
                    <CardDescription>Physics Expert</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-slate-600">
                      Former IIT Delhi professor with 15+ years of experience in teaching Physics for JEE. Specializes
                      in Mechanics and Electromagnetism.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        JEE
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        NEET
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        Olympiads
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/students/student-group-2.jpeg"
                        alt="Students at Ascent Coaching Classes"
                        width={120}
                        height={120}
                        className="aspect-square object-cover"
                      />
                    </div>
                    <CardTitle>Dr. Anjali Sharma</CardTitle>
                    <CardDescription>Mathematics Expert</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-slate-600">
                      Gold medalist in Mathematics with a PhD from IISc Bangalore. Has mentored over 500 students who
                      secured top ranks in various competitive exams.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        JEE
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        Olympiads
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        SSC
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-none shadow-md">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 overflow-hidden rounded-full">
                      <Image
                        src="/students/student-group-3.jpeg"
                        alt="Students at Ascent Coaching Classes"
                        width={120}
                        height={120}
                        className="aspect-square object-cover"
                      />
                    </div>
                    <CardTitle>Prof. Rajesh Kumar</CardTitle>
                    <CardDescription>Chemistry Expert</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-slate-600">
                      Former CSIR scientist with extensive experience in teaching Organic and Inorganic Chemistry.
                      Author of several reference books for competitive exams.
                    </p>
                    <div className="mt-4 flex justify-center gap-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        JEE
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        NEET
                      </Badge>
                      <Badge variant="outline" className="border-blue-200 text-blue-700">
                        Olympiads
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          {/* Infrastructure Updates Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Facility Updates</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                    Infrastructure Updates
                  </h2>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Recent improvements to our facilities to enhance your learning experience
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-lg">
                  <Image
                    src="/students/interactive-learning-3.jpeg"
                    alt="Students interacting with smart boards at Ascent Coaching Classes"
                    width={600}
                    height={400}
                    className="aspect-video object-cover w-full h-full"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold text-blue-950">Smart Interactive Boards</h3>
                  <p className="text-slate-600">
                    We've equipped all our classrooms with state-of-the-art smart interactive boards that enhance the
                    learning experience. These touch-enabled displays allow teachers to create dynamic lessons with
                    multimedia content, real-time annotations, and interactive exercises.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>4K Ultra HD touch displays in every classroom</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Interactive learning software with 3D visualizations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Screen sharing capabilities for collaborative learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Digital whiteboard with recording functionality</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center space-y-4 md:order-3">
                  <h3 className="text-2xl font-bold text-blue-950">Digital Library Platform</h3>
                  <p className="text-slate-600">
                    Our new digital library platform provides students with 24/7 access to a vast collection of e-books,
                    video lectures, practice materials, and research journals. Access thousands of resources anytime,
                    anywhere, from any device.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>10,000+ e-books and digital study materials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Advanced search and personalized recommendations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Offline download option for uninterrupted learning</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Integrated note-taking and highlighting tools</span>
                    </li>
                  </ul>
                </div>
                <div className="overflow-hidden rounded-lg md:order-4">
                  <Image
                    src="/students/interactive-learning-4.jpeg"
                    alt="Students using digital learning resources at Ascent Coaching Classes"
                    width={600}
                    height={400}
                    className="aspect-video object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    Stay Updated with Toppers Maker
                  </h2>
                  <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Subscribe to our newsletter to receive the latest updates, announcements, and educational resources.
                  </p>
                </div>
                <NewsletterForm darkMode={true} buttonText="Subscribe" className="max-w-sm mx-auto" />
              </div>
            </div>
          </section>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
