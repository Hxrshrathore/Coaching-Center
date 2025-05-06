const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

const PUBLIC_DIR = path.join(process.cwd(), "public")
const OPTIMIZED_DIR = path.join(PUBLIC_DIR, "optimized")

// Create optimized directory if it doesn't exist
if (!fs.existsSync(OPTIMIZED_DIR)) {
  fs.mkdirSync(OPTIMIZED_DIR, { recursive: true })
}

// Image size presets for responsive images
const SIZE_PRESETS = {
  thumbnail: { width: 200 },
  small: { width: 400 },
  medium: { width: 800 },
  large: { width: 1200 },
  hero: { width: 1920 },
}

// Image formats to generate
const FORMATS = ["webp", "avif"]

// Find all image files in the public directory
const imageFiles = fs.readdirSync(PUBLIC_DIR).filter((file) => /\.(png|jpe?g|gif)$/i.test(file))

console.log(`Found ${imageFiles.length} images to optimize`)

// Process each image
;(async () => {
  for (const file of imageFiles) {
    const inputPath = path.join(PUBLIC_DIR, file)
    const fileNameWithoutExt = path.parse(file).name

    try {
      // Get image metadata
      const metadata = await sharp(inputPath).metadata()

      // Generate optimized versions for each size preset and format
      for (const [sizeName, dimensions] of Object.entries(SIZE_PRESETS)) {
        // Skip if the target size is larger than the original
        if (dimensions.width >= metadata.width) continue

        for (const format of FORMATS) {
          const outputFileName = `${fileNameWithoutExt}-${sizeName}.${format}`
          const outputPath = path.join(OPTIMIZED_DIR, outputFileName)

          // Process the image
          await sharp(inputPath).resize(dimensions).toFormat(format, { quality: 80 }).toFile(outputPath)

          console.log(`Created ${outputFileName}`)
        }
      }

      // Create WebP and AVIF versions at original size
      for (const format of FORMATS) {
        const outputFileName = `${fileNameWithoutExt}.${format}`
        const outputPath = path.join(OPTIMIZED_DIR, outputFileName)

        await sharp(inputPath).toFormat(format, { quality: 80 }).toFile(outputPath)

        console.log(`Created ${outputFileName}`)
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }

  console.log("Image optimization complete!")
})()
