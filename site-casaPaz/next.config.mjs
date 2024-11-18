/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    experimental: {
        optimizePackageImports: ["@chakra-ui/react"],
    },
    images: {
        domains: ['127.0.0.1'],
    },
};

export default nextConfig;
