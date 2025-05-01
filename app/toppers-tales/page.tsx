import { Button } from "@/components/ui/button"
import { Poppins } from "next/font/google"
import Link from "next/link"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const ToppersTalesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <main className="container mx-auto py-12 px-4">
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-bold ${poppins.className} mb-4`}>
            Toppers' Tales: Inspiring Stories of Success
          </h1>
          <p className={`text-lg ${poppins.className} text-gray-700`}>
            Read inspiring stories from students who aced their exams and achieved their dreams.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Example Topper Tale Card - Replace with dynamic data */}
          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className={`text-xl font-semibold ${poppins.className} mb-2`}>Acing the SATs: Sarah's Journey</h2>
            <p className={`text-gray-700 ${poppins.className}`}>
              Sarah shares her strategies for mastering the SATs and getting into her dream college.
            </p>
            <Link href="#" className="text-blue-500 hover:underline block mt-4">
              Read More
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className={`text-xl font-semibold ${poppins.className} mb-2`}>
              From Zero to Hero: John's Coding Success
            </h2>
            <p className={`text-gray-700 ${poppins.className}`}>
              John's inspiring story of learning to code and landing a job at a top tech company.
            </p>
            <Link href="#" className="text-blue-500 hover:underline block mt-4">
              Read More
            </Link>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-md p-6">
            <h2 className={`text-xl font-semibold ${poppins.className} mb-2`}>Mastering the MCAT: Emily's Tips</h2>
            <p className={`text-gray-700 ${poppins.className}`}>
              Emily provides valuable tips and resources for acing the MCAT and getting into medical school.
            </p>
            <Link href="#" className="text-blue-500 hover:underline block mt-4">
              Read More
            </Link>
          </div>
          {/* End Example Card */}
        </section>

        <section className="text-center">
          <h2 className={`text-3xl font-bold ${poppins.className} mb-4`}>Ready to Write Your Own Success Story?</h2>
          <p className={`text-lg ${poppins.className} text-gray-700 mb-8`}>
            Get the tools and resources you need to achieve your academic goals.
          </p>
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

export default ToppersTalesPage
