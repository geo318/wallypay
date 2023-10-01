import Link from 'next/link'
import { NavbarProps } from './types'
import { Burger, Button, Logo, MasterCard } from '/components'
import { routes } from '/config'
import { Nav } from './Nav'
import { Sidebar } from './Sidebar'

export const Navbar: React.FC<NavbarProps> = ({ text, lang }) => {
  return (
    <header className='text-white font-bold text-lg py-7 bg-app-blue-dark xl:px-16 px-5'>
      <div className='flex items-center'>
        <Link href={`/${lang}${routes.home}`}>
          <Logo className='w-[12.5rem] block md:hidden xl:block' />
          <Logo className='xl:hidden md:block hidden' w />
        </Link>
        <Nav text={text} lang={lang} className='lg:flex hidden' />
        <div className='flex gap-6 ml-auto'>
          <Link
            href={`/${lang}${routes.partnership}`}
            className='hidden md:flex'
          >
            <Button
              variant='primary'
              className='bg-app-blue-dark text-white border-white'
            >
              {text.becomeAPartner}
            </Button>
          </Link>
          <Link href={`/${lang}${routes.order}`} className='hidden md:flex'>
            <Button
              variant='primary'
              className='bg-app-blue border-app-blue hover:bg-app-blue hover:bg-opacity-90'
            >
              <MasterCard />
              {text.orderDebitCard}
            </Button>
          </Link>

          <Sidebar text={text} lang={lang} className='flex-col text-black' />
        </div>
      </div>
    </header>
  )
}
