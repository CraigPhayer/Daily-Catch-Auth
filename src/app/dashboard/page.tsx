"use client";

import { useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import {RootState} from "@/store/store";
import {logout} from "@/store/authSlice";
import {useEffect} from "react";

export default function Dashboard() {
    const user = useSelector((state: RootState) => state.auth.user);
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user, router]);

    const handleLogout = async () => {
        dispatch(logout());
        router.push("/login");
    };

    if (!user) {
        return <p className="text-center mt-10">Loading...</p>; // Show loading state
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">Welcome, {user}!</h1>
            <p className="text-gray-500 mt-2">You are logged in.</p>
            <button
                onClick={handleLogout}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                Logout
            </button>
        </div>
    );
}
