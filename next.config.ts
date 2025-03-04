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
};

export default nextConfig;
