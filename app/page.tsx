import Image from 'next/image'
import {
  Button,
  MasterCard,
  Android,
  Apple,
  Partners,
  Card,
  Products,
} from '/components'
import { banner, lock } from '/public'
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
      <section className='mt-20 flex gap-32 px-16'>
        <div className='flex flex-col gap-12 basis-1/2 py-20'>
          <h2 className='text-5xl font-bold'>Confidentiality & Security</h2>
          <p className='balanced pr-5 font-normal text-lg text-[#484848] leading-8 max-w-2xl tracking-wider'>
            Experience worry-free, confidential payments with our e-wallet app.
            Your security is our top priority, with robust encryption and
            cutting-edge safeguards in place to protect your personal and
            financial information. Trust us for a secure payment experience.
          </p>
          <div className='flex gap-8'>
            <Button className='bg-[#484848] text-white hover:bg-black'>
              Learn More
            </Button>
          </div>
        </div>
        <div className='ml-auto basis-1/2'>
          <figure className='flex p-5 pt-0'>
            <Image
              src={lock}
              alt='banner'
              className='max-w-md object-contain ml-auto'
              priority
            />
          </figure>
        </div>
      </section>
      <br />
      <Button>Learn More</Button>
      <br></br>

      <br />
      <Button variant='primary' className='bg-app-blue border-app-blue'>
        <MasterCard />
        Order Debit Card
      </Button>
      <br />
    </div>
  )
}
