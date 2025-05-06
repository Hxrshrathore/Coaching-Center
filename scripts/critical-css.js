const fs = require("fs")
const path = require("path")
const critical = require("critical")

const BUILD_DIR = path.join(process.cwd(), "out")
const PAGES = ["index.html", "scholarship-test/index.html"]

async function generateCriticalCSS() {
  console.log("Generating critical CSS...")

  for (const page of PAGES) {
    const filePath = path.join(BUILD_DIR, page)

    if (!fs.existsSync(filePath)) {
      console.warn(`File not found: ${filePath}`)
      continue
    }

    try {
      console.log(`Processing ${page}...`)

      const { html, css } = await critical.generate({
        base: BUILD_DIR,
        src: page,
        width: 1300,
        height: 900,
        target: {
          css: path.join(BUILD_DIR, `critical-${page.replace("/", "-").replace(".html", "")}.css`),
          html: filePath,
          uncritical: path.join(BUILD_DIR, `uncritical-${page.replace("/", "-").replace(".html", "")}.css`),
        },
        extract: true,
        inline: true,
        dimensions: [
          {
            width: 320,
            height: 568,
          },
          {
            width: 768,
            height: 1024,
          },
          {
            width: 1300,
            height: 900,
          },
        ],
      })

      console.log(`Critical CSS generated for ${page}`)
    } catch (error) {
      console.error(`Error generating critical CSS for ${page}:`, error)
    }
  }

  console.log("Critical CSS generation complete!")
}

generateCriticalCSS()
