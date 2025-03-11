"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import {registerUser} from "@/lib/auth";
import Background from "@/components/AuthBackground";
import {login} from "@/store/authSlice";
import {useDispatch} from "react-redux";

export default function SignUp() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleSignup = async (email: string, password: string) => {
        try {
            await registerUser(email, password);
            dispatch(login(email));
            router.push("/dashboard");
        } catch (error: unknown) {
            if (error instanceof Error){
                alert(error.message);
            }
        }
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