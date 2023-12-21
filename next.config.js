/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uuxivmkunpjlrganwpsh.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/blog_images/**",
      },
    ],
  },
};
