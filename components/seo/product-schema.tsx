interface ProductSchemaProps {
  name: string
  description: string
  image: string
  brand?: string
  offers?: {
    price: number
    priceCurrency: string
    availability: "InStock" | "OutOfStock" | "PreOrder"
    url?: string
    validFrom?: string
    priceValidUntil?: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
  sku?: string
  mpn?: string
  category?: string
}

export function ProductSchema({
  name,
  description,
  image,
  brand = "Ascent Coaching Classes",
  offers,
  aggregateRating,
  sku,
  mpn,
  category,
}: ProductSchemaProps) {
  const schema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image,
  }

  // Add brand if provided
  if (brand) {
    schema.brand = {
      "@type": "Brand",
      name: brand,
    }
  }

  // Add offers if provided
  if (offers) {
    schema.offers = {
      "@type": "Offer",
      price: offers.price,
      priceCurrency: offers.priceCurrency,
      availability: `https://schema.org/${offers.availability}`,
      url: offers.url || "https://ascentcoachingclasses.com",
    }

    if (offers.validFrom) schema.offers.validFrom = offers.validFrom
    if (offers.priceValidUntil) schema.offers.priceValidUntil = offers.priceValidUntil
  }

  // Add aggregate rating if provided
  if (aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    }
  }

  // Add additional properties if provided
  if (sku) schema.sku = sku
  if (mpn) schema.mpn = mpn
  if (category) schema.category = category

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      key="product-jsonld"
    />
  )
}
