import { FooterUl } from './FooterUl'
import { Android, Apple, Logo } from '/components'
import { SharedText } from '/types'
import { footer } from '/config'

export const Footer = ({ text }: { text: SharedText['footer'] }) => {
  return (
    <footer className='bg-app-blue-dark text-white relative'>
      <div className='max-w-[100rem] mx-auto grid grid-cols-10 py-14'>
        <section className='col-span-2 text-center'>
          <Logo className='mx-auto' />
        </section>
        <section className='grid grid-cols-3 col-span-6'>
          {footer.map(({ name, list }) => (
            <FooterUl key={name} items={list} text={text} heading={text.heading[name]} />
          ))}
        </section>g
        <section className='col-span-2'>
          <div className='flex flex-col gap-7 items-center'>
            <Apple className='fill-app-blue w-36' />
            <Android className='fill-app-blue w-36' />
          </div>
        </section>
      </div>
      <p className='mx-auto text-center pb-6 text-[#71737A] text-sm'>
        {text.copy}
      </p>
    </footer>
  )
}
