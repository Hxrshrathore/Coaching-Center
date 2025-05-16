interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate?: string
  location?: {
    name: string
    address: string
    city: string
    state: string
    postalCode: string
    country: string
  }
  image?: string
  url?: string
  organizer?: string
  offers?: {
    price: number
    priceCurrency: string
    availability: "InStock" | "SoldOut" | "PreOrder"
    validFrom: string
  }
}

export function EventSchema({
  name,
  description,
  startDate,
  endDate,
  location = {
    name: "Ascent Coaching Classes",
    address: "Dayal Residency, A-300B, Vasundhara State, Chinhat",
    city: "Lucknow",
    state: "Uttar Pradesh",
    postalCode: "226028",
    country: "IN",
  },
  image = "https://ascentcoachingclasses.com/logo.png",
  url = "https://ascentcoachingclasses.com",
  organizer = "Ascent Coaching Classes",
  offers,
}: EventSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name,
    description,
    startDate,
    image,
    url,
    organizer: {
      "@type": "Organization",
      name: organizer,
      url: "https://ascentcoachingclasses.com",
    },
  }

  // Add end date if provided
  if (endDate) schema.endDate = endDate

  // Add location if provided
  if (location) {
    schema.location = {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address,
        addressLocality: location.city,
        addressRegion: location.state,
        postalCode: location.postalCode,
        addressCountry: location.country,
      },
    }
  }

  // Add offers if provided
  if (offers) {
    schema.offers = {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: `https://schema.org/${offers.availability}`,
      validFrom: offers.validFrom,
      url: url,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="event-jsonld"
    />
  )
}
