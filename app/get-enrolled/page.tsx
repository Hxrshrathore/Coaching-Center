import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Calendar, Clock, CreditCard, GraduationCap, BookOpen, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/ui/section-heading"
import { FadeIn } from "@/components/animations/fade-in"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StaticFormHandler } from "@/components/ui/static-form-handler"

export default function GetEnrolledPage() {
  // Enrollment steps data
  const enrollmentSteps = [
    {
      title: "Choose Your Program",
      description: "Select the program that aligns with your academic goals and aspirations.",
      icon: <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Fill Enrollment Form",
      description: "Complete the enrollment form with your personal and academic details.",
      icon: <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Counseling Session",
      description: "Schedule a counseling session with our academic experts.",
      icon: <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Assessment Test",
      description: "Take a brief assessment test to help us understand your current knowledge level.",
      icon: <CheckCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Complete Admission",
      description: "Complete the admission formalities and join our community of achievers.",
      icon: <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "What documents are required for enrollment?",
      answer:
        "You'll need to provide your ID proof, address proof, recent passport-sized photographs, and previous academic records. For specific courses, additional documents may be required which will be communicated during the counseling session.",
    },
    {
      question: "Are there any scholarships available?",
      answer:
        "Yes, we offer merit-based scholarships for deserving students. Scholarships are awarded based on performance in our scholarship test or based on previous academic records. Special scholarships are also available for students from economically weaker sections.",
    },
    {
      question: "Can I switch programs after enrollment?",
      answer:
        "Yes, you can switch programs within the first month of enrollment, subject to seat availability and eligibility criteria. A nominal administrative fee may be applicable for program changes.",
    },
    {
      question: "What is the fee refund policy?",
      answer:
        "We offer a 100% refund if withdrawal is requested within 7 days of enrollment. After that, a pro-rata refund is provided based on the number of classes attended. Please note that the registration fee is non-refundable.",
    },
    {
      question: "Do you offer installment payment options?",
      answer:
        "Yes, we offer flexible payment options including monthly, quarterly, and half-yearly installments. The installment plans are available with a nominal processing fee. Details can be discussed during the counseling session.",
    },
    {
      question: "What is the batch size for each program?",
      answer:
        "We maintain small batch sizes to ensure personalized attention. Depending on the program, our batch sizes range from 15 to 30 students. This helps our faculty members provide individual attention to each student.",
    },
  ]

  // Program data
  const programs = [
    {
      title: "SSC & Banking",
      description: "Comprehensive preparation for SSC, Bank PO, and Clerk exams",
      features: ["Expert faculty", "Regular mock tests", "Current affairs updates", "Interview preparation"],
      duration: "4-6 months",
      batchSize: "25 students",
      batchTiming: "Morning & Evening batches",
    },
    {
      title: "JEE (Main + Advanced)",
      description: "Intensive coaching for JEE Main and Advanced examinations",
      features: ["Concept-based learning", "Problem-solving techniques", "Regular doubt clearing", "Test series"],
      duration: "12 months",
      batchSize: "20 students",
      batchTiming: "Morning & Evening batches",
    },
    {
      title: "NEET Preparation",
      description: "Specialized coaching for NEET aspirants with focus on Biology, Physics, and Chemistry",
      features: ["Comprehensive study material", "Regular tests", "NCERT-based preparation", "Previous year analysis"],
      duration: "12 months",
      batchSize: "20 students",
      batchTiming: "Morning & Evening batches",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 dark:bg-blue-900 dark:text-blue-300">
                  Join Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  Get Enrolled Today!
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  Start your journey towards a brighter future with our comprehensive courses. Enroll now and take the
                  first step towards achieving your dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="How It Works"
              title="Enrollment Process"
              description="Simple steps to join Ascent Classes and begin your success journey"
              className="mb-10"
            />

            <div className="grid gap-6 md:grid-cols-5">
              {enrollmentSteps.map((step, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          {step.icon}
                          <span className="sr-only">{step.title}</span>
                        </div>
                      </div>
                      <CardTitle className="text-center text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Ready to begin your journey with Ascent Classes? Fill out the enrollment form below or contact us for
                more information.
              </p>
              <Link href="#enrollment-form">
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  Start Enrollment <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Our Programs"
              title="Choose Your Program"
              description="Explore our specialized programs designed to help you excel in competitive exams"
              className="mb-10"
            />

            <Tabs defaultValue="ssc" className="w-full">
              <div className="flex justify-center mb-8 overflow-x-auto pb-2 md:pb-0">
                <TabsList className="grid min-w-[300px] grid-cols-3 bg-white dark:bg-slate-800">
                  <Link href="/program-path/ssc-banking">
                    <TabsTrigger
                      value="ssc"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      SSC & Banking
                    </TabsTrigger>
                  </Link>
                  <Link href="/program-path/jee">
                    <TabsTrigger
                      value="jee"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      JEE
                    </TabsTrigger>
                  </Link>
                  <Link href="/program-path/neet">
                    <TabsTrigger
                      value="neet"
                      className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      NEET
                    </TabsTrigger>
                  </Link>
                </TabsList>
              </div>

              {programs.map((program, index) => (
                <TabsContent key={index} value={program.title.toLowerCase().split(" ")[0]}>
                  <div className="grid gap-8 md:grid-cols-2">
                    <FadeIn delay={0.2} direction="left">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-950 dark:text-white">{program.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{program.description}</p>
                        <div className="space-y-2 pt-4">
                          <h4 className="font-semibold text-blue-950 dark:text-white">Program Features</h4>
                          <ul className="space-y-2">
                            {program.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-slate-600 dark:text-slate-400">
                                <CheckCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                              <Clock className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Duration
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{program.duration}</p>
                          </div>
                          <div className="space-y-1">
                            <h4 className="text-sm font-semibold text-blue-950 dark:text-white flex items-center gap-2">
                              <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" /> Batch Timing
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400">{program.batchTiming}</p>
                          </div>
                        </div>
                        <div className="pt-4">
                          <Link href="#enrollment-form">
                            <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                              Enroll Now <ArrowRight className="h-4 w-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </FadeIn>
                    <FadeIn delay={0.4} direction="right">
                      <div className="relative h-[300px] md:h-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          src={
                            index === 0 ? "/carousel-ssc.png" : index === 1 ? "/carousel-jee.png" : "/carousel-neet.png"
                          }
                          alt={program.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </FadeIn>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Enrollment Form Section */}
        <section id="enrollment-form" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Join Us"
              title="Enrollment Form"
              description="Fill out the form below to start your enrollment process"
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.2} direction="left">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                    <CardDescription>Please provide your personal details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <StaticFormHandler
                      formId="enrollment-form"
                      formName="enrollment-form"
                      submitButtonText="Submit Enrollment"
                      successMessage="Thank you for your enrollment! Our team will contact you shortly."
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" name="first-name" placeholder="Enter your first name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" name="last-name" placeholder="Enter your last name" required />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input type="email" id="email" name="email" placeholder="Enter your email address" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <Textarea id="address" name="address" placeholder="Enter your address" rows={3} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">Current Education</Label>
                        <Select name="education">
                          <SelectTrigger>
                            <SelectValue placeholder="Select your current education" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="10th">10th Standard</SelectItem>
                            <SelectItem value="12th">12th Standard</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="postgraduate">Post Graduate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="school">School/College Name</Label>
                        <Input id="school" name="school" placeholder="Enter your school/college name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course">Select Course</Label>
                        <Select name="course">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose a course" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ssc-cgl">SSC CGL</SelectItem>
                            <SelectItem value="bank-po">Bank PO</SelectItem>
                            <SelectItem value="jee-main">JEE Main</SelectItem>
                            <SelectItem value="jee-advanced">JEE Advanced</SelectItem>
                            <SelectItem value="neet">NEET</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="batch">Preferred Batch</Label>
                        <Select name="batch">
                          <SelectTrigger>
                            <SelectValue placeholder="Choose preferred batch" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning Batch (8:00 AM - 11:00 AM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon Batch (12:00 PM - 3:00 PM)</SelectItem>
                            <SelectItem value="evening">Evening Batch (4:00 PM - 7:00 PM)</SelectItem>
                            <SelectItem value="weekend">Weekend Batch</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Additional Information</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Any additional information you'd like to share"
                          rows={3}
                        />
                      </div>
                    </StaticFormHandler>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>What to Expect</CardTitle>
                    <CardDescription>After submitting your enrollment form</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <CheckCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Confirmation Email</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            You'll receive a confirmation email with your enrollment details.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <Calendar className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Counseling Session</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Our team will contact you to schedule a counseling session.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Assessment Test</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            You'll be invited to take an assessment test to evaluate your current knowledge level.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold">Final Admission</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Complete the admission formalities and join our community of achievers.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Scholarship Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Financial Aid"
              title="Scholarship Opportunities"
              description="We believe that financial constraints should not hinder quality education"
              className="mb-10"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>Merit Scholarship</CardTitle>
                    </div>
                    <CardDescription>Based on academic performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      Students with exceptional academic records can avail up to 50% scholarship on tuition fees.
                      Eligibility is determined based on previous academic performance or our scholarship test.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">90% and above:</span>
                        <span className="font-medium">50% scholarship</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">80% - 89%:</span>
                        <span className="font-medium">30% scholarship</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">70% - 79%:</span>
                        <span className="font-medium">15% scholarship</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/scholarships">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                      >
                        Apply for Scholarship
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>Financial Need Scholarship</CardTitle>
                    </div>
                    <CardDescription>Based on financial background</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      We offer scholarships to deserving students from economically weaker sections. The scholarship
                      amount is determined based on the financial background and academic potential of the student.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Documentation:</span>
                        <span className="font-medium">Income certificate</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Scholarship amount:</span>
                        <span className="font-medium">Up to 70%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Renewal:</span>
                        <span className="font-medium">Based on performance</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/scholarships">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                      >
                        Apply for Scholarship
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>Special Category Scholarship</CardTitle>
                    </div>
                    <CardDescription>For special categories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      We offer special scholarships for students from special categories including girls, differently
                      abled students, and children of defense personnel, farmers, and single parents.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Girl students:</span>
                        <span className="font-medium">10% additional</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Differently abled:</span>
                        <span className="font-medium">25% scholarship</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Defense personnel:</span>
                        <span className="font-medium">15% scholarship</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Link href="/scholarships">
                      <Button
                        variant="outline"
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                      >
                        Apply for Scholarship
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Fee Structure"
              title="Flexible Payment Options"
              description="We offer various payment options to make quality education accessible to all"
              className="mb-10"
            />

            <div className="grid gap-6 md:grid-cols-3">
              <FadeIn delay={0.1} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>One-Time Payment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      Pay the entire course fee at once and get a 5% discount on the total amount. This is the most
                      economical option for those who can afford it.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Discount:</span>
                        <span className="font-medium">5% on total fee</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Payment methods:</span>
                        <span className="font-medium">Cash, Card, UPI</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>Installment Plan</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      Pay the course fee in easy installments. We offer monthly, quarterly, and half-yearly installment
                      options with minimal processing fees.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Monthly:</span>
                        <span className="font-medium">3% processing fee</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Quarterly:</span>
                        <span className="font-medium">2% processing fee</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Half-yearly:</span>
                        <span className="font-medium">1% processing fee</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      <CardTitle>EMI Options</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 dark:text-slate-400">
                      We have partnered with leading banks and financial institutions to offer EMI options with 0%
                      interest. This allows you to pay in easy monthly installments without any additional cost.
                    </p>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Interest rate:</span>
                        <span className="font-medium">0% (No cost EMI)</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Tenure:</span>
                        <span className="font-medium">3, 6, 9, 12 months</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600 dark:text-slate-400">Documentation:</span>
                        <span className="font-medium">Minimal</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Questions & Answers"
              title="Frequently Asked Questions"
              description="Find answers to common questions about enrollment and admission"
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.2} direction="left">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.slice(0, 3).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left font-medium text-blue-950 dark:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 dark:text-slate-400">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <Accordion type="single" collapsible className="w-full">
                  {faqs.slice(3, 6).map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 3}`}>
                      <AccordionTrigger className="text-left font-medium text-blue-950 dark:text-white">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600 dark:text-slate-400">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </FadeIn>
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Still have questions? Feel free to reach out to us directly.
              </p>
              <Link href="/reach-out">
                <Button
                  variant="outline"
                  className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                >
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
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
                  Take the first step towards academic excellence. Join Ascent Classes today and transform your
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
    </div>
  )
}
