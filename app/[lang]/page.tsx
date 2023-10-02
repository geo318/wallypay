import Image from 'next/image'
import {
  Android,
  Apple,
  Partners,
  Card,
  Products,
  Security,
  Highlights,
  Anima,
  Spinner,
} from '/components'
import { banner } from '/public'
import { cards } from '/config'
import { PageProps } from '/types'
import { getDictionary } from '/lib/dictionary'
import Link from 'next/link'
import { Suspense } from 'react'

export default async function Admin({ params: { lang } }: PageProps) {
  const { home } = await getDictionary(lang)

  return (
    <div className='text-black font-bold md:text-lg text-base fade-in'>
      <section className='lg:mt-20 mt-14 flex lg:flex-row flex-col xl:gap-32 gap-5 xl:px-16 px-5'>
        <div className='flex flex-col gap-12 basis-1/2 lg:py-20 py-10 pt-0'>
          <h2 className='xl:text-6xl text-4xl font-bold'>
            {home.main.heading}
          </h2>
          <p className='pr-5 font-normal lg:text-xl text-base leading-8 max-w-2xl lg:tracking-wider'>
            {home.main.Download}&nbsp;
            <span className='text-app-blue font-bold'>
              {home.main.wallypay}&nbsp;
            </span>
            - {home.main.description}
          </p>
          <div className='flex gap-8'>
            <Link
              href='https://apps.apple.com/us/app/wallypay/id1499628677'
              target='_blank'
            >
              <Apple className='h-10 w-32 lg:h-auto lg:w-auto' />
            </Link>
            <Link
              href='https://play.google.com/store/apps/details?id=com.wallypay'
              target='_blank'
            >
              <Android className='h-10 w-32 lg:h-auto lg:w-auto' />
            </Link>
          </div>
        </div>
        <div className='ml-auto basis-1/2 flex items-center'>
          <figure className='flex bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-300 from-40% via-transparent to-transparent p-5 pt-0'>
            <Image
              src={banner}
              alt='banner'
              className='max-w-3xl w-full object-contain ml-auto'
              priority
            />
          </figure>
        </div>
      </section>
      <section className='pt-14 xl:pb-28 pb-14 xl:px-16 px-5'>
        <Suspense fallback={<Spinner />}>
          <Partners text={home.partners} />
        </Suspense>
      </section>
      <section className='bg-app-blue-light xl:px-16 px-5 flex flex-col xl:gap-28 gap-16 xl:py-32 py-14'>
        <Suspense fallback={<Spinner />}>
          {cards(lang).map(({ button, image, name }) => (
            <Anima key={home[name].heading}>
              <Card
                button={button(home[name].action)}
                heading={home[name].heading}
                sub={home[name].sub}
                description={home[name].description}
                image={image}
              />
            </Anima>
          ))}
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Products text={home.products} />
        </Suspense>
      </section>
      <section className='flex flex-col lg:gap-20 gap-10 xl:px-16 px-5 xl:py-16 py-4'>
        <Suspense fallback={<Spinner />}>
          <Security text={home.security} lang={lang} />
        </Suspense>
      </section>
      <section className='xl:pt-20 pt-10'>
        <Suspense fallback={<Spinner />}>
          <Highlights text={home.highlights} />
        </Suspense>
      </section>
    </div>
  )
}
