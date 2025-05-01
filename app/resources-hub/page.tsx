import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Award, Users, Calendar, BookCheck, FileText, Video, PenTool } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ResourcesHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Learning Resources
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  Resources Hub
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Access premium study materials, practice tests, and educational resources to enhance your preparation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Study Materials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Learning Materials
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Study Materials
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Comprehensive notes, practice questions, and reference materials for all exams
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Subject-wise Notes</CardTitle>
                  </div>
                  <CardDescription>Comprehensive notes covering all topics</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed theory with illustrations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Important formulas and concepts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Tips and tricks for quick solving</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Regular updates as per syllabus changes</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Notes</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Practice Worksheets</CardTitle>
                  </div>
                  <CardDescription>Topic-wise practice questions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Graded difficulty levels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Previous year questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Weekly updates with new questions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Worksheets</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <PenTool className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Formula Sheets</CardTitle>
                  </div>
                  <CardDescription>Quick reference materials</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Subject-wise formula compilations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Important theorems and principles</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Memory techniques for quick recall</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Printable PDF formats</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Formula Sheets</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Mock Tests Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Practice Tests
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Mock Tests
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Practice with exam-like conditions to build confidence and improve performance
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Full-Length Mock Tests</CardTitle>
                  </div>
                  <CardDescription>Complete exam simulations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Exam pattern and time constraints</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Difficulty level matching actual exams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed solutions and explanations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Performance analytics and insights</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Take Mock Tests</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Section-wise Tests</CardTitle>
                  </div>
                  <CardDescription>Focus on specific exam sections</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Subject-specific practice</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Targeted improvement in weak areas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed feedback on performance</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Improvement tracking over time</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Take Section Tests</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Performance Analytics</CardTitle>
                  </div>
                  <CardDescription>Track your progress and improvement</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed score analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Comparison with toppers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Strength and weakness identification</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Personalized improvement suggestions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">View Analytics</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Lectures Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Video Content
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Video Lectures
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Learn from expert faculty through comprehensive video lectures
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Video className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Concept Explanations</CardTitle>
                  </div>
                  <CardDescription>Clear explanations of fundamental concepts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                    <Image
                      src="/video-lecture-preview.png"
                      alt="Video Lecture Preview"
                      width={600}
                      height={338}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/90 p-3 shadow-lg">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Subject-wise concept videos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Visual aids and animations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Downloadable for offline viewing</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Watch Lectures</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Problem-Solving Sessions</CardTitle>
                  </div>
                  <CardDescription>Learn effective problem-solving techniques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                    <Image
                      src="/problem-solving-preview.png"
                      alt="Problem Solving Session Preview"
                      width={600}
                      height={338}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/90 p-3 shadow-lg">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Step-by-step problem solutions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Shortcut methods and tricks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Previous year question analysis</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Advanced problem-solving techniques</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Watch Sessions</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Doubt Clearing Sessions</CardTitle>
                  </div>
                  <CardDescription>Get your doubts resolved by experts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video overflow-hidden rounded-lg bg-slate-100 dark:bg-slate-700">
                    <Image
                      src="/doubt-clearing-preview.png"
                      alt="Doubt Clearing Session Preview"
                      width={600}
                      height={338}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-white/90 p-3 shadow-lg">
                        <Video className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Live doubt clearing sessions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>One-on-one faculty interaction</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Recorded sessions for future reference</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Scheduled weekly sessions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Join Sessions</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Affairs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Stay Updated
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Current Affairs
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Stay updated with the latest news and events relevant to your exams
                </p>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Daily Updates</CardTitle>
                  </div>
                  <CardDescription>Daily current affairs summaries</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Concise daily news summaries</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Exam-relevant news filtering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Important facts and figures</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Available in PDF and audio formats</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Updates</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Monthly Magazines</CardTitle>
                  </div>
                  <CardDescription>Comprehensive monthly compilations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Monthly current affairs compilations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Categorized by subjects and topics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Practice questions based on current affairs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Downloadable in multiple formats</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Access Magazines</Button>
                </CardFooter>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Video className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <CardTitle>Current Affairs Quizzes</CardTitle>
                  </div>
                  <CardDescription>Test your knowledge of recent events</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Weekly and monthly quizzes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Exam-pattern questions</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Detailed explanations for answers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <span>Performance tracking and analytics</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Take Quizzes</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Enhance Your Preparation?
                </h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Access our comprehensive resources and take your exam preparation to the next level.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/get-enrolled">
                  <Button size="lg" className="gap-1 bg-white text-blue-600 hover:bg-blue-50">
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/reach-out">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-200 text-blue-400 hover:bg-blue-700 hover:text-white"
                  >
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
