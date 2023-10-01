import Image from 'next/image'
import { Anima, Button } from '/components'
import { lock } from '/public'
import { locales, routes, security } from '/config'
import { HomeText } from '/types'
import Link from 'next/link'

export const Security = ({
  text,
  lang,
}: {
  text: HomeText['security']
  lang: (typeof locales)[number]
}) => {
  return (
    <>
      <div className='flex lg:flex-row flex-col lg:gap-20 gap-10'>
        <div className='flex flex-col lg:gap-12 gap-5 basis-1/2 lg:py-20 py-10'>
          <Anima>
            <h2 className='lg:text-5xl text-3xl font-bold'>{text.heading}</h2>
          </Anima>
          <Anima>
            <p className='balanced pr-5 font-normal text-lg text-[#484848] leading-8 max-w-2xl tracking-wider'>
              {text.description}
            </p>
          </Anima>
          <div className='flex gap-8'>
            <Link href={`/${lang}${routes.confidentiality}`}>
              <Button className='bg-app-gray-txt text-white hover:bg-black'>
                {text.action}
              </Button>
            </Link>
          </div>
        </div>
        <div className='ml-auto basis-1/2 lg:block hidden'>
          <figure className='flex p-5 pt-0'>
            <Anima>
              <Image
                src={lock}
                alt='banner'
                className='lg:max-w-md xl:w-auto w-[23rem] object-contain lg:ml-auto'
                priority
              />
            </Anima>
          </figure>
        </div>
      </div>
      <div className='flex justify-between flex-row gap-10 '>
        {security.map(({ desc, Icon }) => (
          <Anima key={text[desc]}>
            <div className='max-w-xs flex flex-col gap-6'>
              <Icon />
              <p className='balanced text-sm font-medium text-app-gray-txt sm:block hidden'>
                {text[desc]}
              </p>
            </div>
          </Anima>
        ))}
      </div>
    </>
  )
}
