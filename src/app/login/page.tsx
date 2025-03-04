"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import {loginUser} from "@/lib/auth";
import Background from "@/components/AuthBackground";

export default function Login() {
    const router = useRouter();

    const handleLogin = async (email: string, password: string) => {
        await loginUser(email, password);
        router.push("/dashboard");
    };

    return (
        <div className="flex h-screen">
            {/* Left Side - Background Image & Logo */}
            <Background />

            {/* Right Side - Login Form */}
            <AuthForm
                title="Login"
                subtitle="Welcome back! Please login to your account."
                buttonText="Login"
                onSubmit={handleLogin}
                linkQuestion="Don't have an account?"
                linkText="Sign Up"
                linkHref="/signup"
                />
        </div>
    );
}