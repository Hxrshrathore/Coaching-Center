import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { VideoEmbed } from "@/components/video-embed"

export const metadata: Metadata = {
  title: "Resources Hub | Toppers Maker",
  description:
    "Access a wealth of educational resources, study materials, practice tests, and more to support your academic journey.",
}

export default function ResourcesHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12 pt-28">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li className="flex items-center">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <span className="mx-2">/</span>
                <span className="font-medium text-blue-600" aria-current="page">
                  Resources Hub
                </span>
              </li>
            </ol>
          </nav>

          <div className="text-center mb-16">
            <div className="space-y-2 mb-8">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                Resources Hub
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-[85%] mx-auto">
                Access a wealth of educational resources, study materials, practice tests, and more to support your
                academic journey.
              </p>
            </div>
          </div>

          {/* Video Lectures Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-blue-100 text-blue-800 hover:bg-blue-100">Featured Content</Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950">
                    Video Lectures
                  </h2>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Expert-led video tutorials to help you master complex concepts
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
                {/* Video 1 */}
                <Card className="bg-white border-none shadow-md overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg">Organic Chemistry: Iodination Of Benzene</CardTitle>
                    <CardDescription>Detailed explanation of reaction mechanism</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/8fWvK6dR2ZE?si=W0u0bHkhSKZxQ6u_"
                      title="Mechanism: Iodination Of Benzene | Organic Chemistry"
                    />
                    <div className="mt-4 text-sm text-slate-600">
                      <p>
                        Learn about the complete mechanism of iodination of benzene with detailed explanations of each
                        step in the reaction process.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="/resources-hub/video-lectures/organic-chemistry" className="w-full text-white">
                        More Organic Chemistry Videos
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Video 2 */}
                <Card className="bg-white border-none shadow-md overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg">Integration by Substitution (NCERT Class 12)</CardTitle>
                    <CardDescription>Detailed solution of NCERT Exercise 7.2</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/fzTRKt_YGT8?si=6ap5k9GsK7VUwpi6"
                      title="CLASS 12 NCERT: INTEGRATION EX-7.2 (BY SUBSTITUTION) DETAILED SOLUTION | PART 1 | MATHEMATICS"
                    />
                    <div className="mt-4 text-sm text-slate-600">
                      <p>
                        Step-by-step solution of NCERT Class 12 Mathematics Exercise 7.2 focusing on integration by
                        substitution method.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="/resources-hub/video-lectures/mathematics" className="w-full text-white">
                        More Mathematics Videos
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Video 3 */}
                <Card className="bg-white border-none shadow-md overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-lg">Stability Of Sigma Complex (Part 4)</CardTitle>
                    <CardDescription>Advanced organic chemistry concepts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <VideoEmbed
                      src="https://www.youtube.com/embed/XRP6LTgNKOc?si=7iQd803pw0uhm9FP"
                      title="Stability Of Sigma complex Part 4 | Organic Chemistry"
                    />
                    <div className="mt-4 text-sm text-slate-600">
                      <p>
                        Continuation of the series on sigma complex stability in organic chemistry reactions with
                        detailed explanations.
                      </p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Link href="/resources-hub/video-lectures/organic-chemistry" className="w-full text-white">
                        More Organic Chemistry Videos
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div className="mt-10 text-center">
                <Link href="/resources-hub/video-lectures">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    View All Video Lectures <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Rest of the page content remains the same */}
          {/* ... */}
        </div>
      </main>
    </div>
  )
}
