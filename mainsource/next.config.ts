import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // 1. Force a fresh build ID on every deployment
  generateBuildId: async () => {
    return `build-${new Date().getTime()}`;
  },
};

export default nextConfig;