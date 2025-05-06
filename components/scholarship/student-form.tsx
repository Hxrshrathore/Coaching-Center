"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import type { StudentInfo } from "@/types/scholarship"

const formSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
  school: z.string().min(2, { message: "School name must be at least 2 characters" }),
  currentClass: z.enum(["8", "9", "10", "11", "12"], {
    required_error: "Please select your current class",
  }),
  academicGoal: z.enum(["JEE", "NEET", "Olympiad", "K12"], {
    required_error: "Please select your academic goal",
  }),
})

interface StudentFormProps {
  onSubmit: (data: StudentInfo) => void
  initialData: StudentInfo | null
}

export function StudentForm({ onSubmit, initialData }: StudentFormProps) {
  const [formError, setFormError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      email: "",
      phone: "",
      city: "",
      school: "",
      currentClass: undefined,
      academicGoal: undefined,
    },
  })

  function handleSubmit(values: z.infer<typeof formSchema>) {
    try {
      setFormError(null)
      onSubmit(values as StudentInfo)
    } catch (error) {
      setFormError("An error occurred. Please try again.")
      console.error(error)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold">Student Information</h2>
        <p className="text-gray-500 dark:text-gray-400">Please fill in your details to start the scholarship test</p>
      </div>

      {formError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{formError}</AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
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

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" type="tel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your city" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="school"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School/College</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your school or college name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="currentClass"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Class</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your class" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="8">Class 8</SelectItem>
                      <SelectItem value="9">Class 9</SelectItem>
                      <SelectItem value="10">Class 10</SelectItem>
                      <SelectItem value="11">Class 11</SelectItem>
                      <SelectItem value="12">Class 12</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="academicGoal"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Academic Goal</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="JEE" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">JEE</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="NEET" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">NEET</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Olympiad" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">Olympiad</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="K12" />
                      </FormControl>
                      <FormLabel className="font-normal cursor-pointer">K-12 Tuition</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-sm text-muted-foreground mt-4 mb-2">
            <p className="flex items-center">
              <AlertCircle className="h-4 w-4 mr-2" />
              Note: The test has security measures to prevent copying, tab switching, and other actions.
            </p>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full">
              Start Test
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
