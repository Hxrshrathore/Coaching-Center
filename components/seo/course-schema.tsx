interface CourseSchemaProps {
  name: string
  description: string
  provider?: string
  courseCode?: string
  hasCourseInstance?: boolean
  startDate?: string
  endDate?: string
  location?: string
  price?: number
  priceCurrency?: string
  url?: string
  image?: string
}

export function CourseSchema({
  name,
  description,
  provider = "Ascent Coaching Classes",
  courseCode,
  hasCourseInstance = false,
  startDate,
  endDate,
  location = "Dayal Residency, A-300B, Vasundhara State, Chinhat, Lucknow, UP 226028",
  price,
  priceCurrency = "INR",
  url = "https://ascentcoachingclasses.com",
  image = "https://ascentcoachingclasses.com/logo.png",
}: CourseSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
      sameAs: "https://ascentcoachingclasses.com",
    },
    url: url,
    image: image,
  }

  // Add course code if provided
  if (courseCode) {
    schema.courseCode = courseCode
  }

  // Add course instance if needed
  if (hasCourseInstance && startDate && endDate) {
    schema.hasCourseInstance = {
      "@type": "CourseInstance",
      courseMode: "OFFLINE",
      location: {
        "@type": "Place",
        name: location,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Lucknow",
          addressRegion: "Uttar Pradesh",
          postalCode: "226028",
          addressCountry: "IN",
        },
      },
      startDate,
      endDate,
    }

    // Add price if provided
    if (price) {
      schema.hasCourseInstance.offers = {
        "@type": "Offer",
        price,
        priceCurrency,
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="course-jsonld"
    />
  )
}
