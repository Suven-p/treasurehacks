/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "cdn-icons-png.flaticon.com"],
  },
};

module.exports = nextConfig;
