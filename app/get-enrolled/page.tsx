import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function GetEnrolledPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow p-4 md:p-8 lg:p-12">
        <section className="container mx-auto py-8">
          <h1 className="text-3xl font-semibold text-center mb-6">Get Enrolled Today!</h1>
          <p className="text-gray-600 text-center mb-8">
            Start your journey towards a brighter future with our comprehensive courses. Fill out the form below to
            begin your enrollment process.
          </p>
        </section>

        <section className="container mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Enrollment Form</CardTitle>
              <CardDescription>Fill out the form below to start your enrollment process.</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email Address</Label>
                <Input type="email" id="email" placeholder="Enter your email address" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input type="tel" id="phone" placeholder="Enter your phone number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="course">Select Course</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Choose a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="web-development">Web Development</SelectItem>
                    <SelectItem value="data-science">Data Science</SelectItem>
                    <SelectItem value="ux-design">UX Design</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea id="message" placeholder="Enter any additional information" />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button>Submit Enrollment</Button>
            </CardFooter>
          </Card>
        </section>

        <section className="container mx-auto mt-12 py-8 text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to take the next step?</h2>
          <p className="text-gray-600 mb-6">
            Our team is here to answer any questions you may have. Contact us today to learn more about our courses and
            enrollment process.
          </p>
          <Link href="/reach-out">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-400 hover:bg-blue-700 hover:text-white"
            >
              Contact Us
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
