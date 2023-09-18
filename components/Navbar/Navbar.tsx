import Link from 'next/link'
import { NavItem } from './NavItem'
import { NavbarProps } from './types'
import { Button, Logo, MasterCard, Switcher } from '/components'
import { navList } from '/config'

export const Navbar: React.FC<NavbarProps> = ({ text }) => {
  return (
    <header className='text-white font-bold text-lg py-7 bg-app-blue-dark px-16'>
      <div className='flex items-center'>
        <Link href='/'>
          <Logo className='w-[12.5rem]' />
        </Link>

        <nav className='flex ml-10 gap-8'>
          {navList.map((item) => (
            <NavItem key={item.name} {...item} text={text} />
          ))}
          <Switcher />
        </nav>
        <div className='flex gap-6 ml-auto'>
          <Button
            variant='primary'
            className='bg-app-blue-dark text-white border-white'
          >
            {text.becomeAPartner}
          </Button>
          <Link href='/'>
            <Button
              variant='primary'
              className='bg-app-blue border-app-blue hover:bg-app-blue hover:bg-opacity-90'
            >
              <MasterCard />
              {text.orderDebitCard}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
