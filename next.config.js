const isProduction = process.env.NODE_ENV === 'production' || process.env.IS_VERCEL_ENV === 'true'

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  compiler: {
    removeConsole: isProduction,
  },
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
  typescript: {
    ignoreBuildErrors: isProduction,
  },
  images: {
    domains: ['cdn.discordapp.com', 'avatars.githubusercontent.com'],
  },
}
