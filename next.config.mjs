/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  // This ensures that links to /about will be exported as /about/index.html
  // which is necessary for static hosting platforms
  
  // Disable server components features that don't work with static export
  experimental: {
    serverActions: false,
  },
  
  // Configure redirects if needed
  async redirects() {
    return [
      // Example redirect
      {
        source: '/old-page',
        destination: '/new-page',
        permanent: true,
      },
    ]
  },
  
  // Configure headers if needed
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

export default nextConfig
