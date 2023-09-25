/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    locale: 'en',
    currentLocale: 'en',
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
