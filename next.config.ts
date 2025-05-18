import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // -- IMAGES
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
