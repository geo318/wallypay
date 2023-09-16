import Image from 'next/image'
import { Button, MasterCard, Android, Apple } from '/components'
import { banner } from '/public'

export default function Admin() {
  return (
    <div className='text-black font-bold text-lg'>
      <section className='mt-20 flex gap-32'>
        <div className='flex flex-col gap-12 max-w-xl justify-center'>
          <h1 className='text-6xl font-bold'>Join The Future!</h1>
          <p>
            Download WallyPay - unleash the power of convenience with our
            E-Wallet app and claim your very own exclusive Mastercard Debit
            Card!
          </p>
          <div className='flex gap-8'>
            <Apple />
            <Android />
          </div>
        </div>
        <div className='ml-auto'>
          <figure>
            <Image src={banner} alt='banner' className='max-w-3xl' priority />
          </figure>
        </div>
      </section>
      <br />
      <Button>Learn More</Button>
      <br></br>
      <Button variant='primary'>
        <MasterCard />
        Order Debit Card
      </Button>
      <br />
      <Button variant='primary' className='bg-app-blue border-app-blue'>
        <MasterCard />
        Order Debit Card
      </Button>
      <br />
    </div>
  )
}
