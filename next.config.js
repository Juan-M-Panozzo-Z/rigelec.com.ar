/** @type {import('next').NextConfig} */
const nextConfig = {
    // url images
    images: {
        domains: [
            "fastly.picsum.photos",
            "paljet.rigelec.com.ar",
            "webservice.rigelec.com.ar",
            "rigelec.com.ar"
        ],
    },
    reactStrictMode: true,
};

module.exports = nextConfig;
