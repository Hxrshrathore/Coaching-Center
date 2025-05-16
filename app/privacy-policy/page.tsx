import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata: Metadata = {
  title: "Privacy Policy | Ascent Coaching Classes",
  description: "Our commitment to protecting your privacy and personal information at Ascent Coaching Classes.",
  openGraph: {
    title: "Privacy Policy | Ascent Coaching Classes",
    description: "Our commitment to protecting your privacy and personal information at Ascent Coaching Classes.",
    url: "/privacy-policy",
    siteName: "Ascent Coaching Classes",
    locale: "en_US",
    type: "website",
  },
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 pt-28">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Privacy Policy</h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Our commitment to protecting your privacy and personal information at Ascent Coaching Classes.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            <FadeIn>
              <h2>Introduction</h2>
              <p>
                At Ascent Coaching Classes, we respect your privacy and are committed to protecting your personal data.
                This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>

              <h2>The Data We Collect About You</h2>
              <p>
                Personal data, or personal information, means any information about an individual from which that person
                can be identified. We may collect, use, store and transfer different kinds of personal data about you
                which we have grouped together as follows:
              </p>
              <ul>
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier, date of
                  birth.
                </li>
                <li>
                  <strong>Contact Data</strong> includes billing address, delivery address, email address and telephone
                  numbers.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version,
                  time zone setting and location, browser plug-in types and versions, operating system and platform, and
                  other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website, products and services.
                </li>
              </ul>

              <h2>How We Use Your Personal Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul>
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors and other third parties who have a business
                need to know.
              </p>

              <h2>Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                reporting requirements.
              </p>

              <h2>Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul>
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our privacy policy from time to time. We will notify you of any changes by posting the new
                privacy policy on this page and updating the "last updated" date at the top of this privacy policy.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p>
                Email: privacy@ascentcoachingclasses.com
                <br />
                Phone: +91 98765 43210
                <br />
                Address: Ascent Coaching Classes, Main Street, Mumbai, India
              </p>

              <p className="text-sm text-slate-500 mt-8">Last Updated: May 1, 2023</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Ready to Begin Your Journey With Us?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-enrolled">
                  <Button size="lg" className="gap-1 bg-white text-blue-600 hover:bg-blue-50">
                    Enroll Now
                  </Button>
                </Link>
                <Link href="/reach-out">
                  <Button size="lg" variant="outline" className="border-blue-200 text-white hover:bg-blue-700">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
