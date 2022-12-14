/** @type {import('next').NextConfig} */
const nextConfig = {
    // reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['images.unsplash.com', 'media.istockphoto.com']
    },
    env: {
        MONGODB_URI: process.env.MONGODB_URI,
    },
};

module.exports = nextConfig;
