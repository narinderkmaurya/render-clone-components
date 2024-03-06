/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "placehold.co",
          port: "",
        },
        {
          protocol: "https",
          hostname: "www.alchemy.com",
          port: "",
        },
        {
          protocol: "https",
          hostname: "ik.imagekit.io",
          port: "",
        },
      ],
      dangerouslyAllowSVG: true,
    },
  };
  
  export default nextConfig;