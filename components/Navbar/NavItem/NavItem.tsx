import Link from 'next/link'
import { navList } from '/config'
import { SharedText } from '/types'

export const NavItem: React.FC<
  (typeof navList)[number] & { text: SharedText['header'] }
> = ({ name, link, menu, text }) => (
  <li className='list-none font-medium text-sm group relative'>
    <Link href={link}>{text[name]}</Link>
    {!!menu.length && (
      <div className='hidden group-hover:flex border-1 absolute left-1/2 -translate-x-1/2 z-50'>
        <ul className='p-2 mt-7 bg-white w-64 rounded-md border-zinc-200 shadow-md text-sm font-medium'>
          {menu.map((item) => (
            <li key={item.name} className='flex'>
              <Link
                className='text-gray-700 hover:bg-gray-100 grow px-5 py-2'
                href={item.link}
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
