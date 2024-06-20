'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { RadioGroup, Radio } from '@headlessui/react';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logomark } from '@/components/Logo'

const plans = [
    {
        name: 'Standard',
        featured: false,
        price: { Monthly: '$399', Annually: '$3,995' },
        description:
            'You need a website with maintenance, hosting, and analytics out-of-the-box.',
        button: {
            label: 'Get started today',
            href: '#',
        },
        features: [
            "One request at a time",
            "Average 48 hour delivery",
            "Next.js frontend development",
            "Website hosting",
            "Website traffic analytics"
        ],
        logomarkClassName: 'fill-gray-300',
    },
    {
        name: 'Pro',
        featured: true,
        price: { Monthly: '$799', Annually: '$8,995' },
        description:
            'You have a large project that needs dedicated support and in-depth work.',
        button: {
            label: 'Get started today',
            href: '#',
        },
        features: [
            "Two requests at a time",
            "Average 48 hour delivery",
            "Next.js full-stack development",
            "Website hosting",
            "Website traffic analytics",
            "Search Engine Optimization",
            "Priority customer support"
        ],
        logomarkClassName: 'fill-secondary',
    },
    {
        name: 'Custom',
        featured: false,
        price: { Monthly: 'Inquire', Annually: 'Inquire' },
        description:
            "Do you have a special request? Get in touch with our sales team!",
        button: {
            label: 'Get in touch',
            href: '#',
        },
        features: [],
        logomarkClassName: 'fill-gray-300',
    },
]

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                fill="currentColor"
            />
            <circle
                cx="12"
                cy="12"
                r="8.25"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function Plan({
    name,
    price,
    description,
    button,
    features,
    activePeriod,
    logomarkClassName,
    featured = false,
}: {
    name: string
    price: {
        Monthly: string
        Annually: string
    }
    description: string
    button: {
        label: string
        href: string
    }
    features: Array<string>
    activePeriod: 'Monthly' | 'Annually'
    logomarkClassName?: string
    featured?: boolean
}) {
    return (
        <section
            className={clsx(
                'flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5',
                featured ? 'order-first bg-gray-900 lg:order-none' : 'bg-white',
            )}
        >
            <h3
                className={clsx(
                    'flex items-center text-sm font-semibold',
                    featured ? 'text-white' : 'text-gray-900',
                )}
            >
                <Logomark className={clsx('h-6 w-6 flex-none', logomarkClassName)} />
                <span className="ml-4">{name}</span>
            </h3>
            <p
                className={clsx(
                    'relative mt-5 flex text-3xl tracking-tight',
                    featured ? 'text-white' : 'text-gray-900',
                )}
            >
                {price.Monthly === price.Annually ? (
                    price.Monthly
                ) : (
                    <>
                        <span
                            aria-hidden={activePeriod === 'Annually'}
                            className={clsx(
                                'transition duration-300',
                                activePeriod === 'Annually' &&
                                'pointer-events-none translate-x-6 select-none opacity-0',
                            )}
                        >
                            {price.Monthly}<span className="text-sm">/month</span>
                        </span>

                        <span
                            aria-hidden={activePeriod === 'Monthly'}
                            className={clsx(
                                'absolute left-0 top-0 transition duration-300',
                                activePeriod === 'Monthly' &&
                                'pointer-events-none -translate-x-6 select-none opacity-0',
                            )}
                        >
                            {price.Annually}<span className="text-sm">/year</span>
                        </span>
                    </>
                )}
            </p>
            <p
                className={clsx(
                    'mt-3 text-sm',
                    featured ? 'text-gray-300' : 'text-gray-700',
                )}
            >
                {description}
            </p>
            <div className="order-last mt-6">
                <ul
                    role="list"
                    className={clsx(
                        '-my-2 divide-y text-sm',
                        featured
                            ? 'divide-gray-800 text-gray-300'
                            : 'divide-gray-200 text-gray-700',
                    )}
                >
                    {features.map((feature) => (
                        <li key={feature} className="flex py-2">
                            <CheckIcon
                                className={clsx(
                                    'h-6 w-6 flex-none',
                                    featured ? 'text-secondary' : 'text-gray-700',
                                )}
                            />
                            <span className="ml-4">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <Button
                href={button.href}
                color={featured ? 'cyan' : 'gray'}
                className="mt-6"
                aria-label={`Get started with the ${name} plan for ${price}`}
            >
                {button.label}
            </Button>
        </section>
    )
}

export function Pricing() {
    let [activePeriod, setActivePeriod] = useState<'Monthly' | 'Annually'>(
        'Monthly',
    )

    return (
        <section
            id="pricing"
            aria-labelledby="pricing-title"
            className="border-t border-gray-200 bg-gray-100 py-20 sm:py-32"
        >
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <h2
                        id="pricing-title"
                        className="text-3xl font-medium tracking-tight text-gray-900"
                    >
                        Simple Pricing. Simple Onboarding.
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        You can onboard with Vlyss directly through our website.
                        Just click &quot;Subscribe&quot; to get started.
                    </p>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="relative">
                        <div
                            aria-hidden="true"
                            className={clsx(
                                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300',
                                activePeriod === 'Monthly'
                                    ? '[clip-path:inset(0_50%_0_0)]'
                                    : '[clip-path:inset(0_0_0_calc(50%-1px))]',
                            )}
                        >
                            {['Monthly', 'Annually'].map((period) => (
                                <div
                                    key={period}
                                    className={clsx(
                                        'py-2 text-center text-sm font-semibold text-white',
                                        period === 'Annually' && '-ml-px',
                                    )}
                                >
                                    {period}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex justify-center">
                    <div className="relative">
                        <RadioGroup
                            value={activePeriod}
                            onChange={setActivePeriod}
                            className="grid grid-cols-2"
                        >
                            {['Monthly', 'Annually'].map((period) => (
                                <Radio
                                    key={period}
                                    value={period}
                                    className={clsx(
                                        'cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400',
                                        period === 'Monthly'
                                            ? 'rounded-l-lg'
                                            : '-ml-px rounded-r-lg',
                                    )}
                                >
                                    {period}
                                </Radio>
                            ))}
                        </RadioGroup>
                        <div
                            aria-hidden="true"
                            className={clsx(
                                'pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-secondary transition-all duration-300',
                                activePeriod === 'Monthly'
                                    ? '[clip-path:inset(0_50%_0_0)]'
                                    : '[clip-path:inset(0_0_0_calc(50%-1px))]',
                            )}
                        >
                            {['Monthly', 'Annually'].map((period) => (
                                <div
                                    key={period}
                                    className={clsx(
                                        'py-2 text-center text-sm font-semibold text-white',
                                        period === 'Annually' && '-ml-px',
                                    )}
                                >
                                    {period}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
                    {plans.map((plan) => (
                        <Plan key={plan.name} {...plan} activePeriod={activePeriod} />
                    ))}
                </div>
            </Container>
        </section>
    );
};
