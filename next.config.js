/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['source.unsplash.com', 'localhost:3000'],
  },
}

module.exports = nextConfig
