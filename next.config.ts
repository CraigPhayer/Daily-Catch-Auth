import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',              // Redirect from the root route
                destination: '/login',    // Redirect to /login
                permanent: true,          // Permanent redirect (HTTP status 308)
            },
        ];
    },

    output: "export",
    distDir: "out",
    basePath: "/Daily-Catch-Auth",
    assetPrefix: "/Daily-Catch-Auth/",
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
