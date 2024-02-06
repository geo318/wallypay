'use client'

import Link from 'next/link'
import { locales, navList } from '/config'
import { SharedText } from '/types'
import { usePathname } from 'next/navigation'
import { twMerge } from 'tailwind-merge'
import { NavItemProps } from './types'
import { Arrow } from '/components/icons'

export const NavItem: React.FC<NavItemProps> = ({
  name,
  link,
  menu,
  text,
  lang,
  toggle,
  className,
}) => {
  const pathname = usePathname()
  return (
    <li className='list-none font-semibold lg:font-medium text-sm group relative'>
      <div className='group flex gap-2 items-center'>
        <Link
          href={link && !link.includes('blog') ? `/${lang}${link}` : link}
          onClick={toggle}
          className={twMerge(
            'group-hover:opacity-70 py-1 transition-opacity duration-200',
            menu?.some((e) => pathname.includes(e.link)) ||
              (link && pathname.includes(link))
              ? 'border-b border-app-blue'
              : ''
          )}
        >
          {text[name]}
        </Link>
        {!!menu.length && (
          <Arrow className='lg:block hidden w-3 h-3 rotate-90 group-hover:-rotate-90 transition-all' />
        )}
      </div>

      {!!menu.length && (
        <div
          className={twMerge(
            'hidden group-hover:flex border-1 absolute left-1/2 -translate-x-1/2 z-50',
            className
          )}
        >
          <ul className='py-2 lg:mt-7 bg-white w-64 rounded-md border border-zinc-100 lg:shadow-md text-sm font-medium'>
            {menu.map((item) => (
              <li
                key={item.name}
                className={twMerge(
                  'flex text-slate-800 hover:bg-gray-100',
                  pathname.includes(item.link)
                    ? 'bg-app-blue bg-opacity-20'
                    : ''
                )}
              >
                <Link
                  className='grow px-5 py-2'
                  href={`/${lang}${item.link}`}
                  onClick={toggle}
                >
                  {text.nav[item.name]}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
