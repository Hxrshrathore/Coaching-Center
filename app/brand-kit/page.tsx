import type { Metadata } from "next"
import BrandKitClient from "./brand-kit-client"

export const metadata: Metadata = {
  title: "Brand Kit | Toppers Maker",
  description:
    "Official brand guidelines and assets for Toppers Maker, including color palette, typography, and logo downloads.",
}

export default function BrandKitPage() {
  return <BrandKitClient />
}
