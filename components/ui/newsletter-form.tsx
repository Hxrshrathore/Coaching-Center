"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  darkMode?: boolean
  buttonText?: string
  className?: string
}

export function NewsletterForm({ darkMode = false, buttonText = "Subscribe", className }: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setEmail("")
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={cn(
            "flex-1 h-10",
            darkMode ? "bg-white/10 border-white/20 text-white placeholder:text-white/60" : "bg-white border-slate-200",
          )}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "h-10 px-4 text-sm sm:text-base",
            darkMode ? "bg-white text-blue-600 hover:bg-blue-50" : "bg-blue-600 text-white hover:bg-blue-700",
          )}
        >
          {isSubmitting ? "Subscribing..." : buttonText}
        </Button>
      </form>
      {isSuccess && (
        <p className={cn("mt-2 text-sm", darkMode ? "text-green-300" : "text-green-600")}>Thank you for subscribing!</p>
      )}
      {error && <p className={cn("mt-2 text-sm", darkMode ? "text-red-300" : "text-red-600")}>{error}</p>}
    </div>
  )
}
