import Image from 'next/image'
import { products } from '/config/products'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Anima } from '/components/Anima'

export const Products = () => {
  return (
    <div className='bg-app-blue-dark rounded-lg py-14 text-white '>
      <Anima>
        <h3 className='text-3xl font-bold p-14 pt-0'>Join The Future!</h3>
      </Anima>
      <div className='flex flex-col gap-y-28 px-28'>
        <div className='flex justify-between content-between'>
          {products.slice(0, 4).map(({ name, link, image }) => (
            <Link href={link} key={name}>
              <Anima>
                <div className='flex flex-col gap-4 max-w-[9rem]'>
                  <Image src={image} alt={name} />
                  <span className='text-sm font-medium balanced'>{name}</span>
                </div>
              </Anima>
            </Link>
          ))}
        </div>
        <div className='flex justify-between content-between'>
          {products.slice(4).map(({ name, link, image }) => (
            <Link href={link} key={name}>
              <Anima>
                <div className='flex flex-col gap-4 max-w-[9rem]'>
                  <Image src={image} alt={name} />
                  <span className='text-sm font-medium balanced'>{name}</span>
                </div>
              </Anima>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
