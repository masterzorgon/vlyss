import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { useFormState } from 'react-dom'

import {
    ActionIcon,
} from '@/images/icons'

// mailchimp api key: c73f86d42e55291079935421b1dc21e0-us14
// mailchimp server: https://us14.admin.mailchimp.com

// hitting mailchimp api from next.js server side
// https://stackoverflow.com/questions/70788387/how-to-get-rid-of-cors-error-with-mailchimp-api

// using forms and the app router
// https://www.youtube.com/watch?v=dDpZfOQBMaU

// fullstack next.js newsletter sign up ⭐️
// https://www.youtube.com/watch?v=4E__efwEJqA

export async function Newsletter() {
    return (
        <>
            <section
                id="get-free-shares-today"
                className="relative overflow-hidden bg-cyan-800 py-28 sm:py-28"
            >
                <div className="flex justify-center absolute mx-auto w-screen scale-[120%] sm:scale-100 top-10 sm:top-14">
                    <CircleBackground color="#fff" className="animate-spin-slower" />
                </div>
                <Container className="relative">
                    <div className="sm:mt-10 mx-auto max-w-md text-center">
                        <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                            Join Our Newsletter
                        </h2>
                        <p className="mt-4 text-lg text-gray-300">
                            Stay in touch with the latest news on our promotions and menu changes.
                        </p>

                        <form action="#" method="POST" className="mt-2 text-white">
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-start">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className='mt-4'>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-start">
                                    Phone
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex justify-center border-t border-gray-900/10 pt-8">
                                <Button
                                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                    variant="solid"
                                    color="white"
                                >
                                    <span className="mr-1.5">Subscribe</span>
                                    <ActionIcon className="h-6 w-6 flex-none fill-black text-black" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Container>
            </section>

            <div className='bg-cyan-800 w-full pb-16'>
                <p className='text-xs text-white/50 text-center max-w-xl mx-auto shadow-lg bg-gray-400/5 rounded-lg p-4'>
                    By clicking &quot;Subscribe&quot;, you agree to recieve marketing messages from La Playa Mexican Cafe at the number or email provided, including messages sent by autodialer.
                    Consent is not a condition of any purchase.
                    Message and data rates may apply.
                    Message frequency varies.
                    You can unsubscribe at any time by replying &quot;STOP&quot; via SMS or clicking the &quot;Unsubscribe&quot; link (where available) in one of our messages.
                    View our <a className="underline hover:cursor-pointer hover:text-white" href="/privacy-policy" target="_blank" rel="noreferrer noopener">Privacy Policy</a> and <a className="underline hover:cursor-pointer hover:text-white" href="terms-of-service" target="_blank" rel="noreferrer noopener">Terms of Service</a>.
                </p>
            </div>
        </>
    );
};

// privacy policy: https://www.hardjewelry.com/pages/privacy-policy
// terms of service: https://www.hardjewelry.com/pages/terms-of-service
