import os from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
  },
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: true,
  
  // Disable server components features that don't work with static export
  experimental: {
    // Remove serverActions completely for static export
    optimizePackageImports: ['lucide-react', 'framer-motion'], // Optimize large package imports
    staticPageGenerationTimeout: 180, // 3 minutes
    cpus: Math.max(1, Math.min(8, os.cpus().length - 1)), // Use all CPUs except one
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
      // SEO redirects
      {
        source: '/jee',
        destination: '/program-path/jee',
        permanent: true,
      },
      {
        source: '/neet',
        destination: '/program-path/neet',
        permanent: true,
      },
      {
        source: '/olympiad',
        destination: '/olympiad-programs',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/reach-out',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/our-vision',
        permanent: true,
      },
      {
        source: '/programs',
        destination: '/program-path',
        permanent: true,
      },
      {
        source: '/scholarship',
        destination: '/scholarship-test',
        permanent: true,
      },
      {
        source: '/enroll',
        destination: '/get-enrolled',
        permanent: true,
      },
    ]
  },
  
  // Configure headers for performance and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // 1 year for static assets
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
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data: https:; frame-src 'self' https://www.youtube.com;",
          },
        ],
      },
    ]
  },
  
  // Webpack configuration for production optimizations
  webpack: (config) => {
    // Optimize webpack configuration
    config.optimization.minimize = true;
    
    // Add optimization for static export
    if (process.env.NODE_ENV === 'production') {
      // Optimize chunk size
      config.optimization.splitChunks = {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name(module) {
              // get the name. E.g. node_modules/packageName/not/this/part.js
              // or node_modules/packageName
              const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
              
              // npm package names are URL-safe, but some servers don't like @ symbols
              return `npm.${packageName.replace('@', '')}`;
            },
          },
        },
      };
    }
    
    return config;
  },
}

export default nextConfig;
