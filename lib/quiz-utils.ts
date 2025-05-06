import { questionBank } from "@/data/question-bank"
import type {
  StudentInfo,
  QuizState,
  Question,
  UserAnswer,
  QuizResults,
  SubjectResult,
  QuestionAnalysis,
} from "@/types/scholarship"

// Generate a quiz based on student information
export function generateQuiz(studentInfo: StudentInfo): QuizState {
  const { currentClass, academicGoal } = studentInfo

  // Filter questions based on class and academic goal
  let filteredQuestions = questionBank.filter((q) => {
    // For class 11, prioritize class 11 questions with some from lower classes
    if (currentClass === "11") {
      return (
        q.classLevel === "11" ||
        (q.classLevel === "10" && Math.random() < 0.3) ||
        (q.classLevel === "9" && Math.random() < 0.1)
      )
    }
    // For class 12, prioritize classes 11 & 12
    else if (currentClass === "12") {
      return q.classLevel === "12" || (q.classLevel === "11" && Math.random() < 0.4)
    }
    // For other classes, focus on their level with some from one level higher
    else {
      return (
        q.classLevel === currentClass ||
        (q.classLevel === (Number.parseInt(currentClass) + 1).toString() && Math.random() < 0.2)
      )
    }
  })

  // Further filter based on academic goal
  if (academicGoal === "JEE") {
    filteredQuestions = filteredQuestions.filter(
      (q) => q.subject === "Physics" || q.subject === "Chemistry" || q.subject === "Mathematics",
    )
  } else if (academicGoal === "NEET") {
    filteredQuestions = filteredQuestions.filter(
      (q) => q.subject === "Physics" || q.subject === "Chemistry" || q.subject === "Biology",
    )
  } else if (academicGoal === "Olympiad") {
    // For Olympiad, prioritize more challenging questions
    filteredQuestions = filteredQuestions.filter((q) => q.difficulty === "Hard" || q.difficulty === "Medium")
  }
  // For K12, we keep a mix of all subjects

  // Shuffle the filtered questions
  const shuffledQuestions = shuffleArray(filteredQuestions)

  // Select questions for the quiz
  const physicsQuestions = shuffledQuestions.filter((q) => q.subject === "Physics").slice(0, 10)

  const chemistryQuestions = shuffledQuestions.filter((q) => q.subject === "Chemistry").slice(0, 10)

  // Select the third subject based on academic goal
  let thirdSubjectQuestions: Question[] = []

  if (academicGoal === "JEE") {
    thirdSubjectQuestions = shuffledQuestions.filter((q) => q.subject === "Mathematics").slice(0, 10)
  } else if (academicGoal === "NEET") {
    thirdSubjectQuestions = shuffledQuestions.filter((q) => q.subject === "Biology").slice(0, 10)
  } else {
    // For Olympiad and K12, use a mix of other subjects
    thirdSubjectQuestions = shuffledQuestions
      .filter((q) => q.subject !== "Physics" && q.subject !== "Chemistry")
      .slice(0, 10)
  }

  // Combine and shuffle all selected questions
  const selectedQuestions = shuffleArray([...physicsQuestions, ...chemistryQuestions, ...thirdSubjectQuestions])

  // Ensure we have exactly 30 questions, padding if necessary
  const finalQuestions = selectedQuestions.slice(0, 30)

  // If we don't have enough questions, duplicate some
  while (finalQuestions.length < 30) {
    const randomIndex = Math.floor(Math.random() * selectedQuestions.length)
    finalQuestions.push({ ...selectedQuestions[randomIndex], id: `duplicate-${finalQuestions.length}` })
  }

  return {
    questions: finalQuestions,
    startTime: Date.now(),
  }
}

// Calculate quiz results
export function calculateResults(
  quizState: QuizState,
  userAnswers: UserAnswer[],
  timeTaken: number,
  studentInfo: StudentInfo,
): QuizResults {
  // Calculate total score
  const totalQuestions = quizState.questions.length
  const totalCorrect = userAnswers.filter((a) => a.isCorrect).length
  const totalScore = Math.round((totalCorrect / totalQuestions) * 100)

  // Calculate subject-wise results
  const subjects = [...new Set(quizState.questions.map((q) => q.subject))]
  const subjectResults: SubjectResult[] = subjects.map((subject) => {
    const subjectQuestions = quizState.questions.filter((q) => q.subject === subject)
    const subjectAnswers = userAnswers.filter((a, i) => quizState.questions[i].subject === subject)
    const correct = subjectAnswers.filter((a) => a.isCorrect).length
    const total = subjectQuestions.length
    const score = Math.round((correct / total) * 100)

    return {
      subject,
      correct,
      total,
      score,
    }
  })

  // Generate question analysis
  const questionAnalysis: QuestionAnalysis[] = quizState.questions.map((q, i) => {
    const userAnswer = userAnswers[i]
    return {
      id: q.id,
      question: q.question,
      subject: q.subject,
      topic: q.topic,
      difficulty: q.difficulty,
      userAnswer: userAnswer.selectedOption !== null ? q.options[userAnswer.selectedOption] : "Not answered",
      correctAnswer: q.options[q.correctOption],
      isCorrect: userAnswer.isCorrect,
    }
  })

  // Calculate scholarship percentage based on score
  let scholarshipPercentage = 0
  if (totalScore >= 90) scholarshipPercentage = 50
  else if (totalScore >= 80) scholarshipPercentage = 40
  else if (totalScore >= 70) scholarshipPercentage = 30
  else if (totalScore >= 60) scholarshipPercentage = 20
  else if (totalScore >= 50) scholarshipPercentage = 10

  // Determine recommended program based on academic goal and performance
  let recommendedProgram = ""
  const { academicGoal, currentClass } = studentInfo

  if (academicGoal === "JEE") {
    if (totalScore >= 70) recommendedProgram = "JEE Advanced Preparation Program"
    else recommendedProgram = "JEE Foundation Program"
  } else if (academicGoal === "NEET") {
    if (totalScore >= 70) recommendedProgram = "NEET Achievers Program"
    else recommendedProgram = "NEET Foundation Program"
  } else if (academicGoal === "Olympiad") {
    recommendedProgram = "Olympiad Excellence Program"
  } else {
    recommendedProgram = `Class ${currentClass} Comprehensive Program`
  }

  // Identify strengths and weaknesses
  const strengths: string[] = []
  const weaknesses: string[] = []

  // Add subject-based strengths and weaknesses
  subjectResults.forEach((subject) => {
    if (subject.score >= 70) {
      strengths.push(`Strong performance in ${subject.subject} (${subject.score}%)`)
    } else if (subject.score <= 40) {
      weaknesses.push(`Needs improvement in ${subject.subject} (${subject.score}%)`)
    }
  })

  // Add topic-based strengths and weaknesses
  const topicPerformance = new Map<string, { correct: number; total: number }>()

  questionAnalysis.forEach((q) => {
    const key = `${q.subject} - ${q.topic}`
    if (!topicPerformance.has(key)) {
      topicPerformance.set(key, { correct: 0, total: 0 })
    }

    const current = topicPerformance.get(key)!
    topicPerformance.set(key, {
      correct: current.correct + (q.isCorrect ? 1 : 0),
      total: current.total + 1,
    })
  })

  topicPerformance.forEach((performance, topic) => {
    const score = (performance.correct / performance.total) * 100
    if (performance.total >= 2) {
      if (score === 100) {
        strengths.push(`Excellent understanding of ${topic} (100%)`)
      } else if (score === 0) {
        weaknesses.push(`Critical weakness in ${topic} (0%)`)
      }
    }
  })

  // Limit the number of strengths and weaknesses
  const limitedStrengths = strengths.slice(0, 5)
  const limitedWeaknesses = weaknesses.slice(0, 5)

  return {
    totalScore,
    totalCorrect,
    totalQuestions,
    timeTaken,
    subjectResults,
    questionAnalysis,
    scholarshipPercentage,
    recommendedProgram,
    strengths: limitedStrengths,
    weaknesses: limitedWeaknesses,
  }
}

// Helper function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}
