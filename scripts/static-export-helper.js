// This script helps with static export by copying necessary files and making adjustments
// In a real project, you would run this script after the Next.js export

const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Function to help with static export
async function staticExportHelper() {
  const outDir = path.join(process.cwd(), "out")

  // 1. Copy robots.txt and sitemap.xml to the out directory
  fs.copyFileSync(path.join(process.cwd(), "public", "robots.txt"), path.join(outDir, "robots.txt"))

  fs.copyFileSync(path.join(process.cwd(), "public", "sitemap.xml"), path.join(outDir, "sitemap.xml"))

  // 2. Create a .nojekyll file to prevent GitHub Pages from ignoring files that start with an underscore
  fs.writeFileSync(path.join(outDir, ".nojekyll"), "")

  // 3. Create a CNAME file for custom domain (if needed)
  fs.writeFileSync(path.join(outDir, "CNAME"), "ascentclasses.com")

  // 4. Fix links in HTML files (if needed)
  const htmlFiles = glob.sync(`${outDir}/**/*.html`)

  htmlFiles.forEach((file) => {
    let content = fs.readFileSync(file, "utf8")

    // Fix any issues with links or paths
    // This is just an example - you would need to customize this based on your specific needs
    content = content.replace(/href="\/_next\//g, 'href="/_next/')

    fs.writeFileSync(file, content)
  })

  console.log("Static export helper completed successfully!")
}

// Run the function
staticExportHelper()
