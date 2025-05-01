import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Calendar, Award, BookOpen, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "SSC Preparation Program | Toppers Maker",
  description:
    "Comprehensive SSC preparation program designed to help students excel in various Staff Selection Commission examinations.",
  openGraph: {
    title: "SSC Preparation Program | Toppers Maker",
    description:
      "Comprehensive SSC preparation program designed to help students excel in various Staff Selection Commission examinations.",
    url: "/program-path/ssc",
    siteName: "Toppers Maker",
    locale: "en_US",
    type: "website",
  },
}

export default function SSCProgram() {
  // Course features
  const features = [
    { icon: <Clock className="h-5 w-5" />, title: "Duration", description: "3-6 months (depending on exam)" },
    { icon: <Calendar className="h-5 w-5" />, title: "Schedule", description: "Weekday and weekend batches available" },
    { icon: <Award className="h-5 w-5" />, title: "Certification", description: "Performance certificates provided" },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Study Material",
      description: "Comprehensive books and online resources",
    },
    { icon: <Users className="h-5 w-5" />, title: "Batch Size", description: "Limited to 30 students per batch" },
  ]

  // Course modules
  const modules = [
    {
      title: "General Intelligence & Reasoning",
      topics: ["Verbal Reasoning", "Non-verbal Reasoning", "Analytical Reasoning", "Data Interpretation"],
    },
    {
      title: "General Awareness",
      topics: ["Current Affairs", "Static GK", "Science", "History", "Geography", "Economics", "Polity"],
    },
    {
      title: "Quantitative Aptitude",
      topics: ["Number System", "Algebra", "Geometry", "Trigonometry", "Data Interpretation", "Mensuration"],
    },
    {
      title: "English Comprehension",
      topics: ["Reading Comprehension", "Grammar", "Vocabulary", "Verbal Ability", "Error Spotting"],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Program Path", href: "/program-path" },
                { label: "SSC", href: "/program-path/ssc", active: true },
              ]}
              className="mb-6"
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                  SSC Preparation Program
                </h1>
                <p className="text-lg text-slate-600 mb-6">
                  Comprehensive preparation for various Staff Selection Commission examinations with expert faculty,
                  regular tests, and personalized guidance to help you secure a government job.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/get-enrolled?program=ssc">
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
                <Image
                  src="/placeholder.svg?key=05dcd"
                  alt="SSC Preparation Program"
                  fill
                  className="object-cover"
                  priority
                />
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-3 text-blue-600">{feature.icon}</div>
                    <h3 className="font-semibold text-slate-800">{feature.title}</h3>
                  </div>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-12 md:py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">Course Curriculum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-800 mb-4">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start">
                        <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        </div>
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

      {/* Exam Types */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-8 text-center">SSC Exams We Cover</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SSC CGL",
                  description: "Combined Graduate Level examination for various Group B and Group C posts",
                  eligibility: "Bachelor's degree from a recognized university",
                },
                {
                  title: "SSC CHSL",
                  description: "Combined Higher Secondary Level for clerical and data entry positions",
                  eligibility: "12th pass from a recognized board",
                },
                {
                  title: "SSC MTS",
                  description: "Multi Tasking Staff examination for Group C non-technical positions",
                  eligibility: "10th pass from a recognized board",
                },
                {
                  title: "SSC CPO",
                  description: "Central Police Organization examination for SI and ASI positions",
                  eligibility: "Bachelor's degree from a recognized university",
                },
                {
                  title: "SSC GD",
                  description: "General Duty Constable examination for paramilitary forces",
                  eligibility: "10th pass from a recognized board",
                },
                {
                  title: "SSC Stenographer",
                  description: "Stenographer Grade C and D examination",
                  eligibility: "12th pass from a recognized board",
                },
              ].map((exam, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{exam.title}</h3>
                  <p className="text-slate-600 mb-4">{exam.description}</p>
                  <div className="bg-blue-50 p-3 rounded-md">
                    <p className="text-sm font-medium text-blue-800">
                      <span className="font-semibold">Eligibility:</span> {exam.eligibility}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <FadeIn>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Start Your SSC Preparation Journey?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our comprehensive SSC preparation program and take the first step towards securing your dream
              government job.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-enrolled?program=ssc">
                <Button size="lg" className="gap-1 bg-white text-blue-600 hover:bg-blue-50">
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/reach-out">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-100 hover:bg-blue-700 hover:text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
