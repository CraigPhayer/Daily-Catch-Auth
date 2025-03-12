"use client";

import React, {useState} from "react";
import Image from "next/image";
import InputField from "@/components/InputFields";
import {useRouter} from "next/navigation";

interface AuthFormProps {
    title: string;
    subtitle: string;
    buttonText: string;
    onSubmit: (email: string, password: string) => void;
    linkText: string;
    linkHref: string;
    linkQuestion: string;
}

export default function AuthForm({
                                     title,
                                     subtitle,
                                     buttonText,
                                     onSubmit,
                                     linkText,
                                     linkHref,
                                     linkQuestion
                                 }: AuthFormProps) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            onSubmit(email, password);
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    };

    const onClick = () => {
        router.push(linkHref);
    }

    return (
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-8 bg-white">
            <div className="w-full max-w-md flex flex-col items-center">
                <Image src={"./logo2.svg"} alt="Auth Icon" width={350} height={350}/>
                <h2 className="text-2xl font-bold mt-4 text-primary">{title}</h2>
                <p className="text-primary mb-6">{subtitle}</p>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <form onSubmit={handleSubmit} className="w-full max-w-sm">
                    <InputField type="email" placeholder="Email" value={email}
                                onChange={(e) => setEmail(e.target.value)} iconSrc={"./email.svg"}/>
                    <InputField type="password" placeholder="Password" value={password}
                                onChange={(e) => setPassword(e.target.value)} iconSrc={"./password.svg"}/>

                    <button type="submit"
                            className="w-full bg-primary text-white p-3 rounded-lg hover:bg-secondary transition">
                        {buttonText}
                    </button>
                </form>

                <p className="mt-4 text-primary">
                    {linkQuestion} <a onClick={onClick} className="text-primary hover:underline">{linkText}</a>
                </p>
            </div>
        </div>
    );
}