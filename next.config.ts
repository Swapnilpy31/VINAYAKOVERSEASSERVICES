import type { NextConfig } from "next";

const BASE_URL = 'https://www.vinayakoverseasservices.com';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 64, 96, 128, 256, 384],
    minimumCacheTTL: 86400, // 24 hours
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
      {
        // Cache static assets for 1 year
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirect trailing slashes
      {
        source: '/about/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/contact-info/',
        destination: '/contact-info',
        permanent: true,
      },
    ];
  },
  poweredByHeader: false, // Remove X-Powered-By header for security
};

export default nextConfig;

