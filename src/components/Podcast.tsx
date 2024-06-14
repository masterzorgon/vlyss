import Image from 'next/image'

import { Button } from '@/components/Button'

import foodItem from "@/images/Tacos Cutting Board Juice.jpg"
import podImage from "@/images/vlyss-pod.jpg"

import {
    ActionIcon,
    OrderIcon
} from '@/images/icons'

export function Podcast() {
  return (
    <>
        <section 
            id="reviews"
            aria-labelledby="reviews-title"
            className="relative isolate z-10 bg-zinc-900 py-32"
        >
            <div className=" mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className=" mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-start lg:py-20 xl:gap-x-20 xl:px-20">
                    <Image
                        className="flex-none rounded-2xl object-cover shadow-xl shadow-pink-500/10 aspect-video h-auto max-w-sm"
                        src={podImage}
                        alt="Vlyss Podcast Thumbnail"
                    />
                    <div className="h-96 w-full flex-auto ">
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            <span>Join the conversation!</span>
                        </h2>
                        <p className='mt-10 text-white text-2xl font-semibold'>The Vlyss Podcast</p>
                        <p className="mt-2 text-lg leading-8 text-gray-200">
                            Every week, the Vlyss team releases an episode spanning topics across technology, design, culture, and college life. Join us as we talk through our thoughts and experiences as young entreprenuers.
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Button variant="solid" color="cyan" href="https://www.youtube.com/@VlyssPodcast" target="_blank" rel="noopener noreferrer">
                                <span className="mr-1.5">Our Podcast</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button
                                href="https://cal.com/hello-vlyss/15min"
                                variant="outline"
                            >
                                <span className="mr-1.5">Book a Meeting</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-white" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#e087dd] opacity-45"
                    style={{
                        clipPath:
                        'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>
        </section>
    </>
  )
}
