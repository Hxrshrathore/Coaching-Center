"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function ScholarshipPageContent() {
  return (
    <div className="max-w-4xl mx-auto mt-16 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">About Our Scholarship Program</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          At Ascent Classes, we believe that financial constraints should never hinder a student's academic journey. Our
          Scholarship Cum Aptitude Test is designed to identify talented students and provide them with financial
          assistance based on their performance.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          The test evaluates your knowledge in Physics, Chemistry, Mathematics, and Biology, depending on your academic
          goals. Based on your performance, you can win scholarships ranging from 10% to 100% on our premium courses.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Scholarship Tiers</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Performance</th>
                <th className="py-3 px-4 text-left">Scholarship Percentage</th>
                <th className="py-3 px-4 text-left">Eligibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
              <tr>
                <td className="py-3 px-4">90% and above</td>
                <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">100%</td>
                <td className="py-3 px-4">All courses</td>
              </tr>
              <tr>
                <td className="py-3 px-4">80% - 89%</td>
                <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">75%</td>
                <td className="py-3 px-4">All courses</td>
              </tr>
              <tr>
                <td className="py-3 px-4">70% - 79%</td>
                <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">50%</td>
                <td className="py-3 px-4">All courses</td>
              </tr>
              <tr>
                <td className="py-3 px-4">60% - 69%</td>
                <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">25%</td>
                <td className="py-3 px-4">All courses</td>
              </tr>
              <tr>
                <td className="py-3 px-4">50% - 59%</td>
                <td className="py-3 px-4 font-bold text-green-600 dark:text-green-400">10%</td>
                <td className="py-3 px-4">All courses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Test Format</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">Test Structure</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>30 multiple-choice questions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>30-minute time limit</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Subjects based on your academic goals</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Varying difficulty levels</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">What You'll Get</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Detailed performance analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Subject-wise breakdown</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Scholarship eligibility certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span>Personalized course recommendations</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How is the scholarship percentage calculated?</AccordionTrigger>
            <AccordionContent>
              The scholarship percentage is calculated based on your overall performance in the test. The higher your
              score, the higher the scholarship percentage you'll be eligible for. We consider factors like accuracy,
              time taken, and the difficulty level of questions you answered correctly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I retake the test if I'm not satisfied with my performance?</AccordionTrigger>
            <AccordionContent>
              Yes, you can retake the test after 30 days. However, your scholarship eligibility will be determined by
              your best performance across all attempts.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How long is the scholarship valid?</AccordionTrigger>
            <AccordionContent>
              The scholarship is valid for 6 months from the date of the test. You can enroll in any eligible course
              within this period to avail the scholarship benefit.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is the test proctored?</AccordionTrigger>
            <AccordionContent>
              Yes, the test is proctored using our advanced security system. Any suspicious activity like tab switching,
              using other applications, or copying content will be flagged and may affect your scholarship eligibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>What subjects are covered in the test?</AccordionTrigger>
            <AccordionContent>
              The test covers Physics, Chemistry, Mathematics, and Biology. The specific combination of subjects will
              depend on your academic goals (JEE, NEET, etc.) that you select before starting the test.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Priya Sharma</h3>
                  <p className="text-sm text-gray-500">JEE Advanced 2023 AIR 342</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "I scored 92% in the scholarship test and received a 100% scholarship for the JEE Advanced course. The
                detailed analysis helped me identify my weak areas, and with the guidance of Ascent Classes' faculty, I
                secured AIR 342 in JEE Advanced 2023."
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h3 className="font-semibold">Rahul Verma</h3>
                  <p className="text-sm text-gray-500">NEET 2023 AIR 512</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "The scholarship test was a game-changer for me. I received a 75% scholarship which made quality
                coaching affordable for my family. The personalized study plan based on my test results helped me focus
                on my weak areas and eventually secure AIR 512 in NEET 2023."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pb-8">
        <h2 className="text-2xl font-bold mb-4">Ready to Take the Challenge?</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Take our Scholarship Cum Aptitude Test today and unlock your potential. The test is free, takes only 30
          minutes, and can help you save significantly on your education expenses.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Remember, investing 30 minutes now could save you thousands of rupees on your education journey!
        </p>
      </section>

      {/* Schema.org structured data for educational assessment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalAssessment",
            name: "Scholarship Cum Aptitude Test",
            description:
              "A free aptitude test to assess knowledge and provide scholarships for competitive exam preparation courses.",
            educationalLevel: "High School",
            timeRequired: "PT30M",
            provider: {
              "@type": "Organization",
              name: "Ascent Classes",
              url: "https://ascentclasses.com",
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </div>
  )
}
