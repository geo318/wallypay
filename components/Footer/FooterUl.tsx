import Link from 'next/link'
import { footer, locales } from '/config'
import { SharedText } from '/types'

export const FooterUl: React.FC<{
  items: (typeof footer)[number]['list']
  text: SharedText['footer']
  heading: string
  lang: (typeof locales)[number]
}> = ({ items, text, heading, lang }) => {
  return (
    <div>
      <h5 className='font-bold mb-5'>{heading}</h5>
      <ul className='flex flex-col gap-3'>
        {items.map(({ name, link }) => (
          <li key={name} className='text-sm'>
            <Link href={`/${lang}${link}` || '#'} className='balanced'>
              {text.list[name]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
