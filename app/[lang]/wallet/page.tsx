import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { walletImg } from '/public'
import { DownloadApp, Page } from '/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secure &amp; Efficient Electronic Wallet by WallyPay',
  description:
    'Securely manage your finances with WallyPay&#39;s electronic wallet, offering instant access to your funds anytime, anywhere.',
}

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { wallet } = await getDictionary(lang)
  return (
    <>
      <Page
        texts={wallet}
        childSet={[
          <div key='db-wallet' className='h-[25rem] mb-auto'>
            <Image
              alt='e wallet'
              src={walletImg}
              height={300}
              width={500}
              className='xl:absolute object-cover top-0 right-0'
            />
          </div>,
        ]}
      />
      <DownloadApp text={wallet.footer} />
    </>
  )
}
