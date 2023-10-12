import '../globals.css'
import type { Metadata } from 'next'
import { Poppins, Noto_Sans_Georgian } from 'next/font/google'
import { Footer, Navbar, ProgressBar } from '/components'
import { Locale } from '/types'
import { getDictionary } from '/lib'
import { locales } from '/config'
import { twMerge } from 'tailwind-merge'

export const metadata: Metadata = {
  title: 'WallyPay',
  description: 'Your wallet',
}

const eng = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})
const geo = Noto_Sans_Georgian({
  weight: ['400', '500', '600', '700'],
  subsets: ['georgian', 'latin'],
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
    <html lang={lang}>
      <body
        className={twMerge(
          'text-app-black min-h-screen flex flex-col',
          lang === 'en' ? eng.className : geo.className
        )}
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
