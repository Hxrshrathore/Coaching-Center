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
  title: "Toppers' Tales | Ascent Coaching Classes",
  description:
    "Success stories and testimonials from our top-performing students who achieved excellence with Ascent Coaching Classes.",
}

export default function ToppersTales() {
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Toppers' Tales", href: "/toppers-tales" },
  ]

  // Success stories data
  const successStories = [
    {
      name: "Nikhil Yadav",
      exam: "Class 10, ICSE",
      rank: "94.2%",
      year: "2024",
      image: "/young-indian-male-student.png",
      quote:
        "The structured approach and personal mentoring at Ascent Coaching Classes helped me achieve excellent results. The faculty's guidance was invaluable throughout my preparation journey.",
      tips: [
        "Consistency is key - study at least 4 hours daily",
        "Focus on NCERT books first, then move to reference materials",
        "Regular revision of previous topics is crucial",
        "Practice at least 20 questions daily for each subject",
      ],
      story:
        "With the support of Ascent Coaching Classes, I was able to maintain a disciplined study routine. The weekly tests kept me on my toes, and the personalized feedback sessions helped me understand my mistakes. I'm grateful for the guidance provided by all my teachers.",
    },
    {
      name: "Madhur",
      exam: "Class 12, UP Board",
      rank: "87%, JEE Mains Qualified (1 & 2)",
      year: "2024",
      image: "/young-indian-male-student.png",
      quote:
        "Joining Ascent Coaching Classes was the best decision I made. The faculty's expertise and regular mock tests helped me secure good marks and qualify for JEE Mains.",
      tips: [
        "Balance board exam preparation with JEE preparation",
        "Solve previous year papers extensively",
        "Time management during the exam is crucial",
        "Focus on accuracy rather than attempting all questions",
      ],
      story:
        "Preparing for both board exams and JEE Mains was challenging, but the structured approach at Ascent Coaching Classes made it manageable. The specialized coaching for JEE helped me qualify in both attempts. I'm now looking forward to pursuing engineering at a good college.",
    },
    {
      name: "Rishabh",
      exam: "Class 12, ISC",
      rank: "85%",
      year: "2024",
      image: "/student-testimonial-3.png",
      quote:
        "The coaching at Ascent Coaching Classes is exceptional. The problem-solving techniques and conceptual clarity provided by the teachers helped me score well in my ISC exams.",
      tips: [
        "Understand concepts thoroughly instead of memorizing",
        "Solve a variety of problems for each concept",
        "Maintain a separate notebook for formulas and revise daily",
        "Take regular breaks during study sessions to maintain focus",
      ],
      story:
        "The faculty at Ascent Coaching Classes helped me overcome my challenges with certain subjects. Their unique approach to problem-solving and the way they explained complex concepts made a huge difference. The doubt-clearing sessions were available whenever I needed them.",
    },
    {
      name: "Deepansh Srivastava",
      exam: "Class 12, UP Board",
      rank: "87%",
      year: "2024",
      image: "/young-indian-professional-male.png",
      quote:
        "The preparation at Ascent Coaching Classes is comprehensive and focused. The regular tests and personalized feedback were particularly helpful in achieving my goals.",
      tips: [
        "Practice numerical problems daily",
        "Read textbooks thoroughly",
        "Take sectional tests to improve speed and accuracy",
        "Group study for difficult topics is effective",
      ],
      story:
        "The career counseling at Ascent Coaching Classes helped me decide on my future path. Their specialized coaching with focus on all subjects was comprehensive. The mock tests with detailed analysis gave me confidence for the final exams.",
    },
    {
      name: "Shaurya Saxena",
      exam: "Class 10, ICSE",
      rank: "96%",
      year: "2024",
      image: "/student-testimonial-1.png",
      quote:
        "The faculty at Ascent Coaching Classes is outstanding. Their approach to teaching complex concepts made my preparation much easier and effective.",
      tips: [
        "Create short notes for quick revision",
        "Use mnemonics for remembering complex terms",
        "Solve at least 2 full-length papers every week",
        "Maintain a healthy lifestyle with proper sleep and nutrition",
      ],
      story:
        "Ascent Coaching Classes became my second home where teachers not only taught me subjects but also life skills. The study material was comprehensive and easy to understand. The regular motivational sessions kept me going during tough times.",
    },
    {
      name: "Rohit Paul",
      exam: "Class 10",
      rank: "93%",
      year: "2024",
      image: "/student-testimonial-3.png",
      quote:
        "The problem-solving techniques taught at Ascent Coaching Classes helped me tackle even the toughest questions. Highly recommended for serious students.",
      tips: [
        "Focus on building strong fundamentals",
        "Solve a variety of problems rather than repeating similar ones",
        "Analyze mistakes after each mock test",
        "Maintain a positive mindset throughout the preparation",
      ],
      story:
        "I joined Ascent Coaching Classes in Class 9, and it was the best decision. The faculty's approach to teaching made me fall in love with the subjects. The way they connected theoretical concepts with real-world applications made learning enjoyable. The competitive environment pushed me to give my best.",
    },
    {
      name: "Ayushi Dubey",
      exam: "Class 12, CBSE",
      rank: "86%",
      year: "2024",
      image: "/young-indian-female-student.png",
      quote:
        "The structured approach and regular tests at Ascent Coaching Classes helped me achieve good marks in my CBSE exams. The teachers were always available to clear doubts.",
      tips: [
        "Make a proper study schedule and stick to it",
        "Focus on NCERT books for CBSE exams",
        "Practice previous year papers",
        "Take short breaks between study sessions",
      ],
      story:
        "The personalized attention at Ascent Coaching Classes helped me overcome my weaknesses in certain subjects. The regular tests and feedback sessions were instrumental in my preparation. I'm thankful to all my teachers for their guidance and support.",
    },
    {
      name: "Insha",
      exam: "Class 12, CBSE",
      rank: "83%",
      year: "2024",
      image: "/student-testimonial-2.png",
      quote:
        "The faculty at Ascent Coaching Classes is very supportive and knowledgeable. Their guidance helped me score well in my CBSE exams.",
      tips: [
        "Regular revision is key to success",
        "Solve sample papers to improve time management",
        "Focus on understanding concepts rather than rote learning",
        "Stay positive and confident",
      ],
      story:
        "The teachers at Ascent Coaching Classes provided excellent guidance throughout my preparation. Their teaching methodology and study material were very helpful. The regular tests and feedback helped me identify my weak areas and work on them.",
    },
    {
      name: "Abhichal Verma",
      exam: "Class 10",
      rank: "87%",
      year: "2024",
      image: "/young-indian-male-student.png",
      quote:
        "The coaching at Ascent Coaching Classes helped me build a strong foundation. The teachers are very experienced and provide excellent guidance.",
      tips: ["Focus on fundamentals", "Practice regularly", "Revise topics frequently", "Solve previous year papers"],
      story:
        "The teaching methodology at Ascent Coaching Classes is very effective. The teachers explain concepts clearly and provide ample practice material. The regular tests helped me assess my preparation level and work on my weaknesses.",
    },
    {
      name: "Shashwat Singh",
      exam: "Class 12, ISC",
      rank: "88%",
      year: "2024",
      image: "/student-testimonial-3.png",
      quote:
        "The faculty at Ascent Coaching Classes is excellent. Their guidance and support helped me score well in my ISC exams.",
      tips: [
        "Create a proper study plan",
        "Focus on understanding concepts",
        "Practice regularly",
        "Stay motivated and positive",
      ],
      story:
        "The personalized attention and regular feedback at Ascent Coaching Classes helped me improve my performance. The study material and practice tests were very helpful in my preparation. I'm grateful to all my teachers for their support and guidance.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12 pt-28">
      <Breadcrumbs items={breadcrumbItems} />

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
                    Coaching Classes
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
                  <TabsList className="grid min-w-[300px] grid-cols-3 bg-blue-50 dark:bg-slate-800">
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
                    <Image src="/young-indian-male-student.png" alt="Nikhil Yadav" fill className="object-cover" />
                  </div>
                </FadeIn>
                <FadeIn delay={0.4} direction="right">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-700">ICSE 2024</Badge>
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                        94.2%
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Nikhil Yadav's Success Journey</h3>
                    <div className="flex items-start gap-2">
                      <Quote className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                      <p className="text-slate-600 dark:text-slate-400 italic">
                        "The structured approach and personal mentoring at Ascent Coaching Classes helped me achieve
                        excellent results. The faculty's guidance was invaluable throughout my preparation journey."
                      </p>
                    </div>
                    <div className="space-y-2 pt-4">
                      <h4 className="font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" /> Preparation Strategy
                      </h4>
                      <p className="text-slate-600 dark:text-slate-400">
                        With the support of Ascent Coaching Classes, I was able to maintain a disciplined study routine.
                        The weekly tests kept me on my toes, and the personalized feedback sessions helped me understand
                        my mistakes. I'm grateful for the guidance provided by all my teachers.
                      </p>
                    </div>
                    <div className="space-y-2 pt-2">
                      <h4 className="font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" /> Daily Routine
                      </h4>
                      <ul className="space-y-1">
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>4 hours of focused study apart from coaching classes</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>Regular revision of textbooks</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>20 practice questions for each subject daily</span>
                        </li>
                        <li className="text-slate-600 dark:text-slate-400 flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
                          <span>Weekly full-length mock tests</span>
                        </li>
                      </ul>
                    </div>
                    <div className="pt-4">
                      <Link href="/reach-out">
                        <Button variant="blue" className="gap-2">
                          Get Guidance Like Nikhil <ArrowRight className="h-4 w-4" />
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
                        I maintained a consistent 4-hour study routine apart from coaching classes."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image
                            src="/young-indian-male-student.png"
                            alt="Nikhil Yadav"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Nikhil Yadav, ICSE 94.2%</span>
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
                        trickiest problems. I always asked 'why' until I fully understood each concept."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/young-indian-male-student.png" alt="Madhur" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Madhur, UP Board 87%, JEE Qualified</span>
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
                          <Image src="/student-testimonial-1.png" alt="Shaurya Saxena" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Shaurya Saxena, ICSE 96%</span>
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
                          <Image
                            src="/young-indian-female-student.png"
                            alt="Ayushi Dubey"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Ayushi Dubey, CBSE 86%</span>
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
                        by Ascent Coaching Classes was sufficient. I created short notes for quick revision during the
                        final days."
                      </p>
                      <div className="mt-4 flex items-center gap-2">
                        <div className="relative h-8 w-8 overflow-hidden rounded-full">
                          <Image src="/student-testimonial-3.png" alt="Rishabh" fill className="object-cover" />
                        </div>
                        <span className="text-sm font-medium">Rishabh, ISC 85%</span>
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
                          <Image
                            src="/young-indian-professional-male.png"
                            alt="Deepansh Srivastava"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium">Deepansh Srivastava, UP Board 87%</span>
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
                description="A glimpse of our students' achievements in various board exams"
                className="mb-10"
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <FadeIn delay={0.1} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">96%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Highest Score in ICSE (Shaurya)</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">88%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Highest Score in ISC (Shashwat)</p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">87%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Highest Score in UP Board (Madhur & Deepansh)
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.4} direction="up">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-3xl font-bold text-blue-950 dark:text-white">86%</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Highest Score in CBSE (Ayushi)</p>
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
                    Join Ascent Coaching Classes today and take the first step towards achieving your dreams.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/get-enrolled">
                    <Button size="lg" variant="white-blue" className="gap-1">
                      Enroll Now <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/reach-out">
                    <Button size="lg" variant="outline-white">
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
