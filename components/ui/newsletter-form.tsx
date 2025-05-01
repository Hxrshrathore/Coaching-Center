"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

interface NewsletterFormProps {
  className?: string
  buttonText?: string
  placeholder?: string
  darkMode?: boolean
}

export function NewsletterForm({
  className,
  buttonText = "Subscribe",
  placeholder = "Enter your email",
  darkMode = false,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setStatus("error")
      setMessage("Please enter a valid email address")
      return
    }

    setStatus("loading")

    // Simulate API call
    setTimeout(() => {
      setStatus("success")
      setMessage("Thank you for subscribing!")
      setEmail("")
    }, 1000)
  }

  return (
    <div className={cn("space-y-4", className)}>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <div className="relative flex-1">
          <Mail
            className={cn(
              "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2",
              darkMode ? "text-white/70" : "text-brand-text-muted",
            )}
          />
          <Input
            type="email"
            placeholder={placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "pl-10",
              darkMode
                ? "bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:border-white"
                : "border-brand-blue/20 focus-visible:border-brand-blue",
            )}
            disabled={status === "loading"}
          />
        </div>
        <Button
          type="submit"
          disabled={status === "loading"}
          variant={darkMode ? "outline" : "brand"}
          className={darkMode ? "border-white text-white hover:bg-white/10" : ""}
        >
          {status === "loading" ? "Subscribing..." : buttonText}
        </Button>
      </form>

      {status === "success" && (
        <div className="flex items-center gap-2 text-green-400">
          <CheckCircle className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle className="h-4 w-4" />
          <span className="text-sm">{message}</span>
        </div>
      )}
    </div>
  )
}
