import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from "@vercel/analytics/react"

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Vlyss',
    default: 'Vlyss: Design and Development Studio.',
  },
  description:
    'Whether you need a landing page, brand, or full-stack application, Vlyss gets the job done.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx('h-full bg-gray-50 antialiased', inter.variable)}
    >
      <body className="flex h-full flex-col">
        <div className="flex min-h-full flex-col">
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  )
}
