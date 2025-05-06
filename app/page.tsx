import type { Metadata } from "next"
import { StructuredData } from "@/components/seo/structured-data"
import { EnhancedHomepage } from "@/components/home/enhanced-homepage"

// SEO Metadata
export const metadata: Metadata = {
  title: "Ascent Classes | Top Coaching Institute in Lucknow for JEE, NEET & Olympiads",
  description:
    "Ascent Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science. Join our proven teaching methodology with experienced faculty to achieve academic excellence and secure top ranks.",
  metadataBase: new URL("https://ascentclasses.com"),
  alternates: {
    canonical: "https://ascentclasses.com/",
  },
  keywords: [
    "top coaching in Lucknow",
    "JEE coaching",
    "NEET preparation",
    "Olympiad training",
    "K-12 Science coaching",
    "best coaching institute",
    "entrance exam preparation",
    "scholarship test",
    "academic excellence",
  ],
}

// Enhanced structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ascent Classes",
  url: "https://ascentclasses.com",
  logo: "https://ascentclasses.com/logo.png",
  description:
    "Ascent Classes in Lucknow offers comprehensive coaching for JEE, NEET, Olympiads, K-12 Science and more.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Dayal Residency, A-300B, Vasundhara State, Chinhat",
    addressLocality: "Lucknow",
    addressRegion: "Uttar Pradesh",
    postalCode: "226028",
    addressCountry: "IN",
  },
  telephone: "+919565292454",
  email: "ascentcoachingclasses.lko@gmail.com",
  sameAs: [
    "https://www.facebook.com/ascentclasses",
    "https://www.instagram.com/ascentclasses",
    "https://www.youtube.com/ascentclasses",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "235",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Coaching Programs",
    itemListElement: [
      {
        "@type": "Course",
        name: "JEE Coaching",
        description: "Comprehensive coaching for JEE Main and Advanced",
        provider: {
          "@type": "Organization",
          name: "Ascent Classes",
        },
      },
      {
        "@type": "Course",
        name: "NEET Preparation",
        description: "Expert coaching for NEET aspirants",
        provider: {
          "@type": "Organization",
          name: "Ascent Classes",
        },
      },
      {
        "@type": "Course",
        name: "Olympiad Training",
        description: "Specialized coaching for Science and Math Olympiads",
        provider: {
          "@type": "Organization",
          name: "Ascent Classes",
        },
      },
      {
        "@type": "Course",
        name: "K-12 Science Coaching",
        description: "Foundation and advanced courses for PCMB subjects",
        provider: {
          "@type": "Organization",
          name: "Ascent Classes",
        },
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      {/* Enhanced homepage component with animations and interactive elements */}
      <EnhancedHomepage />
    </>
  )
}
