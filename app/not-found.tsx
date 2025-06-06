import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SEOHeading } from "@/components/ui/seo-heading"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <Image
        src="/404-illustration.png"
        alt="Page not found illustration"
        width={300}
        height={300}
        className="mb-8"
        priority
      />

      <SEOHeading level={1} className="mb-4">
        404 - Page Not Found
      </SEOHeading>

      <p className="mb-8 max-w-md text-slate-600 dark:text-slate-400">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700">Return to Homepage</Button>
        </Link>

        <Link href="/reach-out">
          <Button
            variant="outline"
            className="border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  )
}
