/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export for Vercel/Netlify/GitHub Pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
