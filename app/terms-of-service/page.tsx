import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animations/fade-in"

export const metadata: Metadata = {
  title: "Terms of Service | Ascent Coaching Classes",
  description: "Terms and conditions governing the use of Ascent Coaching Classes services and website.",
  openGraph: {
    title: "Terms of Service | Ascent Coaching Classes",
    description: "Terms and conditions governing the use of Ascent Coaching Classes services and website.",
    url: "/terms-of-service",
    siteName: "Ascent Coaching Classes",
    locale: "en_US",
    type: "website",
  },
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">Terms of Service</h1>
            <p className="text-lg text-slate-600 max-w-3xl">
              Terms and conditions governing the use of Ascent Coaching Classes services and website.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg prose-slate">
            <FadeIn>
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Ascent Coaching Classes website and services, you accept and agree to be
                bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please
                do not use this service.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                Ascent Coaching Classes provides educational coaching services, online resources, and related services
                to help students prepare for various competitive examinations. The specific services offered may change
                from time to time.
              </p>

              <h2>3. Registration and Enrollment</h2>
              <p>
                Some portions of the Ascent Coaching Classes service require registration and enrollment. When
                registering for Ascent Coaching Classes, you agree to provide accurate, current, and complete
                information about yourself as prompted by the registration form.
              </p>

              <h2>4. Fees and Payments</h2>
              <p>
                Fees for our coaching programs and services are as stated on our website or as communicated to you
                during enrollment. All fees are non-refundable unless otherwise specified in our refund policy.
              </p>
              <p>
                Payment methods accepted include credit/debit cards, net banking, UPI, and other methods as specified on
                our website. All payments must be made in advance of receiving services.
              </p>

              <h2>5. Intellectual Property Rights</h2>
              <p>
                All content included on the website, such as text, graphics, logos, images, audio clips, digital
                downloads, data compilations, and software, is the property of Ascent Coaching Classes or its content
                suppliers and is protected by Indian and international copyright laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                perform, republish, download, store, or transmit any of the material on our website without our prior
                written consent.
              </p>

              <h2>6. User Conduct</h2>
              <p>You agree not to use the service to:</p>
              <ul>
                <li>
                  Upload or transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory,
                  vulgar, obscene, or otherwise objectionable.
                </li>
                <li>
                  Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a
                  person or entity.
                </li>
                <li>
                  Upload or transmit any content that infringes any patent, trademark, trade secret, copyright, or other
                  proprietary rights of any party.
                </li>
                <li>Interfere with or disrupt the service or servers or networks connected to the service.</li>
              </ul>

              <h2>7. Termination</h2>
              <p>
                Ascent Coaching Classes reserves the right to terminate your access to the service, without cause or
                notice, which may result in the forfeiture and destruction of all information associated with your
                account.
              </p>

              <h2>8. Disclaimer of Warranties</h2>
              <p>
                The service is provided on an "as is" and "as available" basis without any warranties of any kind,
                including that the service will operate error-free or that the service, its servers, or its content are
                free of computer viruses or similar contamination or destructive features.
              </p>

              <h2>9. Limitation of Liability</h2>
              <p>
                In no event shall Ascent Coaching Classes, its officers, directors, employees, or agents, be liable to
                you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever
                resulting from any (i) errors, mistakes, or inaccuracies of content, (ii) personal injury or property
                damage, of any nature whatsoever, resulting from your access to and use of our service, (iii) any
                unauthorized access to or use of our secure servers and/or any and all personal information and/or
                financial information stored therein.
              </p>

              <h2>10. Changes to Terms</h2>
              <p>
                Ascent Coaching Classes reserves the right to modify these terms at any time. We will notify users of
                any changes by posting the new Terms of Service on this page and updating the "last updated" date.
              </p>

              <h2>11. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, without regard to its
                conflict of law provisions.
              </p>

              <h2>12. Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                Email: legal@ascentclasses.com
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
