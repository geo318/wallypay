import { OrderEmailForm, Page } from '/components'
import { getDictionary } from '/lib'
import { PageProps } from '/types'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { order_card } = await getDictionary(lang)
  return (
    <>
      <Page texts={order_card} />
      <section className='lg:px-16 px-5 pb-16'>
        <p className='my-5'>{order_card.footer.text}</p>
        <OrderEmailForm texts={order_card.form}/>
      </section>
    </>
  )
}
