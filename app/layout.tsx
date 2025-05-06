import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

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
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </div>
      </body>
    </html>
  )
}
