import type { Metadata } from "next"
import { StructuredData } from "@/components/seo/structured-data"
import { EnhancedHomepage } from "@/components/home/enhanced-homepage"

// SEO Metadata
export const metadata: Metadata = {
  title: "Ascent Coaching Classes | #1 Coaching Institute in Lucknow for JEE, NEET & Olympiads",
  description:
    "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students per batch. Join our proven teaching methodology with experienced faculty to achieve academic excellence and secure top ranks.",
  metadataBase: new URL("https://ascentcoachingclasses.com"),
  alternates: {
    canonical: "https://ascentcoachingclasses.com/",
  },
  keywords: [
    "Ascent Coaching Classes",
    "top coaching in Lucknow",
    "JEE coaching Lucknow",
    "NEET preparation Lucknow",
    "Olympiad training",
    "small batch coaching",
    "K-12 Science coaching",
    "best coaching institute",
    "entrance exam preparation",
    "scholarship test",
    "academic excellence",
    "10 students per batch",
  ],
}

// Enhanced structured data for better SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ascent Coaching Classes",
  url: "https://ascentcoachingclasses.com",
  logo: "https://ascentcoachingclasses.com/logo.png",
  description:
    "Ascent Coaching Classes in Lucknow offers comprehensive coaching for JEE, NEET, Olympiads, K-12 Science with small batch sizes of just 10 students per batch.",
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
    "https://www.facebook.com/ascentcoachingclasses",
    "https://www.instagram.com/ascentcoachingclasses",
    "https://www.youtube.com/ascentcoachingclasses",
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
        description: "Comprehensive coaching for JEE Main and Advanced with small batch sizes of just 10 students",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
      {
        "@type": "Course",
        name: "NEET Preparation",
        description: "Expert coaching for NEET aspirants with small batch sizes of just 10 students",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
      {
        "@type": "Course",
        name: "Olympiad Training",
        description: "Specialized coaching for Science and Math Olympiads with small batch sizes of just 10 students",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
      {
        "@type": "Course",
        name: "K-12 Science Coaching",
        description: "Foundation and advanced courses for PCMB subjects with small batch sizes of just 10 students",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
    ],
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ascentcoachingclasses.com",
  },
  areaServed: {
    "@type": "City",
    name: "Lucknow",
  },
  foundingDate: "2015",
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lucknow",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
  },
  knowsAbout: ["JEE Preparation", "NEET Coaching", "Olympiad Training", "K-12 Science Education"],
  keywords: "Ascent Coaching Classes, JEE coaching, NEET preparation, Olympiad training, small batch coaching",
}

export default function Home() {
  return (
    <>
      {/* Add structured data */}
      <StructuredData data={structuredData} />

      {/* Enhanced homepage component with optimized animations and interactive elements */}
      <EnhancedHomepage />
    </>
  )
}
