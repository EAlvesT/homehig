import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  allowedDevOrigins: ['*'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.cosmicjs.com'
      }
    ]
  }
};

export default nextConfig;