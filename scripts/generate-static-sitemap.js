const fs = require("fs")
const path = require("path")
const prettier = require("prettier")

// Base URL of your website
const WEBSITE_URL = "https://ascentcoachingclasses.com"

// List of all pages in your website
const pages = [
  { url: "/", priority: 1.0, changefreq: "weekly", lastmod: new Date().toISOString() },
  { url: "/our-vision/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/program-path/", priority: 0.9, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/program-path/jee/", priority: 0.9, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/program-path/neet/", priority: 0.9, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/olympiad-programs/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/k12-science-coaching/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/resources-hub/", priority: 0.8, changefreq: "weekly", lastmod: new Date().toISOString() },
  { url: "/whats-new/", priority: 0.7, changefreq: "weekly", lastmod: new Date().toISOString() },
  { url: "/toppers-tales/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/get-enrolled/", priority: 0.9, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/scholarship-test/", priority: 0.9, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/scholarship-test/form/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/reach-out/", priority: 0.8, changefreq: "monthly", lastmod: new Date().toISOString() },
  { url: "/privacy-policy/", priority: 0.4, changefreq: "yearly", lastmod: new Date().toISOString() },
  { url: "/terms-of-service/", priority: 0.4, changefreq: "yearly", lastmod: new Date().toISOString() },
  { url: "/sitemap-page/", priority: 0.3, changefreq: "monthly", lastmod: new Date().toISOString() },
]

// Generate sitemap XML
function generateSitemap() {
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map((page) => {
          return `
            <url>
              <loc>${WEBSITE_URL}${page.url}</loc>
              <lastmod>${page.lastmod}</lastmod>
              <priority>${page.priority}</priority>
              <changefreq>${page.changefreq}</changefreq>
            </url>
          `
        })
        .join("")}
    </urlset>
  `

  // Format XML with prettier
  const formattedSitemap = prettier.format(sitemap, { parser: "html" })

  // Write sitemap to public directory
  fs.writeFileSync(path.resolve("./public/sitemap.xml"), formattedSitemap)

  console.log("Sitemap generated successfully!")
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# Ascent Coaching Classes Robots.txt
# Website: ${WEBSITE_URL}

# Allow all crawlers
User-agent: *
Allow: /

# Disallow specific paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/
Disallow: /theme-test/
Disallow: /direct-theme-test/
Disallow: /debug-layout/

# Sitemap location
Sitemap: ${WEBSITE_URL}/sitemap.xml

# Crawl delay for specific bots
User-agent: Googlebot
Crawl-delay: 1

User-agent: Bingbot
Crawl-delay: 1

User-agent: Slurp
Crawl-delay: 1

User-agent: DuckDuckBot
Crawl-delay: 1
`

  // Write robots.txt to public directory
  fs.writeFileSync(path.resolve("./public/robots.txt"), robotsTxt)

  console.log("Robots.txt generated successfully!")
}

// Run the generators
generateSitemap()
generateRobotsTxt()
