/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ['links.papareact.com', 'image.tmdb.org'],
  }
}

module.exports = nextConfig
