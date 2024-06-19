"use client";

import Image from 'next/image'
import clsx from 'clsx'
import { Suspense } from 'react'
import { track } from '@vercel/analytics';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import customersLogo from '@/images/logos/customers.svg'

import {
    ActionIcon,
    OrderIcon
} from '@/images/icons'

function FallBack() {
    return (
        <div className='h-screen w-screen bg-red-500'>
            <p>Your browser doesn&apos;t support video</p>
        </div>
    );
};

function VideoComponent() {
    return (
        <video
            preload="none"
            aria-label="Video player"
            playsInline
            autoPlay
            loop
            muted
            className="absolute left-1/3 top-1/2 max-w-none translate-x-[-40%] translate-y-[-60%] object-cover"
        >
            <source src={require("@/images/videos/hero.mp4")} type='video/mp4' />
        </video>
    );
};

export function Hero() {

    return (
        <div className="relative overflow-hidden">
            <Suspense fallback={<FallBack />}>
                <VideoComponent />
            </Suspense>

            <div className='absolute z-10 h-[1000px] w-screen bg-black/30' />

            <Container className='relative text-white h-full py-20 m-20 z-10 border-2 border-white/10 backdrop-blur-md bg-white/10 rounded-2xl shadow-xl'>
                <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 lg:max-w-none">
                        <h1 className="text-4xl sm:text-6xl font-medium leading-tight">
                            Vlyss brings your vision to life
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-white font-semibold sm:tracking-wide sm:mx-32">
                            Whether you need a landing page, brand, or full-stack application, Vlyss gets the job done.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 justify-center">
                            <Button variant="solid" color="cyan" href="https://www.youtube.com/@VlyssPodcast" target="_blank" rel="noopener noreferrer" onClick={() => track("View podcast action")}>
                                <span className="mr-1.5">Our Podcast</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button
                                href="https://cal.com/hello-vlyss/15min"
                                variant="solid"
                                color="white"
                                onClick={() => track("Book a meeting action")}
                            >
                                <span className="mr-1.5">Book a Meeting</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-black text-black" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10">
                        <p className="text-lg font-semibold text-white text-left mx-auto mt-4 flex-wrap flex max-w-xl justify-start gap-x-10 gap-y-8 lg:mx-0">
                            Our team has worked for the best
                        </p>
                        <ul
                            role="list"
                            className="mx-auto mt-2 flex-wrap sm:flex-nowrap flex max-w-xl justify-start gap-x-10 lg:mx-0"
                        >
                            {[
                                // ['The Solana Foundation', solanaLogo],
                                // ['Brev.dev', brevLogo],
                                // ['Dell Financial Services', dellLogo],
                                ['Customers', customersLogo],
                            ].map(([name, logo, className]) => (
                                <li key={name} className={clsx('flex', className)}>
                                    <Image src={logo} alt={name} unoptimized />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};