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
}

module.exports = nextConfig
