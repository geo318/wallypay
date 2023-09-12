import Image from 'next/image'
import {
  Android,
  Apple,
  Partners,
  Card,
  Products,
  Security,
  Highlights,
} from '/components'
import { banner } from '/public'
import { cards } from '/config'

export default function Admin() {
  return (
    <div className='text-black font-bold text-lg'>
      <section className='mt-20 flex gap-32 px-16'>
        <div className='flex flex-col gap-12 basis-1/2 py-20'>
          <h2 className='text-6xl font-bold'>Join The Future!</h2>
          <p className='pr-5 font-normal text-xl leading-8 max-w-2xl tracking-wider'>
            Download <span className='text-app-blue font-bold'>WallyPay</span> -
            unleash the power of convenience with our E-Wallet app and claim
            your very own exclusive Mastercard Debit Card!
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
        <Partners />
      </section>
      <section className='bg-app-blue-light px-16 flex flex-col gap-28 py-32'>
        {cards.map(({ button, description, heading, image, sub }) => (
          <Card
            key={heading}
            button={button}
            heading={heading}
            sub={sub}
            description={description}
            image={image}
          />
        ))}
        <Products />
      </section>
      <section className='flex flex-col gap-20 px-16 py-16'>
        <Security />
      </section>
      <section className='pt-20'>
        <Highlights />
      </section>
    </div>
  )
}
