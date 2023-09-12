import Image from 'next/image'
import { usePartners } from './usePartners'

export const Partners = () => {
  const { partners } = usePartners()
  return (
    <>
      <h3 className='text-3xl font-bold'>Our partners</h3>
      <div className='flex flex-col gap-10 mt-24'>
        {partners.map((section, i) => (
          <div className='flex justify-around items-center' key={i}>
            {section.map((partner) => (
              <Image src={partner} alt='' className='h-min' key={partner.src} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}
