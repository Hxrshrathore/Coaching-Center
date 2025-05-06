import type { Metadata } from "next"
import { SectionHeading } from "@/components/ui/section-heading"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { EnrollmentForm } from "@/components/enrollment/enrollment-form"

export const metadata: Metadata = {
  title: "Get Enrolled | Ascent Classes",
  description:
    "Join Ascent Classes and take the first step towards academic excellence. Learn about our admission process, fees, and more.",
}

export default function GetEnrolled() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Get Enrolled", href: "/get-enrolled" },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 pt-28">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="text-center mb-16">
            <SectionHeading
              title="Get Enrolled"
              subtitle="Join Our Academic Community"
              description="Take the first step towards academic excellence by enrolling in our programs."
            />
          </div>

          <EnrollmentForm />
        </div>
      </main>
    </div>
  )
}
