import { twMerge } from 'tailwind-merge'
import { Switcher } from '../shared'
import { NavItem } from './NavItem'
import { NavbarProps } from './types'
import { navList } from '/config'

export const Nav: React.FC<NavbarProps & { toggle?: () => void }> = ({
  text,
  lang,
  toggle,
  className,
  navItemClassName,
}) => (
  <nav className={twMerge('flex xl:ml-10 ml-5 gap-6', className)}>
    {navList.map((item) => (
      <NavItem
        key={item.name}
        {...item}
        text={text}
        lang={lang}
        className={navItemClassName}
        toggle={toggle}
      />
    ))}
    <Switcher />
  </nav>
)
