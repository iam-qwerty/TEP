import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com", 
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", 
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com", 
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", 
      },
    ],
  },
};

export default nextConfig;
