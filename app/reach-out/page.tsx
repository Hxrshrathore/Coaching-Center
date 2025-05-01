import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ReachOut() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <main className="container mx-auto px-4 py-16 flex-grow">
        <section className="mb-16">
          <h1 className="text-4xl font-bold mb-4">Reach Out to Us</h1>
          <p className="text-gray-400">
            We'd love to hear from you! Whether you have questions, feedback, or just want to connect, please don't
            hesitate to reach out.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="text-gray-400">
            Email: info@example.com
            <br />
            Phone: (123) 456-7890
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-700 bg-gray-800 text-white shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </div>
            <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Send Message
            </Button>
          </form>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">Let's discuss your project and see how we can help.</p>
          <Link href="/reach-out">
            <Button
              size="lg"
              variant="outline"
              className="border-blue-200 text-blue-400 hover:bg-blue-700 hover:text-white"
            >
              Contact Us
            </Button>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  )
}
