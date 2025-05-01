// This is a script that would be used to generate favicons from the logo
// In a real project, you would run this script to generate all the favicon sizes
// For this example, we're just showing what the script would look like

const sharp = require("sharp")
const fs = require("fs")
const path = require("path")

// Favicon sizes to generate
const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "android-chrome-192x192.png", size: 192 },
  { name: "android-chrome-512x512.png", size: 512 },
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
    // Load the source image
    const sourceImage = sharp(logoPath)

    // Generate each favicon size
    for (const { name, size } of sizes) {
      await sourceImage.clone().resize(size, size).toFile(path.join(outputDir, name))

      console.log(`Generated ${name}`)
    }

    // Generate favicon.ico (requires multiple sizes)
    await sourceImage.clone().resize(32, 32).toFile(path.join(outputDir, "favicon.ico"))

    console.log("Generated favicon.ico")

    console.log("All favicons generated successfully!")
  } catch (error) {
    console.error("Error generating favicons:", error)
  }
}

// Run the function
generateFavicons()
