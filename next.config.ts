import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/images/**",
      },
    ],
    qualities: [75, 100],
  },
};

export default nextConfig;
