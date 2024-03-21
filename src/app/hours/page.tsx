import Image from 'next/image';
import { FaceSmileIcon, ClockIcon, PhoneIcon } from '@heroicons/react/20/solid'

import bgImage from '@/images/hours-bg.jpg'

export default function Hours() {

    const cards = [
        {
            name: 'Contact Information',
            icon: PhoneIcon,
            details: [
                {
                    key: "Phone",
                    value: "(956) 421-2000"
                },
                {
                    key: "Address",
                    value: "502 S 77 Sunshine Strip, Harlingen, TX"
                },
            ]
        },
        {
            name: 'Happy Hour',
            icon: FaceSmileIcon,
            details: [
                {
                    key: "Monday - Friday",
                    value: "3PM - 7PM"
                },
                {
                    key: "Saturday",
                    value: "11AM - 5PM"
                },
                {
                    key: "Sunday",
                    value: "All Day"
                },
            ],
        },
        {
            name: 'Hours of Operation',
            icon: ClockIcon,
            details: [
                {
                    key: "Sunday & Monday",
                    value: "11AM - 9PM"
                },
                {
                    key: "Tuesday - Thursday",
                    value: "11AM - 10PM"
                },
                {
                    key: "Friday & Saturday",
                    value: "11AM - 11PM"
                },
            ],
        },
    ]

    return (
        <>
            <div className='border-2 border-red-500 oveflow-hidden'>
                <Image
                    src={bgImage}
                    alt=""
                    className=" absolute inset-0 translate-y-[10%] sm:translate-y-[0%] translate-x-[-5%] sm:translate-x-[0%] scale-110 sm:scale-100 -z-10 h-full w-full object-cover object-right md:object-center"
                />

                <div className="px-6 lg:px-8 bg-black/60 py-24 sm:py-20 h-full overflow-hidden">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Hours and Contact
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            Find our hours-of-operation and contact information below.
                            We hope you can join us soon for some delicious, authentic Mexican cuisine.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
                        {cards.map((card) => (
                            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
                                <card.icon className="h-7 w-5 flex-none text-cyan-400" aria-hidden="true" />
                                <div className="text-base leading-7">
                                    <h3 className="font-semibold text-white">{card.name}</h3>
                                    <ul className='text-gray-200 text-sm pt-2'>
                                        {card.details?.map(({ key, value }) => (
                                            <li key={key}>
                                                <span className='font-semibold'>{key}</span>: {value}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};