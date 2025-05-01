import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, ChevronRight } from "lucide-react"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Sitemap | Ascent Coaching Classes",
  description: "Navigate through all pages and resources available on the Ascent Coaching Classes website.",
  openGraph: {
    title: "Sitemap | Ascent Coaching Classes",
    description: "Navigate through all pages and resources available on the Ascent Coaching Classes website.",
    url: "/sitemap-page",
    siteName: "Ascent Coaching Classes",
    locale: "en_US",
    type: "website",
  },
}

export default function SitemapPage() {
  // Define site structure
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", url: "/" },
        { name: "Our Vision", url: "/our-vision" },
        { name: "Program Path", url: "/program-path" },
        { name: "Resources Hub", url: "/resources-hub" },
        { name: "What's New", url: "/whats-new" },
        { name: "Toppers Tales", url: "/toppers-tales" },
        { name: "Get Enrolled", url: "/get-enrolled" },
        { name: "Reach Out", url: "/reach-out" },
      ],
    },
    {
      title: "Program Pages",
      links: [
        { name: "JEE Preparation", url: "/program-path/jee" },
        { name: "NEET Preparation", url: "/program-path/neet" },
        { name: "SSC Preparation", url: "/program-path/ssc" },
        { name: "Banking Exams", url: "/program-path/banking" },
        { name: "Olympiads", url: "/program-path/olympiads" },
      ],
    },
    {
      title: "Resource Pages",
      links: [
        { name: "Study Notes", url: "/resources-hub/notes" },
        { name: "Practice Worksheets", url: "/resources-hub/worksheets" },
        { name: "Mock Tests", url: "/resources-hub/mock-tests" },
        { name: "Video Lectures", url: "/resources-hub/video-lectures" },
        { name: "Study Materials", url: "/resources-hub/study-materials" },
      ],
    },
    {
      title: "Success Stories",
      links: [
        { name: "All Success Stories", url: "/toppers-tales" },
        { name: "JEE Toppers", url: "/toppers-tales?tab=jee" },
        { name: "NEET Toppers", url: "/toppers-tales?tab=neet" },
        { name: "Other Exam Toppers", url: "/toppers-tales?tab=others" },
      ],
    },
    {
      title: "Legal & Information",
      links: [
        { name: "Privacy Policy", url: "/privacy-policy" },
        { name: "Terms of Service", url: "/terms-of-service" },
        { name: "XML Sitemap", url: "/sitemap.xml" },
      ],
    },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Sitemap</h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Navigate through all pages and resources available on the Ascent Coaching Classes website.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {siteStructure.map((section, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 p-6">
                    <h2 className="text-xl font-bold text-slate-800 mb-4">{section.title}</h2>
                    <ul className="space-y-2">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <Link
                            href={link.url}
                            className="flex items-center text-slate-600 hover:text-blue-600 transition-colors duration-200"
                          >
                            <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  )
}
