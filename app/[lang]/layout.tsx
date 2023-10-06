import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Footer, Navbar, ProgressBar } from '/components'
import { Locale } from '/types'
import { getDictionary } from '/lib'
import { locales } from '/config'

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
        <ProgressBar color='#1CC5FF' options={{ showSpinner: false }} />
        <Navbar text={shared.header} lang={lang} />
        <main className='mx-auto max-w-[100rem] w-full'>{children}</main>
        <Footer text={shared.footer} lang={lang} />
      </body>
    </html>
  )
}

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}
