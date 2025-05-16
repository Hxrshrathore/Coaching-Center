interface PersonSchemaProps {
  name: string
  jobTitle?: string
  description?: string
  image?: string
  url?: string
  sameAs?: string[]
  worksFor?: string
  alumniOf?: string
  address?: {
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
}

export function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = [],
  worksFor = "Ascent Coaching Classes",
  alumniOf,
  address = {
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },
}: PersonSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name,
  }

  // Add optional properties if provided
  if (jobTitle) schema.jobTitle = jobTitle
  if (description) schema.description = description
  if (image) schema.image = image
  if (url) schema.url = url
  if (sameAs.length > 0) schema.sameAs = sameAs

  if (worksFor) {
    schema.worksFor = {
      "@type": "Organization",
      name: worksFor,
    }
  }

  if (alumniOf) {
    schema.alumniOf = {
      "@type": "Organization",
      name: alumniOf,
    }
  }

  if (address) {
    schema.address = {
      "@type": "PostalAddress",
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      addressCountry: address.addressCountry,
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="person-jsonld"
    />
  )
}
