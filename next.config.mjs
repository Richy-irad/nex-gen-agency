/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: `/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/**`,
      },
    ],
  },
  /**
   * Enable logging of fetch requests.
   * 
   * Always logs requests sent to server, including those to Sanity studio.
   * 
   * Allows checking whether requests were cache hits or misses.
   */
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
