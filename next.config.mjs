import withPlaiceholder from "@plaiceholder/next";
/** @type {import('next').NextConfig} */
const nextConfig = {
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

export default withPlaiceholder(nextConfig);
