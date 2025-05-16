"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Copy, Check } from "lucide-react"
import Image from "next/image"

export default function BrandKitClient() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(text)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  const colorPalette = [
    { name: "Primary", hex: "#3B82F6", rgb: "59, 130, 246", usage: "Main brand color, primary buttons, links" },
    { name: "Primary Dark", hex: "#2563EB", rgb: "37, 99, 235", usage: "Hover states, active elements" },
    { name: "Secondary", hex: "#F3F4F6", rgb: "243, 244, 246", usage: "Backgrounds, secondary elements" },
    { name: "Accent", hex: "#F59E0B", rgb: "245, 158, 11", usage: "Highlights, call-to-action elements" },
    { name: "Text Primary", hex: "#111827", rgb: "17, 24, 39", usage: "Main text color" },
    { name: "Text Secondary", hex: "#6B7280", rgb: "107, 114, 128", usage: "Secondary text, captions" },
    { name: "Success", hex: "#10B981", rgb: "16, 185, 129", usage: "Success messages, positive indicators" },
    { name: "Error", hex: "#EF4444", rgb: "239, 68, 68", usage: "Error messages, negative indicators" },
    { name: "Background", hex: "#FFFFFF", rgb: "255, 255, 255", usage: "Page background" },
    { name: "Border", hex: "#E5E7EB", rgb: "229, 231, 235", usage: "Borders, dividers" },
  ]

  const typographyStyles = [
    {
      name: "Heading 1",
      font: "Inter",
      weight: "700",
      size: "2.25rem (36px)",
      lineHeight: "2.5rem (40px)",
      usage: "Main page headings",
    },
    {
      name: "Heading 2",
      font: "Inter",
      weight: "600",
      size: "1.875rem (30px)",
      lineHeight: "2.25rem (36px)",
      usage: "Section headings",
    },
    {
      name: "Heading 3",
      font: "Inter",
      weight: "600",
      size: "1.5rem (24px)",
      lineHeight: "2rem (32px)",
      usage: "Subsection headings",
    },
    {
      name: "Heading 4",
      font: "Inter",
      weight: "600",
      size: "1.25rem (20px)",
      lineHeight: "1.75rem (28px)",
      usage: "Card headings",
    },
    {
      name: "Body",
      font: "Inter",
      weight: "400",
      size: "1rem (16px)",
      lineHeight: "1.5rem (24px)",
      usage: "Main body text",
    },
    {
      name: "Body Small",
      font: "Inter",
      weight: "400",
      size: "0.875rem (14px)",
      lineHeight: "1.25rem (20px)",
      usage: "Secondary text, captions",
    },
    {
      name: "Button",
      font: "Inter",
      weight: "500",
      size: "0.875rem (14px)",
      lineHeight: "1.25rem (20px)",
      usage: "Button text",
    },
  ]

  const buttonStyles = [
    { name: "Primary", class: "bg-blue-600 text-white hover:bg-blue-700", usage: "Primary actions" },
    {
      name: "Secondary",
      class: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      usage: "Secondary actions",
    },
    {
      name: "Outline",
      class: "border border-input bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
      usage: "Tertiary actions",
    },
    { name: "Ghost", class: "text-foreground hover:bg-accent hover:text-accent-foreground", usage: "Subtle actions" },
    { name: "Link", class: "text-primary underline-offset-4 hover:underline", usage: "Text links" },
    {
      name: "Destructive",
      class: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      usage: "Destructive actions",
    },
  ]

  const downloadLogo = () => {
    const link = document.createElement("a")
    link.href = "/logo.png"
    link.download = "toppers-maker-logo.png"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="container mx-auto pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Toppers Maker Brand Kit</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Official brand guidelines and assets for maintaining consistent visual identity across all platforms.
          </p>
        </div>

        {/* Logo Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Logo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6 flex flex-col items-center justify-center space-y-4 bg-white">
                <div className="relative w-64 h-64 flex items-center justify-center p-8">
                  <Image src="/logo.png" alt="Toppers Maker Logo" width={200} height={200} className="object-contain" />
                </div>
                <p className="text-sm text-gray-500">Primary Logo - Full Color</p>
                <Button onClick={downloadLogo} className="flex items-center gap-2">
                  <Download size={16} />
                  Download Logo
                </Button>
              </CardContent>
            </Card>
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Logo Usage Guidelines</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Maintain clear space around the logo equal to the height of the "T" in "Toppers"</li>
                <li>• Do not stretch, distort, or alter the logo proportions</li>
                <li>• Do not change the logo colors or add effects</li>
                <li>• Ensure the logo is clearly visible against the background</li>
                <li>• For dark backgrounds, use the white version of the logo</li>
              </ul>
              <div className="pt-4">
                <h4 className="font-medium mb-2">Available Formats</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-sm bg-gray-100 p-3 rounded">PNG (Transparent)</div>
                  <div className="text-sm bg-gray-100 p-3 rounded">JPG (White Background)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Color Palette</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colorPalette.map((color) => (
              <Card key={color.hex} className="overflow-hidden">
                <div className="h-24 w-full" style={{ backgroundColor: color.hex }}></div>
                <CardContent className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium">{color.name}</h3>
                    <button
                      onClick={() => copyToClipboard(color.hex)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label={`Copy ${color.hex} to clipboard`}
                    >
                      {copiedColor === color.hex ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                  <div className="text-sm space-y-1">
                    <p>
                      <span className="text-gray-500">HEX:</span> {color.hex}
                    </p>
                    <p>
                      <span className="text-gray-500">RGB:</span> {color.rgb}
                    </p>
                    <p className="text-xs text-gray-500 pt-1">{color.usage}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Typography</h2>
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-medium">Font Family</h3>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold">Inter</h4>
                      <p className="text-gray-600">Primary font for all website content</p>
                    </div>
                    <p className="font-light text-2xl">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                  </div>
                  <div className="mt-4 text-sm text-gray-500">
                    <p>
                      Inter is a variable font designed for computer screens, featuring a tall x-height for better
                      readability at small sizes.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-medium">Type Styles</h3>
              <div className="space-y-4">
                {typographyStyles.map((style) => (
                  <Card key={style.name}>
                    <CardContent className="p-4 sm:p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                        <div className="lg:col-span-2">
                          <h4 className="font-medium">{style.name}</h4>
                          <p className="text-sm text-gray-500">{style.usage}</p>
                        </div>
                        <div className="lg:col-span-2">
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="text-gray-500">Font:</span> {style.font}
                            </p>
                            <p>
                              <span className="text-gray-500">Weight:</span> {style.weight}
                            </p>
                            <p>
                              <span className="text-gray-500">Size:</span> {style.size}
                            </p>
                            <p>
                              <span className="text-gray-500">Line Height:</span> {style.lineHeight}
                            </p>
                          </div>
                        </div>
                        <div className="lg:col-span-1">
                          <div
                            className="font-sans"
                            style={{
                              fontSize: style.size.split(" ")[0],
                              fontWeight: style.weight,
                              lineHeight: style.lineHeight.split(" ")[0],
                            }}
                          >
                            Sample
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Button Styles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buttonStyles.map((style) => (
              <Card key={style.name}>
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="font-medium">{style.name}</h3>
                    <p className="text-sm text-gray-500">{style.usage}</p>
                  </div>
                  <div className="flex items-center justify-center py-4">
                    <Button className={style.class} variant={style.name.toLowerCase() as any}>
                      Button Text
                    </Button>
                  </div>
                  <div className="text-xs bg-gray-100 p-2 rounded font-mono">{style.class}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b pb-2">Spacing System</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Our spacing system uses a 4px base unit (0.25rem) to maintain consistent spacing throughout the
                  interface.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { name: "xs", value: "0.25rem (4px)" },
                    { name: "sm", value: "0.5rem (8px)" },
                    { name: "md", value: "1rem (16px)" },
                    { name: "lg", value: "1.5rem (24px)" },
                    { name: "xl", value: "2rem (32px)" },
                    { name: "2xl", value: "3rem (48px)" },
                    { name: "3xl", value: "4rem (64px)" },
                    { name: "4xl", value: "6rem (96px)" },
                  ].map((space) => (
                    <div key={space.name} className="bg-gray-100 p-3 rounded">
                      <p className="font-medium">{space.name}</p>
                      <p className="text-sm text-gray-500">{space.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
