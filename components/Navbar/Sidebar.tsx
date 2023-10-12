'use client'

import Link from 'next/link'
import { Burger, MasterCard } from '../icons'
import { Close } from '../icons/Close'
import { Nav } from './Nav'
import { NavbarProps } from './types'
import { useSidebar } from './useSidebar'
import { routes } from '/config'
import { Button } from '../shared'

export const Sidebar = (props: NavbarProps) => {
  const { isOpen, toggle } = useSidebar()
  return (
    <>
      <Burger
        className='self-center cursor-pointer lg:hidden'
        onClick={toggle}
      />
      {isOpen && (
        <>
          <aside className='flex flex-col fixed inset-y-0 right-0 w-72 bg-white p-5 z-50 shadow-md'>
            <Close className='cursor-pointer ml-auto' onClick={toggle} />
            <div>
              <Nav
                {...props}
                toggle={toggle}
                navItemClassName='relative flex shadow-none'
              />
              <div className='flex flex-col gap-5 mt-10'>
                <Link href={`/${props.lang}${routes.partnership}`}>
                  <Button
                    variant='primary'
                    className='bg-app-blue-dark text-white border-white w-full py-3'
                  >
                    {props.text.becomeAPartner}
                  </Button>
                </Link>
                <Link href={`/${props.lang}${routes.order}`}>
                  <Button
                    variant='primary'
                    className='bg-app-blue border-app-blue hover:bg-app-blue hover:bg-opacity-90 w-full'
                  >
                    <MasterCard />
                    {props.text.orderDebitCard}
                  </Button>
                </Link>
              </div>
            </div>
          </aside>
          <div
            className='z-40 inset-0 fixed bg-black bg-opacity-30'
            onClick={toggle}
          />
        </>
      )}
    </>
  )
}
