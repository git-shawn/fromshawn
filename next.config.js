/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "source.unsplash.com",
      "vitals.vercel-insights.com"
    ],
  },
}

module.exports = nextConfig