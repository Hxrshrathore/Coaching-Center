"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Download, Award, CheckCircle, XCircle, AlertTriangle, BarChart, Clock, Shield } from "lucide-react"
import type { QuizResults, StudentInfo } from "@/types/scholarship"
import { generatePDF } from "@/lib/pdf-generator"
import { toast } from "@/components/ui/use-toast"

interface ResultsDisplayProps {
  results: QuizResults
  studentInfo: StudentInfo
  onRestart: () => void
}

export function ResultsDisplay({ results, studentInfo, onRestart }: ResultsDisplayProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}m ${remainingSeconds}s`
  }

  const handleGeneratePDF = async () => {
    try {
      setIsGeneratingPDF(true)
      await generatePDF(results, studentInfo)
      toast({
        title: "PDF Generated Successfully",
        description: "Your results have been saved as a PDF file.",
        variant: "success",
      })
    } catch (error) {
      console.error("Error generating PDF:", error)
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsGeneratingPDF(false)
    }
  }

  // Determine security status
  const securityViolations = results.securityViolations || 0
  const tabSwitchCount = results.tabSwitchCount || 0
  const totalViolations = securityViolations + tabSwitchCount

  let securityStatus = "excellent"
  let securityMessage = "No security violations detected. Your test results are fully valid."

  if (totalViolations > 5) {
    securityStatus = "poor"
    securityMessage = "Multiple security violations detected. Your test results may be invalidated."
  } else if (totalViolations > 0) {
    securityStatus = "warning"
    securityMessage = `${totalViolations} security violation(s) detected. This may affect your scholarship eligibility.`
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Test Results</h2>
        <p className="text-muted-foreground">Thank you for completing the Scholarship Cum Aptitude Test</p>
      </div>

      {/* Security Status Alert */}
      <Alert
        variant={securityStatus === "excellent" ? "default" : securityStatus === "warning" ? "warning" : "destructive"}
        className="mb-6"
      >
        <Shield className="h-4 w-4" />
        <AlertDescription>{securityMessage}</AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <Award className="h-5 w-5 mr-2 text-yellow-500" />
              Scholarship Eligibility
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">{results.scholarshipPercentage}%</div>
            <p className="text-sm text-muted-foreground">Scholarship discount</p>
            <div className="mt-4">
              <div className="text-sm font-medium mb-1">Recommended Program:</div>
              <div className="text-primary font-medium">{results.recommendedProgram}</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <BarChart className="h-5 w-5 mr-2 text-blue-500" />
              Overall Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold mb-2">{Math.round(results.totalScore)}%</div>
            <Progress value={results.totalScore} className="h-2 mb-2" />
            <div className="flex justify-between text-sm">
              <div>
                <CheckCircle className="h-4 w-4 inline mr-1 text-green-500" />
                {results.totalCorrect} correct
              </div>
              <div>
                <XCircle className="h-4 w-4 inline mr-1 text-red-500" />
                {results.totalQuestions - results.totalCorrect} incorrect
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <Clock className="h-4 w-4 mr-1 text-orange-500" />
              <span className="text-sm">Time taken: {formatTime(results.timeTaken)}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center">
              <AlertTriangle className="h-5 w-5 mr-2 text-orange-500" />
              Areas for Improvement
            </CardTitle>
          </CardHeader>
          <CardContent>
            {results.subjectResults
              .sort((a, b) => a.score - b.score)
              .slice(0, 3)
              .map((subject) => (
                <div key={subject.subject} className="mb-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">{subject.subject}</span>
                    <span className="text-sm">{subject.score}%</span>
                  </div>
                  <Progress value={subject.score} className="h-1.5" />
                </div>
              ))}
            {results.subjectResults.length === 0 && (
              <p className="text-sm text-muted-foreground">No subject data available</p>
            )}
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.subjectResults.map((subject) => (
              <div key={subject.subject}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{subject.subject}</span>
                  <span className="text-sm font-medium">
                    {subject.correct}/{subject.total} ({subject.score}%)
                  </span>
                </div>
                <Progress value={subject.score} className="h-2 mb-1" />
                <p className="text-sm text-muted-foreground mt-1">
                  {subject.score >= 80
                    ? "Excellent understanding"
                    : subject.score >= 60
                      ? "Good understanding with some gaps"
                      : "Needs improvement"}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <Button onClick={handleGeneratePDF} disabled={isGeneratingPDF} className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          {isGeneratingPDF ? "Generating PDF..." : "Download Results"}
        </Button>
        <Button variant="outline" onClick={onRestart}>
          Take Another Test
        </Button>
      </div>
    </div>
  )
}
