/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { loader: 'custom' },

  experimental: {
    newNextLinkBehavior: true,

    images: {
      unoptimized: true,
      allowFutureImage: true,

    },
  },
}
