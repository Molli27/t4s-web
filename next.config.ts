import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },      // verhindert Build-Abbruch durch ESLint
  // typescript: { ignoreBuildErrors: true }, // optional, nur falls TS-Fehler Builds stoppen sollen
};

export default nextConfig;
