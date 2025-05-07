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
  title: "Premier Coaching for JEE, NEET & Olympiads",
  description: "Specialized coaching for JEE, NEET, Olympiads and K-12 science subjects.",
  metadataBase: new URL("https://ascentclasses.com"),
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload critical assets */}
        <link rel="preload" href="/logo.png" as="image" />
        <link rel="preload" href="/carousel-jee.png" as="image" />

        {/* Preconnect to external domains if any */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Inline critical theme script to prevent flash of incorrect theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme') || 'light';
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              } else {
                document.documentElement.classList.remove('dark');
              }
            } catch (e) {
              console.error('Theme initialization error:', e);
            }
          })();
        `,
          }}
        />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <div className="flex flex-col bg-background text-foreground min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
