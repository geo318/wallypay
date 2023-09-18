import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar } from '/components'
import { Locale } from '/types'
import { getDictionary } from '/lib'

export const metadata: Metadata = {
  title: 'WallyPay',
  description: 'Your wallet',
}

const font = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const { shared } = await getDictionary(lang)
  return (
    <html lang='en'>
      <body
        style={font.style}
        className='text-app-black min-h-screen flex flex-col'
      >
        <Navbar text={shared.header} />
        <main className='mx-auto max-w-[100rem] w-full'>{children}</main>
        <Footer text={shared.footer} />
      </body>
    </html>
  )
}
