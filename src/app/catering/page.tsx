"use client";

import { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/Button';
import { ActionIcon } from '@/images/icons';

interface FormField {
    label: string;
    id: string;
    placeholder: string;
    autoComplete?: string;
    isOptional?: boolean;
    isFullWidth?: boolean;
    isTextArea?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function Catering() {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [partySize, setPartySize] = useState<string>("");
    const [desiredDate, setDesiredDate] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isFormValid, setIsFormValid] = useState<boolean>(false);

    const handleCateringRequest = async () => {
        console.log("request initiated");
    };

    useEffect(() => {
        setIsFormValid(
            firstName.length > 0 &&
            email.length > 0 &&
            phoneNumber.length > 0 &&
            partySize.length > 0 &&
            desiredDate.length > 0
        );
    }, [firstName, email, phoneNumber, partySize, desiredDate]);

    const inputs: FormField[] = [
        {
            label: "First Name",
            id: "first-name",
            placeholder: "John",
            onChange: event => setFirstName(event.target.value)
        },
        {
            label: "Last Name",
            id: "last-name",
            placeholder: "Doe",
            isOptional: true,
            onChange: event => setLastName(event.target.value)
        },
        {
            label: "Email",
            id: "email",
            placeholder: "john@example.com",
            autoComplete: "email",
            isFullWidth: true,
            onChange: event => setEmail(event.target.value)
        },
        {
            label: "Phone Number",
            id: "phone-number",
            placeholder: "(123) 456-7890",
            autoComplete: "tel",
            isFullWidth: true,
            onChange: event => setPhoneNumber(event.target.value)
        },
        {
            label: "Party Size",
            id: "party-size",
            placeholder: "10",
            onChange: event => setPartySize(event.target.value)
        },
        {
            label: "Desired Date",
            id: "desired-date",
            placeholder: "10/3/2024",
            onChange: event => setDesiredDate(event.target.value)
        },
        {
            label: "Message",
            id: "message",
            placeholder: "Have a special request? Leave us a message.",
            isOptional: true,
            isTextArea: true,
            isFullWidth: true,
            onChange: event => setMessage(event.target.value)
        }
    ];

    return (
        <>
            <div className="relative isolate bg-white">
                <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
                    <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-50 ring-1 ring-gray-900/10 lg:w-1/2">
                                <div
                                    className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                                    aria-hidden="true"
                                >
                                    <div
                                        className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-30"
                                        style={{
                                            clipPath:
                                                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                                        }}
                                    />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Catering & Reservations</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Let us make your event memorable with our delicious catering. <span className='font-semibold'>To submit the form, you must fill out all required fields</span>.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                To make a reservation, please call La Playa using the number below.
                            </p>
                            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Telephone</span>
                                        <PhoneIcon className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                    </dt>
                                    <dd>
                                        <a className="hover:text-gray-900" href="tel:+1 (555) 234-5678">
                                            +1 (956) 421-2000
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>

                    <form action={handleCateringRequest} method="POST" className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
                        <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                {inputs.map(input => (
                                    <div key={input.id} className={`${input.isFullWidth && "sm:col-span-2"}`}>
                                        <div className="flex justify-between">
                                            <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                                {input.label}
                                            </label>
                                            {
                                                input.isOptional &&
                                                <span className="text-sm leading-6 text-gray-500" id="message-optional">
                                                    Optional
                                                </span>
                                            }
                                        </div>
                                        <div className="mt-2.5">
                                            {
                                                input.isTextArea
                                                    ?
                                                    <textarea
                                                        name={input.id}
                                                        id={input.id}
                                                        rows={4}
                                                        placeholder={input.placeholder}
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                                        defaultValue={""}
                                                        onChange={input.onChange}
                                                    />
                                                    :
                                                    <input
                                                        type="text"
                                                        name={input.id}
                                                        id={input.id}
                                                        placeholder={input.placeholder}
                                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-500 sm:text-sm sm:leading-6"
                                                        onChange={input.onChange}
                                                    />
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 flex justify-end">
                                <Button
                                    type="submit"
                                    variant="solid"
                                    color="cyan"
                                    disabled={!isFormValid}
                                >
                                    <span className="mr-1.5">Submit Request</span>
                                    <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};