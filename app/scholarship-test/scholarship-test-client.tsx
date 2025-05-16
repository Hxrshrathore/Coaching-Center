"use client"

import { useEffect } from "react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Award, CheckCircle, Clock, FileText, Star, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

export function ScholarshipTestPage() {
  // Track page view for analytics
  useEffect(() => {
    // This would be replaced with your actual analytics tracking code
    console.log("Scholarship test page viewed")
  }, [])

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Scholarship Cum Aptitude Test</h1>
            <p className="text-xl mb-6 text-gray-700">
              Take our comprehensive aptitude test to qualify for scholarships up to 100% on our premium courses for
              JEE, NEET, Olympiads, and K12 subjects.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-primary" />
                <span>45 minutes</span>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                <span>50 questions</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-primary" />
                <span>Up to 100% scholarship</span>
              </div>
            </div>
            <Alert variant="warning" className="mb-6">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                This test has security measures in place. Copy/paste, tab switching, and other actions will be monitored
                and may affect your test validity.
              </AlertDescription>
            </Alert>
            <Link href="/scholarship-test/form">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Start Scholarship Test
              </Button>
            </Link>
          </div>
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/placeholder.svg?key=scngf"
              alt="Students taking scholarship test"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-4 text-white">
                <p className="font-semibold text-lg">Secure your academic future with our scholarship program</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why Take Our Scholarship Test?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Win Up to 100% Scholarship</h3>
                <p>
                  Based on your performance, you can win scholarships ranging from 10% to 100% on our premium courses.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Star className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Assess Your Knowledge</h3>
                <p>
                  Get a comprehensive assessment of your current knowledge level and identify areas for improvement.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Join Elite Student Community</h3>
                <p>
                  Scholarship winners join our community of high-performing students with access to exclusive resources.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Scholarship Tiers */}
      <section className="max-w-6xl mx-auto mb-12 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Scholarship Tiers</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-3 text-left">Performance</th>
                <th className="p-3 text-left">Scholarship</th>
                <th className="p-3 text-left">Eligibility</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-3">90% and above</td>
                <td className="p-3 font-semibold">100% scholarship</td>
                <td className="p-3">All courses</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-100">
                <td className="p-3">80% - 89%</td>
                <td className="p-3 font-semibold">75% scholarship</td>
                <td className="p-3">All courses</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-3">70% - 79%</td>
                <td className="p-3 font-semibold">50% scholarship</td>
                <td className="p-3">All courses</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-100">
                <td className="p-3">60% - 69%</td>
                <td className="p-3 font-semibold">25% scholarship</td>
                <td className="p-3">Selected courses</td>
              </tr>
              <tr>
                <td className="p-3">50% - 59%</td>
                <td className="p-3 font-semibold">10% scholarship</td>
                <td className="p-3">Selected courses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Test Information */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">About The Test</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Test Structure</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>
                  <strong>Duration:</strong> 45 minutes
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>
                  <strong>Questions:</strong> 50 multiple-choice questions
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>
                  <strong>Subjects:</strong> Physics, Chemistry, Mathematics, Biology (based on your academic goal)
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>
                  <strong>Difficulty:</strong> Adapted to your current class level
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>
                  <strong>Results:</strong> Immediate evaluation and scholarship certificate
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Preparation Tips</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>Review your current class syllabus</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>Practice basic numerical problems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>Brush up on fundamental concepts</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>Ensure you have a stable internet connection</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600 mt-0.5" />
                <span>Use a desktop or laptop for the best experience</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
                  <Image src="/student-testimonial-1.png" alt="Rahul Sharma" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Rahul Sharma</h3>
                <p className="text-sm text-gray-500 mb-3">90% Scholarship Winner</p>
                <p className="italic">
                  "The scholarship test helped me secure a 90% scholarship for JEE coaching. The questions were
                  challenging but fair, and I'm grateful for this opportunity."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
                  <Image src="/student-testimonial-2.png" alt="Priya Patel" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Priya Patel</h3>
                <p className="text-sm text-gray-500 mb-3">75% Scholarship Winner</p>
                <p className="italic">
                  "I was nervous about taking the test, but the interface was user-friendly. I secured a 75% scholarship
                  for NEET coaching, which has been life-changing."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 relative">
                  <Image src="/student-testimonial-3.png" alt="Arjun Kumar" fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">Arjun Kumar</h3>
                <p className="text-sm text-gray-500 mb-3">100% Scholarship Winner</p>
                <p className="italic">
                  "I couldn't believe I scored 100% scholarship! The test was comprehensive and really tested my
                  knowledge. Now I'm pursuing my dream of becoming a doctor."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How is the scholarship percentage determined?</AccordionTrigger>
            <AccordionContent>
              The scholarship percentage is determined based on your performance in the aptitude test. Scoring 90% or
              above will make you eligible for a 100% scholarship, while scores between 80-89% qualify for 75%
              scholarship, and so on.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I retake the test if I'm not satisfied with my score?</AccordionTrigger>
            <AccordionContent>
              Yes, you can retake the test after 30 days. However, your highest score from all attempts will be
              considered for the scholarship.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there any fee for taking the scholarship test?</AccordionTrigger>
            <AccordionContent>
              No, the scholarship test is completely free of charge. We believe in providing equal opportunities to all
              students regardless of their financial background.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>How long is the scholarship valid?</AccordionTrigger>
            <AccordionContent>
              The scholarship is valid for one academic year. For continuing the scholarship in subsequent years,
              students need to maintain a minimum of 75% attendance and 70% marks in our internal assessments.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What happens if my internet disconnects during the test?</AccordionTrigger>
            <AccordionContent>
              Our system automatically saves your progress every 30 seconds. If your internet disconnects, you can log
              back in within 10 minutes and continue from where you left off. However, the timer will continue running
              during the disconnection period.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Can I use a mobile phone to take the test?</AccordionTrigger>
            <AccordionContent>
              While the test is accessible on mobile devices, we strongly recommend using a desktop or laptop computer
              for the best experience and to avoid any technical issues.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto mb-12 bg-primary/10 p-8 rounded-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Academic Future?</h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto">
            Take the first step towards academic excellence and financial relief. Our scholarship test is your gateway
            to quality education at reduced costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/scholarship-test/form">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Take the Test Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Contact for Queries
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalCredential",
            name: "Scholarship Cum Aptitude Test",
            description:
              "Take Ascent Classes' Scholarship Cum Aptitude Test to win scholarships up to 100% on JEE, NEET, Olympiad & K12 courses.",
            educationalLevel: "High School",
            competencyRequired: "Knowledge in Physics, Chemistry, Mathematics, and Biology",
            validFor: "One academic year",
            validIn: "India",
            provider: {
              "@type": "Organization",
              name: "Ascent Classes",
              url: "https://ascentclasses.com",
            },
          }),
        }}
      />
    </main>
  )
}
