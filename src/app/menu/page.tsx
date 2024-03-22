"use client";

import Image from 'next/image';
import { Fragment, useState } from 'react'
import { Disclosure, Menu as HeadlessMenu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import headerPhoto from '@/images/menu-banner.jpg'
import { Button } from '@/components/Button';
import { OrderIcon } from '@/images/icons';
import clsx from 'clsx';

enum Category {
    Appetizers = "Appetizers",
    SoupsAndSalads = "Soups and Salads",
    HouseFavorites = "House Favorites",
    Entrees = "Entrees",
    Lunch = "Lunch",
    Drinks = "Drinks",
    Kids = "Kids"
};

enum MenuItemSize {
    OneSize = "One Size",
    Medium = "Medium",
    Large = "Large"
}

interface MenuItemPrice {
    size: MenuItemSize,
    price: string,
};

interface Additional {
    description: string;
    price: string;
};

interface MenuItem {
    name: string;
    description: string;
    price: MenuItemPrice[];
    additionals?: Additional[];
    specialty: boolean;
};

interface Menu {
    [category: string]: MenuItem[];
};

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

    const menu: Menu = {
        "Appetizers": [
            {
                name: "Chili Con Queso",
                description: "Spicy dip made from melted cheese and chili peppers, served with tortilla chips",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "8.99"
                    }
                ],
                additionals: [
                    {
                        description: "Add ground beef",
                        price: "2.00"
                    },
                    {
                        description: "Add beef or chicken fajita",
                        price: "3.00"
                    },
                    {
                        description: "Add shrimp",
                        price: "4.00"
                    },
                ],
                specialty: true,
            },
            {
                name: "Guacamole",
                description: "homemade guacamole from fresh avocados and spices, garnished with lettuce and pico de gallo",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "8.99"
                    }
                ],
                specialty: false,
            },
            {
                name: "Family Appetizer",
                description: "A large chicken fajita stuffed jalapeno, four slices of ground beef nachos, one chicken flauta, one beef flauta, and three slices of chicken quesadillas. Served with sour cream and guacamole",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "15.99"
                    }
                ],
                specialty: true,
            },
            {
                name: "Los Panchos",
                description: "A large chicken fajita stuffed jalapeno, four slices of ground beef nachos, one chicken flauta, one beef flauta, and three slices of chicken quesadillas. Served with sour cream and guacamole",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "16.99"
                    }
                ],
                additionals: [
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: false,
            },
            {
                name: "Queso Flameado",
                description: "Melted monterey jack cheese serve with our tender grilled beef, chorizo, chicken fajita, or pastor",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "13.99"
                    }
                ],
                additionals: [
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: true,
            },
            {
                name: "Queso Flameado",
                description: "Melted monterey jack cheese serve with our tender grilled beef, chorizo, chicken fajita, or pastor",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "13.99"
                    }
                ],
                additionals: [
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: true,
            },
            {
                name: "Shrimp Cocktail",
                description: "Fresh gulf shrimp, boiled with our mexican spices then tossed in our spicy homemade cocktail sauce and topped with pico de gallo and avocado slices",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "14.99"
                    }
                ],
                specialty: true,
            },
            {
                name: "Fajita Quesadillas",
                description: "Made with our fresh made flour tortillas, monterrey jack cheese, and loaded with your choice of tender marinated beef or chicken fajitas. Served with guacamole, chopped tomatoes, sour cream, and pickled jalapenos",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "12.99"
                    }
                ],
                specialty: false,
            },
        ],
        "Soups and Salads": [
            {
                name: "Homemade Tortilla and Mushroom Soup",
                description: "Our delicious chicken broth seasoned with la playa and topped with monterey jack cheese, sliced tortilla chips, and rice",
                price: [
                    {
                        size: MenuItemSize.Medium,
                        price: "7.99"
                    },
                    {
                        size: MenuItemSize.Large,
                        price: "9.99"
                    },
                ],
                additionals: [
                    {
                        description: "Add chicken",
                        price: "2.00"
                    },
                ],
                specialty: false,
            },
            {
                name: "Marisco Soup",
                description: "a large hearty portion of our homemade seafood stock loaded with scallops, shrimp, fish, crawfish, and rice",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "16.99"
                    },
                ],
                specialty: false,
            },
            {
                name: "Artesanal Chicken Soup",
                description: "Our delicious recipe made with cabbage, potatoes, tomatoes, carrots, onions, squash, rice",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "8.99"
                    },
                ],
                specialty: true,
            },
            {
                name: "Taco Salad",
                description: "A crisp garden fresh salad made with black olives, tomatoes, onions, guacamole, sour cream, and american cheese. Served in a crispy flour tortilla bowl and topped with your choice of picadillo or shredded chicken",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "10.99"
                    },
                ],
                additionals: [
                    {
                        description: "Substitute fajita",
                        price: "3.00"
                    },
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: false,
            },
            {
                name: "Delux Salad",
                description: "A fresh garden salad with ripe avocado slices, red cabbage, cherry tomatoes, white and yellow cheese, and black olives. Topped with chicken or beef fajitas",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "14.99"
                    },
                ],
                additionals: [
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: true,
            },
        ],
        "House Favorites": [
            {
                name: "Fajita Guisada",
                description: "Our award-winning beef fajita simmered in homemade guisada. Served with rice and refried beans",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "15.99"
                    },
                ],
                specialty: true,
            },
            {
                name: "Fried Stuffed Avocado",
                description: "Half an avocado stuffed with your choice of beef or chicken fajita & cheese, then lightly breaded and fried. Accompanied by a fajita taco. served with rice and a cup of tortilla soup",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "14.99"
                    },
                ],
                additionals: [
                    {
                        description: "Top with chili con queso",
                        price: "1.00"
                    },
                    {
                        description: "Top with ranchero sauce",
                        price: "1.00"
                    },
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                ],
                specialty: true,
            },
            {
                name: "Burrito La Playa Style",
                description: "A large flour tortilla filled with refried beans, queso, and your choice of ground beef or shredded chicken. Topped with chili gravy and grated cheese. Served with rice and refried beans",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "12.99"
                    },
                ],
                additionals: [
                    {
                        description: "Substitute fajita meat",
                        price: "3.00"
                    },
                ],
                specialty: false,
            },
            {
                name: "Calabaza Con Puerco",
                description: "Mexican squash cooked with pork and corn. Served with rice and your choice of refried or ranchero beans. Includes homemade flour or corn tortillas",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "11.99"
                    },
                ],
                specialty: true,
            },
            {
                name: "Chile Relleno",
                description: "Poblano pepper stuffed with cheese and ground beef, then topped with ranchero sauce and grated cheese. Served with rice and refried beans",
                price: [
                    {
                        size: MenuItemSize.OneSize,
                        price: "11.99"
                    },
                ],
                additionals: [
                    {
                        description: "Substitute fajita meat",
                        price: "3.00"
                    },
                    {
                        description: "Substitute shrimp",
                        price: "4.00"
                    },
                    {
                        description: "Add cheese",
                        price: "9.99"
                    },
                ],
                specialty: false,
            },
        ],
    };

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
                            Explore our delicious and original recipes prepared with love just for you! <span className='font-semibold'>Starred menu items are specialty dishes</span>.
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

                    {/* <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8">
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
                    </div> */}
                </div>
            </div>
        </>
    );
};