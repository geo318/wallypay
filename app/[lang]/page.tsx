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
} from '/components'
import { banner } from '/public'
import { cards } from '/config'
import { PageProps } from '/types'
import { getDictionary } from '/lib/dictionary'

export default async function Admin({ params: { lang } }: PageProps) {
  const { home } = await getDictionary(lang)

  return (
    <div className='text-black font-bold text-lg fade-in'>
      <section className='mt-20 flex gap-32 px-16'>
        <div className='flex flex-col gap-12 basis-1/2 py-20'>
          <h2 className='text-6xl font-bold'>{home.main.heading}</h2>
          <p className='pr-5 font-normal text-xl leading-8 max-w-2xl tracking-wider'>
            {home.main.Download}&nbsp;
            <span className='text-app-blue font-bold'>
              {home.main.wallypay}&nbsp;
            </span>
            - {home.main.description}
          </p>
          <div className='flex gap-8'>
            <Apple />
            <Android />
          </div>
        </div>
        <div className='ml-auto basis-1/2'>
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
      <section className='pt-14 pb-28 px-16'>
        <Partners text={home.partners} />
      </section>
      <section className='bg-app-blue-light px-16 flex flex-col gap-28 py-32'>
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
        <Products text={home.products} />
      </section>
      <section className='flex flex-col gap-20 px-16 py-16'>
        <Security text={home.security} lang={lang} />
      </section>
      <section className='pt-20'>
        <Highlights text={home.highlights} />
      </section>
    </div>
  )
}
