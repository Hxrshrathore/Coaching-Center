import type { Metadata } from "next"

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
  pagePath?: string
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl = "",
  ogImage = "/og-image.png",
  ogType = "website",
  pagePath = "",
}: PageMetadataProps): Metadata {
  // Add default keywords related to Ascent Coaching Classes
  const defaultKeywords = [
    "Ascent Coaching Classes",
    "coaching in Lucknow",
    "JEE coaching",
    "NEET preparation",
    "small batch coaching",
    "10 students per batch",
  ]

  // Combine with page-specific keywords
  const allKeywords = [...keywords, ...defaultKeywords]

  // Ensure canonical URL is absolute
  const fullCanonicalUrl = canonicalUrl
    ? canonicalUrl
    : pagePath
      ? `https://ascentcoachingclasses.com${pagePath}`
      : undefined

  return {
    title: `${title} | Ascent Coaching Classes`,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: fullCanonicalUrl,
    },
    openGraph: {
      title,
      description,
      type: ogType,
      url: fullCanonicalUrl,
      siteName: "Ascent Coaching Classes",
      locale: "en_IN",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: "@ascentclasses",
      site: "@ascentclasses",
    },
  }
}
