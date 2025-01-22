/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/gitness',
  assetPrefix: '/gitness/',
}

module.exports = nextConfig 