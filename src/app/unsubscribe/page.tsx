"use client"

import React from 'react';
import { toast } from 'react-toastify';

import { CircleBackground } from '@/components/CircleBackground';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';

import { ActionIcon } from '@/images/icons';

import { validateEmail } from '@/lib/utils';

export default async function Unsubscribe() {
    const [isSending, setIsSending] = React.useState<boolean>(false);

    const handleUnsubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.target as HTMLFormElement;
        const emailInput = form.email as HTMLInputElement;
        const email = emailInput.value;

        if (!validateEmail(email)) {
            toast.error("Invalid email format");
            setIsSending(false);
            return;
        }

        const url = "/api/unsubscribe";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                toast.success("Successfully unsubscribed!");
            } else {
                toast.error(result.error || "An error occurred. Try again later.");
            }
        } catch (error) {
            console.error("Request failed:", error);
            toast.error("An error occurred. Try again later.");
        } finally {
            setIsSending(false);
            emailInput.value = '';
        }
    };

    return (
        <>
            <section
                id="get-free-shares-today"
                className="relative overflow-hidden bg-zinc-900 py-28 sm:py-28"
            >
                <div className="flex justify-center absolute mx-auto w-screen scale-[120%] sm:scale-100 top-10 sm:top-14">
                    <CircleBackground color="#e087dd" className="animate-spin-slower" />
                </div>
                <Container className="relative">
                    <div className="sm:mt-10 mx-auto max-w-md text-center">
                        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Unsubscribe From Our Newsletter
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Enter the email you want to unsubscribe from the Vlyss newsletter.<br/>
                            By clicking &quot;Unsubscribe&quot;, you are choosing to remove yourself from the Vlyss newsletter.
                        </p>

                        <form onSubmit={handleUnsubscribe} method="DELETE" className="mt-2 text-white">
                            <div className='mt-4'>
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-start">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="emal"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center border-t border-gray-900/10 pt-8">
                                <Button
                                    variant="solid"
                                    color="splendor"
                                    type="submit"
                                    disabled={isSending}
                                    loading={isSending}
                                >
                                    <span className="mr-1.5">Unsubscribe</span>
                                    <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};