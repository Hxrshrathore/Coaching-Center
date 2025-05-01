import Link from "next/link"
import { ArrowRight, BookOpen, Award, Users, Calendar, BookCheck, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CourseCard } from "@/components/course-card"
import { SectionHeading } from "@/components/ui/section-heading"

export default function ProgramPathPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Our Programs
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-950 dark:text-white">
                  Program Path
                </h1>
                <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
                  Explore our specialized courses designed to help you excel in competitive exams
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course Categories Section */}
        <section className="w-full py-8 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="ssc" className="w-full">
              <div className="flex justify-center mb-6 md:mb-8 overflow-x-auto pb-2 md:pb-0">
                <TabsList className="grid min-w-[300px] grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-blue-50 dark:bg-slate-800">
                  <TabsTrigger
                    value="ssc"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    SSC
                  </TabsTrigger>
                  <TabsTrigger
                    value="bank"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    Bank
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
                    value="olympiads"
                    className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                  >
                    Olympiads
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="ssc" className="space-y-6 md:space-y-8">
                <SectionHeading
                  title="SSC Exam Preparation"
                  description="Comprehensive courses for Staff Selection Commission examinations with specialized focus on each paper and section"
                  className="mb-6 md:mb-8"
                />

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="SSC CGL"
                    description="Combined Graduate Level Examination preparation with focus on all four tiers"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC CHSL"
                    description="Combined Higher Secondary Level Examination preparation with comprehensive coverage"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC MTS"
                    description="Multi Tasking Staff Examination preparation with specialized coaching"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC GD Constable"
                    description="General Duty Constable Examination preparation for various forces"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC CPO"
                    description="Central Police Organization Examination preparation with physical training guidance"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SSC JE"
                    description="Junior Engineer Examination preparation for technical positions"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="5 months"
                    color="blue"
                  />
                </div>

                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-950 dark:text-white">
                    SSC Exam Eligibility
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC CGL:</strong> Bachelor's degree from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC CHSL:</strong> 12th standard pass or equivalent
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>SSC MTS:</strong> 10th standard pass from a recognized board
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Varies for different exams (generally 18-30 years with relaxation as
                        per rules)
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="bank" className="space-y-6 md:space-y-8">
                <SectionHeading
                  title="Bank Exam Preparation"
                  description="Specialized courses for banking examinations with focus on quantitative aptitude, reasoning, English, and banking awareness"
                  className="mb-6 md:mb-8"
                />

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="IBPS PO"
                    description="Probationary Officer Examination preparation with focus on all three stages"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SBI Clerk"
                    description="State Bank of India Clerk Examination preparation with comprehensive coverage"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    color="blue"
                  />
                  <CourseCard
                    title="RBI Assistant"
                    description="Reserve Bank of India Assistant Examination preparation with specialized coaching"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    color="blue"
                  />
                  <CourseCard
                    title="IBPS Clerk"
                    description="Institute of Banking Personnel Selection Clerk Examination preparation"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="3 months"
                    color="blue"
                  />
                  <CourseCard
                    title="SBI PO"
                    description="State Bank of India Probationary Officer Examination preparation"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="4 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Bank SO"
                    description="Specialist Officer Examination preparation for technical positions in banks"
                    icon={<BookCheck className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="5 months"
                    color="blue"
                  />
                </div>

                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-950 dark:text-white">
                    Bank Exam Eligibility
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>PO Exams:</strong> Bachelor's degree in any discipline from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Clerk Exams:</strong> Bachelor's degree in any discipline from a recognized university
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Specialist Officer:</strong> Relevant professional qualification as per the post
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Generally 20-30 years with relaxation as per rules
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="jee" className="space-y-6 md:space-y-8">
                <SectionHeading
                  title="JEE Preparation"
                  description="Comprehensive courses for Joint Entrance Examination with focus on Physics, Chemistry, and Mathematics"
                  className="mb-6 md:mb-8"
                />

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="JEE Main"
                    description="Joint Entrance Examination Main preparation with comprehensive coverage of all subjects"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Advanced"
                    description="Joint Entrance Examination Advanced preparation for IIT aspirants"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Crash Course"
                    description="Intensive preparation for last-minute revision and practice"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Foundation"
                    description="Early preparation for Class 11 students to build strong fundamentals"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="24 months"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Physics Focus"
                    description="Specialized coaching for Physics section with advanced problem solving"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="JEE Mathematics Focus"
                    description="Specialized coaching for Mathematics section with advanced problem solving"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                </div>

                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-950 dark:text-white">
                    JEE Exam Eligibility
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> 12th standard pass or equivalent with Physics,
                        Chemistry, and Mathematics
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>JEE Advanced:</strong> Must qualify JEE Main to be eligible
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Attempt Limit:</strong> Maximum of three attempts for JEE Main and two attempts for JEE
                        Advanced
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Candidates should have been born on or after October 1, 1999 (with
                        relaxation for reserved categories)
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="neet" className="space-y-6 md:space-y-8">
                <SectionHeading
                  title="NEET Preparation"
                  description="Comprehensive courses for National Eligibility cum Entrance Test with focus on Biology, Physics, and Chemistry"
                  className="mb-6 md:mb-8"
                />

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="NEET Complete"
                    description="Comprehensive preparation for NEET examination covering all subjects"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="12 months"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Biology Focus"
                    description="Specialized preparation for Biology section with in-depth coverage"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Crash Course"
                    description="Intensive preparation for last-minute revision and practice"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="2 months"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Foundation"
                    description="Early preparation for Class 11 students to build strong fundamentals"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="24 months"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Physics & Chemistry"
                    description="Focused preparation for Physics and Chemistry sections"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="NEET Repeaters"
                    description="Specialized course for students attempting NEET for the second time"
                    icon={<GraduationCap className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="8 months"
                    color="blue"
                  />
                </div>

                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-950 dark:text-white">
                    NEET Exam Eligibility
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> 12th standard pass or equivalent with Physics,
                        Chemistry, and Biology/Biotechnology
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Minimum Marks:</strong> 50% aggregate in PCB for general category (40% for reserved
                        categories)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Minimum 17 years as on December 31 of the year of admission
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Attempt Limit:</strong> No limit on the number of attempts
                      </span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="olympiads" className="space-y-6 md:space-y-8">
                <SectionHeading
                  title="Olympiad Preparation"
                  description="Specialized courses for national and international Olympiads to nurture exceptional talent"
                  className="mb-6 md:mb-8"
                />

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="Mathematics Olympiad"
                    description="Preparation for national and international Mathematics Olympiads"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Science Olympiad"
                    description="Preparation for national and international Science Olympiads"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Informatics Olympiad"
                    description="Preparation for national and international Informatics Olympiads"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Physics Olympiad"
                    description="Specialized preparation for Physics Olympiad with advanced problem solving"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Chemistry Olympiad"
                    description="Specialized preparation for Chemistry Olympiad with practical training"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                  <CourseCard
                    title="Astronomy Olympiad"
                    description="Specialized preparation for Astronomy Olympiad with observational training"
                    icon={<Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />}
                    duration="6 months"
                    color="blue"
                  />
                </div>

                <div className="mt-6 md:mt-8 p-4 sm:p-6 bg-blue-50 rounded-lg dark:bg-slate-800">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-blue-950 dark:text-white">
                    Olympiad Eligibility
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Educational Qualification:</strong> Students from Class 8 to Class 12 (varies for
                        different Olympiads)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Selection Process:</strong> Multiple stages including school level, regional level,
                        national level, and international level
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
                      <span>
                        <strong>Age Limit:</strong> Generally below 20 years and not enrolled in university education
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 mt-0.5 dark:text-blue-400" />
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
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Our Approach"
              title="Teaching Methodology"
              description="Our unique approach to preparing students for competitive exams"
              className="mb-6 md:mb-10"
            />

            <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">Concept-Based Learning</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    We focus on building strong conceptual understanding rather than rote memorization, enabling
                    students to tackle any type of question.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">Personalized Attention</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Small batch sizes ensure that each student receives individual attention and guidance from our
                    expert faculty members.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">Regular Assessment</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Weekly tests and monthly mock exams help students track their progress and identify areas for
                    improvement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <BookCheck className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">
                    Comprehensive Study Material
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Our meticulously designed study materials cover the entire syllabus with additional practice
                    questions and previous year papers.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">
                    Doubt Clearing Sessions
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Regular doubt clearing sessions ensure that no concept remains unclear, building a strong foundation
                    for advanced topics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white">Performance Analytics</h3>
                  <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                    Detailed performance analytics help students understand their strengths and weaknesses, enabling
                    targeted improvement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 md:py-16 lg:py-24 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to Begin Your Success Journey?
                </h2>
                <p className="max-w-[900px] text-sm sm:text-base md:text-lg text-blue-100">
                  Take the first step towards academic excellence. Join Toppers Maker today and transform your
                  preparation strategy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/get-enrolled" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto gap-1 bg-white text-blue-600 hover:bg-blue-50">
                    Enroll Now <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/reach-out" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-blue-200 text-blue-400 hover:bg-blue-700 hover:text-white"
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
  )
}
