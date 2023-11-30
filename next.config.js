/** @type {import('next').NextConfig} */
const nextConfig = {
    // url images
    images: {
        domains: [
            "paljet.rigelec.com.ar",
            "webservice.rigelec.com.ar",
            "rigelec.com.ar"
        ],
    },
    staticPageGenerationTimeout: 300,
};

module.exports = nextConfig;
