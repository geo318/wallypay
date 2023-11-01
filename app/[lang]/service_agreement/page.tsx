import { getTermsDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp, Page } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { agreement } = await getTermsDictionary(lang)
  return (
    <>
      <Page texts={agreement} />
      <DownloadApp />
    </>
  )
}
