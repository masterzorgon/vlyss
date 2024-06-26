import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { Analytics } from "@vercel/analytics/react"
import { ToastContainer } from 'react-toastify';

import '@/styles/tailwind.css'
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Vlyss',
    default: 'Vlyss: Design and Development Studio',
  },
  description:
    'Whether you need a website, brand, or end-to-end app, Vlyss gets the job done',
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
        <ToastContainer
          autoClose={5000}
          closeOnClick
        />
      </body>
    </html>
  )
}
