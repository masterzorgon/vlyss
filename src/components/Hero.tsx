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
                        <h1 className="text-4xl sm:text-6xl leading-tight text-break">
                            Vlyss brings your vision to life
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl font-medium max-w-xl mx-auto">
                            Whether you need a website, brand, or end-to-end application, Vlyss gets the job done.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4 justify-center">
                            <Button 
                                variant="solid" 
                                color="cyan" 
                                onClick={() => {
                                    console.log("EVENT TRIGGERED")
                                    track("Podcast", { location: "Hero" });
                                    window.location.href = "https://www.youtube.com/@VlyssPodcast";
                                }}
                            >
                                <span className="mr-1.5">Our Podcast</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button
                                variant="solid"
                                color="white"   
                                href="#plans"
                            >
                                <span className="mr-1.5">View Our Plans</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-black text-black" />
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mt-10">
                        <p className="text-lg font-medium text-white text-left mx-auto mt-4 flex-wrap flex max-w-xl justify-start gap-x-10 gap-y-8 lg:mx-0">
                            Our team has worked for the best
                        </p>
                        <ul
                            role="list"
                            className="mx-auto mt-2 flex-wrap sm:flex-nowrap flex max-w-xl justify-start gap-x-10 lg:mx-0"
                        >
                            {[
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