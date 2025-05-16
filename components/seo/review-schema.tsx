interface ReviewSchemaProps {
  itemReviewed: {
    name: string
    type: "Organization" | "Product" | "Service" | "Course"
    image?: string
    url?: string
  }
  reviewRating: {
    ratingValue: number
    bestRating?: number
    worstRating?: number
  }
  author: {
    name: string
    type?: "Person" | "Organization"
  }
  reviewBody: string
  datePublished?: string
}

export function ReviewSchema({
  itemReviewed,
  reviewRating,
  author,
  reviewBody,
  datePublished = new Date().toISOString().split("T")[0],
}: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": itemReviewed.type,
      name: itemReviewed.name,
      image: itemReviewed.image,
      url: itemReviewed.url,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: reviewRating.ratingValue,
      bestRating: reviewRating.bestRating || 5,
      worstRating: reviewRating.worstRating || 1,
    },
    author: {
      "@type": author.type || "Person",
      name: author.name,
    },
    reviewBody,
    datePublished,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="review-jsonld"
    />
  )
}
