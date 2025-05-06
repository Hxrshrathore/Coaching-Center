"use client"

import { useState, useEffect } from "react"
import { StudentForm } from "./student-form"
import { QuizEngine } from "./quiz-engine"
import { ResultsDisplay } from "./results-display"
import { Card, CardContent } from "@/components/ui/card"
import { generateQuiz } from "@/lib/quiz-utils"
import type { StudentInfo, QuizState, QuizResults } from "@/types/scholarship"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Info } from "lucide-react"

export default function ScholarshipTest() {
  const [step, setStep] = useState<"form" | "quiz" | "results">("form")
  const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null)
  const [quizState, setQuizState] = useState<QuizState | null>(null)
  const [results, setResults] = useState<QuizResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Check for saved state on component mount
  useEffect(() => {
    const savedState = localStorage.getItem("scholarshipTestState")
    if (savedState) {
      try {
        const {
          step: savedStep,
          studentInfo: savedStudentInfo,
          quizState: savedQuizState,
          results: savedResults,
        } = JSON.parse(savedState)
        if (savedStep) setStep(savedStep)
        if (savedStudentInfo) setStudentInfo(savedStudentInfo)
        if (savedQuizState) setQuizState(savedQuizState)
        if (savedResults) setResults(savedResults)
      } catch (error) {
        console.error("Error parsing saved state:", error)
        localStorage.removeItem("scholarshipTestState")
      }
    }
  }, [])

  // Save state on changes
  useEffect(() => {
    if (step && (studentInfo || quizState || results)) {
      localStorage.setItem(
        "scholarshipTestState",
        JSON.stringify({
          step,
          studentInfo,
          quizState,
          results,
        }),
      )
    }
  }, [step, studentInfo, quizState, results])

  const handleStudentFormSubmit = (data: StudentInfo) => {
    setIsLoading(true)
    setStudentInfo(data)

    // Generate quiz based on student info
    setTimeout(() => {
      const generatedQuiz = generateQuiz(data)
      setQuizState(generatedQuiz)
      setStep("quiz")
      setIsLoading(false)
    }, 1000) // Simulate loading
  }

  const handleQuizComplete = (quizResults: QuizResults) => {
    setResults(quizResults)
    setStep("results")
  }

  const handleRestartTest = () => {
    // Clear local storage
    localStorage.removeItem("scholarshipTestState")

    // Reset state
    setStep("form")
    setStudentInfo(null)
    setQuizState(null)
    setResults(null)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Scholarship Cum Aptitude Test</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Take this test to assess your knowledge and get a chance to win scholarships for our premium courses.
        </p>
        <Alert className="mb-4">
          <Info className="h-4 w-4" />
          <AlertDescription>
            This test requires full-screen mode. You'll be prompted to enter full-screen when you start the test. For
            the best experience, please use a desktop or laptop computer.
          </AlertDescription>
        </Alert>
      </div>

      <Card className="shadow-lg">
        <CardContent className="p-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-16 h-16 border-4 border-t-indigo-600 border-indigo-200 rounded-full animate-spin"></div>
              <p className="mt-4 text-lg">Preparing your test...</p>
            </div>
          ) : (
            <>
              {step === "form" && <StudentForm onSubmit={handleStudentFormSubmit} initialData={studentInfo} />}

              {step === "quiz" && quizState && studentInfo && (
                <QuizEngine quizState={quizState} studentInfo={studentInfo} onComplete={handleQuizComplete} />
              )}

              {step === "results" && results && studentInfo && (
                <ResultsDisplay results={results} studentInfo={studentInfo} onRestart={handleRestartTest} />
              )}
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
