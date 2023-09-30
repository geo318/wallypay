import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp, Location, Email, Phone } from '/components'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { contact } = await getDictionary(lang)
  return (
    <>
      <article className='text-black text-lg fade-in pb-20 flex flex-col'>
        <h1 className='text-4xl font-bold p-16'>{contact.h1}</h1>
        <section className='flex gap-10 flex- pb-10 text-sm font-semibold mx-16'>
          <div className='flex gap-5 items-center'>
            <Location />
            {contact.primary_address}
          </div>
          <div className='flex gap-5 items-center'>
            <Email />
            {contact.email}
          </div>
          <div className='flex gap-5 items-center'>
            <Phone />
            <div className='flex flex-col gap-1'>
              <span>{contact.phone}</span>
              <span>{contact['2nd_phone']}</span>
            </div>
          </div>
        </section>
        <section className='w-full h-80 relative'>
          <div className='absolute bg-zinc-200 inset-0 -z-10 animate-pulse transition-all duration-200'/>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8693165532795!2d44.73818959046018!3d41.72333873192491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404473104e1ef1fd%3A0x22b90265006c7d63!2s42%2F42a%20Alexander%20Kazbegi%20Ave%2C%20T&#39;bilisi!5e0!3m2!1sen!2sge!4v1696062224495!5m2!1sen!2sge'
            width='100%'
            height='320'
            allowFullScreen={false}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='bg-transparent'
          />
        </section>
        <section className='flex flex-col gap-3 p-16 max-w-4xl'>
          <h2 className='text-xl font-bold py-5'>{contact?.address.h2}</h2>
          {contact?.address.list.map(({ address, city, name }) => (
            <ul
              key={city + address}
              className='grid gap-5 grid-cols-12 columns-md border-b-2 border-app-blue pb-2'
            >
              <li className='col-span-3'>{name}</li>
              <li className='col-span-3'>{city}</li>
              <li className='col-span-6'>{address}</li>
            </ul>
          ))}
        </section>

        <DownloadApp />
      </article>
    </>
  )
}