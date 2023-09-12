import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '/components'

export const metadata: Metadata = {
  title: 'WallyPay',
  description: 'Your wallet',
}

const font = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body style={font.style} className='text-app-black'>
        <Navbar />
        <main className='mx-auto max-w-[100rem]'>{children}</main>
      </body>
    </html>
  )
}
