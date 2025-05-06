"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"
import { CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

// Define the form schemas for each step
const personalInfoSchema = z.object({
  fullName: z.string().min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  parentName: z.string().min(3, { message: "Parent name must be at least 3 characters" }),
  parentPhone: z.string().min(10, { message: "Parent phone number must be at least 10 digits" }),
})

const academicInfoSchema = z.object({
  currentClass: z.string().min(1, { message: "Please select your current class" }),
  school: z.string().min(3, { message: "School name must be at least 3 characters" }),
  board: z.string().min(1, { message: "Please select your board" }),
  previousMarks: z.string().min(1, { message: "Please enter your previous academic marks" }),
})

const programInfoSchema = z.object({
  programType: z.enum(["JEE", "NEET", "Olympiad", "K12Science"], {
    required_error: "Please select a program type",
  }),
  preferredBatch: z.enum(["Morning", "Afternoon", "Evening", "Weekend"], {
    required_error: "Please select a preferred batch",
  }),
  additionalRequirements: z.string().optional(),
})

const confirmationSchema = z.object({
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the terms and conditions" }),
  }),
  privacyAccepted: z.literal(true, {
    errorMap: () => ({ message: "You must accept the privacy policy" }),
  }),
})

// Combine all schemas for the final form
const formSchema = z.object({
  ...personalInfoSchema.shape,
  ...academicInfoSchema.shape,
  ...programInfoSchema.shape,
  ...confirmationSchema.shape,
})

type FormValues = z.infer<typeof formSchema>

export function MultiStepEnrollmentForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<Partial<FormValues>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { toast } = useToast()

  const totalSteps = 4
  const progress = (step / totalSteps) * 100

  // Form for step 1: Personal Information
  const personalInfoForm = useForm<z.infer<typeof personalInfoSchema>>({
    resolver: zodResolver(personalInfoSchema),
    defaultValues: {
      fullName: formData.fullName || "",
      email: formData.email || "",
      phone: formData.phone || "",
      parentName: formData.parentName || "",
      parentPhone: formData.parentPhone || "",
    },
  })

  // Form for step 2: Academic Information
  const academicInfoForm = useForm<z.infer<typeof academicInfoSchema>>({
    resolver: zodResolver(academicInfoSchema),
    defaultValues: {
      currentClass: formData.currentClass || "",
      school: formData.school || "",
      board: formData.board || "",
      previousMarks: formData.previousMarks || "",
    },
  })

  // Form for step 3: Program Information
  const programInfoForm = useForm<z.infer<typeof programInfoSchema>>({
    resolver: zodResolver(programInfoSchema),
    defaultValues: {
      programType: formData.programType || undefined,
      preferredBatch: formData.preferredBatch || undefined,
      additionalRequirements: formData.additionalRequirements || "",
    },
  })

  // Form for step 4: Confirmation
  const confirmationForm = useForm<z.infer<typeof confirmationSchema>>({
    resolver: zodResolver(confirmationSchema),
    defaultValues: {
      termsAccepted: formData.termsAccepted || false,
      privacyAccepted: formData.privacyAccepted || false,
    },
  })

  // Handle submission for each step
  const handlePersonalInfoSubmit = (data: z.infer<typeof personalInfoSchema>) => {
    setFormData({ ...formData, ...data })
    setStep(2)
    window.scrollTo(0, 0)
  }

  const handleAcademicInfoSubmit = (data: z.infer<typeof academicInfoSchema>) => {
    setFormData({ ...formData, ...data })
    setStep(3)
    window.scrollTo(0, 0)
  }

  const handleProgramInfoSubmit = (data: z.infer<typeof programInfoSchema>) => {
    setFormData({ ...formData, ...data })
    setStep(4)
    window.scrollTo(0, 0)
  }

  const handleConfirmationSubmit = async (data: z.infer<typeof confirmationSchema>) => {
    setIsSubmitting(true)

    // Combine all form data
    const completeFormData = {
      ...formData,
      ...data,
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Show success message
      toast({
        title: "Enrollment Submitted",
        description: "Your enrollment form has been submitted successfully. We'll contact you soon.",
      })

      setIsSubmitted(true)
      setFormData(completeFormData as Partial<FormValues>)
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your enrollment form. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const goToPreviousStep = () => {
    if (step > 1) {
      setStep(step - 1)
      window.scrollTo(0, 0)
    }
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Enrollment Submitted!</CardTitle>
          <CardDescription className="text-center">Thank you for enrolling with Ascent Classes</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="h-16 w-16 text-green-500" />
          </div>

          <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your enrollment form has been submitted successfully. Our team will review your application and contact
              you shortly.
            </AlertDescription>
          </Alert>

          <div className="space-y-4 mt-6">
            <h3 className="text-lg font-medium">Enrollment Summary</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h4>
                <p>{formData.fullName}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                <p>{formData.email}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                <p>{formData.phone}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Class</h4>
                <p>{formData.currentClass}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Program</h4>
                <p>{formData.programType}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Preferred Batch</h4>
                <p>{formData.preferredBatch}</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={() => (window.location.href = "/")}>Return to Home</Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Enrollment Form</CardTitle>
        <CardDescription className="text-center">Complete the form below to enroll in our programs</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        {step === 1 && (
          <Form {...personalInfoForm}>
            <form onSubmit={personalInfoForm.handleSubmit(handlePersonalInfoSubmit)} className="space-y-6">
              <FormField
                control={personalInfoForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={personalInfoForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={personalInfoForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={personalInfoForm.control}
                name="parentName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter parent/guardian name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={personalInfoForm.control}
                name="parentPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Parent/Guardian Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter parent/guardian phone" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-end">
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </Form>
        )}

        {step === 2 && (
          <Form {...academicInfoForm}>
            <form onSubmit={academicInfoForm.handleSubmit(handleAcademicInfoSubmit)} className="space-y-6">
              <FormField
                control={academicInfoForm.control}
                name="currentClass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Current Class</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your current class" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="4">Class 4</SelectItem>
                        <SelectItem value="5">Class 5</SelectItem>
                        <SelectItem value="6">Class 6</SelectItem>
                        <SelectItem value="7">Class 7</SelectItem>
                        <SelectItem value="8">Class 8</SelectItem>
                        <SelectItem value="9">Class 9</SelectItem>
                        <SelectItem value="10">Class 10</SelectItem>
                        <SelectItem value="11">Class 11</SelectItem>
                        <SelectItem value="12">Class 12</SelectItem>
                        <SelectItem value="12Pass">Class 12 Passed</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={academicInfoForm.control}
                name="school"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>School/College Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your school/college name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={academicInfoForm.control}
                name="board"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Board</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your board" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="CBSE">CBSE</SelectItem>
                        <SelectItem value="ICSE">ICSE</SelectItem>
                        <SelectItem value="State">State Board</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={academicInfoForm.control}
                name="previousMarks"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Previous Year Marks/Percentage</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your previous year marks or percentage" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  Previous Step
                </Button>
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </Form>
        )}

        {step === 3 && (
          <Form {...programInfoForm}>
            <form onSubmit={programInfoForm.handleSubmit(handleProgramInfoSubmit)} className="space-y-6">
              <FormField
                control={programInfoForm.control}
                name="programType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Program Type</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="JEE" />
                          </FormControl>
                          <FormLabel className="font-normal">JEE</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="NEET" />
                          </FormControl>
                          <FormLabel className="font-normal">NEET</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Olympiad" />
                          </FormControl>
                          <FormLabel className="font-normal">Olympiad</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="K12Science" />
                          </FormControl>
                          <FormLabel className="font-normal">K12 Science</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={programInfoForm.control}
                name="preferredBatch"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Preferred Batch</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Morning" />
                          </FormControl>
                          <FormLabel className="font-normal">Morning</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Afternoon" />
                          </FormControl>
                          <FormLabel className="font-normal">Afternoon</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Evening" />
                          </FormControl>
                          <FormLabel className="font-normal">Evening</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="Weekend" />
                          </FormControl>
                          <FormLabel className="font-normal">Weekend</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={programInfoForm.control}
                name="additionalRequirements"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Additional Requirements (Optional)</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Any specific requirements or questions you have"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  Previous Step
                </Button>
                <Button type="submit">Next Step</Button>
              </div>
            </form>
          </Form>
        )}

        {step === 4 && (
          <Form {...confirmationForm}>
            <form onSubmit={confirmationForm.handleSubmit(handleConfirmationSubmit)} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Review Your Information</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Full Name</h4>
                    <p>{formData.fullName}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <p>{formData.email}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</h4>
                    <p>{formData.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Current Class</h4>
                    <p>{formData.currentClass}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">School/College</h4>
                    <p>{formData.school}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Board</h4>
                    <p>{formData.board}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Program</h4>
                    <p>{formData.programType}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Preferred Batch</h4>
                    <p>{formData.preferredBatch}</p>
                  </div>
                </div>
              </div>

              <FormField
                control={confirmationForm.control}
                name="termsAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the{" "}
                        <a
                          href="/terms-of-service"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                          rel="noreferrer"
                        >
                          Terms and Conditions
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <FormField
                control={confirmationForm.control}
                name="privacyAccepted"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel>
                        I accept the{" "}
                        <a
                          href="/privacy-policy"
                          target="_blank"
                          className="text-blue-600 hover:underline"
                          rel="noreferrer"
                        >
                          Privacy Policy
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={goToPreviousStep}>
                  Previous Step
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Enrollment"}
                </Button>
              </div>
            </form>
          </Form>
        )}
      </CardContent>
    </Card>
  )
}
