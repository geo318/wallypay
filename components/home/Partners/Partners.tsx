import Image from 'next/image'
import { usePartners } from './usePartners'
import { HomeText } from '/types'

export const Partners = ({ text }: { text: HomeText['partners'] }) => {
  const { partners } = usePartners()
  return (
    <>
      <h3 className='xl:text-3xl text-2xl font-bold'>{text.heading}</h3>
      <div className='flex md:flex-col flex-row gap-10 lg:mt-24 mt-10 justify-center'>
        {partners.map((section, i) => (
          <div className='flex md:flex-row flex-col gap-10 md:gap-0 justify-around md:items-center items-start' key={i}>
            {section.map((partner) => (
              <Image src={partner} alt='' className='h-min' key={partner.src} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
