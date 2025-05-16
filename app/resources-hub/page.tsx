"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function ResourcesHubPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-12 pt-28">
        {/* Enhanced Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-slate-600">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <span className="mx-2">/</span>
              <span className="font-medium text-blue-700">Resources Hub</span>
            </li>
          </ol>
        </nav>

        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 mb-4">
            Resources Hub
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-[85%] mx-auto">
            Access a wealth of educational resources, study materials, practice tests, and more to support your academic
            journey.
          </p>
        </div>

        {/* Video Lectures - Enhanced */}
        <section className="w-full py-12 md:py-24 bg-blue-50 rounded-xl mb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <span className="inline-flex h-6 items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                  Featured Content
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                  Video Lectures
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Expert-led video tutorials to help you master complex concepts
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {/* Video 1 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Organic Chemistry: Iodination Of Benzene</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Detailed explanation of reaction mechanism</p>
                  <div className="aspect-video bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 mb-4">
                    <p className="text-blue-800 font-medium mb-2">Mechanism: Iodination Of Benzene</p>
                    <a
                      href="https://www.youtube.com/watch?v=8fWvK6dR2ZE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      Watch on YouTube
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Learn about the complete mechanism of iodination of benzene with detailed explanations of each step
                    in the reaction process.
                  </p>
                  <a
                    href="/resources-hub/video-lectures/organic-chemistry"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    More Organic Chemistry Videos
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Video 2 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Integration by Substitution (NCERT Class 12)</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Detailed solution of NCERT Exercise 7.2</p>
                  <div className="aspect-video bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 mb-4">
                    <p className="text-blue-800 font-medium mb-2">Integration by Substitution (NCERT)</p>
                    <a
                      href="https://www.youtube.com/watch?v=fzTRKt_YGT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      Watch on YouTube
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Step-by-step solution of NCERT Class 12 Mathematics Exercise 7.2 focusing on integration by
                    substitution method.
                  </p>
                  <a
                    href="/resources-hub/video-lectures/mathematics"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    More Mathematics Videos
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Video 3 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="m22 8-6 4 6 4V8Z" />
                      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Stability Of Sigma Complex (Part 4)</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Advanced organic chemistry concepts</p>
                  <div className="aspect-video bg-blue-50 rounded-lg flex flex-col items-center justify-center p-4 mb-4">
                    <p className="text-blue-800 font-medium mb-2">Stability Of Sigma Complex</p>
                    <a
                      href="https://www.youtube.com/watch?v=XRP6LTgNKOc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 flex items-center gap-1 text-sm font-medium transition-colors"
                    >
                      Watch on YouTube
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                  <p className="text-sm text-slate-600 mb-4">
                    Continuation of the series on sigma complex stability in organic chemistry reactions with detailed
                    explanations.
                  </p>
                  <a
                    href="/resources-hub/video-lectures/organic-chemistry"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    More Organic Chemistry Videos
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/resources-hub/video-lectures"
                className="inline-flex items-center justify-center h-10 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                View All Video Lectures
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Study Materials - Enhanced */}
        <section className="w-full py-12 md:py-24 mb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <span className="inline-flex h-6 items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                  Learning Materials
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                  Study Materials
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive notes, practice questions, and reference materials for all exams
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Material 1 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Subject-wise Notes</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive notes covering all topics</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Detailed theory with illustrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Important formulas and concepts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Tips and tricks for quick solving</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Regular updates as per syllabus changes</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/notes"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Access Notes
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Material 2 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                      <path d="M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                      <path d="M16 3v3a2 2 0 0 0 2 2h3" />
                      <path d="M3 3v3a2 2 0 0 0 2 2h3" />
                      <path d="M21 3v3a2 2 0 0 1-2 2h-3" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Practice Worksheets</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Topic-wise practice questions</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Graded difficulty levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Previous year questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Detailed solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Weekly updates with new questions</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/worksheets"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Access Worksheets
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Material 3 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <path d="M14 2v6h6" />
                      <path d="M16 13H8" />
                      <path d="M16 17H8" />
                      <path d="M10 9H8" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Formula Sheets</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Quick reference materials</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Subject-wise formula compilations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Important theorems and principles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Memory techniques for quick recall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Printable PDF formats</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/formula-sheets"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Access Formula Sheets
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mock Tests - Enhanced */}
        <section className="w-full py-12 md:py-24 bg-blue-50 rounded-xl mb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <span className="inline-flex h-6 items-center rounded-md bg-blue-100 px-2.5 py-0.5 text-sm font-medium text-blue-800">
                  Practice Tests
                </span>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                  Mock Tests
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Practice with exam-like conditions to build confidence and improve performance
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Test 1 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                      <line x1="16" x2="16" y1="2" y2="6" />
                      <line x1="8" x2="8" y1="2" y2="6" />
                      <line x1="3" x2="21" y1="10" y2="10" />
                      <path d="m9 16 2 2 4-4" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Full-Length Mock Tests</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Complete exam simulations</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Exam pattern and time constraints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Difficulty level matching actual exams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Detailed solutions and explanations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Performance analytics and insights</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/mock-tests"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Take Mock Tests
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Test 2 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M8 3v3a2 2 0 0 1-2 2H3" />
                      <path d="M21 8v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8" />
                      <path d="M16 3v3a2 2 0 0 0 2 2h3" />
                      <path d="M3 3v3a2 2 0 0 0 2 2h3" />
                      <path d="M21 3v3a2 2 0 0 1-2 2h-3" />
                      <path d="m9 14 2 2 4-4" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Section-wise Tests</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Focus on specific exam sections</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Subject-specific practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Targeted improvement in weak areas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Detailed feedback on performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Improvement tracking over time</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/section-tests"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    Take Section Tests
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Test 3 - Enhanced */}
              <div className="bg-white border border-gray-100 shadow-lg rounded-xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                    <h3 className="font-bold text-lg text-gray-900">Performance Analytics</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Track your progress and improvement</p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Detailed score analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Comparison with toppers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Strength and weakness identification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                      <span>Personalized improvement suggestions</span>
                    </li>
                  </ul>
                  <a
                    href="/resources-hub/analytics"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Analytics
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Enhanced */}
        <section className="w-full py-12 md:py-16 bg-blue-600 rounded-xl text-white mb-16">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Enhance Your Learning?
                </h2>
                <p className="text-blue-100 md:text-xl/relaxed">
                  Access our comprehensive resources and take your preparation to the next level.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <a
                  href="/get-enrolled"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-blue-600 shadow transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="/reach-out"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-950"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
