const sharp = require("sharp")
const fs = require("fs")
const path = require("path")
const { promisify } = require("util")
const writeFile = promisify(fs.writeFile)
const mkdir = promisify(fs.mkdir)

// Favicon sizes to generate
const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
  { name: "mstile-150x150.png", size: 150 },
]

// Path to the source logo
const logoPath = path.join(__dirname, "../public/logo.png")

// Output directory for favicons
const outputDir = path.join(__dirname, "../public")

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Generate favicons
async function generateFavicons() {
  try {
    console.log("Starting favicon generation...")

    // Load the source image
    const sourceImage = sharp(logoPath)
    const metadata = await sourceImage.metadata()

    console.log(`Source image: ${metadata.width}x${metadata.height} pixels`)

    // Create a square version of the logo if it's not already square
    let processedImage = sourceImage
    if (metadata.width !== metadata.height) {
      console.log("Logo is not square, creating a square version...")

      // Determine the size for the square (use the smaller dimension)
      const size = Math.min(metadata.width, metadata.height)

      // Calculate crop parameters to center the logo
      const left = Math.floor((metadata.width - size) / 2)
      const top = Math.floor((metadata.height - size) / 2)

      // Crop to square
      processedImage = sourceImage.extract({
        left,
        top,
        width: size,
        height: size,
      })
    }

    // Generate each favicon size
    for (const { name, size } of sizes) {
      await processedImage
        .clone()
        .resize(size, size, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
        .toFile(path.join(outputDir, name))

      console.log(`Generated ${name} (${size}x${size})`)
    }

    // Generate favicon.ico (multi-size icon)
    // For favicon.ico, we'll use the 16x16, 32x32, and 48x48 sizes
    const favicon16Buffer = await processedImage.clone().resize(16, 16).toBuffer()
    const favicon32Buffer = await processedImage.clone().resize(32, 32).toBuffer()
    const favicon48Buffer = await processedImage.clone().resize(48, 48).toBuffer()

    // Use the ICO generator library to create the multi-size favicon.ico
    const ICO = require("icojs")
    const icoData = await ICO.from([favicon16Buffer, favicon32Buffer, favicon48Buffer], "image/png")
    await writeFile(path.join(outputDir, "favicon.ico"), Buffer.from(icoData))

    console.log("Generated favicon.ico (multi-size)")

    // Generate site.webmanifest if it doesn't exist
    const webmanifestPath = path.join(outputDir, "site.webmanifest")
    if (!fs.existsSync(webmanifestPath)) {
      const webmanifest = {
        name: "Ascent Coaching Classes",
        short_name: "Ascent Classes",
        description: "Top coaching institute in Lucknow for JEE, NEET, SSC, and Banking exams",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
        theme_color: "#1e40af",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        scope: "/",
      }

      await writeFile(webmanifestPath, JSON.stringify(webmanifest, null, 2))

      console.log("Generated site.webmanifest")
    }

    // Generate browserconfig.xml if it doesn't exist
    const browserconfigPath = path.join(outputDir, "browserconfig.xml")
    if (!fs.existsSync(browserconfigPath)) {
      const browserconfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#1e40af</TileColor>
    </tile>
  </msapplication>
</browserconfig>`

      await writeFile(browserconfigPath, browserconfig)

      console.log("Generated browserconfig.xml")
    }

    console.log("All favicons generated successfully!")
  } catch (error) {
    console.error("Error generating favicons:", error)
  }
}

// Run the function
generateFavicons()
