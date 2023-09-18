import { getDictionary } from '/lib'
import { PageProps } from '/types'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { home } = await getDictionary(lang)
  return (
    <article className='text-black text-lg fade-in py-20 flex flex-col'>
      <section className='mt-10 flex gap-32 px-16'>
        <div>
          <div>
            <span>Order Card</span>
          </div>
          <h1>Still not having a WallyCard?</h1>
          <p>
            Do not give up on the Future Opportunities! Order WallyCard right
            now and take advantage of innovative online services. WallyCard
            holders can pay / receive funds with mobile app without leaving
            home. You will also be able to pay with any POS terminal where
            MasterCard works, withdraw money from any ATM in Georgia and not
            only, get a pre-approved instant online loan and soon to receive
            international transfers from around the world.
          </p>

          <p>Join us and become the part of the FUTURE!</p>
          <ul>
            <li>Use in more than 210 countries</li>
            <li>
              Take advantage of online payments at international and local
              online shops
            </li>
            <li>Get a salary or any transfer on a Non-Bank Card</li>
            <li>
              Cash out at more than 2 500 ATMs and Pay with 62,000 POS terminals
              at merchants
            </li>
            <li>Very Soon, receive cashback from our partners!</li>
          </ul>
          <p>
            To order WallyPay card, please fill in the form below or send this
            information on our e-mail contact@wallypay.eu
            <a href='mailto:contact@wallypay.eu'>contact@wallypay.eu</a>
          </p>
        </div>
      </section>
    </article>
  )
}
