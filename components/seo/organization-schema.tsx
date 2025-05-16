interface OrganizationSchemaProps {
  name?: string
  description?: string
  url?: string
  logo?: string
  address?: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  contactPoint?: {
    telephone: string
    contactType: string
    email?: string
    areaServed?: string
    availableLanguage?: string[]
  }
  sameAs?: string[]
  foundingDate?: string
  founders?: string[]
  numberOfEmployees?: number
  slogan?: string
  areaServed?: string | string[]
}

export function OrganizationSchema({
  name = "Ascent Coaching Classes",
  description = "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students per batch.",
  url = "https://ascentcoachingclasses.com",
  logo = "https://ascentcoachingclasses.com/logo.png",
  address = {
    streetAddress: "Dayal Residency, A-300B, Vasundhara State, Chinhat",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226028",
    addressCountry: "IN",
  },
  contactPoint = {
    telephone: "+919565292454",
    contactType: "customer service",
    email: "ascentcoachingclasses.lko@gmail.com",
    areaServed: "Lucknow",
    availableLanguage: ["English", "Hindi"],
  },
  sameAs = [
    "https://www.facebook.com/ascentcoachingclasses",
    "https://www.instagram.com/ascentcoachingclasses",
    "https://www.youtube.com/ascentcoachingclasses",
  ],
  foundingDate = "2015",
  founders = ["Ascent Education Group"],
  numberOfEmployees = 25,
  slogan = "Elevate Your Academic Success",
  areaServed = "Lucknow, Uttar Pradesh",
}: OrganizationSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://ascentcoachingclasses.com/#organization",
    name,
    description,
    url,
    logo,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: address.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactPoint.telephone,
      contactType: contactPoint.contactType,
      email: contactPoint.email,
      areaServed: contactPoint.areaServed,
      availableLanguage: contactPoint.availableLanguage,
    },
    sameAs,
  }

  // Add additional properties if provided
  if (foundingDate) schema.foundingDate = foundingDate
  if (founders && founders.length > 0) {
    schema.founders = founders.map((founder) => ({
      "@type": "Person",
      name: founder,
    }))
  }
  if (numberOfEmployees) {
    schema.numberOfEmployees = {
      "@type": "QuantitativeValue",
      value: numberOfEmployees,
    }
  }
  if (slogan) schema.slogan = slogan
  if (areaServed) {
    if (Array.isArray(areaServed)) {
      schema.areaServed = areaServed.map((area) => ({
        "@type": "City",
        name: area,
      }))
    } else {
      schema.areaServed = {
        "@type": "City",
        name: areaServed,
      }
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="organization-jsonld"
    />
  )
}
