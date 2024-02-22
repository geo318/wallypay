import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp, Page } from '/components'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About WallyPay',
  description:
    'Explore the journey and vision of WallyPay, your innovative fintech partner. Find out what sets us apart.',
}

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { about } = await getDictionary(lang)
  return (
    <>
      <Page texts={about} />
      <DownloadApp />
    </>
  )
}
