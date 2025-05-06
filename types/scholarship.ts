export interface StudentInfo {
  name: string
  email: string
  phone: string
  currentClass: string
  school: string
  city: string
  academicGoal: string
}

export interface Question {
  id: string
  question: string
  options: string[]
  correctOption: number
  subject: string
  topic: string
  difficulty: "easy" | "medium" | "hard"
  classLevel: string
}

export interface QuizState {
  questions: Question[]
  startTime: number
}

export interface UserAnswer {
  questionId: string
  selectedOption: number | null
  isCorrect: boolean
}

export interface SubjectResult {
  subject: string
  correct: number
  total: number
  score: number
}

export interface QuestionAnalysis {
  id: string
  question: string
  subject: string
  topic: string
  difficulty: string
  userAnswer: string
  correctAnswer: string
  isCorrect: boolean
}

export interface QuizResults {
  totalScore: number
  totalCorrect: number
  totalQuestions: number
  timeTaken: number
  subjectResults: SubjectResult[]
  questionAnalysis: QuestionAnalysis[]
  scholarshipPercentage: number
  recommendedProgram: string
  strengths: string[]
  weaknesses: string[]
  securityViolations?: number
  tabSwitchCount?: number
}
