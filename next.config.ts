import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = isGitHubPagesBuild
  ? {
      output: "export",
      trailingSlash: true,
      basePath: githubBasePath,
      images: { unoptimized: true },
      typescript: { tsconfigPath: "./tsconfig.github.json" },
    }
  : {};

export default nextConfig;
