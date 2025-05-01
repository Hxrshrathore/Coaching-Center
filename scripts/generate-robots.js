// This script would generate a robots.txt file
// In a real project, you would run this script as part of the build process

const fs = require("fs")
const path = require("path")

// Base URL of the site
const baseUrl = "https://ascentclasses.com"

// Function to generate the robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# Ascent Coaching Classes Robots.txt
# Website: ${baseUrl}

# Allow all crawlers
User-agent: *
Allow: /

# Disallow specific paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

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

  // Write the robots.txt to a file
  fs.writeFileSync(path.join(process.cwd(), "public", "robots.txt"), robotsTxt)

  console.log("robots.txt generated successfully!")
}

// Run the function
generateRobotsTxt()
