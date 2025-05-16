export function Favicon() {
  return (
    <>
      {/* Standard favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* PNG favicons */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />

      {/* Apple Touch Icon */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

      {/* Android Chrome Icons */}
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

      {/* Web App Manifest */}
      <link rel="manifest" href="/site.webmanifest" />

      {/* Microsoft Tile */}
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Safari Pinned Tab */}
      <link rel="mask-icon" href="/safari-pinned-tab.png" color="#1e40af" />

      {/* Theme Colors */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="Ascent Classes" />

      {/* Preload critical favicon */}
      <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
    </>
  )
}
