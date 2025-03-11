"use client";

import Link from "next/link";

{/* Next.js normally generates this file,
 but the automatically generated not-found page can't
 use client features like Redux so we cannot specify
 "use client"; so that it is compiled in browser and not server-side*/}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
            <p className="text-gray-500 mt-2">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg">
                Go Home
            </Link>
        </div>
    );
}