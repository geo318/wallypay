import { ComplaintEmailForm } from '/components'
import { getDictionary } from '/lib'
import { PageProps } from '/types'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { complaint } = await getDictionary(lang)
  return (
    <section className='lg:px-16 px-5 pb-16'>
      <ComplaintEmailForm texts={complaint.form} />
    </section>
  )
}
