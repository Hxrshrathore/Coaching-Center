import type { Metadata } from "next"

interface GenerateMetadataProps {
  title: string
  description: string
  path: string
  baseUrl?: string
  ogImage?: string
  keywords?: string[]
}

export function generateMetadata({
  title,
  description,
  path,
  baseUrl = "https://ascentclasses.com",
  ogImage = "/og-image.png",
  keywords = [],
}: GenerateMetadataProps): Metadata {
  // Ensure path starts with a slash
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  // Create absolute URLs
  const canonicalUrl = `${baseUrl}${normalizedPath}`
  const absoluteOgImage = ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "Ascent Classes",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: absoluteOgImage,
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
      images: [absoluteOgImage],
    },
  }
}
