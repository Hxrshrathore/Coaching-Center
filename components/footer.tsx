import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-t bg-white dark:bg-slate-950">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Ascent Classes Logo" width={180} height={50} className="h-12 w-auto" />
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Empowering students to achieve academic excellence and realize their dreams through quality education and
              guidance.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-slate-500 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-brand-text-dark dark:text-brand-text-light">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/our-vision"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/program-path"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Program Path
                </Link>
              </li>
              <li>
                <Link
                  href="/resources-hub"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Resources Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/whats-new"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  What's New
                </Link>
              </li>
              <li>
                <Link
                  href="/toppers-tales"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Topper's Tales
                </Link>
              </li>
              <li>
                <Link
                  href="/get-enrolled"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Get Enrolled
                </Link>
              </li>
              <li>
                <Link
                  href="/reach-out"
                  className="text-brand-text-muted hover:text-brand-blue dark:text-slate-300 dark:hover:text-brand-blue"
                >
                  Reach Out
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-brand-dark dark:text-white">Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/program-path?tab=ssc"
                  className="text-slate-600 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
                >
                  SSC Exams
                </Link>
              </li>
              <li>
                <Link
                  href="/program-path?tab=bank"
                  className="text-slate-600 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
                >
                  Bank Exams
                </Link>
              </li>
              <li>
                <Link
                  href="/program-path?tab=jee"
                  className="text-slate-600 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
                >
                  JEE
                </Link>
              </li>
              <li>
                <Link
                  href="/program-path?tab=neet"
                  className="text-slate-600 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
                >
                  NEET
                </Link>
              </li>
              <li>
                <Link
                  href="/program-path?tab=olympiads"
                  className="text-slate-600 hover:text-brand-blue dark:text-slate-400 dark:hover:text-brand-blue"
                >
                  Olympiads
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-brand-dark dark:text-white">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-brand-blue mt-0.5 dark:text-brand-blue"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="text-slate-600 dark:text-slate-400">+91 9565292454</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-brand-blue mt-0.5 dark:text-brand-blue"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span className="text-slate-600 dark:text-slate-400">ascentcoachingclasses.lko@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-brand-blue mt-0.5 dark:text-brand-blue"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-slate-600 dark:text-slate-400">
                  Dayal Residency, A-300B, Vasundhara State, Chinhat, Ganeshpur Rahmanpur, Lucknow, Uttar Pradesh 226028
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              © {new Date().getFullYear()} Ascent Coaching Classes. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-600 dark:text-slate-400">
              <Link href="/privacy-policy" className="hover:text-brand-blue dark:hover:text-brand-blue">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-brand-blue dark:hover:text-brand-blue">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="hover:text-brand-blue dark:hover:text-brand-blue">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
