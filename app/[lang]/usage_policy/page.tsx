import { getTermsDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { terms_and_conditions } = await getTermsDictionary(lang)
  return (
    <>
      <Page texts={terms_and_conditions} />
      <DownloadApp />
    </>
  )
}
