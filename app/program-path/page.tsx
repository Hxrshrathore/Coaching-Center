import Link from "next/link"
import { ArrowRight, BookOpen, Award, Users, Calendar, BookCheck, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CourseCard } from "@/components/course-card"

export default function ProgramPathPage() {
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
                  Our Programs
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  Program Path
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Explore our specialized courses designed to help you excel in competitive exams
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="ssc" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-3xl grid-cols-2 md:grid-cols-5 bg-blue-50 dark:bg-slate-800">
                  <TabsTrigger value="ssc" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    SSC
                  </TabsTrigger>
                  <TabsTrigger value="bank" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    Bank
                  </TabsTrigger>
                  <TabsTrigger value="jee" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    JEE
                  </TabsTrigger>
                  <TabsTrigger value="neet" className="data-[state=active]:bg-blue-600 data-[state=active]:text-white">
                    NEET
                  </TabsTrigger>
                  <TabsTrigger
                    value="olympiads"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    Olympiads
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ssc" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-950 dark:text-white">
                      SSC Exam Preparation
                    </h2>
                    <p className="max-w-[900px] text-slate-600 dark:text-slate-400">
                      Comprehensive courses for Staff Selection Commission examinations with specialized focus on each
                      paper and section
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="SSC CGL"
                    description="Combined Graduate Level Examination preparation with focus on all four tiers"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    fee="₹15,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC CHSL"
                    description="Combined Higher Secondary Level Examination preparation with comprehensive coverage"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    fee="₹12,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC MTS"
                    description="Multi Tasking Staff Examination preparation with specialized coaching"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    fee="₹10,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC GD Constable"
                    description="General Duty Constable Examination preparation for various forces"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    fee="₹11,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC CPO"
                    description="Central Police Organization Examination preparation with physical training guidance"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    fee="₹14,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC JE"
                    description="Junior Engineer Examination preparation for technical positions"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="5 months"
                    fee="₹18,000"
                    color="blue"
                  />
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-white">SSC Exam Eligibility</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC CGL:</strong> Bachelor's degree from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC CHSL:</strong> 12th standard pass or equivalent
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC MTS:</strong> 10th standard pass from a recognized board
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Varies for different exams (generally 18-30 years with relaxation as
                        per rules)
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="bank" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-950 dark:text-white">
                      Bank Exam Preparation
                    </h2>
                    <p className="max-w-[900px] text-slate-600 dark:text-slate-400">
                      Specialized courses for banking examinations with focus on quantitative aptitude, reasoning,
                      English, and banking awareness
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="IBPS PO"
                    description="Probationary Officer Examination preparation with focus on all three stages"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    fee="₹16,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SBI Clerk"
                    description="State Bank of India Clerk Examination preparation with comprehensive coverage"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    fee="₹13,000"
                    color="blue"
                  />
                  <CourseCard
                    title="RBI Assistant"
                    description="Reserve Bank of India Assistant Examination preparation with specialized coaching"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    fee="₹15,000"
                    color="blue"
                  />
                  <CourseCard
                    title="IBPS Clerk"
                    description="Institute of Banking Personnel Selection Clerk Examination preparation"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    fee="₹12,000"
                    color="blue"
                  />
                  <CourseCard
                    title="SBI PO"
                    description="State Bank of India Probationary Officer Examination preparation"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    fee="₹17,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Bank SO"
                    description="Specialist Officer Examination preparation for technical positions in banks"
                    icon={<BookCheck className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="5 months"
                    fee="₹18,000"
                    color="blue"
                  />
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-white">Bank Exam Eligibility</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>PO Exams:</strong> Bachelor's degree in any discipline from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Clerk Exams:</strong> Bachelor's degree in any discipline from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Specialist Officer:</strong> Relevant professional qualification as per the post
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Generally 20-30 years with relaxation as per rules
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="jee" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-950 dark:text-white">
                      JEE Preparation
                    </h2>
                    <p className="max-w-[900px] text-slate-600 dark:text-slate-400">
                      Comprehensive courses for Joint Entrance Examination with focus on Physics, Chemistry, and
                      Mathematics
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="JEE Main"
                    description="Joint Entrance Examination Main preparation with comprehensive coverage of all subjects"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    fee="₹45,000"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Advanced"
                    description="Joint Entrance Examination Advanced preparation for IIT aspirants"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    fee="₹55,000"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Crash Course"
                    description="Intensive preparation for last-minute revision and practice"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    fee="₹25,000"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Foundation"
                    description="Early preparation for Class 11 students to build strong fundamentals"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="24 months"
                    fee="₹65,000"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Physics Focus"
                    description="Specialized coaching for Physics section with advanced problem solving"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹30,000"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Mathematics Focus"
                    description="Specialized coaching for Mathematics section with advanced problem solving"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹30,000"
                    color="blue"
                  />
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-white">JEE Exam Eligibility</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> 12th standard pass or equivalent with Physics,
                        Chemistry, and Mathematics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>JEE Advanced:</strong> Must qualify JEE Main to be eligible
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Attempt Limit:</strong> Maximum of three attempts for JEE Main and two attempts for JEE
                        Advanced
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Candidates should have been born on or after October 1, 1999 (with
                        relaxation for reserved categories)
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="neet" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-950 dark:text-white">
                      NEET Preparation
                    </h2>
                    <p className="max-w-[900px] text-slate-600 dark:text-slate-400">
                      Comprehensive courses for National Eligibility cum Entrance Test with focus on Biology, Physics,
                      and Chemistry
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="NEET Complete"
                    description="Comprehensive preparation for NEET examination covering all subjects"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    fee="₹50,000"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Biology Focus"
                    description="Specialized preparation for Biology section with in-depth coverage"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹25,000"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Crash Course"
                    description="Intensive preparation for last-minute revision and practice"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    fee="₹30,000"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Foundation"
                    description="Early preparation for Class 11 students to build strong fundamentals"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="24 months"
                    fee="₹70,000"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Physics & Chemistry"
                    description="Focused preparation for Physics and Chemistry sections"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹28,000"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Repeaters"
                    description="Specialized course for students attempting NEET for the second time"
                    icon={<GraduationCap className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="8 months"
                    fee="₹45,000"
                    color="blue"
                  />
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-white">NEET Exam Eligibility</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> 12th standard pass or equivalent with Physics,
                        Chemistry, and Biology/Biotechnology
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Minimum Marks:</strong> 50% aggregate in PCB for general category (40% for reserved
                        categories)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Minimum 17 years as on December 31 of the year of admission
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Attempt Limit:</strong> No limit on the number of attempts
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="olympiads" className="space-y-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-blue-950 dark:text-white">
                      Olympiad Preparation
                    </h2>
                    <p className="max-w-[900px] text-slate-600 dark:text-slate-400">
                      Specialized courses for national and international Olympiads to nurture exceptional talent
                    </p>
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="Mathematics Olympiad"
                    description="Preparation for national and international Mathematics Olympiads"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹20,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Science Olympiad"
                    description="Preparation for national and international Science Olympiads"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹20,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Informatics Olympiad"
                    description="Preparation for national and international Informatics Olympiads"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹22,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Physics Olympiad"
                    description="Specialized preparation for Physics Olympiad with advanced problem solving"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹21,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Chemistry Olympiad"
                    description="Specialized preparation for Chemistry Olympiad with practical training"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹21,000"
                    color="blue"
                  />
                  <CourseCard
                    title="Astronomy Olympiad"
                    description="Specialized preparation for Astronomy Olympiad with observational training"
                    icon={<Award className="h-10 w-10 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    fee="₹23,000"
                    color="blue"
                  />
                </div>

                <div className="mt-8 p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-xl font-bold mb-4 text-blue-950 dark:text-white">Olympiad Eligibility</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> Students from Class 8 to Class 12 (varies for
                        different Olympiads)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Selection Process:</strong> Multiple stages including school level, regional level,
                        national level, and international level
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Generally below 20 years and not enrolled in university education
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Exceptional Talent:</strong> Students with exceptional aptitude and interest in the
                        subject are encouraged to apply
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Teaching Methodology Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Approach
                </Badge>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Teaching Methodology
                </h2>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Our unique approach to preparing students for competitive exams
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Concept-Based Learning</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We focus on building strong conceptual understanding rather than rote memorization, enabling
                    students to tackle any type of question.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Personalized Attention</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Small batch sizes ensure that each student receives individual attention and guidance from our
                    expert faculty members.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Regular Assessment</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Weekly tests and monthly mock exams help students track their progress and identify areas for
                    improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <BookCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Comprehensive Study Material</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Our meticulously designed study materials cover the entire syllabus with additional practice
                    questions and previous year papers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Doubt Clearing Sessions</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Regular doubt clearing sessions ensure that no concept remains unclear, building a strong foundation
                    for advanced topics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 dark:text-white">Performance Analytics</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Detailed performance analytics help students understand their strengths and weaknesses, enabling
                    targeted improvement.
                  </p>
                </CardContent>
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
                  Ready to Begin Your Success Journey?
                </h2>
                <p className="max-w-[900px] text-blue-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take the first step towards academic excellence. Join Toppers Maker today and transform your
                  preparation strategy.
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
