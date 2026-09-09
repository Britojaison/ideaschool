import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    localPatterns: [
      {
        pathname: "/images/**",
      },
      {
        pathname: "/assets/**",
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
    qualities: [75],
    minimumCacheTTL: 2678400,
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
