import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
    qualities: [75, 100],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/video-editing",
        destination: "/video-editing-high-paying-jobs",
        permanent: true,
      },
      {
        source: "/video-editing/thank-you",
        destination: "/video-editing-high-paying-jobs/thank-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
