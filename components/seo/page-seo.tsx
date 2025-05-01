import type { Metadata } from "next"

interface PageSEOProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogImageAlt?: string
  twitterImage?: string
  canonicalUrl?: string
  noIndex?: boolean
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  ogImage = "/og-image.png",
  ogImageAlt = "Ascent Coaching Classes",
  twitterImage = "/twitter-image.png",
  canonicalUrl,
  noIndex = false,
}: PageSEOProps): Metadata {
  // Base URL for the site
  const baseUrl = "https://ascentclasses.com"

  // Construct canonical URL
  const canonical = canonicalUrl ? `${baseUrl}${canonicalUrl}` : undefined

  return {
    title,
    description,
    keywords: [
      "coaching classes",
      "JEE coaching",
      "NEET preparation",
      "SSC coaching",
      "Bank exam preparation",
      "Lucknow coaching",
      "best coaching institute",
      "competitive exam preparation",
      "Chinhat coaching",
      "entrance exam coaching",
      "Ascent Classes",
      ...keywords,
    ],
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  }
}
