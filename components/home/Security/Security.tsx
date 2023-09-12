import Image from 'next/image'
import { Anima, Button } from '/components'
import { lock } from '/public'
import { security } from '/config'

export const Security = () => {
  return (
    <>
      <div className='flex gap-20'>
        <div className='flex flex-col gap-12 basis-1/2 py-20'>
          <Anima>
            <h2 className='text-5xl font-bold'>Confidentiality & Security</h2>
          </Anima>
          <Anima>
            <p className='balanced pr-5 font-normal text-lg text-[#484848] leading-8 max-w-2xl tracking-wider'>
              Experience worry-free, confidential payments with our e-wallet
              app. Your security is our top priority, with robust encryption and
              cutting-edge safeguards in place to protect your personal and
              financial information. Trust us for a secure payment experience.
            </p>
          </Anima>
          <div className='flex gap-8'>
            <Button className='bg-app-gray-txt text-white hover:bg-black'>
              Learn More
            </Button>
          </div>
        </div>
        <div className='ml-auto basis-1/2'>
          <figure className='flex p-5 pt-0'>
            <Anima>
              <Image
                src={lock}
                alt='banner'
                className='max-w-md object-contain ml-auto'
                priority
              />
            </Anima>
          </figure>
        </div>
      </div>
      <div className='flex justify-between'>
        {security.map(({ desc, Icon }) => (
          <Anima key={desc}>
            <div className='max-w-xs flex flex-col gap-6'>
              <Icon />
              <p className='balanced text-sm font-medium text-app-gray-txt'>
                {desc}
              </p>
            </div>
          </Anima>
        ))}
      </div>
    </>
  )
}
