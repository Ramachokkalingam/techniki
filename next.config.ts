import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fix for multiple lockfiles warning
  outputFileTracingRoot: process.cwd(),
  
  // Turbopack configuration (updated for Next.js 15.5+)
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
