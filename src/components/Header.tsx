'use client'

import Link from 'next/link'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { track } from '@vercel/analytics';

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'

import {
  ActionIcon,
  OrderIcon
} from '@/images/icons'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronUpIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M17 14l-5-5-5 5"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MobileNavLink(
  props: Omit<
    React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
    'as' | 'className'
  >,
) {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-white"
      {...props}
    />
  )
}

export function Header() {
  return (
    <header className='bg-zinc-900'>
      <nav>
        <Container className="relative z-50 flex justify-between py-8">
          <div className="relative z-10 flex items-center gap-16">
            <Link href="/" aria-label="Home" className=''>
              <Logo className="" />
            </Link>
            <div className="hidden lg:flex lg:gap-10">
              <NavLinks />
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-50 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <ChevronUpIcon className="h-6 w-6" />
                      ) : (
                        <MenuIcon className="h-6 w-6" />
                      )
                    }
                  </Popover.Button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <>
                        <Popover.Overlay
                          static
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                        />
                        <Popover.Panel
                          static
                          as={motion.div}
                          initial={{ opacity: 0, y: -32 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{
                            opacity: 0,
                            y: -32,
                            transition: { duration: 0.2 },
                          }}
                          className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-zinc-900 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                        >
                          <div className="space-y-4">
                            <MobileNavLink href="#newsletter" onClick={() => track("Newsletter header button")}>
                              Newsletter
                            </MobileNavLink>
                            <MobileNavLink href="#reviews" onClick={() => track("Reviews header button")}>
                              Reviews
                            </MobileNavLink>
                            <MobileNavLink href="#podcast" onClick={() => track("Podcast header button")}>
                              Podcast
                            </MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4">
                            <Button href="https://www.youtube.com/@VlyssPodcast" variant="outline" onClick={() => track("View podcast action")}>
                              <span className="mr-1.5 text-white">Our Podcast</span>
                              <OrderIcon className="h-6 w-6 flex-none" />
                            </Button>
                            <Button variant="solid" color="white" href="https://cal.com/hello-vlyss/15min" onClick={() => track("Book a meeting action")}>
                              <span className="mr-1.5">Book a Meeting</span>
                              <ActionIcon className="h-6 w-6 flex-none fill-black text-black" />
                            </Button>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
            <Button href="/menu" variant="outline" className="hidden lg:block border-black" onClick={() => track("View podcast action")}>
              <span className="text-white">Our Podcast</span>
            </Button>
            <Button variant="solid" color="white" href="https://cal.com/hello-vlyss/15min" target="_blank" rel="noopener noreferrer" className="hidden lg:block" onClick={() => track("Book a meeting action")}>
              <span>Book a Meeting</span>
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
