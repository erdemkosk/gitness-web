/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath ve assetPrefix'i kaldırıyoruz çünkü root domain kullanıyoruz
  // basePath: '/gitness',
  // assetPrefix: '/gitness/',
}

module.exports = nextConfig 