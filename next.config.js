/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '3.127.136.179',
        port: '1337',
        pathname: '/uploads/**',
      },
    ],
  }
}

module.exports = nextConfig
