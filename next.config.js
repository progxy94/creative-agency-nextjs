/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pai.nomadenstudio.com',
      },
    ],
  },
};

module.exports = nextConfig;
