import Image from 'next/image'
import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { cardImg } from '/public'
import { Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { debit_card } = await getDictionary(lang)
  return (
    <Page
      texts={debit_card}
      childSet={[<Image key='db-card' alt='debit card' src={cardImg} />]}
    />
  )
}
