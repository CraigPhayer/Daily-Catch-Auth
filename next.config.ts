import type { NextConfig } from "next";

const env = process.env.NODE_ENV || "development";

const nextConfig = {
    output: "export",
    distDir: "out",
    basePath: (env == "production") ? "/Daily-Catch-Auth" : "",
    // assetPrefix: (env == "production") ? "/Daily-Catch-Auth" : "",
    images: { unoptimized: true },
    env: {
        NEXT_PUBLIC_BASE_PATH: (env == "production") ? "/Daily-Catch-Auth" : "",
    },
};

export default nextConfig;
