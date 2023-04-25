/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    forceSwcTransforms: true,
    appDir: true,
  },
  images: {
    domains: ["cdn.discordapp.com"],
  },
};
