/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.tacdn.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.kiltrobcn.com',
        port: '',
        pathname: '/**',
      }
    ]
  },
}

module.exports = nextConfig
