/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.kiltrobcn.com',
        port: '',
        pathname: '/**',
      }
    ]
  }
}

module.exports = nextConfig
