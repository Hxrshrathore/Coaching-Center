import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/ui/back-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://ascentclasses.com"),
  title: {
    default: "Ascent Coaching Classes | Top Coaching Institute in Lucknow",
    template: "%s | Ascent Coaching Classes",
  },
  description:
    "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, SSC, Banking exams. Join us to achieve academic excellence with our experienced faculty and proven teaching methodology.",
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
  ],
  authors: [{ name: "Ascent Coaching Classes" }],
  creator: "Ascent Coaching Classes",
  publisher: "Ascent Coaching Classes",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: ["/shortcut-icon.png"],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ascentclasses.com",
    title: "Ascent Coaching Classes | Top Coaching Institute in Lucknow",
    description:
      "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, SSC, Banking exams. Join us to achieve academic excellence.",
    siteName: "Ascent Coaching Classes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ascent Coaching Classes Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascent Coaching Classes | Top Coaching Institute in Lucknow",
    description:
      "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, SSC, Banking exams. Join us to achieve academic excellence.",
    images: ["/twitter-image.png"],
    creator: "@ascentclasses",
  },
  alternates: {
    canonical: "https://ascentclasses.com",
    languages: {
      "en-US": "https://ascentclasses.com/en-US",
      "hi-IN": "https://ascentclasses.com/hi-IN",
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "education",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.87256;81.03387" />
        <meta name="ICBM" content="26.87256, 81.03387" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <BackToTop />

        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Ascent Coaching Classes",
              url: "https://ascentclasses.com",
              logo: "https://ascentclasses.com/logo.png",
              sameAs: [
                "https://www.facebook.com/ascentclasses",
                "https://www.twitter.com/ascentclasses",
                "https://www.instagram.com/ascentclasses",
                "https://www.linkedin.com/company/ascentclasses",
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "Dayal Residency, A-300B, Vasundhara State, Chinhat",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226028",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "26.87256",
                longitude: "81.03387",
              },
              telephone: "+919565292454",
              email: "ascentcoachingclasses.lko@gmail.com",
              openingHours: "Mo-Fr 08:00-20:00, Sa-Su 09:00-18:00",
              description:
                "Ascent Coaching Classes in Lucknow offers comprehensive coaching for JEE, NEET, SSC, Bank exams and more. Join us for quality education and guidance.",
            }),
          }}
        />
      </body>
    </html>
  )
}
