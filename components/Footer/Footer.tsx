import { FooterUl } from './FooterUl'
import { Android, Apple, Logo } from '/components'

export const Footer = () => {
  return (
    <footer className='bg-app-blue-dark text-white'>
      <div className='max-w-[100rem] mx-auto grid grid-cols-10 py-14'>
        <section className='col-span-2'>
          <Logo />
        </section>
        <section className='grid grid-cols-3 col-span-6'>
          <FooterUl
            heading='Products'
            items={[
              { name: 'WallyPay Debit Card', link: '' },
              { name: 'E-Wallet', link: '' },
              { name: 'Crypto-Friendly Wallet', link: '' },
              { name: 'Online Loan', link: '' },
            ]}
          />
          <FooterUl
            heading='About Us'
            items={[
              { name: 'About Us', link: '' },
              { name: 'Become a Partner', link: '' },
              { name: 'Terms and Conditions', link: '' },
              { name: 'Blog', link: '' },
            ]}
          />
          <FooterUl
            heading='Contact'
            items={[
              { name: '+995 032 256 05 55', link: '' },
              { name: 'support@wallypay.eu', link: '' },
              { name: '42 Alexander Kazbegi Ave. | 0171 | Tbilisi', link: '' },
            ]}
          />
        </section>
        <section className='col-span-2'>
          <div className='flex flex-col gap-7'>
            <Apple className='fill-app-blue w-36' />
            <Android className='fill-app-blue w-36' />
          </div>
        </section>
      </div>
    </footer>
  )
}
