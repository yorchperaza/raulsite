import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // required for export if you use next/image
}

export default nextConfig