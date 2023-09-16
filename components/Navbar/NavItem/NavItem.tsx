import Link from 'next/link'
import { NavItemProps } from './types'

export const NavItem: React.FC<NavItemProps> = ({ text, link, locale }) => (
  <li className='list-none font-medium text-sm'>
    <Link href={link} locale={locale}>
      {text}
    </Link>
  </li>
)
