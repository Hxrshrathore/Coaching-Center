import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { NewsletterForm } from "./ui/newsletter-form"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Our Vision", href: "/our-vision" },
    { name: "Programs", href: "/program-path" },
    { name: "Resources", href: "/resources-hub" },
    { name: "What's New", href: "/whats-new" },
    { name: "Toppers' Tales", href: "/toppers-tales" },
    { name: "Get Enrolled", href: "/get-enrolled" },
    { name: "Reach Out", href: "/reach-out" },
  ]

  const programLinks = [
    { name: "JEE Programs", href: "/program-path/jee" },
    { name: "NEET Programs", href: "/program-path/neet" },
    { name: "Olympiad Programs", href: "/olympiad-programs" },
    { name: "Class 4-12 Science", href: "/k12-science-coaching" },
  ]

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Sitemap", href: "/sitemap-page" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, href: "https://facebook.com" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, href: "https://twitter.com" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, href: "https://instagram.com" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, href: "https://youtube.com" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-10 w-10 bg-white rounded-full p-1">
                <Image src="/logo.png" alt="Ascent Classes Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl text-white">Ascent Classes</span>
            </div>
            <p className="text-sm mb-6">
              Ascent Classes is a premier coaching institute dedicated to helping students achieve academic excellence
              through quality education, personalized attention, and innovative teaching methodologies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-full hover:bg-indigo-600 transition-colors"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Programs</h3>
            <ul className="space-y-2">
              {programLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 mt-6 text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm hover:text-indigo-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-indigo-400" />
                <span className="text-sm">Dayal Residency, A-300B, Vasundhara State, Chinhat, Lucknow, UP 226028</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+919565292454" className="text-sm hover:text-indigo-400 transition-colors">
                  +91 9565292454
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a
                  href="mailto:ascentclasses.lko@gmail.com"
                  className="text-sm hover:text-indigo-400 transition-colors"
                >
                  ascentclasses.lko@gmail.com
                </a>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
            <NewsletterForm darkMode={true} />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-sm text-center">
          <p>&copy; {currentYear} Ascent Classes. All rights reserved.</p>
          <p className="mt-2 text-gray-500 text-xs">
            Designed and developed with ❤️ by{" "}
            <a
              href="https://hxrshrathore.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              hxrshrathore.me
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
