/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'image.tmdb.org'],
  }
}

module.exports = nextConfig
