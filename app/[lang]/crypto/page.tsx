import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { cryptoImg } from '/public'
import { DownloadApp, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { crypto } = await getDictionary(lang)
  return (
    <>
      <Page
        texts={crypto}
        className='!pb-0'
        childSet={[
          <div key='db-wallet' className='h-[25rem] mb-auto'>
            <Image
              alt='e wallet'
              src={cryptoImg}
              height={300}
              width={500}
              className='absolute object-cover top-0'
            />
          </div>,
        ]}
      />
      <DownloadApp />
    </>
  )
}
