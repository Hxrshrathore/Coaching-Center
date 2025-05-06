import type { Metadata } from "next"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Our Programs | Ascent Classes",
  description:
    "Explore our comprehensive range of academic programs designed to help students excel in various competitive exams and academic pursuits.",
}

export default function ProgramPath() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Programs", href: "/program-path" },
  ]

  const programs = [
    {
      id: "jee",
      title: "JEE Programs",
      description:
        "Comprehensive coaching for JEE Main and Advanced with focus on conceptual clarity and problem-solving skills.",
      link: "/program-path/jee",
      image: "/placeholder.svg?key=jee-program",
    },
    {
      id: "neet",
      title: "NEET Programs",
      description:
        "Expert guidance for NEET preparation covering Physics, Chemistry, and Biology with regular assessments and practice tests.",
      link: "/program-path/neet",
      image: "/placeholder.svg?key=neet-program",
    },
    {
      id: "olympiad",
      title: "Olympiad Programs",
      description:
        "Specialized training for various national and international Olympiads to develop advanced problem-solving abilities.",
      link: "/olympiad-programs",
      image: "/placeholder.svg?key=olympiad-program",
    },
    {
      id: "k12",
      title: "Class 4-12 Science Coaching",
      description:
        "Comprehensive coaching for school students focusing on building strong foundations in Physics, Chemistry, Mathematics, and Biology.",
      link: "/k12-science-coaching",
      image: "/placeholder.svg?key=k12-program",
    },
  ]

  return (
    <main className="min-h-screen bg-white page-padding-for-header">
      <div className="container mx-auto px-4 py-12 pt-28">
        {" "}
        {/* Added pt-28 for top padding */}
        <Breadcrumbs items={breadcrumbItems} />
        <FadeIn>
          <div className="text-center mb-16">
            <SectionHeading
              title="Our Programs"
              subtitle="Pathways to Academic Excellence"
              description="Explore our comprehensive range of academic programs designed to help students excel in various competitive exams and academic pursuits."
            />
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <Link key={program.id} href={program.link} className="group">
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600">{program.description}</p>
                  <div className="mt-4 flex justify-end">
                    <span className="text-indigo-600 font-medium group-hover:underline">Learn more →</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
