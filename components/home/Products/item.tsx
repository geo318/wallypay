import { Anima } from '/components/Anima'
import Image from 'next/image'
import { ItemProps } from './types'

export const Item = ({ image, name, text }: ItemProps) => (
  <Anima>
    <div className='flex flex-col gap-4 max-w-[9rem]'>
      <Image src={image} alt={text[name]} />
      <span className='text-sm font-medium balanced'>{text[name]}</span>
    </div>
  </Anima>
)
