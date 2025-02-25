import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: '/my-page',
  basePath: 'my-page',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
