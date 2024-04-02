"use client";

import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu as HeadlessMenu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx';

import headerPhoto from '@/images/menu-banner.jpg'
import { Button } from '@/components/Button';
import { OrderIcon } from '@/images/icons';
import { SectionBreak } from '@/components/SectionBreak';

enum Category {
    Appetizers = "Appetizers",
    SoupsAndSalads = "Soups and Salads",
    HouseFavorites = "House Favorites",
    Desserts = "Desserts",
    Lunch = "Lunch",
    Entrees = "Entrees",
    Drinks = "Drinks",
    Kids = "Kids",
};

enum MenuItemSize {
    OneSize = "One Size",
    Medium = "Medium",
    Large = "Large"
}

interface MenuItemPrice {
    size: MenuItemSize | string,
    price: string,
};

interface Additional {
    description: string;
    price?: string;
};

interface MenuItemImage {
    src: string;
    alt: string;
}

interface MenuItem {
    name: string;
    description: string;
    price?: MenuItemPrice[];
    additionals?: Additional[];
    specialty: boolean;
    image: MenuItemImage
};

interface Menu {
    [category: string]: MenuItem[];
};

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
            image: {
                src: "1INQN3XF4iJuwMs2nDL3knHOu5A5aPyux",
                alt: "Chili Con Queso"
            }
        },
        {
            name: "Guacamole",
            description: "homemade guacamole from fresh avocados and spices, garnished with lettuce and pico de gallo",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "8.99"
                },
            ],
            specialty: false,
            image: {
                src: "11IdQOAf6ZyWlk9r8604CsWbvVcuysqXL",
                alt: "Guacamole"
            }
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
            image: {
                src: "1g6FJhCknj3Z64k5MPnh5afsfGTNUZ2Jp",
                alt: "Family Appetizer"
            }
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
            image: {
                src: "1go3n3ZQWs4D7TJL7Uk3z4Gwa6Q-VAmMn",
                alt: "Los Panchos"
            }
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
            image: {
                src: "10JUh1UftzZeks0GpRhc3X1hv2OFxSLB-",
                alt: "Queso Flameado"
            }
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
            image: {
                src: "1qUX-zsvb2dXz0lcpFEtITKTKr9wmhbeo",
                alt: "Shrimp Cocktail"
            }
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
            image: {
                src: "12-_OdqEtPBUYwjMXidazA5w6adLBnMs2",
                alt: "Fajita Quesadillas"
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
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
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "la Playa Chimichanga",
            description: "a large tortilla loaded with your choice of seasoned ground beef or hand shredded chicken and cheese then fried nice an crisp. topped with our flavorful chili gravy and cheese. served with rice and refried beans then garnished with lettuce and pico de gallo",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Carnitas",
            description: "our perfectly seasoned pan seared pork accompanied by tomatoes, onions and a side of our red diabla sauce. served with rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Flautas",
            description: "three rolled corn tortillas filled with cheese and your choice of spicy ground beef or shredded chicken then deep fried and topped with our fresh sour cream. served with rice, refried beans, and guacamole",
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
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Milanesa",
            description: "mouthwatering marinated fajita skirt or juicy chicken breasts lightly breaded then fried to perfection and topped with our delicious ranchero sauce and cheese. served sizzling on a bed of onions with rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "17.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "tacos Al Carbon",
            description: "two fresh homemade flour tortillas filled with our famous beef or chicken fajitas. served with rice, refried beans, pico de gallo, and a side of chili con queso for dipping",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "16.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
    "Desserts": [
        {
            name: "Flan",
            description: "this traditional mexican dessert is a luxurious baked custard with a hint of mexican cinnamon in a rich caramelized topping. a classic!",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fried Ice Cream",
            description: "a large scoop of vanilla ice cream, breaded, spiced with cinnamon, then quickly fried for a paradoxical paradise. served with a dollop of sweet whipped cream",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Sopapilla",
            description: "a pillow like puff of deep fried pastry sprinkled with cinnamon and sugar",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "3.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Tres Leches",
            description: "a dense moist cake soaked in a mixture of three different milk products: evaporated, sweetened condensed , and heavy cream. topped with a cloud of vanilla whipped cream. heavenly",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
    "Lunch": [
        {
            name: "Crispy Tacos",
            description: "three tacos filled with your choice of ground beef or chicken ranchero, lettuce, tomatoes and cheese. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "18.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Enchiladas",
            description: "your choice of two ground beef or chicken ranchero enchiladas covered with our homemade enchilada gravy and grated cheese. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            additionals: [
                {
                    description: "Substitute beef or chicken fajita meat",
                    price: "3.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Calabaza Con Puerco",
            description: "mexican squash cooked with pork and corn. served with rice and refried or ranchero beans. includes flour or corn tortillas",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Street Tacos",
            description: "three tacos stuffed with your choice of carne asada, chicken, pork, or mixed. topped with cilantro, onions, and queso fresco. served with charro beans, limes, and a side of green diabla sauce",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "11.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Burger",
            description: "1/4 lb beef patty with pickles, lettuce, onion, tomatoes, bacon and yellow american cheese",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "10.99"
                },
            ],
            additionals: [
                {
                    description: "Add slice of avocado",
                    price: "1.25"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Puffy Tacos",
            description: "two deep fried puffy tacos filled with ground beef or shredded chicken, lettuce, tomato and cheese. served with rice, beans and diabla verde sauce",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Mexican Cafe",
            description: "your choice of beef or chicken chalupa, beef or chicken enchilada, and one crispy beef taco. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Flautas",
            description: "two rolled corn tortillas filled with cheese and your choice of spicy ground beef or shredded chicken then deep fried and topped with our fresh sour cream. served with rice, refried beans, and guacamole",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Seafood Street Tacos",
            description: "three tacos stuffed with your choice of fresh fish or shrimp , topped with purple cabbage, chopped tomatoes, and cilantro, drizzled with our delicious cilantro lime sauce. served with rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "13.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Chalupas",
            description: "two crispy corn tortillas topped with fresh lettuce, cheese, tomatoes, and your choice of savory ground beef or shredded chicken. served with a side of chili con queso and guacamole",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            additionals: [
                {
                    description: "Substitute fajita meat",
                    price: "4.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Burrito la Playa Style",
            description: "a large flour tortilla filled with refried beans, queso, and your choice of ground beef or shredded chicken. topped with chili gravy and grated cheese. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "10.99"
                },
            ],
            additionals: [
                {
                    description: "Substitute fajita meat",
                    price: "3.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Chimichanga",
            description: "a large flour tortilla filled with refried beans, queso, and your choice of ground beef or shredded chicken. topped with chili gravy and grated cheese. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "10.99"
                },
            ],
            additionals: [
                {
                    description: "Substitute fajita meat",
                    price: "3.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Burrito La Playa Style",
            description: "a large flour tortilla filled with refried beans, queso, and your choice of ground beef or shredded chicken. topped with chili gravy and grated cheese. served with rice and refried beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "10.99"
                },
            ],
            additionals: [
                {
                    description: "Substitute fajita meat",
                    price: "3.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Chimichanga",
            description: "a large tortilla loaded with your choice of seasoned ground beef or hand shredded chicken and cheese then fried nice an crisp. topped with our flavorful chili gravy and cheese. served with rice and refried beans then garnished with lettuce and pico de gallo",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "11.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fajita Quesadilla",
            description: "flour tortilla filled with monterrey jack cheese and your choice of beef or chicken fajita . served with rice, refried beans, sour cream and pico de gallo",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
    "Entrees": [
        {
            name: "The Mexican Plate",
            description: "your choice of fresh beef or chicken chalupa , beef or chicken enchilada and one crispy beef taco",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "El Guero",
            description: "one melty cheese enchilada , one crispy beef taco and flavorful beef, chicken, or mixed fajitas",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "13.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Reyna",
            description: "three savory chicken quesadilla slices and one beef fajita taco topped with creamy chili con queso",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "13.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "El Mariachi Loco",
            description: "a small taco salad, one beef fajita taco, and three chicken fajita quesadilla slices",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "13.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Beef, Chicken, or Mix",
            description: "four tacos topped with cilantro, onions, and queso fresco",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with charro beans, rice, and green diabla sauce"
                }
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Shrimp, Fish, or Mix",
            description: "four tacos topped with purple cabbage, chopped tomatoes, and cilantro, drizzled with our delicious cilantro lime sauce. your choice of grilled or fried",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "16.99"
                },
            ],
            additionals: [
                {
                    description: "served with charro beans, rice, and green diabla sauce"
                }
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Al Pastor",
            description: "four tacos filled with chili rubbed grilled pork marinated in a guajillo pineapple marinade. topped with chopped onions and cilantro",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with charro beans, rice, and green diabla sauce"
                }
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Carnitas",
            description: "four tacos stuffed with our delicious pork carnitas. topped with cilantro and onions, served with fresh limes",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with charro beans, rice, and green diabla sauce"
                }
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Fajitas",
            description: "four tacos topped with cilantro, onions, and queso fresco",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and charro beans. choice of two: pico de gallo, sour cream or cheese"
                }
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fajitas Trascas",
            description: "our award-winning fajitas topped with our mouthwatering poblano pepper cream sauce.",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "20.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and charro beans. choice of two: pico de gallo, sour cream or cheese"
                }
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fajitas Las Brasas",
            description: "our award winning fajitas topped with a creamy pico de gallo wine sauce and sauteed mushrooms.",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "20.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and charro beans. choice of two: pico de gallo, sour cream or cheese"
                }
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fajitas Diablas",
            description: "our tender marinated beef, chicken, or mixed fajitas topped with a spicy homemade diabla sauce with roasted arbol peppers.",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "20.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and charro beans. choice of two: pico de gallo, sour cream or cheese"
                }
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Chicken and Spinach",
            description: "perfectly seasoned chargrilled chicken breast with a spinach and mushroom cream sauce. served with rice in steamed veggies",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Chicken Jalisco",
            description: "grilled chicken breast topped with sauteed onions, jalapenos, fresh minced garlic, tomatoes, cilantro and mushrooms, in a creamy buttery wine sauce. topped with monterrey jack cheese. served with rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Chicken Olivia",
            description: "fresh chicken breast dipped in our special batter then pan seared. topped with our olivia sauce which is made with cherry tomatoes and spinach carefully sauteed with extra virgin olive oil and mexican spices. served with fresh steamed veggies and rice",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Pollo Asado",
            description: "lightly seasoned chicken breasts grilled to perfection. served with steamed veggies and rice",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Pollo Fronterizo",
            description: "grilled chicken breast stuffed with shrimp, tomatoes, cilantro, mushrooms and onions. then topped with a creamy pico de gallo wine sauce. served on a bed of rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "18.99"
                },
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fried Shrimp Platter",
            description: "six deep fried jumbo shrimp served over a bed of fries with tartar and cocktail sauce",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "16.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Shrimp Amarrados",
            description: "six perfectly seasoned bacon wrapped jumbo shrimp stuffed with sliced jalapeno peppers and topped with monterrey jack cheese. served on a sizzling platter on top of a bed of grilled onions. includes our homemade jalapeno butter wine sauce , rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "21.99"
                },
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fish Cancun",
            description: "our delicious pan seared fresh fish filet topped with sauteed scallops and crawfish in a creamy white wine sauce. served with rice and steamed vegetables",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "18.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Steamed Fish Platter",
            description: "a fresh fish filet and three jumbo shrimp steamed with mushrooms, onions, jalapenos and tomatoes with our special blend of mexican spices. served with steamed veggies and rice",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "24.95"
                },
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Playa Seafood Platter",
            description: "fresh fish filet and two jumbo shrimp lightly breaded and fried on top of a bed of fries. served with our homemade lemon seafood sauce and a side salad",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "18.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fish San Lucas",
            description: "our fresh fish filet grilled and topped with sauteed onions, jalapenos, fresh minced garlic, tomatoes, cilantro and mushrooms, in a creamy butter wine sauce. served with rice and charro beans",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "15.99"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Enchiladas Verdes",
            description: "two flavorful shredded chicken enchiladas topped with homemade tomatillo sauce and fresh sour cream",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
                {
                    description: "substitute fajita",
                    price: "2.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Seafood Enchiladas",
            description: "two monterey jack cheese enchiladas topped with a delectable blend of shrimp, scallops, sauteed mushrooms, bell peppers, in a light cream sauce",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Enchiladas Moles",
            description: "two shredded chicken enchiladas topped with our spicy homemade mole sauce, sour cream and queso fresco",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fajitas Enchiladas",
            description: "two enchiladas stuffed with your choice of beef or chicken fajita meat topped with our homemade beef gravy and cheese",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "14.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Enchiladas",
            description: "your choice of ground beef or shredded chicken enchiladas covered with homemade beef gravy and freshly grated cheese",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "11.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Playaquena",
            description: "angus beef paired with two cheese enchiladas and served on a bed of grilled onion. served sizzling",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "18.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Sour Cream Enchiladas",
            description: "two fresh chicken enchiladas topped with our mouthwatering sour cream sauce and monterey jack cheese",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Cheese Enchiladas",
            description: "two melted cheese enchiladas made with yellow american cheese and our homemade beef gravy",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "9.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Spinach Enchiladas",
            description: "two monterey jack cheese enchiladas topped with our sauteed spinach cream sauce",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "12.99"
                },
            ],
            additionals: [
                {
                    description: "served with rice and beans"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
    "Drinks": [
        {
            name: "House Margaritas",
            description: "Frozen or On the Rocks",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.00"
                },
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Frozen Specialty Margaritas",
            description: "Mango | Chamoy | Cucumber",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "7.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "La Reina Margarita",
            description: "Premium Margarita",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "7.00"
                },
            ],
            additionals: [
                {
                    description: "Made with Don Julio",
                    price: "15.00"
                }
            ],
            specialty: true,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Domestic Beer",
            description: "Bud Light | Miller Lite | Michelob Ultra | Buedweiser",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "4.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Imported Beer",
            description: "Corona | Pacifico | Modelo Especial | Victoria | Dos XX",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "5.00"
                },
            ],
            additionals: [
                {
                    description: "Add Miche",
                    price: "2.00",
                }
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Domested Draft Beer",
            description: "",
            price: [
                {
                    size: "Pint",
                    price: "4.00"
                },
                {
                    size: "Tall",
                    price: "5.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Domested Imported Beer",
            description: "",
            price: [
                {
                    size: "Pint",
                    price: "5.00"
                },
                {
                    size: "Tall",
                    price: "6.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "House Wine",
            description: "Red | White",
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
    "Kids": [
        {
            name: "Crispy Tacos",
            description: "choice of ground beef or shredded chicken",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "5.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Carbon Taco",
            description: "choice of beef or chicken",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Fried Shrimp",
            description: "two jumbo fried shrimp and fries",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "6.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Chicken Fingers",
            description: "includes fries",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "5.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Quesadilla",
            description: "three slices filled with monterey jack cheese",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "5.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
                {
                    description: "includes fries",
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
        {
            name: "Mac and Cheese",
            description: "",
            price: [
                {
                    size: MenuItemSize.OneSize,
                    price: "5.99"
                },
            ],
            additionals: [
                {
                    description: "for kids ages 10 and under"
                },
                {
                    description: "add parmesan cheese",
                    price: "1.00"
                },
            ],
            specialty: false,
            image: {
                src: "",
                alt: ""
            }
        },
    ],
};

export default function Menu() {
    const [category, setCategory] = useState<Category>(Category.Appetizers);
    const [categoryItems, setCategoryItems] = useState<MenuItem[]>(menu[Category.Appetizers]);

    const categories = [
        { name: 'Appetizers', type: Category.Appetizers, action: () => setCategory(Category.Appetizers) },
        { name: 'Soups and Salads', type: Category.SoupsAndSalads, action: () => setCategory(Category.SoupsAndSalads) },
        { name: 'House Favorites', type: Category.HouseFavorites, action: () => setCategory(Category.HouseFavorites) },
        { name: 'Entrees', type: Category.Entrees, action: () => setCategory(Category.Entrees) },
        { name: 'Lunch', type: Category.Lunch, action: () => setCategory(Category.Lunch) },
        { name: 'Drinks', type: Category.Drinks, action: () => setCategory(Category.Drinks) },
        { name: 'Kids', type: Category.Kids, action: () => setCategory(Category.Kids) },
    ];

    const compareType = (type: Category) => category === type;

    useEffect(() => {
        setCategoryItems(menu[category]);
    }, [category]);

    const happyHourInfo = [
        { id: 1, name: 'House Margaritas', description: "Frozen or On The Rocks", value: '$4' },
        { id: 2, name: 'Imported Beer', description: "Bottle | Tall Draft | Pint", value: '$4 | $5 | $4' },
        { id: 3, name: 'Domestic Beer', description: "Bottle | Tall Draft | Pint", value: '$3 | $4 | $3' },
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

            {/* HAPPY HOUR */}
            <div className="relative isolate z-10 bg-cyan-800 py-24 sm:pb-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 mx-10 ring-1 ring-white/10 rounded-3xl shadow-md bg-white/5">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="text-center text-white">
                            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                                Happy Hour
                            </h2>
                            <p className="mt-4 text-lg leading-8">
                                <span className='font-semibold'>Monday - Friday</span>: 3PM - 6:30 PM<br /><span className='font-semibold'>Saturday</span>: 11AM - 5PM<br /><span className='font-semibold'>Sunday</span>: All Day
                            </p>
                        </div>
                        <div className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center lg:grid-cols-3">
                            {happyHourInfo.map((stat) => (
                                <div key={stat.id} className="grid grid-rows-3 bg-white/10 p-8 gap-y-4">
                                    <span className="text-2xl font-semibold leading-6 text-white">{stat.name}</span>
                                    <span className="text-md font-semibold tracking-tight text-gray-200">{stat.description}</span>
                                    <span className="text-md font-semibold tracking-tight text-gray-200">{stat.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

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

            {/* FILTER */}
            <Disclosure
                as="section"
                aria-labelledby="filter-heading"
                className="grid items-center border-b border-t border-gray-200"
            >
                <div className="col-start-1 row-start-1 py-4">
                    <div className="mx-auto grid grid-cols-3 max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div />

                        <div />

                        <HeadlessMenu as="div" className="relative inline-block flex justify-end">
                            <div className="flex">
                                <HeadlessMenu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    {category}
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
                        {
                            categoryItems.map(menuItem => (
                                <div key={menuItem.name} className="relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
                                    <div className="aspect-h-4 aspect-w-3 bg-gray-200 sm:aspect-none sm:h-80">
                                        <img src={`https://drive.google.com/thumbnail?id=${menuItem.image.src}`} alt={menuItem.image.alt} className="h-full w-full object-cover object-center" />
                                    </div>
                                    <div className="grid grid-rows-2 space-y-2 p-4 h-96">
                                        <div className=''>
                                            <h3 className="text-lg font-medium text-gray-900">{menuItem.name}</h3>
                                            <p className="text-sm text-gray-500">{menuItem.description}</p>
                                        </div>
                                        <div className="">
                                            <div className='divide-x-2 divide-gray-300 '>
                                                {menuItem.price?.map(item => (
                                                    <p key={item.size} className="text-sm font-medium text-gray-700">{item.size}: ${item.price}</p>
                                                ))}
                                            </div>
                                            <div className="mt-2 flex flex-col h-1/2">
                                                {menuItem.additionals?.map(item => (
                                                    <p key={item.description} className="text-sm font-medium text-gray-500">{item.description}: ${item.price}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};