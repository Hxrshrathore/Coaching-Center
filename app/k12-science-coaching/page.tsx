import type { Metadata } from "next"
import { generatePageMetadata } from "@/components/seo/page-seo"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BookOpen,
  Calendar,
  CheckCircle,
  Clock,
  GraduationCap,
  Microscope,
  Star,
  Award,
  Medal,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = generatePageMetadata({
  title: "K-12 Science Coaching | Toppers Maker",
  description: "Foundation and advanced courses for PCMB subjects for students from Class 4 to 12.",
  keywords: [
    "k12 science coaching",
    "school science coaching",
    "PCMB coaching",
    "science tuition",
    "class 4-12 coaching",
  ],
  canonicalUrl: "/k12-science-coaching",
})

export default function K12ScienceCoaching() {
  const gradeCategories = [
    {
      name: "Foundation (Class 4-5)",
      description: "Building strong science fundamentals and curiosity",
      icon: <Star className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Junior (Class 6-8)",
      description: "Strengthening core concepts and analytical thinking",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Secondary (Class 9-10)",
      description: "Focused preparation for board exams and competitive tests",
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
    },
    {
      name: "Senior Secondary (Class 11-12)",
      description: "Advanced PCMB coaching aligned with boards and entrance exams",
      icon: <Microscope className="h-6 w-6 text-blue-600" />,
    },
  ]

  const features = [
    {
      title: "Experienced Faculty",
      description: "Learn from subject matter experts with years of teaching experience",
      icon: <Medal className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Comprehensive Study Material",
      description: "Well-researched and regularly updated study materials",
      icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Regular Assessments",
      description: "Periodic tests and detailed performance analysis",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Doubt Clearing Sessions",
      description: "Dedicated sessions to resolve doubts and ensure concept clarity",
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Small Batch Sizes",
      description: "Limited students per batch ensuring personalized attention",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Flexible Schedule",
      description: "Multiple batches to accommodate school timings",
      icon: <Calendar className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <main className="pt-24">
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Programs", href: "/program-path" },
            { name: "K-12 Science Coaching", href: "/k12-science-coaching" },
          ]}
        />
      </div>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
            <FadeIn direction="left" className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-950 dark:text-white">
                  K-12 Science Coaching
                </h1>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl">
                  Foundation and advanced courses for Physics, Chemistry, Mathematics and Biology subjects for students
                  from Class 4 to 12.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/get-enrolled">
                  <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700">
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/reach-out">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex items-center justify-center">
              <Image
                src="/modern-classroom-study.png"
                alt="Students in K-12 science coaching"
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-lg"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Grade Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our K-12 Science Programs"
            description="Tailored coaching for different age groups and academic levels"
            className="text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {gradeCategories.map((category, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="flex flex-col p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 h-full">
                  <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-blue-950 dark:text-white">{category.name}</h3>
                  <p className="text-slate-600 dark:text-slate-400 flex-grow">{category.description}</p>
                  <Link href="/get-enrolled" className="mt-4">
                    <Button variant="link" className="p-0 h-auto text-blue-600 dark:text-blue-400">
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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-800">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose Our K-12 Science Coaching"
            description="What sets our science coaching apart"
            className="text-center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={0.1 * index} direction="up">
                <div className="flex p-4 bg-white dark:bg-slate-900 rounded-lg shadow border border-slate-200 dark:border-slate-700">
                  <div className="mr-4 mt-1">{feature.icon}</div>
                  <div>
                    <h3 className="font-bold text-blue-950 dark:text-white">{feature.title}</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{feature.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Excel in Science?
              </h2>
              <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join our K-12 science coaching programs and build a strong foundation for academic success.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/get-enrolled">
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
        </div>
      </section>
    </main>
  )
}
