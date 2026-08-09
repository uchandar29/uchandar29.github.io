/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (no Node server available there).
  // `next build` will emit the site to ./out.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
