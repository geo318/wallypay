import Link from 'next/link'
import { NavItem } from './NavItem'
import { NavbarProps } from './types'
import { useNavbar } from './useNavbar'
import { Button, Logo, MasterCard } from '/components'

export const Navbar: React.FC<NavbarProps> = () => {
  const { navList } = useNavbar()
  return (
    <header className='text-white font-bold text-lg py-7 bg-app-blue-dark px-16'>
      <div className='flex items-center'>
        <Logo className='w-[12.5rem]' />
        <nav className='flex ml-10 gap-8'>
          {navList.map((item) => (
            <NavItem key={item.text} {...item} />
          ))}
        </nav>
        <div className='flex gap-6 ml-auto'>
          <Button
            variant='primary'
            className='bg-app-blue-dark text-white border-white'
          >
            Become a Partner
          </Button>
          <Link href='/'>
            <Button
              variant='primary'
              className='bg-app-blue border-app-blue hover:bg-app-blue hover:bg-opacity-90'
            >
              <MasterCard />
              Order Debit Card
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
