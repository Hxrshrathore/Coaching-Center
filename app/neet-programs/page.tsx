import type { Metadata } from "next"
import { generatePageMetadata } from "@/components/seo/page-seo"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Calendar, CheckCircle, Clock, Award, Trophy, Medal, HeartPulse } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = generatePageMetadata({
  title: "NEET Programs | Toppers Maker",
  description: "Comprehensive NEET preparation programs with expert faculty and proven results for medical aspirants.",
  keywords: ["neet coaching", "medical entrance", "neet preparation", "mbbs coaching", "medical exam preparation"],
  canonicalUrl: "/neet-programs",
})

export default function NEETProgramsPage() {
  const programTypes = [
    {
      name: "NEET Foundation",
      description: "A comprehensive foundation program for Class 11 students aiming for NEET",
      icon: <HeartPulse className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "NEET Comprehensive",
      description: "Complete preparation for NEET covering both Class 11 and 12 syllabus",
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "NEET Achievers",
      description: "Specialized program for students aiming for top ranks in NEET",
      icon: <Trophy className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      name: "NEET Crash Course",
      description: "Intensive short-term program for last-minute preparation",
      icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
  ]

  const features = [
    {
      title: "Expert Faculty",
      description: "Learn from MBBS and MD doctors with proven track records",
      icon: <Medal className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "NCERT-Focused Approach",
      description: "Special emphasis on NCERT textbooks which form the core of NEET",
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Regular Testing",
      description: "Weekly tests and monthly mock exams based on the actual NEET pattern",
      icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Problem Solving Sessions",
      description: "Dedicated sessions to tackle complex NEET problems",
      icon: <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Personalized Attention",
      description: "Small batch sizes ensuring individual attention",
      icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Flexible Schedule",
      description: "Weekend and after-school batches available",
      icon: <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
  ]

  return (
    <main className="pt-24 relative">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Programs", href: "/program-path" },
            { name: "NEET Programs", href: "/neet-programs" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-950 dark:text-white transition-colors duration-300">
                  NEET Programs
                </h1>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-300 md:text-xl transition-colors duration-300">
                  Comprehensive coaching for NEET to excel in medical entrance examinations and secure admission in top
                  medical colleges.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/get-enrolled">
                  <Button
                    size="lg"
                    className="gap-1 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
                  >
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/reach-out">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-900 dark:hover:text-blue-200 transition-colors duration-300"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex items-center justify-center">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/modern-classroom-study.png"
                  alt="Students preparing for NEET"
                  width={500}
                  height={500}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent dark:from-black/50 transition-colors duration-300"></div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Program Types Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="NEET Programs We Offer"
            description="Comprehensive coaching for various NEET preparation needs"
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {programTypes.map((type, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 h-full transition-colors duration-300 hover:shadow-xl">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4 transition-colors duration-300">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-950 dark:text-white transition-colors duration-300">
                    {type.name}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 flex-grow transition-colors duration-300">
                    {type.description}
                  </p>
                  <Link href="/get-enrolled" className="mt-4">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-800 transition-colors duration-300">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose Our NEET Programs"
            description="What sets our NEET coaching apart"
            className="text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="flex p-4 bg-white dark:bg-slate-900 rounded-lg shadow border border-slate-200 dark:border-slate-700 transition-colors duration-300 hover:shadow-md">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-blue-950 dark:text-white transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 dark:bg-blue-800 text-white transition-colors duration-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl transition-colors duration-300">
                Ready to Excel in NEET?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 dark:text-blue-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed transition-colors duration-300">
                Join our specialized NEET programs and get the guidance you need to succeed in medical entrance exams.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/get-enrolled">
                <Button
                  size="lg"
                  className="gap-1 bg-white text-blue-600 hover:bg-blue-50 dark:bg-slate-200 dark:text-blue-700 dark:hover:bg-white transition-colors duration-300"
                >
                  Enroll Now <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/reach-out">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-200 text-blue-50 hover:bg-blue-700 hover:text-white dark:border-blue-300 dark:hover:bg-blue-700 transition-colors duration-300"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
