/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig:{
    mySecret: 'secret'

  },
  publicRuntimeConfig:{
    staticFolder: '/static',
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { 
      fs: false,
    path: false, };

    return config;
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ]
  },
}

module.exports = nextConfig
