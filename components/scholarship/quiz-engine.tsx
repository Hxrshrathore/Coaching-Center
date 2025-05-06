"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Clock, AlertTriangle, Maximize, Minimize, Info, Shield, Eye, Coffee } from "lucide-react"
import { calculateResults } from "@/lib/quiz-utils"
import type { QuizState, StudentInfo, QuizResults, UserAnswer } from "@/types/scholarship"
import { Progress } from "@/components/ui/progress"

interface QuizEngineProps {
  quizState: QuizState
  studentInfo: StudentInfo
  onComplete: (results: QuizResults) => void
}

export function QuizEngine({ quizState, studentInfo, onComplete }: QuizEngineProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([])
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes in seconds
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [fullScreenSupported, setFullScreenSupported] = useState(true)
  const [showFullScreenPrompt, setShowFullScreenPrompt] = useState(true)
  const [tabSwitchCount, setTabSwitchCount] = useState(0)
  const [showWarning, setShowWarning] = useState(false)
  const [warningMessage, setWarningMessage] = useState("")
  const [securityViolations, setSecurityViolations] = useState(0)
  const [lastActivityTime, setLastActivityTime] = useState(Date.now())
  const [showInactivityWarning, setShowInactivityWarning] = useState(false)
  const [devToolsOpen, setDevToolsOpen] = useState(false)
  const quizContainerRef = useRef<HTMLDivElement>(null)
  const startTimeRef = useRef<number>(Date.now())
  const warningTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Initialize user answers
  useEffect(() => {
    if (quizState.questions.length > 0 && userAnswers.length === 0) {
      setUserAnswers(
        quizState.questions.map((q) => ({
          questionId: q.id,
          selectedOption: null,
          isCorrect: false,
        })),
      )
    }

    // Auto-enter fullscreen when component mounts
    setTimeout(() => {
      if (!document.fullscreenElement) {
        enterFullScreen()
      }
    }, 1000)
  }, [quizState.questions, userAnswers.length])

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          handleSubmitQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  // Tab visibility effect
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setTabSwitchCount((prev) => prev + 1)
        setSecurityViolations((prev) => prev + 1)
        setWarningMessage(
          "⚠️ Warning: You switched away from the test tab. This is recorded and may affect your eligibility.",
        )
        setShowWarning(true)

        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current)
        }

        warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000)

        // Force back to fullscreen when returning
        setTimeout(() => {
          if (!document.fullscreenElement) {
            enterFullScreen()
          }
        }, 500)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  // Prevent copy/paste and other ways to cheat
  useEffect(() => {
    const handleCopyPaste = (e: ClipboardEvent) => {
      e.preventDefault()
      setSecurityViolations((prev) => prev + 1)
      setWarningMessage("⚠️ Copy/paste is not allowed during the test.")
      setShowWarning(true)

      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current)
      }

      warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000)
      return false
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent common keyboard shortcuts for copy/paste/print/etc
      if (
        (e.ctrlKey || e.metaKey) &&
        (e.key === "c" ||
          e.key === "v" ||
          e.key === "p" ||
          e.key === "a" ||
          e.key === "s" ||
          e.key === "u" ||
          e.key === "i" ||
          e.key === "j")
      ) {
        e.preventDefault()
        setSecurityViolations((prev) => prev + 1)
        setWarningMessage("⚠️ Keyboard shortcuts are disabled during the test.")
        setShowWarning(true)

        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current)
        }

        warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000)
        return false
      }

      // Prevent F12 key (developer tools)
      if (e.key === "F12") {
        e.preventDefault()
        setSecurityViolations((prev) => prev + 1)
        setWarningMessage("⚠️ Developer tools are not allowed during the test.")
        setShowWarning(true)

        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current)
        }

        warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000)
        return false
      }

      // Prevent right-click context menu
      if (e.key === "ContextMenu") {
        e.preventDefault()
        return false
      }

      // Update activity timestamp
      setLastActivityTime(Date.now())
    }

    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setSecurityViolations((prev) => prev + 1)
      setWarningMessage("⚠️ Right-click is disabled during the test.")
      setShowWarning(true)

      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current)
      }

      warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 3000)
      return false
    }

    const handleSelectStart = (e: Event) => {
      e.preventDefault()
      return false
    }

    const handleMouseMove = () => {
      setLastActivityTime(Date.now())
      setShowInactivityWarning(false)
    }

    const handleClick = () => {
      setLastActivityTime(Date.now())
      setShowInactivityWarning(false)
    }

    // Add all event listeners
    document.addEventListener("copy", handleCopyPaste)
    document.addEventListener("paste", handleCopyPaste)
    document.addEventListener("cut", handleCopyPaste)
    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("selectstart", handleSelectStart)
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("click", handleClick)

    // Disable drag and drop
    document.ondragstart = () => false

    // Detect developer tools
    const devToolsDetector = setInterval(() => {
      const threshold = 160 // Threshold for width difference
      const widthDiff = window.outerWidth - window.innerWidth
      const heightDiff = window.outerHeight - window.innerHeight

      const isDevToolsOpen = widthDiff > threshold || heightDiff > threshold || window.outerHeight < window.innerHeight

      if (isDevToolsOpen && !devToolsOpen) {
        setDevToolsOpen(true)
        setSecurityViolations((prev) => prev + 1)
        setWarningMessage("⚠️ Developer tools detected! This is a serious violation.")
        setShowWarning(true)

        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current)
        }

        warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 5000)
      } else if (!isDevToolsOpen && devToolsOpen) {
        setDevToolsOpen(false)
      }
    }, 1000)

    // Check for inactivity
    const inactivityChecker = setInterval(() => {
      const inactiveTime = Date.now() - lastActivityTime
      if (inactiveTime > 60000) {
        // 1 minute of inactivity
        setShowInactivityWarning(true)
      }
    }, 10000)

    return () => {
      // Remove all event listeners on cleanup
      document.removeEventListener("copy", handleCopyPaste)
      document.removeEventListener("paste", handleCopyPaste)
      document.removeEventListener("cut", handleCopyPaste)
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("selectstart", handleSelectStart)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("click", handleClick)
      document.ondragstart = null

      clearInterval(devToolsDetector)
      clearInterval(inactivityChecker)

      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current)
      }
    }
  }, [devToolsOpen])

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const enterFullScreen = async () => {
    try {
      if (quizContainerRef.current) {
        await quizContainerRef.current.requestFullscreen()
        setIsFullScreen(true)
        setShowFullScreenPrompt(false)
      }
    } catch (err) {
      setFullScreenSupported(false)
      setWarningMessage(
        "Your browser doesn't fully support fullscreen mode. Please use Chrome, Firefox, or Edge for the best experience.",
      )
      setShowWarning(true)

      if (warningTimeoutRef.current) {
        clearTimeout(warningTimeoutRef.current)
      }

      warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 5000)
    }
  }

  const exitFullScreen = async () => {
    if (document.exitFullscreen) {
      await document.exitFullscreen()
      setIsFullScreen(false)
    }
  }

  // Enhanced full-screen detection
  useEffect(() => {
    const handleFullScreenChange = () => {
      const isCurrentlyFullScreen = Boolean(document.fullscreenElement)
      setIsFullScreen(isCurrentlyFullScreen)

      // If user exited full-screen using browser controls (Esc key)
      if (!isCurrentlyFullScreen && !showFullScreenPrompt) {
        setSecurityViolations((prev) => prev + 1)
        setWarningMessage("⚠️ You've exited full-screen mode. This is recorded and may affect your eligibility.")
        setShowWarning(true)

        if (warningTimeoutRef.current) {
          clearTimeout(warningTimeoutRef.current)
        }

        warningTimeoutRef.current = setTimeout(() => setShowWarning(false), 4000)

        // Auto re-enter fullscreen after a short delay
        setTimeout(() => {
          enterFullScreen()
        }, 2000)
      }
    }

    document.addEventListener("fullscreenchange", handleFullScreenChange)

    // Check if fullscreen is supported
    if (!document.fullscreenEnabled) {
      setFullScreenSupported(false)
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange)
    }
  }, [showFullScreenPrompt])

  const handleAnswerSelect = (optionIndex: number) => {
    const updatedAnswers = [...userAnswers]
    const currentQuestion = quizState.questions[currentQuestionIndex]

    updatedAnswers[currentQuestionIndex] = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      isCorrect: currentQuestion.correctOption === optionIndex,
    }

    setUserAnswers(updatedAnswers)
    setLastActivityTime(Date.now())
    setShowInactivityWarning(false)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizState.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setLastActivityTime(Date.now())
      setShowInactivityWarning(false)
    }
  }

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
      setLastActivityTime(Date.now())
      setShowInactivityWarning(false)
    }
  }

  const handleSubmitQuiz = () => {
    const timeTaken = Math.floor((Date.now() - startTimeRef.current) / 1000)
    const results = calculateResults(quizState, userAnswers, timeTaken, studentInfo)

    // Add security violations to results
    const resultsWithSecurity = {
      ...results,
      securityViolations,
      tabSwitchCount,
    }

    // Exit fullscreen if active
    if (document.fullscreenElement) {
      document.exitFullscreen()
    }

    onComplete(resultsWithSecurity)
  }

  const currentQuestion = quizState.questions[currentQuestionIndex]
  const currentAnswer = userAnswers[currentQuestionIndex]
  const answeredCount = userAnswers.filter((a) => a.selectedOption !== null).length
  const progressPercentage = (timeLeft / (30 * 60)) * 100

  if (!currentQuestion) return null

  return (
    <div
      ref={quizContainerRef}
      className={`quiz-container select-none ${isFullScreen ? "bg-background min-h-screen p-6" : ""}`}
    >
      {showWarning && (
        <Alert
          variant="destructive"
          className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto max-w-md animate-pulse shadow-lg"
        >
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="font-bold">{warningMessage}</AlertDescription>
        </Alert>
      )}

      {showInactivityWarning && (
        <Alert
          variant="warning"
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-auto max-w-md animate-pulse shadow-lg"
        >
          <Coffee className="h-4 w-4" />
          <AlertDescription className="font-bold">
            Are you still there? Please continue with the test to avoid automatic submission.
          </AlertDescription>
        </Alert>
      )}

      {showFullScreenPrompt && (
        <div className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300">
          <Card className="max-w-md w-full shadow-xl border-primary/20 border-2">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4 text-primary">
                <Shield className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Secure Test Environment</h3>
              <p className="mb-6 text-center">
                This scholarship test requires full screen mode for security and optimal experience. The test will
                automatically begin in full screen mode.
              </p>
              <div className="space-y-4">
                <Button
                  onClick={enterFullScreen}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Maximize className="h-4 w-4" />
                  Enter Secure Test Environment
                </Button>
                <div className="text-sm text-center text-muted-foreground">
                  <p>By entering, you agree to the test security measures:</p>
                  <ul className="text-left mt-2 space-y-1 list-disc list-inside">
                    <li>Full screen mode is required</li>
                    <li>Tab switching is monitored</li>
                    <li>Copy/paste is disabled</li>
                    <li>Security violations are recorded</li>
                  </ul>
                </div>
                {!fullScreenSupported && (
                  <Alert variant="warning" className="mt-4">
                    <Info className="h-4 w-4" />
                    <AlertDescription>
                      Your browser may have limited full-screen support. For the best experience, use Chrome, Firefox,
                      or Edge.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <div className="flex flex-col space-y-6">
        <div className="flex justify-between items-center bg-background/80 backdrop-blur-sm p-3 rounded-lg shadow-sm sticky top-0 z-10">
          <div className="text-xl font-bold flex items-center">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            <span>Scholarship Aptitude Test</span>
            {securityViolations > 0 && (
              <span className="ml-2 text-sm bg-red-500 text-white px-2 py-0.5 rounded-full">
                {securityViolations} violation{securityViolations > 1 ? "s" : ""}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/40 px-3 py-1 rounded-full">
              <Clock className="mr-1 h-5 w-5" />
              <span className="font-mono font-bold">{formatTime(timeLeft)}</span>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={exitFullScreen}
              className="flex items-center gap-1 border-primary/30"
            >
              <Minimize className="h-4 w-4" />
              <span className="hidden sm:inline">Exit Fullscreen</span>
            </Button>
          </div>
        </div>

        <div className="mb-2">
          <Progress
            value={progressPercentage}
            className="h-2"
            style={{
              background: "rgba(200, 200, 200, 0.2)",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>

        {tabSwitchCount > 0 && (
          <Alert variant="destructive">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You have switched tabs {tabSwitchCount} time(s). This may affect your test validity.
            </AlertDescription>
          </Alert>
        )}

        <div className="flex justify-between items-center bg-background/50 p-3 rounded-lg">
          <div className="flex items-center">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full mr-2">
              {currentQuestionIndex + 1}/{quizState.questions.length}
            </span>
            <span>Question {currentQuestionIndex + 1}</span>
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1 text-green-600" />
            <span>
              Answered: {answeredCount} of {quizState.questions.length}
            </span>
          </div>
        </div>

        <Card className="shadow-lg border-t-4 border-t-primary">
          <CardContent className="p-6">
            <div className="mb-6">
              <div className="inline-block text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                {currentQuestion.subject} - {currentQuestion.topic}
              </div>
              <div className="text-xl font-medium">{currentQuestion.question}</div>
            </div>

            <RadioGroup
              value={currentAnswer?.selectedOption?.toString() || ""}
              onValueChange={(value) => handleAnswerSelect(Number.parseInt(value))}
              className="space-y-3"
            >
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <label htmlFor={`option-${index}`} className="flex-grow cursor-pointer">
                    {option}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} className="px-6">
            Previous
          </Button>

          {currentQuestionIndex < quizState.questions.length - 1 ? (
            <Button
              onClick={handleNextQuestion}
              className="px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmitQuiz}
              variant="default"
              className="px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
            >
              Submit Test
            </Button>
          )}
        </div>

        <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mt-4 p-4 bg-background/50 rounded-lg">
          {quizState.questions.map((_, index) => (
            <Button
              key={index}
              variant={
                index === currentQuestionIndex
                  ? "default"
                  : userAnswers[index]?.selectedOption !== null
                    ? "outline"
                    : "ghost"
              }
              className={`h-10 w-10 p-0 ${
                userAnswers[index]?.selectedOption !== null
                  ? "border-green-500 dark:border-green-400 bg-green-50 dark:bg-green-900/20"
                  : ""
              } ${index === currentQuestionIndex ? "ring-2 ring-primary ring-offset-2 dark:ring-offset-gray-900" : ""}`}
              onClick={() => setCurrentQuestionIndex(index)}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

      {/* Floating security indicator */}
      <div className="fixed bottom-4 right-4 z-10 opacity-70 hover:opacity-100 transition-opacity">
        <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-primary/20 flex items-center gap-2">
          <Shield className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium">Secure Test Mode</span>
        </div>
      </div>
    </div>
  )
}
