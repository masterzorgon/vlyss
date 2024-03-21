"use client";

import Image from 'next/image';
import { Fragment, useState } from 'react'
import { Disclosure, Menu as HeadlessMenu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import headerPhoto from '@/images/Mexican Cuisine Stock Photo (1).jpg'
import { Button } from '@/components/Button';
import { OrderIcon } from '@/images/icons';
import clsx from 'clsx';

enum Category {
    Appetizers,
    SoupsAndSalads,
    HouseFavorites,
    Entrees,
    Lunch,
    Drinks,
    Kids
}

export default function Menu() {
    const [category, setCategory] = useState<Category>(Category.Appetizers);

    const compareType = (type: Category) => category === type;

    const categories = [
        { name: 'Appetizers', type: Category.Appetizers, action: () => setCategory(Category.Appetizers) },
        { name: 'Soups and Salads', type: Category.SoupsAndSalads, action: () => setCategory(Category.SoupsAndSalads) },
        { name: 'House Favorites', type: Category.HouseFavorites, action: () => setCategory(Category.HouseFavorites) },
        { name: 'Entrees', type: Category.Entrees, action: () => setCategory(Category.Entrees) },
        { name: 'Lunch', type: Category.Lunch, action: () => setCategory(Category.Lunch) },
        { name: 'Drinks', type: Category.Drinks, action: () => setCategory(Category.Drinks) },
        { name: 'Kids', type: Category.Kids, action: () => setCategory(Category.Kids) },
    ];

    const products = [
        {
            id: 1,
            name: 'Basic Tee 8-Pack',
            href: '#',
            price: '$256',
            description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
            imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            price: '$32',
            description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
            imageAlt: 'Front of plain black t-shirt.',
        },
        {
            id: 1,
            name: 'Basic Tee 8-Pack',
            href: '#',
            price: '$256',
            description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
            imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            price: '$32',
            description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
            imageAlt: 'Front of plain black t-shirt.',
        },
        {
            id: 1,
            name: 'Basic Tee 8-Pack',
            href: '#',
            price: '$256',
            description: 'Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-01.jpg',
            imageAlt: 'Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            price: '$32',
            description: 'Look like a visionary CEO and wear the same black t-shirt every day.',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-02.jpg',
            imageAlt: 'Front of plain black t-shirt.',
        },
    ]

    return (
        <>
            {/* HEADER */}
            <div className="bg-white">
                <div aria-hidden="true" className="relative">
                    <Image
                        src={headerPhoto}
                        alt=""
                        className="h-96 w-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white" />
                </div>

                <div className="relative mx-auto -mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center grid grid-rows-3 gap-y-6">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            Our Award-Winning Menu
                        </h2>
                        <p className="text-gray-500">
                            Explore our delicious and original recipes prepared with love just for you! When you are ready to place an order, tap the button below to begin.
                        </p>
                        <div>
                            <Button variant="solid" color="cyan" href="https://order.toasttab.com/online/la-playa-mexican-cafe-502-s-77-sunshine-strip" target="_blank" rel="noopener noreferrer">
                                <span className="mr-1.5">Order Now</span>
                                <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* FILTER */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center border-b border-t border-gray-200"
            >
                <div className="col-start-1 row-start-1 py-4">
                    <div className="mx-auto grid grid-cols-3 max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div />
                        <h2 className='text-center font-semibold'>
                            {categories.find(item => item.type === category)?.name}
                        </h2>
                        <HeadlessMenu as="div" className="relative inline-block flex justify-end">
                            <div className="flex">
                                <HeadlessMenu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Category
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </HeadlessMenu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <HeadlessMenu.Items className="absolute right-0 z-10 mt-10 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {categories.map((option) => (
                                            <HeadlessMenu.Item key={option.name}>
                                                {({ active }) => (
                                                    <button
                                                        className={clsx(
                                                            compareType(option.type) ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm w-full text-start'
                                                        )}
                                                        onClick={option.action}
                                                    >
                                                        {option.name}
                                                    </button>
                                                )}
                                            </HeadlessMenu.Item>
                                        ))}
                                    </div>
                                </HeadlessMenu.Items>
                            </Transition>
                        </HeadlessMenu>
                    </div>
                </div>
            </Disclosure>

            {/* CONTENT */}
            <div className="bg-white mt-8">
                <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>

                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white"
                            >
                                <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-96">
                                    <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center sm:h-full sm:w-full"
                                    />
                                </div>
                                <div className="flex flex-1 flex-col space-y-2 p-4">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        {product.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{product.description}</p>
                                    <div className="flex flex-1 flex-col justify-end">
                                        <p className="text-base font-medium text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};