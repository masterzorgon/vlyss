import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import teamPhoto from "@/images/team.png"

import {
    ActionIcon,
} from '@/images/icons'

export function OurStory() {
  return (
    <>
        <div className="overflow-hidden py-32">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Story
                        </h2>

                        <Image 
                            src={teamPhoto}
                            width={500}
                            height={500}
                            alt="Weekly Featured Dish"
                            className='block md:hidden rounded-2xl my-6'
                        />

                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Started by the Trevino family, La Playa Mexican Cafe has been serving the Harlingen community
                            since 2006. It brings us joy to bring poeple joy through our 
                            authentic dishes made with fresh ingredients that resonate with Mexican tradition. 
                        </p>
                        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                            <Button variant="solid" color="cyan" href="/about-us">
                                <span className="mr-1.5">Learn More</span>
                                <ActionIcon className="h-6 w-6 flex-none fill-white text-white" />
                            </Button>
                        </div>
                    </div>

                    <div className="hidden md:block flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <img
                                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                        <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                            <Image
                                src={teamPhoto}
                                alt=""
                                className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                            />
                        </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};