import type { Metadata } from "next"
import { generatePageMetadata } from "@/components/seo/page-seo"
import { StructuredData } from "@/components/seo/structured-data"
import ClientPage from "./ClientPage"

// SEO Metadata
export const metadata: Metadata = generatePageMetadata({
  title: "Ascent Coaching Classes | Top Coaching Institute in Lucknow",
  description:
    "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, SSC, Banking exams. Join us to achieve academic excellence with our experienced faculty and proven teaching methodology.",
  keywords: ["top coaching in Lucknow", "JEE coaching", "NEET preparation", "SSC coaching", "Bank exam coaching"],
  canonicalUrl: "/",
})

const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Ascent Coaching Classes",
  url: "https://ascentclasses.com",
  logo: "https://ascentclasses.com/logo.png",
  description:
    "Ascent Coaching Classes in Lucknow offers comprehensive coaching for JEE, NEET, SSC, Bank exams and more.",
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
          name: "Ascent Coaching Classes",
        },
      },
      {
        "@type": "Course",
        name: "NEET Preparation",
        description: "Expert coaching for NEET aspirants",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
      {
        "@type": "Course",
        name: "SSC Coaching",
        description: "Specialized coaching for SSC exams",
        provider: {
          "@type": "Organization",
          name: "Ascent Coaching Classes",
        },
      },
    ],
  },
}

export default function Home() {
  return (
    <div>
      <ClientPage structuredData={structuredData} />
      {/* Add structured data */}
      <StructuredData data={structuredData} />
    </div>
  )
}
