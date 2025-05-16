import type { Metadata } from "next"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { StudentGallery } from "@/components/student-gallery"
import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "Student Life | Ascent Coaching Classes",
  description:
    "Experience the vibrant student life at Ascent Coaching Classes through our gallery of interactive learning and student activities.",
}

export default function StudentLifePage() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Student Life", href: "/student-life" },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      <Breadcrumbs items={breadcrumbItems} />

      <section className="mb-12">
        <SectionHeading
          title="Student Life at Ascent"
          subtitle="Experience our vibrant learning environment"
          description="At Ascent Coaching Classes, we believe in creating an engaging and interactive learning environment where students thrive academically and personally."
        />

        <div className="mt-8">
          <StudentGallery className="mb-8" />
        </div>
      </section>

      <section className="mb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Interactive Learning</h2>
            <p className="mb-4 text-gray-700">
              Our state-of-the-art smart classrooms enable interactive learning experiences where students actively
              engage with educational content. Our faculty uses digital tools to explain complex concepts, making
              learning more effective and enjoyable.
            </p>
            <p className="text-gray-700">
              Students participate in collaborative problem-solving sessions, enhancing their critical thinking
              abilities and developing teamwork skills that are essential for success in competitive exams.
            </p>
          </div>
          <div className="relative h-64 overflow-hidden rounded-lg md:h-auto">
            <img
              src="/students/interactive-learning-2.jpeg"
              alt="Interactive learning session at Ascent Coaching Classes"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="relative order-2 h-64 overflow-hidden rounded-lg md:order-1 md:h-auto">
            <img
              src="/students/student-group-4.jpeg"
              alt="Happy students at Ascent Coaching Classes"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4 text-2xl font-bold text-blue-600">Student Success Stories</h2>
            <p className="mb-4 text-gray-700">
              Our students consistently achieve outstanding results in competitive exams like JEE, NEET, and various
              Olympiads. We take pride in their accomplishments and celebrate their success.
            </p>
            <p className="text-gray-700">
              The small batch size of just 10 students ensures personalized attention and allows our faculty to identify
              and address individual learning needs, helping each student reach their full potential.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-bold text-blue-600 text-center">Our Learning Environment</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/students/interactive-learning-3.jpeg"
              alt="Students engaging with smart board"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/students/interactive-learning-5.jpeg"
              alt="Interactive classroom session"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src="/students/student-group-1.jpeg"
              alt="Happy students at Ascent Coaching Classes"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
