/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import dotenv from "dotenv";
dotenv.config();

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    TURSO_URL: process.env.TURSO_URL,
    TURSO_AUTH: process.env.TURSO_AUTH,
  },
};

export default config;
