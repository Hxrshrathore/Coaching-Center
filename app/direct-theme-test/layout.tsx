import type React from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { NavbarWithDirectToggle } from "@/components/navbar-with-direct-toggle"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default function DirectThemeTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
          <NavbarWithDirectToggle />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
