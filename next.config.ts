import type { NextConfig } from "next";

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/my-page"; // basePath は既に設定されているのでそのまま

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  assetPrefix = `/${repo}`; // assetPrefix を設定
   //basePath = `/${repo}`; リポジトリ名とbasePathが異なる場合は必要
}

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  assetPrefix: assetPrefix,
  basePath: basePath,
  images: {
      unoptimized: true,
  },
};

export default nextConfig;