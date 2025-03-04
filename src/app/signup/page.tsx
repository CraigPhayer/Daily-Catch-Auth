"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import {registerUser} from "@/lib/auth";
import Background from "@/components/AuthBackground";

export default function SignUp() {
    const router = useRouter();

    const handleSignup = async (email: string, password: string) => {
        await registerUser(email, password);
        router.push("/dashboard");
    };
    return (
        <div className="flex h-screen">
            {/* Left Side - Background Image */}
            <Background />

            {/* Right Side - Sign Up Form */}
            <AuthForm
                title="Sign Up"
                subtitle="Create an account to get started."
                buttonText="Sign Up"
                onSubmit={handleSignup}
                linkQuestion="Already have an account?"
                linkText="Login"
                linkHref="/login"
            />
        </div>
    );
}