import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code1.svg'

function QrCodeBorder(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-zinc-900">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <Logo />
            </div>
            <nav className="mt-11 flex gap-8">
              <NavLinks />
            </nav>
          </div>

          {/* <div className="relative -mx-4 flex items-center self-stretch p-4 transition-colors sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
            <div className="relative flex h-24 w-24 flex-none items-center justify-center">
              <QrCodeBorder className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors" />
              <Image src={qrCode} alt="" unoptimized className='rounded-md w-20' />
            </div>
            <div className="ml-8 lg:w-64">
              <p className="text-base font-semibold text-white">
                <Link href="#">
                  <span className="absolute inset-0 sm:rounded-2xl" />
                  Leave us a review on Google
                </Link>
              </p>
              <p className="mt-1 text-sm text-gray-200">
                Scan the QR code to leave us a review.
              </p>
            </div>
          </div> */}
        </div>
        
        <div className="flex items-start border-t border-gray-200 pb-12 pt-8 md:pt-6">
          <p className="mt-6 text-sm text-gray-200 md:mt-0">
            &copy; Copyright {new Date().getFullYear()}. Vlyss. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
