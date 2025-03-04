"use client"; // Required for client-side authentication

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // Import Firebase auth
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function Dashboard() {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (authUser) => {
            if (!authUser) {
                router.push("/login"); // Redirect if not logged in
            } else {
                setUser(authUser);
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleLogout = async () => {
        await signOut(auth);
        router.push("/login");
    };

    if (!user) {
        return <p className="text-center mt-10">Loading...</p>; // Show loading state
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Welcome, {user.email}!</h1>
            <p className="text-gray-500 mt-2">You are logged in.</p>
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
            >
                Logout
            </button>
        </div>
    );
}
