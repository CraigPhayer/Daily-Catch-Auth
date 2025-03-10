import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    distDir: "out",
    basePath: "/Daily-Catch-Auth",
    assetPrefix: "/Daily-Catch-Auth/",
    images: {
        unoptimized: true,
    },

    async redirects() {
        return [
            {
                source: '/',              // Redirect from the root route
                destination: '/login',    // Redirect to /login
                permanent: true,          // Permanent redirect (HTTP status 308)
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: '/',
                destination: '/login.html', // Ensures GitHub Pages serves login.html as the default
            },
        ];
    },

};

export default nextConfig;
