"use client"

import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { Toaster } from "@/components/ui/toaster"
import { StudentForm } from "@/components/scholarship/student-form"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function ScholarshipTestFormClientPage() {
  return (
    <main className="container mx-auto px-4 py-12 pt-28">
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Scholarship Test", href: "/scholarship-test" },
          { name: "Registration Form", href: "/scholarship-test/form" },
        ]}
        className="mb-6"
      />

      <div className="max-w-4xl mx-auto">
        <Link
          href="/scholarship-test"
          className="inline-flex items-center text-blue-600 mb-6 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Scholarship Information
        </Link>

        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Scholarship Test Registration</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete this form to begin your scholarship test. The test consists of 30 multiple-choice questions and has
            a 30-minute time limit.
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <div className="flex items-start">
            <div className="bg-blue-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">Before you begin:</h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc space-y-1 pl-5">
                  <li>Ensure you have 30 minutes of uninterrupted time</li>
                  <li>The test has security measures to prevent tab switching</li>
                  <li>Your scholarship percentage depends on your performance</li>
                  <li>Results will be available immediately after completion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 md:p-8">
          <StudentForm
            onSubmit={(data) => {
              // This will be handled by the component's internal logic
              console.log("Form submitted:", data)
            }}
            initialData={null}
          />
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            By submitting this form, you agree to our{" "}
            <Link href="/terms-of-service" className="text-blue-600 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="text-blue-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
      <Toaster />
    </main>
  )
}
