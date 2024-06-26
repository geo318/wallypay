import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { cardImg } from '/public'
import { Button, MasterCard, Page } from '/components'
import Link from 'next/link'
import { routes } from '/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'WallyPay Debit Card: Flexible Financial Tool',
  description:
    'Discover the WallyPay Debit Card for a flexible and secure way to manage your finances and make payments worldwide.',
}

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { debit_card, shared } = await getDictionary(lang)
  return (
    <Page
      texts={debit_card}
      childSet={[
        <div key='db-card' className='flex flex-col grow'>
          <Image alt='debit card' src={cardImg} />
          <Link
            href={`/${lang}${routes.order}`}
            className='mt-auto mx-10 mb-10'
          >
            <Button
              variant='primary'
              className='bg-app-blue border-app-blue hover:bg-app-blue hover:bg-opacity-90 w-full'
            >
              <MasterCard />
              {shared.header.orderDebitCard}
            </Button>
          </Link>
        </div>,
      ]}
    />
  )
}
