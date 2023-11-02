/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["uploadthing.com", "utfs.io"],
  },
  webpack: (config) => {
    config.externals.push({
      bufferutil: "commonjs bufferutil",
      "utf-8-validate": "commonjs utf-8-validate",
    });

    return config;
  },
};

module.exports = nextConfig;
