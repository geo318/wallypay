import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { partnerImg } from '/public'
import { DownloadApp, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { partner } = await getDictionary(lang)
  return (
    <>
      <Page
        texts={partner}
        childSet={[
          <div key='db-wallet' className='h-[25rem] mb-auto'>
            <Image
              alt='e wallet'
              src={partnerImg}
              height={300}
              width={500}
              className='xl:absolute object-cover top-0 right-0'
            />
          </div>,
        ]}
      />
      <div className='px-16 my-5 font-bold text-app-blue-dark text-xl '>
        <h4 className='font-semibold text-md text-slate-600 mb-5'>
          {partner.footer.text}{' '}
        </h4>
        <a
          href='mailto:partnership@wallypay.eu'
          className='hover:underline hover:text-app-blue'
        >
          {partner.footer.email}
        </a>
      </div>
      <DownloadApp />
    </>
  )
}
