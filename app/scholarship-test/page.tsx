import type { Metadata } from "next"
import { ScholarshipPageContent } from "./scholarship-page-content"
import { Toaster } from "@/components/ui/toaster"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { ScholarshipTestPage as ScholarshipTestClientPage } from "./scholarship-test-client"

export const metadata: Metadata = {
  title: "Scholarship Cum Aptitude Test | Win Up to 100% Scholarship | Ascent Classes",
  description:
    "Take our free Scholarship Cum Aptitude Test and win scholarships up to 100% for JEE, NEET, and other competitive exam preparation courses. Assess your knowledge and get personalized feedback.",
  keywords:
    "scholarship test, aptitude test, JEE scholarship, NEET scholarship, free scholarship test, competitive exam scholarship, Ascent Classes scholarship",
  openGraph: {
    title: "Win Scholarships Up to 100% | Free Scholarship Cum Aptitude Test",
    description:
      "Take our free 30-minute test to assess your knowledge and win scholarships for JEE, NEET, and other competitive exam preparation courses.",
    url: "/scholarship-test",
    type: "website",
  },
}

export default function ScholarshipTestPage() {
  return (
    <main className="container mx-auto px-4 py-12 pt-28">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Scholarship Test", href: "/scholarship-test" },
        ]}
        className="mb-6"
      />
      <ScholarshipTestClientPage />
      <ScholarshipPageContent />
      <Toaster />
    </main>
  )
}
