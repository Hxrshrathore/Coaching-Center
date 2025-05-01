import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Share2,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
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
import { StaticFormHandler } from "@/components/ui/static-form-handler"
import { generatePageMetadata } from "@/components/seo/page-seo"
import { StructuredData } from "@/components/seo/structured-data"

// SEO Metadata
export const metadata = generatePageMetadata({
  title: "Contact Ascent Coaching Classes | Reach Out to Our Team",
  description:
    "Contact Ascent Coaching Classes in Lucknow for admission inquiries, course information, or general questions. Our team is ready to assist you with your educational journey.",
  keywords: [
    "contact coaching classes",
    "coaching institute contact",
    "Ascent Coaching Classes contact",
    "Lucknow coaching contact",
    "JEE coaching contact",
    "NEET coaching contact",
    "SSC coaching contact",
  ],
  canonicalUrl: "/reach-out/",
})

export default function ReachOutPage() {
  // Contact methods data
  const contactMethods = [
    {
      title: "Phone",
      description: "Call us directly for immediate assistance",
      icon: <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      contact: "+91 9565292454",
      action: "Call Now",
      link: "tel:+919565292454",
    },
    {
      title: "Email",
      description: "Send us an email for detailed inquiries",
      icon: <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      contact: "ascentcoachingclasses.lko@gmail.com",
      action: "Email Us",
      link: "mailto:ascentcoachingclasses.lko@gmail.com",
    },
    {
      title: "Visit Us",
      description: "Come to our center for in-person discussion",
      icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
      contact: "Dayal Residency, A-300B, Vasundhara State, Chinhat, Ganeshpur Rahmanpur, Lucknow, UP 226028",
      action: "Get Directions",
      link: "https://maps.google.com/?q=Dayal+Residency+Chinhat+Lucknow",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "What are your office hours?",
      answer:
        "Our office is open from Monday to Sunday, 8:00 AM to 8:00 PM. Our counselors are available during these hours for any inquiries or guidance.",
    },
    {
      question: "How quickly can I expect a response to my inquiry?",
      answer:
        "We typically respond to email inquiries within 24 hours. For phone calls, our team is available during office hours to assist you immediately. For urgent matters, we recommend calling us directly.",
    },
    {
      question: "Can I schedule a visit to tour the facilities?",
      answer:
        "We welcome prospective students and parents to visit our facilities. You can schedule a tour by calling us or filling out the contact form on this page. We recommend scheduling at least a day in advance.",
    },
    {
      question: "How can I get information about specific courses?",
      answer:
        "You can get detailed information about our courses by selecting the specific course in the dropdown menu of our contact form. Alternatively, you can call us directly or visit our Program Path page for comprehensive course details.",
    },
    {
      question: "Do you offer career counseling services?",
      answer:
        "Yes, we offer free career counseling services to help students choose the right career path. You can schedule a one-on-one session with our expert counselors by filling out the contact form or calling us directly.",
    },
    {
      question: "How can I provide feedback or suggestions?",
      answer:
        "We value your feedback and suggestions. You can share your thoughts through our feedback form on this page, send us an email, or speak directly with our management team during your visit to our center.",
    },
  ]

  // Department contact data
  const departmentContacts = [
    {
      department: "Admissions",
      contact: "+91 9565292454",
      email: "admissions@ascentclasses.com",
      description: "For enrollment inquiries and admission process",
    },
    {
      department: "Academics",
      contact: "+91 9565292455",
      email: "academics@ascentclasses.com",
      description: "For course-related queries and academic support",
    },
    {
      department: "Administration",
      contact: "+91 9565292456",
      email: "admin@ascentclasses.com",
      description: "For administrative matters and general inquiries",
    },
    {
      department: "Finance",
      contact: "+91 9565292457",
      email: "finance@ascentclasses.com",
      description: "For fee-related queries and payment issues",
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
                  Contact Us
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-950 dark:text-white">
                  Reach Out to Us
                </h1>
                <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-400">
                  We'd love to hear from you! Whether you have questions, feedback, or just want to connect, our team is
                  here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Methods Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          id="contact-methods"
          aria-labelledby="contact-methods-heading"
        >
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Get in Touch"
              title="Contact Methods"
              description="Multiple ways to connect with our team"
              className="mb-10"
            />

            <div className="grid gap-6 md:grid-cols-3">
              {contactMethods.map((method, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <div className="flex justify-center mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                          {method.icon}
                          <span className="sr-only">{method.title}</span>
                        </div>
                      </div>
                      <CardTitle className="text-center text-lg">{method.title}</CardTitle>
                      <CardDescription className="text-center">{method.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-slate-600 dark:text-slate-400 break-words">{method.contact}</p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Link href={method.link}>
                        <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                          {method.action} <ArrowRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Map and Contact Form Section - Updated with StaticFormHandler */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900"
          id="contact-form"
          aria-labelledby="contact-form-heading"
        >
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Find Us"
              title="Our Location"
              description="Visit us at our center in Chinhat, Lucknow"
              className="mb-10"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.2} direction="left">
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.67795370925!2d81.03387433955077!3d26.87256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f33f24d0dd%3A0x384b9f1df7177468!2sChinhat%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1651921234567!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ascent Classes Location Map"
                    aria-label="Google Maps showing Ascent Coaching Classes location in Chinhat, Lucknow"
                  ></iframe>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardHeader>
                    <CardTitle id="contact-form-heading">Send us a Message</CardTitle>
                    <CardDescription>Fill out the form below and we'll get back to you shortly</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <StaticFormHandler
                      formId="contact-form"
                      formName="contact"
                      submitButtonText="Send Message"
                      successMessage="Thank you for your message! We'll get back to you within 24 hours."
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
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="email">Email Address</Label>
                        <Input type="email" id="email" name="email" placeholder="Enter your email address" required />
                      </div>
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
                      </div>
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="inquiry-type">Inquiry Type</Label>
                        <Select name="inquiry-type">
                          <SelectTrigger id="inquiry-type">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="admission">Admission Inquiry</SelectItem>
                            <SelectItem value="course">Course Information</SelectItem>
                            <SelectItem value="fee">Fee Structure</SelectItem>
                            <SelectItem value="scholarship">Scholarship Information</SelectItem>
                            <SelectItem value="feedback">Feedback/Suggestion</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2 mt-4">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" name="message" placeholder="Enter your message" rows={4} required />
                      </div>
                    </StaticFormHandler>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Department Contacts Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32"
          id="department-contacts"
          aria-labelledby="department-contacts-heading"
        >
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Department Contacts"
              title="Reach the Right Department"
              description="Direct contact information for specific departments"
              className="mb-10"
              id="department-contacts-heading"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {departmentContacts.map((dept, index) => (
                <FadeIn key={index} delay={0.1 * index} direction="up">
                  <Card className="h-full bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{dept.department}</CardTitle>
                      <CardDescription>{dept.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{dept.contact}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{dept.email}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <div className="flex gap-2 w-full">
                        <Link href={`tel:${dept.contact.replace(/\s+/g, "")}`} className="flex-1">
                          <Button
                            variant="outline"
                            className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                          >
                            Call
                          </Button>
                        </Link>
                        <Link href={`mailto:${dept.email}`} className="flex-1">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700">Email</Button>
                        </Link>
                      </div>
                    </CardFooter>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Office Hours Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900"
          id="office-hours"
          aria-labelledby="office-hours-heading"
        >
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Availability"
              title="Office Hours"
              description="When you can reach us"
              className="mb-10"
              id="office-hours-heading"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.2} direction="left">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Regular Office Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <h4 className="font-medium text-blue-950 dark:text-white">Weekdays</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Monday - Friday</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">8:00 AM - 8:00 PM</p>
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-medium text-blue-950 dark:text-white">Weekends</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Saturday - Sunday</p>
                        <p className="text-sm text-slate-600 dark:text-slate-400">9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                    <div className="pt-2">
                      <h4 className="font-medium text-blue-950 dark:text-white mb-2">Holiday Schedule</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We observe major national holidays. Please check our social media or call ahead for specific
                        holiday hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      Response Times
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-950 dark:text-white">Phone Inquiries</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        Immediate response during office hours. Please leave a voicemail after hours, and we'll return
                        your call the next business day.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-950 dark:text-white">Email Inquiries</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        We aim to respond to all emails within 24 hours during business days.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-medium text-blue-950 dark:text-white">Contact Form Submissions</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        You will receive an automated confirmation immediately, followed by a personalized response
                        within 24-48 hours.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="faqs" aria-labelledby="faqs-heading">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Questions & Answers"
              title="Frequently Asked Questions"
              description="Find answers to common questions about contacting us"
              className="mb-10"
              id="faqs-heading"
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
          </div>
        </section>

        {/* Social Media Section */}
        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900"
          id="social-media"
          aria-labelledby="social-media-heading"
        >
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Connect With Us"
              title="Follow Us on Social Media"
              description="Stay updated with our latest news, events, and success stories"
              className="mb-10"
              id="social-media-heading"
            />

            <div className="grid gap-6 md:grid-cols-4">
              <FadeIn delay={0.1} direction="up">
                <Link href="#" className="block">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Facebook className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-blue-950 dark:text-white">Facebook</h3>
                      <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                        Follow us for daily updates and success stories
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>

              <FadeIn delay={0.2} direction="up">
                <Link href="#" className="block">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Twitter className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-blue-950 dark:text-white">Twitter</h3>
                      <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                        Get real-time updates and educational tips
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>

              <FadeIn delay={0.3} direction="up">
                <Link href="#" className="block">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Instagram className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-blue-950 dark:text-white">Instagram</h3>
                      <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                        See behind-the-scenes and student activities
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>

              <FadeIn delay={0.4} direction="up">
                <Link href="#" className="block">
                  <Card className="bg-white dark:bg-slate-800 border-none shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Linkedin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h3 className="text-lg font-medium text-blue-950 dark:text-white">LinkedIn</h3>
                      <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
                        Connect professionally and follow our achievements
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </FadeIn>
            </div>

            <div className="mt-10 text-center">
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Share your success stories and tag us on social media!
              </p>
              <Button
                variant="outline"
                className="gap-2 border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
              >
                <Share2 className="h-4 w-4" /> Share Your Story
              </Button>
            </div>
          </div>
        </section>

        {/* Feedback Form Section */}
        <section className="w-full py-12 md:py-24 lg:py-32" id="feedback" aria-labelledby="feedback-heading">
          <div className="container px-4 md:px-6">
            <SectionHeading
              badge="Your Opinion Matters"
              title="Feedback & Suggestions"
              description="Help us improve our services with your valuable feedback"
              className="mb-10"
              id="feedback-heading"
            />

            <div className="grid gap-8 md:grid-cols-2">
              <FadeIn delay={0.2} direction="left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-950 dark:text-white">Why Your Feedback Matters</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    At Ascent Classes, we are committed to providing the best educational experience for our students.
                    Your feedback helps us understand what we're doing right and where we can improve.
                  </p>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        <span className="font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-950 dark:text-white">Continuous Improvement</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Your suggestions help us enhance our teaching methods and facilities.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        <span className="font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-950 dark:text-white">Student Satisfaction</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          We prioritize your satisfaction and strive to address any concerns promptly.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400">
                        <span className="font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-950 dark:text-white">Innovation</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                          Your ideas inspire us to innovate and introduce new teaching methodologies.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6">
                    <Image
                      src="/modern-classroom-study.png"
                      alt="Students at Ascent Classes"
                      width={500}
                      height={300}
                      className="rounded-lg object-cover shadow-lg"
                    />
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4} direction="right">
                <Card className="bg-white dark:bg-slate-800 border-none shadow-md">
                  <CardHeader>
                    <CardTitle>Share Your Thoughts</CardTitle>
                    <CardDescription>Your feedback helps us serve you better</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input type="email" id="email" placeholder="Enter your email address" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback-type">Feedback Type</Label>
                      <Select>
                        <SelectTrigger id="feedback-type">
                          <SelectValue placeholder="Select feedback type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Feedback</SelectItem>
                          <SelectItem value="suggestion">Suggestion</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="appreciation">Appreciation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="feedback">Your Feedback</Label>
                      <Textarea id="feedback" placeholder="Share your thoughts with us" rows={4} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="rating">Rate Your Experience (1-5)</Label>
                      <Select>
                        <SelectTrigger id="rating">
                          <SelectValue placeholder="Select rating" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5">5 - Excellent</SelectItem>
                          <SelectItem value="4">4 - Very Good</SelectItem>
                          <SelectItem value="3">3 - Good</SelectItem>
                          <SelectItem value="2">2 - Fair</SelectItem>
                          <SelectItem value="1">1 - Poor</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full gap-2 bg-blue-600 hover:bg-blue-700">
                      Submit Feedback <Send className="h-4 w-4" />
                    </Button>
                  </CardFooter>
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
                <Link href="#contact-form">
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

        {/* Add structured data */}
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Ascent Coaching Classes",
            description: "Contact information and form for Ascent Coaching Classes in Lucknow",
            mainEntity: {
              "@type": "EducationalOrganization",
              name: "Ascent Coaching Classes",
              telephone: "+919565292454",
              email: "ascentcoachingclasses.lko@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dayal Residency, A-300B, Vasundhara State, Chinhat",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226028",
                addressCountry: "IN",
              },
              openingHours: "Mo-Fr 08:00-20:00, Sa-Su 09:00-18:00",
            },
          }}
        />
      </main>
    </div>
  )
}
