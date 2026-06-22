/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export for Vercel/Netlify/GitHub Pages
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["next-mdx-remote"],
  },
};

module.exports = nextConfig;
