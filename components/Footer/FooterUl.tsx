import Link from 'next/link'
import { footer } from '/config'
import { SharedText } from '/types'

export const FooterUl: React.FC<{
  items: (typeof footer)[number]['list']
  text: SharedText['footer']
  heading: string
}> = ({ items, text, heading }) => {
  return (
    <div>
      <h5 className='font-bold mb-5'>{heading}</h5>
      <ul className='flex flex-col gap-3'>
        {items.map(({ name, link }) => (
          <li key={link} className='text-sm'>
            <Link href={link} className='balanced'>
              {text.list[name]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
