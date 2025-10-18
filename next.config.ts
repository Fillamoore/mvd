// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // This might help suppress the warning
  devIndicators: {
    buildActivity: false,
  }
}

module.exports = nextConfig