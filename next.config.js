/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['a-us.storyblok.com']
  }
}

module.exports = nextConfig
