/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/resume',
        destination: '/resume.pdf',
      },
    ]
  },
}

module.exports = nextConfig
