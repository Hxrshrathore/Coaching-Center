import type { Metadata } from "next"

interface PageMetadataProps {
  title: string
  description: string
  keywords?: string[]
  canonicalUrl?: string
  ogImage?: string
  ogType?: string
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonicalUrl = "",
  ogImage = "/og-image.png",
  ogType = "website",
}: PageMetadataProps): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl ? canonicalUrl : undefined,
    },
    openGraph: {
      title,
      description,
      type: ogType,
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
    },
  }
}
