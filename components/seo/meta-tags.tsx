import Head from "next/head"

interface MetaTagsProps {
  title: string
  description: string
  keywords?: string[]
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  canonicalUrl?: string
}

export function MetaTags({
  title,
  description,
  keywords = [],
  ogTitle,
  ogDescription,
  ogImage = "/og-image.png",
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonicalUrl,
}: MetaTagsProps) {
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

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(", ")} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ascent Coaching Classes" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || title} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description} />
      <meta name="twitter:image" content={twitterImage || ogImage} />
      <meta name="twitter:site" content="@ascentclasses" />
      <meta name="twitter:creator" content="@ascentclasses" />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Additional Meta Tags */}
      <meta name="author" content="Ascent Coaching Classes" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
    </Head>
  )
}
