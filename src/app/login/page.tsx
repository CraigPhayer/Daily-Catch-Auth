"use client";

import React from "react";
import { useRouter } from "next/navigation";
import AuthForm from "@/components/AuthForm";
import {loginUser} from "@/lib/auth";
import Background from "@/components/AuthBackground";
import {login} from "@/store/authSlice";
import { useDispatch } from "react-redux";
import {ROUTES} from "@/constrants/routes";

export default function Login() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleLogin = async (email: string, password: string) => {
        try {
            await loginUser(email, password);
            dispatch(login(email));
            router.push(ROUTES.DASHBOARD);
        } catch (error: unknown) {
            if (error instanceof Error){
                alert(error.message);
            }
        }
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
                linkHref={ROUTES.SIGNUP}
                />
        </div>
    );
}