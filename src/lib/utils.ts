import { twMerge } from "tailwind-merge";

export const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

export const classNames = (...args: any[]) => twMerge(args.filter(Boolean).join(" "));