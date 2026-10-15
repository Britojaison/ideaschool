import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "gsap",
      "@gsap/react",
      "framer-motion",
      "motion",
      "lenis",
      "clsx",
      "tailwind-merge",
    ],
  },
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
  async headers() {
    return [
      {
        source: "/(images|assets|fonts)/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
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
      {
        source: "/creative-editing-course",
        destination: "/full-stack-video-editing-ai-mastery",
        permanent: true,
      },
      {
        source: "/creative-editing-course/thank-you",
        destination: "/full-stack-video-editing-ai-mastery/thank-you",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
