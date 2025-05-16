import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Ascent Coaching Classes - Top Coaching in Lucknow",
    default: "Ascent Coaching Classes | #1 Coaching Institute in Lucknow for JEE, NEET & Olympiads",
  },
  description:
    "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students. Join our proven teaching methodology with experienced faculty to achieve academic excellence and secure top ranks.",
  metadataBase: new URL("https://ascentcoachingclasses.com"),
  keywords: [
    "Ascent Coaching Classes",
    "best coaching in Lucknow",
    "top JEE coaching",
    "NEET preparation Lucknow",
    "Olympiad training",
    "small batch coaching",
    "K-12 Science coaching",
    "entrance exam preparation",
    "scholarship test",
    "academic excellence",
  ],
  authors: [{ name: "Ascent Coaching Classes" }],
  creator: "Ascent Coaching Classes",
  publisher: "Ascent Coaching Classes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://ascentcoachingclasses.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ascentcoachingclasses.com",
    title: "Ascent Coaching Classes | #1 Coaching Institute in Lucknow for JEE, NEET & Olympiads",
    description:
      "Ascent Coaching Classes in Lucknow offers expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students per batch.",
    siteName: "Ascent Coaching Classes",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ascent Coaching Classes - Top Coaching Institute in Lucknow",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ascent Coaching Classes | #1 Coaching Institute in Lucknow",
    description:
      "Expert coaching for JEE, NEET, Olympiads and K-12 Science with small batch sizes of just 10 students per batch.",
    images: ["/twitter-image.png"],
    creator: "@ascentclasses",
    site: "@ascentclasses",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "verification_token",
    yahoo: "verification_token",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/carousel-jee.png" as="image" />

        {/* Preconnect to external domains if any */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} overflow-x-hidden bg-white text-slate-900`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
