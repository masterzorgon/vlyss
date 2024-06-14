import { Resend } from 'resend';

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import {
    ActionIcon,
} from '@/images/icons'

import ConfirmationUnsubscribe from '../../../emails/ConfirmationUnsubscribe';



export default async function Unsubscribe() {
    const unsubscribe = async (formData: FormData) => {
        "use server";

        const resend = new Resend(process.env.RESEND_KEY);

        const { email } = Object.fromEntries(formData);

        // Email validation using a simple regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email as string)) {
            console.error("Error: Invalid email format.");
            return; // Stop execution if the email format is invalid
        }

        try {
            // remove user from audience
            const { data: audienceConfirmation } = await resend.contacts.remove({
                email: email as string,
                audienceId: process.env.RESEND_AUDIENCE as string
            });

            // send confirmation email to user
            await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [email as string],
                subject: "You Are Removed From The La Playa Newsletter!",
                react: <ConfirmationUnsubscribe /* ADD PARAMS */ />,
            });

            console.log("Signup successful", audienceConfirmation);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <>
            <section
                id="get-free-shares-today"
                className="relative overflow-hidden bg-cyan-700 py-28 sm:py-28"
            >
                <div className="flex justify-center absolute mx-auto w-screen scale-[120%] sm:scale-100 top-10 sm:top-14">
                    <CircleBackground color="#fff" className="animate-spin-slower" />
                </div>
                <Container className="relative">
                    <div className="sm:mt-10 mx-auto max-w-md text-center">
                        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Unsubscribe From Our Newsletter
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            By clicking &quot;Unsubscribe&quot;, you are choosing to remove yourself from the La Playa Mexican Cafe newsletter. 
                        </p>

                        <form action={unsubscribe} method="POST" className="mt-2 text-white">
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
                                    color="white"
                                    type="submit"
                                >
                                    <span className="mr-1.5">Unsubscribe</span>
                                    <ActionIcon className="h-6 w-6 flex-none fill-black text-black" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>
        </>
    );
};