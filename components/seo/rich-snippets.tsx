"use client"

import { useEffect } from "react"

interface FAQItem {
  question: string
  answer: string
}

interface CourseInfo {
  name: string
  description: string
  provider: string
  url: string
}

interface RichSnippetsProps {
  type: "FAQ" | "Course" | "LocalBusiness" | "Event"
  data: FAQItem[] | CourseInfo | any
}

export function RichSnippets({ type, data }: RichSnippetsProps) {
  useEffect(() => {
    // This component doesn't render anything visible
    // It just adds structured data to the page
  }, [])

  let structuredData: any = {}

  switch (type) {
    case "FAQ":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: (data as FAQItem[]).map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }
      break

    case "Course":
      const courseInfo = data as CourseInfo
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        name: courseInfo.name,
        description: courseInfo.description,
        provider: {
          "@type": "Organization",
          name: courseInfo.provider,
          sameAs: courseInfo.url,
        },
      }
      break

    case "LocalBusiness":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        ...data,
      }
      break

    case "Event":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalEvent",
        ...data,
      }
      break
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
