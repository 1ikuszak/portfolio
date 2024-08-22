/** @type {import('next').NextConfig} */
const nextConfig = {
  staticPageGenerationTimeout: 1000,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lukaszglica-portfolio.s3.eu-north-1.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
