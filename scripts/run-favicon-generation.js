const { execSync } = require("child_process")
const path = require("path")

console.log("Installing required dependencies...")
execSync("npm install --no-save sharp icojs", { stdio: "inherit" })

console.log("Running favicon generation script...")
execSync("node scripts/generate-favicons.js", { stdio: "inherit" })

console.log("Favicon generation complete!")
