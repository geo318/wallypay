import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp, Logo, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { about } = await getDictionary(lang)
  return (
    <>
      <Page texts={about} />
      <DownloadApp />
    </>
  )
}
