/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["38.242.224.122", "port3000.server.owbird.dev"],
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig
