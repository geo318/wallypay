import Link from 'next/link'

export const FooterUl: React.FC<{
  heading: string
  items: { name: string; link: string }[]
}> = ({ heading, items }) => {
  return (
    <div>
      <h5>{heading}</h5>
      <ul>
        {items.map(({ name, link }) => (
          <li key={name}>
            <Link href={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
