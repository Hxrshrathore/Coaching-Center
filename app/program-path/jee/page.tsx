import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Clock, Calendar, Award, BookOpen, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "JEE Preparation | Ascent Classes",
  description: "Comprehensive JEE preparation to help you crack one of India's toughest engineering entrance exams.",
}

export default function JEEPrograms() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/program-path" },
    { name: "JEE Preparation", href: "/program-path/jee" },
  ]

  // Course features
  const features = [
    { icon: <Clock className="h-5 w-5" />, title: "Duration", description: "1-2 years (depending on batch)" },
    { icon: <Calendar className="h-5 w-5" />, title: "Schedule", description: "Weekday and weekend batches available" },
    { icon: <Award className="h-5 w-5" />, title: "Certification", description: "Performance certificates provided" },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Study Material",
      description: "Comprehensive books and online resources",
    },
    { icon: <Users className="h-5 w-5" />, title: "Batch Size", description: "Limited to 10 students per batch" },
  ]

  // Course modules
  const modules = [
    {
      title: "Physics",
      topics: ["Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
    },
    {
      title: "Chemistry",
      topics: ["Physical Chemistry", "Organic Chemistry", "Inorganic Chemistry", "Analytical Chemistry"],
    },
    {
      title: "Mathematics",
      topics: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry", "Statistics & Probability"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      <Breadcrumbs items={breadcrumbItems} />
      <main className="min-h-screen bg-white page-padding-for-header">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <Link href="/program-path" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to All Programs
              </Link>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                    JEE Preparation Program
                  </h1>
                  <p className="text-lg text-slate-600 mb-6">
                    Comprehensive preparation for JEE Main and Advanced examinations with expert faculty, regular tests,
                    and personalized guidance to help you secure a seat in top engineering colleges.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/get-enrolled?program=jee">
                      <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700">
                        Enroll Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="/reach-out">
                      <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                        Request Information
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
                  <Image src="/carousel-jee.png" alt="JEE Preparation Program" fill className="object-cover" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Program Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                    </div>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Course Curriculum */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Program Curriculum</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {modules.map((module, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Why Choose Our JEE Program?</h2>
                <p className="text-lg text-slate-600">
                  Our specialized approach has helped thousands of students achieve their dream of studying in IITs and
                  NITs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Expert Faculty</h3>
                  <p className="text-slate-600 mb-4">
                    Learn from experienced faculty members who are subject matter experts with years of teaching
                    experience for JEE.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">IIT and NIT alumni as instructors</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Regular faculty training and development</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Personalized doubt-solving sessions</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">Comprehensive Testing</h3>
                  <p className="text-slate-600 mb-4">
                    Regular tests and assessments to track your progress and identify areas for improvement.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Weekly topic tests and quizzes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Full-length JEE mock tests</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Detailed performance analytics</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/student-testimonial-1.png"
                        alt="Student"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Rahul Sharma</h3>
                      <p className="text-sm text-slate-500">IIT Bombay, CSE</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "The structured approach and regular mock tests at Ascent Classes helped me secure AIR 235 in JEE
                    Advanced. The faculty's guidance was invaluable."
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/student-testimonial-2.png"
                        alt="Student"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Priya Patel</h3>
                      <p className="text-sm text-slate-500">IIT Delhi, Electrical</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "The problem-solving techniques taught at Ascent Classes were game-changers for me. I improved my
                    ranking significantly in just 6 months."
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src="/student-testimonial-3.png"
                        alt="Student"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-800">Arjun Mehta</h3>
                      <p className="text-sm text-slate-500">NIT Trichy, Mechanical</p>
                    </div>
                  </div>
                  <p className="text-slate-600">
                    "The faculty at Ascent Classes doesn't just teach concepts but ensures you understand the
                    application. This approach helped me excel in JEE."
                  </p>
                </div>
              </div>
              <div className="text-center mt-8">
                <Link href="/toppers-tales?tab=jee">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50">
                    View More Success Stories
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-6">
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    When should I join the JEE preparation program?
                  </h3>
                  <p className="text-slate-600">
                    Ideally, students should join after completing their 10th standard. However, we also offer crash
                    courses and one-year intensive programs for students in 12th standard.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">
                    How many hours of study are required daily?
                  </h3>
                  <p className="text-slate-600">
                    We recommend 2-3 hours of self-study daily in addition to the classroom sessions. During vacations
                    and weekends, this can be increased to 4-5 hours.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Do you provide study materials?</h3>
                  <p className="text-slate-600">
                    Yes, we provide comprehensive study materials, practice worksheets, and online resources that cover
                    the entire JEE syllabus. These are regularly updated to align with the latest exam pattern.
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">Are there any scholarships available?</h3>
                  <p className="text-slate-600">
                    Yes, we offer merit-based scholarships based on performance in our scholarship test. Students from
                    economically weaker sections can also apply for financial assistance.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <FadeIn>
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                  Ready to Begin Your JEE Preparation Journey?
                </h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/get-enrolled?program=jee">
                    <Button size="lg" className="gap-1 bg-white text-blue-600 hover:bg-blue-50 hover:text-blue-700">
                      Enroll Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/reach-out">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-blue-200 text-white hover:bg-blue-700 hover:text-white"
                    >
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
    </div>
  )
}
