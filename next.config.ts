/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure env vars are properly loaded
  env: {
    ENABLE_SPOOFING: process.env.ENABLE_SPOOFING,
  },
}

module.exports = nextConfig