import { getDictionary } from '/lib'
import { PageProps } from '/types'
import { DownloadApp } from '/components'
import Link from 'next/link'
import { terms as termItems } from '/config'

export default async function DebitCard({ params: { lang } }: PageProps) {
  const { terms } = await getDictionary(lang)
  return (
    <>
      <article className='text-black text-lg fade-in py-20 flex flex-col'>
        <h1 className='text-4xl font-bold px-16'>{terms.h1}</h1>
        <ul className='flex flex-col gap-5 p-16 relative'>
          {termItems.map(({ link, key }) => (
            <li key={key} className='list-disc ml-5'>
              <Link
                href={`/${lang}${link}`}
                className='hover:text-app-blue hover:underline cursor-pointer'
              >
                {terms.li[key]}
              </Link>
            </li>
          ))}
        </ul>
      </article>
      <DownloadApp />
    </>
  )
}
