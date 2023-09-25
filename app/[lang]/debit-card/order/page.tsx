import { EmailForm, Page } from '/components'
import { getDictionary } from '/lib'
import { PageProps } from '/types'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { order_card } = await getDictionary(lang)
  return (
    <>
      <Page texts={order_card} />
      <section className='px-16 pb-16'>
        <p className='my-5'>{order_card.footer.text}</p>
        <EmailForm texts={order_card.form}/>
      </section>
    </>
  )
}
