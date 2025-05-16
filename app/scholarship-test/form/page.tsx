import type { Metadata } from "next"
import ScholarshipTestFormClientPage from "./ScholarshipTestFormClientPage"

export const metadata: Metadata = {
  title: "Scholarship Test Registration | Win Up to 100% Scholarship | Toppers Maker",
  description:
    "Fill out this form to start your scholarship test and win up to 100% scholarship for JEE, NEET, and other competitive exam preparation courses.",
  keywords:
    "scholarship test form, aptitude test registration, JEE scholarship, NEET scholarship, free scholarship test, competitive exam scholarship",
}

export default function ScholarshipTestFormPage() {
  return <ScholarshipTestFormClientPage />
}
