import type { Metadata } from "next"
import { OurVisionClientPage } from "./OurVisionClientPage"

export const metadata: Metadata = {
  title: "Our Vision | Ascent Classes",
  description:
    "Discover the vision and mission of Ascent Classes. Learn about our commitment to academic excellence and holistic development of students.",
  openGraph: {
    title: "Our Vision | Ascent Classes",
    description:
      "Discover the vision and mission of Ascent Classes. Learn about our commitment to academic excellence and holistic development of students.",
    url: "/our-vision",
    siteName: "Ascent Classes",
    locale: "en_US",
    type: "website",
  },
}

export default function OurVisionPage() {
  return <OurVisionClientPage />
}
