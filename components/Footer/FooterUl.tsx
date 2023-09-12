import Link from 'next/link'

export const FooterUl: React.FC<{
  heading: string
  items: { name: string; link: string }[]
}> = ({ heading, items }) => {
  return (
    <div>
      <h5 className='font-bold mb-5'>{heading}</h5>
      <ul className='flex flex-col gap-3'>
        {items.map(({ name, link }) => (
          <li key={name} className='text-sm'>
            <Link href={link} className='balanced'>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
