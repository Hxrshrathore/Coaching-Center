interface LocalBusinessSchemaProps {
  businessName?: string
  description?: string
  telephone?: string
  email?: string
  streetAddress?: string
  addressLocality?: string
  addressRegion?: string
  postalCode?: string
  addressCountry?: string
  latitude?: number
  longitude?: number
  priceRange?: string
  openingHours?: string[]
  images?: string[]
}

export function LocalBusinessSchema({
  businessName = "Ascent Coaching Classes",
  description = "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students per batch.",
  telephone = "+919565292454",
  email = "ascentcoachingclasses.lko@gmail.com",
  streetAddress = "Dayal Residency, A-300B, Vasundhara State, Chinhat",
  addressLocality = "Lucknow",
  addressRegion = "Uttar Pradesh",
  postalCode = "226028",
  addressCountry = "IN",
  latitude = 26.8467,
  longitude = 80.9462,
  priceRange = "₹₹",
  openingHours = ["Mo-Sa 09:00-18:00"],
  images = ["https://ascentcoachingclasses.com/logo.png", "https://ascentcoachingclasses.com/building.jpg"],
}: LocalBusinessSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://ascentcoachingclasses.com/#organization",
    name: businessName,
    description,
    url: "https://ascentcoachingclasses.com",
    telephone,
    email,
    logo: "https://ascentcoachingclasses.com/logo.png",
    image: images,
    priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      addressRegion,
      postalCode,
      addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    openingHoursSpecification: openingHours.map((hours) => {
      const [days, timeRange] = hours.split(" ")
      const [opens, closes] = timeRange.split("-")
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days.split("-").map((day) => {
          const dayMap: Record<string, string> = {
            Mo: "Monday",
            Tu: "Tuesday",
            We: "Wednesday",
            Th: "Thursday",
            Fr: "Friday",
            Sa: "Saturday",
            Su: "Sunday",
          }
          return dayMap[day as keyof typeof dayMap]
        }),
        opens,
        closes,
      }
    }),
    sameAs: [
      "https://www.facebook.com/ascentcoachingclasses",
      "https://www.instagram.com/ascentcoachingclasses",
      "https://www.youtube.com/ascentcoachingclasses",
    ],
    areaServed: {
      "@type": "City",
      name: "Lucknow",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Coaching Programs",
      itemListElement: [
        {
          "@type": "Course",
          name: "JEE Coaching",
          description: "Comprehensive coaching for JEE Main and Advanced with small batch sizes of just 10 students",
        },
        {
          "@type": "Course",
          name: "NEET Preparation",
          description: "Expert coaching for NEET aspirants with small batch sizes of just 10 students",
        },
        {
          "@type": "Course",
          name: "Olympiad Training",
          description: "Specialized coaching for Science and Math Olympiads with small batch sizes of just 10 students",
        },
        {
          "@type": "Course",
          name: "K-12 Science Coaching",
          description: "Foundation and advanced courses for PCMB subjects with small batch sizes of just 10 students",
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="local-business-jsonld"
    />
  )
}
