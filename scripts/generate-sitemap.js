// This script would generate a sitemap.xml file based on the pages in the app directory
// In a real project, you would run this script as part of the build process

const fs = require("fs")
const path = require("path")
const glob = require("glob")

// Base URL of the site
const baseUrl = "https://ascentclasses.com"

// Function to generate the sitemap
async function generateSitemap() {
  // Get all page files
  const pages = glob.sync("app/**/page.tsx")

  // Format the sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
                            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd
                            http://www.google.com/schemas/sitemap-image/1.1
                            http://www.google.com/schemas/sitemap-image/1.1/sitemap-image.xsd">
`

  // Add the homepage
  sitemap += `  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>Ascent Coaching Classes Logo</image:title>
    </image:image>
  </url>
`

  // Process each page
  pages.forEach((page) => {
    // Skip the homepage as we've already added it
    if (page === "app/page.tsx") return

    // Convert file path to URL path
    let urlPath = page
      .replace("app/", "/")
      .replace("/page.tsx", "")
      .replace(/\/$$.*$$\//, "/") // Remove route groups

    // Skip dynamic routes for now (would need more complex handling)
    if (urlPath.includes("[") || urlPath.includes("(")) return

    // Add trailing slash for consistency
    if (!urlPath.endsWith("/")) urlPath += "/"

    // Add the URL to the sitemap
    sitemap += `  <url>
    <loc>${baseUrl}${urlPath}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${baseUrl}/logo.png</image:loc>
      <image:title>Ascent Coaching Classes</image:title>
    </image:image>
  </url>
`
  })

  // Close the sitemap
  sitemap += `</urlset>
`

  // Write the sitemap to a file
  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)

  console.log("Sitemap generated successfully!")
}

// Run the function
generateSitemap()
