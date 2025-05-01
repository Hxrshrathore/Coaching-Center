"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

interface StaticFormHandlerProps {
  formId: string
  formName: string
  children: React.ReactNode
  submitButtonText?: string
  successMessage?: string
  errorMessage?: string
  onSuccess?: () => void
  onError?: (error: string) => void
  className?: string
}

export function StaticFormHandler({
  formId,
  formName,
  children,
  submitButtonText = "Submit",
  successMessage = "Thank you for your submission! We'll get back to you soon.",
  errorMessage = "There was an error submitting the form. Please try again later.",
  onSuccess,
  onError,
  className,
}: StaticFormHandlerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const formData = new FormData(e.currentTarget)

      // Add form metadata
      formData.append("form-name", formName)

      // For static form providers like Netlify or Formspree
      // In a real static export, you would use a service like Formspree, Netlify Forms, etc.
      // This is a simulation for the demo
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Simulate success
      setIsSuccess(true)
      e.currentTarget.reset()
      onSuccess?.()
    } catch (err) {
      const message = err instanceof Error ? err.message : errorMessage
      setError(message)
      onError?.(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id={formId}
      name={formName}
      onSubmit={handleSubmit}
      data-netlify="true"
      netlify-honeypot="bot-field"
      className={className}
    >
      <input type="hidden" name="form-name" value={formName} />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      {children}

      <Button type="submit" disabled={isSubmitting} className="w-full gap-2 bg-blue-600 hover:bg-blue-700 mt-4">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {isSubmitting ? "Submitting..." : submitButtonText}
      </Button>

      {isSuccess && <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">{successMessage}</div>}

      {error && <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">{error}</div>}
    </form>
  )
}
