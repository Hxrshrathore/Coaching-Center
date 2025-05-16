# Favicon Generation for Ascent Coaching Classes

This document explains how to generate a complete set of favicons for the Ascent Coaching Classes website.

## Generating Favicons

To generate the complete favicon set from the logo, run:

\`\`\`bash
node scripts/run-favicon-generation.js
\`\`\`

This will:
1. Install required dependencies (sharp, icojs)
2. Generate all favicon sizes
3. Create favicon.ico (multi-size)
4. Generate site.webmanifest and browserconfig.xml if they don't exist

## Generated Files

The script generates the following files in the `public` directory:

- favicon.ico (multi-size icon for browsers)
- favicon-16x16.png (small favicon for browsers)
- favicon-32x32.png (standard favicon for browsers)
- favicon-48x48.png (larger favicon for browsers)
- apple-touch-icon.png (180x180, for iOS devices)
- android-chrome-192x192.png (for Android devices)
- android-chrome-512x512.png (for Android devices)
- mstile-150x150.png (for Microsoft Windows)
- site.webmanifest (for PWA support)
- browserconfig.xml (for Microsoft browsers)
- safari-pinned-tab.svg (for Safari pinned tabs)

## Implementation

The favicons are implemented in the website through the `Favicon` component in `components/seo/favicon.tsx`.

## Customization

To customize the favicons, replace the source logo at `public/logo.png` and run the generation script again.
