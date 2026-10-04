import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix for multiple lockfiles warning
  outputFileTracingRoot: process.cwd(),
  poweredByHeader: false,
  compress: true,
  images: {
    // Smaller files than JPEG/PNG; browsers that cannot decode them fall back automatically.
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
