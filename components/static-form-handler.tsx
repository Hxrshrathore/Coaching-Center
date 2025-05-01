"use client"

import type React from "react"

import { useState, type FormEvent } from "react"

interface StaticFormHandlerProps {
  formId: string
  formName: string
  children: React.ReactNode
  onSuccess?: () => void
  onError?: (error: string) => void
}

export function StaticFormHandler({ formId, formName, children, onSuccess, onError }: StaticFormHandlerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage("")

    try {
      const formData = new FormData(e.currentTarget)

      // Add form metadata
      formData.append("form-name", formName)

      // For static form providers like Netlify or Formspree
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setIsSuccess(true)
        e.currentTarget.reset()
        onSuccess?.()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "An unknown error occurred"
      setErrorMessage(message)
      onError?.(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form id={formId} name={formName} onSubmit={handleSubmit} data-netlify="true" netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value={formName} />
      <div className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      {children}

      {isSuccess && (
        <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-md">
          Thank you for your submission! We'll get back to you soon.
        </div>
      )}

      {errorMessage && <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-md">{errorMessage}</div>}
    </form>
  )
}
