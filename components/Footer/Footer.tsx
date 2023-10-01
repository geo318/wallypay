import { FooterUl } from './FooterUl'
import { Android, Apple, Logo } from '/components'
import { SharedText } from '/types'
import { footer, locales } from '/config'
import Link from 'next/link'

export const Footer = ({
  text,
  lang,
}: {
  text: SharedText['footer']
  lang: (typeof locales)[number]
}) => {
  return (
    <footer className='bg-app-blue-dark text-white relative mt-auto'>
      <div className='max-w-[100rem] mx-auto grid xl:grid-cols-10 lg:grid-cols-4 grid-cols-3 py-14 px-10 xl:px-0'>
        <section className='col-span-2 text-center hidden xl:block'>
          <Logo className='mx-auto' />
        </section>
        <section className='grid gap-10 md:grid-cols-3 col-span-3 xl:col-span-6'>
          {footer.map(({ name, list }) => (
            <FooterUl
              key={name}
              items={list}
              text={text}
              heading={text.heading[name]}
              lang={lang}
            />
          ))}
        </section>
        <section className='xl:col-span-2 col-span-1 lg:block hidden'>
          <div className='flex flex-col gap-7 items-center'>
            <Link
              href='https://apps.apple.com/us/app/wallypay/id1499628677'
              target='_blank'
            >
              <Apple className='fill-app-blue w-36' />
            </Link>
            <Link
              href='https://play.google.com/store/apps/details?id=com.wallypay'
              target='_blank'
            >
              <Android className='fill-app-blue w-36' />
            </Link>
          </div>
        </section>
      </div>
      <section className='col-span-2 text-center block xl:hidden'>
        <Logo className='mx-auto pl-8 my-10' />
      </section>
      <p className='mx-auto text-center pb-6 text-[#71737A] text-sm'>
        {text.copy}
      </p>
    </footer>
  )
}
