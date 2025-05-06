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
  const sitemapLinks = {
    main: [
      { name: "Home", href: "/" },
      { name: "Our Vision", href: "/our-vision" },
      { name: "Program Paths", href: "/program-path" },
      { name: "Resources Hub", href: "/resources-hub" },
      { name: "What's New", href: "/whats-new" },
      { name: "Toppers' Tales", href: "/toppers-tales" },
      { name: "Get Enrolled", href: "/get-enrolled" },
      { name: "Reach Out", href: "/reach-out" },
    ],
    programs: [
      { name: "JEE Preparation", href: "/program-path/jee" },
      { name: "NEET Preparation", href: "/program-path/neet" },
      { name: "Olympiad Training", href: "/olympiad-programs" },
      { name: "Class 4-12 Science Coaching", href: "/k12-science-coaching" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Sitemap", href: "/sitemap-page" },
    ],
  }

  const siteStructure = [
    {
      title: "Main Pages",
      links: sitemapLinks.main.map((link) => ({ title: link.name, url: link.href })) || [],
    },
    {
      title: "Program Pages",
      links: sitemapLinks.programs.map((link) => ({ title: link.name, url: link.href })) || [],
    },
    {
      title: "Resource Pages",
      links: [],
    },
    {
      title: "Legal & Information",
      links: sitemapLinks.legal.map((link) => ({ title: link.name, url: link.href })) || [],
    },
  ].filter((section) => section.links.length > 0)

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
                            {link.title}
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
