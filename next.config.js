/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.githubusercontent.com',
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: '/framer-motion',
        destination: '/slides/framer-motion',
      },
    ]
  },
}
