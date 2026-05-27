import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
    qualities: [75, 100],
    unoptimized: true,
  },
};

export default nextConfig;
