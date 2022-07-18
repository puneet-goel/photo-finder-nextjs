/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['pixabay.com', 'localhost:3000'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
