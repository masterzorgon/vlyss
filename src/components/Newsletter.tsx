import { Resend } from 'resend';

import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

import ConfirmationNewsLetterSignup from '../../emails/ConfirmationNewsLetterSignup';
import NotificationNewsLetterSignup from '../../emails/NotificationNewsLetterSignup';

import {
    ActionIcon,
} from '@/images/icons'

export async function Newsletter() {
    const fetchContactListLength = async () => {
        "use server";

        const resend = new Resend(process.env.RESEND_KEY);

        // retrieve length of contacts and notify to la playa
        const { data } = await resend.contacts.list({
            audienceId: process.env.RESEND_AUDIENCE as string,
        });

        return data!.data.length as number;
    };

    const signUp = async (formData: FormData) => {
        "use server";

        const resend = new Resend(process.env.RESEND_KEY);

        const { email, name } = Object.fromEntries(formData);

        // Basic validation
        if (!email || !name) {
            alert("Please enter all required fields");
            return; // Stop execution if any field is missing
        }

        // Email validation using a simple regex pattern
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email as string)) {
            console.error("Error: Invalid email format.");
            return; // Stop execution if the email format is invalid
        }

        // Name validation (example: ensure name is at least 2 characters long)
        if ((name as string).length < 2) {
            console.error("Error: Name must be at least 2 characters long.");
            return; // Stop execution if the name doesn't meet the criteria
        }

        try {
            // add signee to the audience
            const { data: audienceConfirmation } = await resend.contacts.create({
                email: email as string,
                firstName: name as string,
                unsubscribed: false,
                audienceId: process.env.RESEND_AUDIENCE as string
            });

            // send confirmation email to signee
            await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: [email as string],
                subject: "Welcome to the Vlyss Newsletter!",
                react: <ConfirmationNewsLetterSignup /* ADD PARAMS */ />,
                headers: {
                    'List-Unsubscribe': '<https://www.laplayamexicancafe.com/unsubscribe>'
                }
            });

            // calculate length of contact list and notify la playa of new signup
            const numOfContacts = await fetchContactListLength();
            await resend.emails.send({
                from: "Acme <onboarding@resend.dev>",
                to: "hello@vlyss.com",
                subject: "New Newsletter Signup!",
                react: <NotificationNewsLetterSignup numOfContacts={numOfContacts} />
            });

            console.log("Signup successful", audienceConfirmation);
        } catch (error) {
            console.error("Error signing up:", error);
        }
    };

    return (
        <>
            <section
                id="newsletter"
                aria-labelledby="newsletter-title"
                className="relative overflow-hidden bg-zinc-900 py-28 sm:pb-32"
            >
                <div className="flex justify-center absolute mx-auto w-screen scale-[120%] top-0 lg:scale-100 lg:top-14">
                    <CircleBackground color="#e087dd" className="animate-spin-slower" />
                </div>

                <Container className="relative">
                    <div className="sm:mt-20 mx-auto max-w-md text-center">
                        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Join Our Newsletter
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Follow the conversation as Vlyss discusses all things design, technology, and culture.
                        </p>

                        <form action={signUp} method="POST" className="mt-2 text-white">
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
                                    color="cyan"
                                    type="submit"
                                >
                                    <span className="mr-1.5">Subscribe</span>
                                    <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>

            <div className='bg-zinc-900 w-full pb-16 pt-16'>
                <p className='text-xs text-white/50 text-center max-w-xl mx-auto shadow-lg bg-gray-400/5 rounded-lg p-4'>
                    By clicking &quot;Subscribe&quot;, you agree to recieve marketing messages from Vlyss at the number or email provided, including messages sent by autodialer.
                    Consent is not a condition of any purchase.
                    Message and data rates may apply.
                    Message frequency varies.
                    You can unsubscribe at any time by replying &quot;STOP&quot; via SMS or clicking the &quot;Unsubscribe&quot; link (where available) in one of our messages.
                    View our <a className="underline hover:cursor-pointer hover:text-white" href="/privacy-policy">Privacy Policy</a> and <a className="underline hover:cursor-pointer hover:text-white" href="terms-of-service" target="_blank" rel="noreferrer noopener">Terms of Service</a>.
                    You can also unsibscribe from our email list <a className='underline hover:cursor-pointer hover:text-white' href="/unsubscribe">here</a>.
                </p>
            </div>
        </>
    );
};

// privacy policy: https://www.hardjewelry.com/pages/privacy-policy
// terms of service: https://www.hardjewelry.com/pages/terms-of-service
