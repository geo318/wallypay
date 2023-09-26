import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { loanImg } from '/public'
import { DownloadApp, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { loan } = await getDictionary(lang)
  return (
    <>
      <Page
        texts={loan}
        className='!pb-0'
        childSet={[
          <div key='db-wallet' className='h-[25rem] mb-auto sticky top-14'>
            <Image
              alt='e wallet'
              src={loanImg}
              height={300}
              width={500}
              className='object-cover'
            />
          </div>,
        ]}
      />
      <DownloadApp text={loan.footer} />
    </>
  )
}
