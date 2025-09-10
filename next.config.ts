import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // recommended
  images: {
    // Allow Unsplash as a safe external domain
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
    // Cache optimized images for longer (reduce repeated fetches)
    minimumCacheTTL: 60 * 60, // 1 hour
    // If images are still timing out, you can fallback:
    // unoptimized: true,
  },
};

export default nextConfig;
