import type { Metadata } from "next"
import OurVisionClientPage from "./OurVisionClientPage"

export const metadata: Metadata = {
  title: "Our Vision & Mission | Ascent Classes",
  description:
    "Discover our vision, mission, and core values at Ascent Classes. We are committed to providing quality education and helping students achieve academic excellence through innovative teaching methods and personalized guidance.",
  openGraph: {
    title: "Our Vision & Mission | Ascent Classes",
    description:
      "Discover our vision, mission, and core values at Ascent Classes. We are committed to providing quality education and helping students achieve academic excellence.",
    images: [{ url: "/og-image.png" }],
  },
}

export default function OurVisionPage() {
  return <OurVisionClientPage />
}
