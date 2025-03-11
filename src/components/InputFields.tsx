"use client";

import Image from "next/image";
import React from "react";

interface InputFieldProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    iconSrc: string;
}

export default function InputField({ type, placeholder, value, onChange, iconSrc }: InputFieldProps) {
    return (
        <div className="mb-4 relative">
            <Image src={iconSrc} alt={placeholder} width={20} height={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary" />
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full p-3 pl-10 border rounded-lg bg-gray-100 text-primary focus:outline-none focus:ring-2 focus:ring-primary"
                required
            />
        </div>
    );
}
