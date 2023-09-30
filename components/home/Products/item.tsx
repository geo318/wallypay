import Link from 'next/link'
import { Anima } from '/components/Anima'
import Image, { StaticImageData } from 'next/image'
import { products } from '/config'
import { HomeText } from '/types'
import { ItemProps } from './types'

export const Item = ({ link, image, name, text, lang }: ItemProps) => (
  <Link href={`/${lang}${link}` || '#'}>
    <Anima>
      <div className='flex flex-col gap-4 max-w-[9rem]'>
        <Image src={image} alt={text[name]} />
        <span className='text-sm font-medium balanced'>{text[name]}</span>
      </div>
    </Anima>
  </Link>
)
