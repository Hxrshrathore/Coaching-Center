import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Award, Star, Quote, BookOpen, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeading } from "@/components/ui/section-heading"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Toppers' Tales | Ascent Classes",
  description:
    "Success stories and testimonials from our top-performing students who achieved excellence with Ascent Classes.",
}

export default function ToppersTales() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Toppers' Tales", href: "/toppers-tales" },
  ]

  // Success stories data
  const successStories = [
    {
      name: "Priya Singh",
      exam: "NEET",
      rank: "AIR 2087",
      year: "2024",
      image: "/young-indian-female-student.png",
      quote:
        "The structured approach and personal mentoring at Ascent Classes helped me crack NEET with a top rank. The faculty's guidance was invaluable throughout my preparation journey.",
      tips: [
        "Consistency is key - study at least 6 hours daily",
        "Focus on NCERT books first, then move to reference materials",
        "Regular revision of previous topics is crucial",
        "Practice at least 30 MCQs daily for each subject",
      ],
      story:
        "Coming from a small town, I had limited resources but big dreams. Joining Ascent Classes changed everything for me. The faculty identified my strengths in Biology and helped me improve my Physics and Chemistry. The weekly tests kept me on my toes, and the personalized feedback sessions helped me understand my mistakes. I'm now pursuing MBBS at a prestigious medical college.",
    },
    {
      name: "Rajat Tiwari",
      exam: "SSC CGL",
      rank: "Final Selection",
      year: "2023",
      image: "/young-indian-male-student.png",
      quote:
        "Joining Ascent Classes was the best decision I made. The faculty's expertise and regular mock tests helped me secure my dream government job through SSC CGL.",
      tips: [
        "Current affairs revision daily for 1 hour",
        "Solve previous year papers extensively",
        "Time management during the exam is crucial",
        "Focus on accuracy rather than attempting all questions",
      ],
      story:
        "After two unsuccessful attempts at SSC CGL, I was losing hope. That's when I joined Ascent Classes. Their specialized approach to each section of the exam and focus on my weak areas (Quantitative Aptitude) made all the difference. The interview preparation sessions were particularly helpful. I'm now working as an Assistant Section Officer in the Ministry of Finance.",
    },
    {
      name: "Meenal Yadav",
      exam: "JEE Advanced",
      rank: "AIR 8932",
      year: "2023",
      image: "/student-testimonial-2.png",
      quote:
        "The JEE coaching at Ascent Classes is exceptional. The problem-solving techniques and conceptual clarity provided by the teachers helped me crack JEE Advanced.",
      tips: [
        "Understand concepts thoroughly instead of memorizing",
        "Solve a variety of problems for each concept",
        "Maintain a separate notebook for formulas and revise daily",
        "Take regular breaks during study sessions to maintain focus",
      ],
      story:
        "Mathematics was always my weak point, but the faculty at Ascent Classes helped me overcome this challenge. Their unique approach to problem-solving and the way they explained complex concepts made a huge difference. The doubt-clearing sessions were available whenever I needed them. I'm now pursuing Computer Science Engineering at an IIT.",
    },
    {
      name: "Ankit Sharma",
      exam: "Bank PO",
      rank: "Selected in SBI PO",
      year: "2024",
      image: "/young-indian-professional-male.png",
      quote:
        "The banking exam preparation at Ascent Classes is comprehensive and focused. The current affairs sessions and mock interviews were particularly helpful.",
      tips: [
        "Practice reasoning and quantitative aptitude daily",
        "Read financial newspapers regularly",
        "Take sectional tests to improve speed and accuracy",
        "Group study for GD/PI preparation is effective",
      ],
      story:
        "After completing my graduation, I was confused about my career path. The career counseling at Ascent Classes helped me decide on banking as my career. Their specialized Bank PO coaching with focus on all three stages - Prelims, Mains, and Interview - was comprehensive. The mock interview sessions with banking professionals gave me confidence. I'm now working as a Probationary Officer at State Bank of India.",
    },
    {
      name: "Ritu Patel",
      exam: "NEET",
      rank: "AIR 5432",
      year: "2023",
      image: "/student-testimonial-1.png",
      quote:
        "The biology faculty at Ascent Classes is outstanding. Their approach to teaching complex concepts made my NEET preparation much easier and effective.",
      tips: [
        "Create short notes for quick revision",
        "Use mnemonics for remembering complex biological terms",
        "Solve at least 2 full-length papers every week",
        "Maintain a healthy lifestyle with proper sleep and nutrition",
      ],
      story:
        "Being a first-generation learner in my family, I had no guidance at home. Ascent Classes became my second home where teachers not only taught me subjects but also life skills. The study material was comprehensive and easy to understand. The regular motivational sessions kept me going during tough times. I'm now pursuing MBBS and hope to become a neurologist.",
    },
    {
      name: "Mohit Verma",
      exam: "JEE Main",
      rank: "99.2 Percentile",
      year: "2024",
      image: "/student-testimonial-3.png",
      quote:
        "The problem-solving techniques taught at Ascent Classes helped me tackle even the toughest questions in JEE Main. Highly recommended for serious aspirants.",
      tips: [
        "Focus on building strong fundamentals",
        "Solve a variety of problems rather than repeating similar ones",
        "Analyze mistakes after each mock test",
        "Maintain a positive mindset throughout the preparation",
      ],
      story:
        "I joined Ascent Classes in Class 11, and it was the best decision. The faculty's approach to teaching Physics made me fall in love with the subject. The way they connected theoretical concepts with real-world applications made learning enjoyable. The competitive environment pushed me to give my best. I'm now preparing for JEE Advanced with confidence.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      {" "}
      {/* Added pt-28 for top padding */}
      <Breadcrumbs items={breadcrumbItems} />
      <FadeIn>
        <div className="text-center mb-16">
          <SectionHeading
            title="Toppers' Tales"
            subtitle="Success Stories from Our Students"
            description="Read inspiring success stories and testimonials from our top-performing students who achieved excellence with Ascent Classes."
          />
        </div>
      </FadeIn>
      {/* Rest of the content */}
      <div className="text-center py-20">
        <p className="text-gray-500">Success stories content will be added here.</p>
      </div>
      <div className="flex min-h-screen flex-col">
        <main className="flex-1">
          {/* Hero Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                    Success Stories
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                    Toppers' Tales: Inspiring Stories of Success
                  </h1>
                  <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                    Read inspiring stories from students who aced their exams and achieved their dreams with Ascent
                    Classes
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Toppers Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <SectionHeading
                badge="Featured Achievers"
                title="Meet Our Star Performers"
                description="Students who have made us proud with their exceptional achievements"
                className="mb-10"
              />

              <Tabs defaultValue="all" className="w-full">
                <div className="flex justify-center mb-8 overflow-x-auto pb-2 md:pb-0">
                  <TabsList className="grid min-w-[300px] grid-cols-2 sm:grid-cols-4 bg-blue-50 dark:bg-slate-800">
                    <TabsTrigger
                      value="all"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      All Exams
                    </TabsTrigger>
                    <TabsTrigger
                      value="jee"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      JEE
                    </TabsTrigger>
                    <TabsTrigger
                      value="neet"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      NEET
                    </TabsTrigger>
                    <TabsTrigger
                      value="others"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      SSC/Banking
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="all" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {successStories.map((story, index) => (
                      <FadeIn key={index} delay={0.1 * index} direction="up">
                        <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                          <CardHeader className="pb-2">
                            <div className="flex items-center gap-4">
                              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                <Image
                                  src={story.image || "/placeholder.svg"}
                                  alt={story.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{story.name}</CardTitle>
                                <CardDescription className="flex items-center gap-1">
                                  <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                  <span>
                                    {story.exam} {story.rank} ({story.year})
                                  </span>
                                </CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-2">
                            <div className="flex items-start gap-2 mb-4">
                              <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                              <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{story.quote}"</p>
                            </div>
                            <div className="mt-4">
                              <h4 className="text-sm font-semibold text-blue-950 dark:text-white mb-2 flex items-center gap-2">
                                <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Success Mantra
                              </h4>
                              <ul className="space-y-1">
                                {story.tips.slice(0, 2).map((tip, i) => (
                                  <li
                                    key={i}
                                    className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                  >
                                    <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                                    <span>{tip}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Link href={`/toppers-tales/${story.name.toLowerCase().replace(/\s+/g, "-")}`}>
                              <Button
                                variant="outline"
                                className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                              >
                                Read Full Story
                              </Button>
                            </Link>
                          </CardFooter>
                        </Card>
                      </FadeIn>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="jee" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {successStories
                      .filter((story) => story.exam.includes("JEE"))
                      .map((story, index) => (
                        <FadeIn key={index} delay={0.1 * index} direction="up">
                          <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                  <Image
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <CardTitle className="text-lg">{story.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    <span>
                                      {story.exam} {story.rank} ({story.year})
                                    </span>
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                              <div className="flex items-start gap-2 mb-4">
                                <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{story.quote}"</p>
                              </div>
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-blue-950 dark:text-white mb-2 flex items-center gap-2">
                                  <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Success Mantra
                                </h4>
                                <ul className="space-y-1">
                                  {story.tips.slice(0, 2).map((tip, i) => (
                                    <li
                                      key={i}
                                      className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                    >
                                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Link href={`/toppers-tales/${story.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                <Button
                                  variant="outline"
                                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                                >
                                  Read Full Story
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </FadeIn>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="neet" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {successStories
                      .filter((story) => story.exam.includes("NEET"))
                      .map((story, index) => (
                        <FadeIn key={index} delay={0.1 * index} direction="up">
                          <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                  <Image
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <CardTitle className="text-lg">{story.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    <span>
                                      {story.exam} {story.rank} ({story.year})
                                    </span>
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                              <div className="flex items-start gap-2 mb-4">
                                <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{story.quote}"</p>
                              </div>
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-blue-950 dark:text-white mb-2 flex items-center gap-2">
                                  <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Success Mantra
                                </h4>
                                <ul className="space-y-1">
                                  {story.tips.slice(0, 2).map((tip, i) => (
                                    <li
                                      key={i}
                                      className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                    >
                                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Link href={`/toppers-tales/${story.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                <Button
                                  variant="outline"
                                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                                >
                                  Read Full Story
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </FadeIn>
                      ))}
                  </div>
                </TabsContent>

                <TabsContent value="others" className="space-y-8">
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {successStories
                      .filter((story) => story.exam.includes("SSC") || story.exam.includes("Bank"))
                      .map((story, index) => (
                        <FadeIn key={index} delay={0.1 * index} direction="up">
                          <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                            <CardHeader className="pb-2">
                              <div className="flex items-center gap-4">
                                <div className="relative h-16 w-16 overflow-hidden rounded-full">
                                  <Image
                                    src={story.image || "/placeholder.svg"}
                                    alt={story.name}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                                <div>
                                  <CardTitle className="text-lg">{story.name}</CardTitle>
                                  <CardDescription className="flex items-center gap-1">
                                    <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                    <span>
                                      {story.exam} {story.rank} ({story.year})
                                    </span>
                                  </CardDescription>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-2">
                              <div className="flex items-start gap-2 mb-4">
                                <Quote className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                <p className="text-sm text-slate-600 dark:text-slate-400 italic">"{story.quote}"</p>
                              </div>
                              <div className="mt-4">
                                <h4 className="text-sm font-semibold text-blue-950 dark:text-white mb-2 flex items-center gap-2">
                                  <Star className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Success Mantra
                                </h4>
                                <ul className="space-y-1">
                                  {story.tips.slice(0, 2).map((tip, i) => (
                                    <li
                                      key={i}
                                      className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-2"
                                    >
                                      <CheckCircle className="h-3 w-3 text-blue-600 dark:text-blue-400 mt-0.5" />
                                      <span>{tip}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                            <CardFooter>
                              <Link href={`/toppers-tales/${story.name.toLowerCase().replace(/\s+/g, "-")}`}>
                                <Button
                                  variant="outline"
                                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                                >
                                  Read Full Story
                                </Button>
                              </Link>
                            </CardFooter>
                          </Card>
                        </FadeIn>
                      ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* Featured Success Story Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
            <div className="container px-4 md:px-6">
              <SectionHeading
                badge="Featured Story"
                title="Journey to Success"
                description="An in-depth look at one of our top achiever's preparation journey"
                className="mb-10"
              />

              <div className="grid gap-8 md:grid-cols-2">
                <FadeIn delay={0.2} direction="left">
                  <div className="relative h-[300px] md:h-full overflow-hidden rounded-lg shadow-lg">
                    <Image src="/young-indian-female-student.png" alt="Priya Singh" fill className="object-cover" />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4} direction="right">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">NEET 2024</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                        AIR 2087
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Priya Singh's NEET Journey</h3>
                    <div className="flex items-start gap-2">
                      <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-600 dark:text-slate-400 italic">
                        "The structured approach and personal mentoring at Ascent Classes helped me crack NEET with a
                        top rank. The faculty's guidance was invaluable throughout my preparation journey."
                      </p>
                    </div>
                    <div className="space-y-2 pt-4">
                      <h4 className="font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" /> Preparation Strategy
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        Coming from a small town, I had limited resources but big dreams. Joining Ascent Classes changed
                        everything for me. The faculty identified my strengths in Biology and helped me improve my
                        Physics and Chemistry. The weekly tests kept me on my toes, and the personalized feedback
                        sessions helped me understand my mistakes.
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" /> Daily Routine
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>6 hours of focused study apart from coaching classes</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>Regular revision of NCERT books</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>30 MCQs practice for each subject daily</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>Weekly full-length mock tests</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/reach-out">
                        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                          Get Guidance Like Priya <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Success Tips Section */}
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <SectionHeading
                badge="Success Mantras"
                title="Tips from Our Toppers"
                description="Valuable advice from students who have achieved their goals"
                className="mb-10"
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <FadeIn delay={0.1} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Consistency is Key</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "Regular study with a fixed schedule is more important than studying for long hours irregularly.
                        I maintained a consistent 6-hour study routine apart from coaching classes."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src="/young-indian-female-student.png"
                            alt="Priya Singh"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Priya Singh, NEET AIR 2087</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Focus on Understanding</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "Don't just memorize concepts; understand them thoroughly. This helped me solve even the
                        trickiest problems in JEE. I always asked 'why' until I fully understood each concept."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/young-indian-male-student.png" alt="Mohit Verma" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Mohit Verma, JEE Main 99.2 Percentile</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Regular Mock Tests</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "Taking regular mock tests helped me identify my weak areas and improve time management. I
                        analyzed each test thoroughly to understand my mistakes and avoid repeating them."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/student-testimonial-1.png" alt="Ankit Sharma" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Ankit Sharma, SBI PO 2024</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Balanced Lifestyle</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "Maintaining a healthy lifestyle with proper sleep, nutrition, and short breaks during study
                        sessions kept me mentally fresh. I also included 30 minutes of physical activity daily."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/student-testimonial-2.png" alt="Ritu Patel" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Ritu Patel, NEET AIR 5432</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.5} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Smart Study Material</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "I focused on quality study material rather than quantity. The comprehensive material provided
                        by Ascent Classes was sufficient. I created short notes for quick revision during the final
                        days."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src="/young-indian-professional-male.png"
                            alt="Rajat Tiwari"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Rajat Tiwari, SSC CGL 2023</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.6} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <CardTitle>Positive Mindset</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-400">
                        "Maintaining a positive mindset throughout the preparation journey is crucial. I surrounded
                        myself with positive people and focused on my progress rather than comparing with others."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/student-testimonial-3.png" alt="Meenal Yadav" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Meenal Yadav, JEE Advanced AIR 8932</span>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* Exam Statistics Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
            <div className="container px-4 md:px-6">
              <SectionHeading
                badge="Our Track Record"
                title="Exam Success Statistics"
                description="A glimpse of our students' achievements in various competitive exams"
                className="mb-10"
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <FadeIn delay={0.1} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">95%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Success Rate in SSC Exams</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">85%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Students Above 90 Percentile in JEE</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">92%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">NEET Qualifiers from Our Institute</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">90%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Banking Exam Selection Rate</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Write Your Own Success Story?
                  </h2>
                  <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Join Ascent Classes today and take the first step towards achieving your dreams.
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
      </div>
    </div>
  )
}
