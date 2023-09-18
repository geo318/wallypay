import Image from 'next/image'
import { type PageProps } from './types'
import { cardImg } from '/public'
import { twMerge } from 'tailwind-merge'

export function Page({ texts, childSet }: PageProps) {
  return (
    <article className='text-black text-lg fade-in py-20 flex flex-col'>
      <h1 className='text-6xl font-bold px-16'>{texts.h1}</h1>
      {texts.sections.map(({ h2, p, li }, i) => (
        <section className='mt-10 flex gap-32 px-16' key={h2}>
          <div
            className={twMerge(
              'flex flex-col gap-12',
              childSet?.[i] && 'basis-1/2'
            )}
          >
            {h2 && <h2 className='text-3xl font-bold py-10'>{h2}</h2>}
            <ul className='flex flex-col gap-5 list-disc ml-5'>
              {li?.map((txt) => (
                <li key={txt}>{txt}</li>
              ))}
            </ul>
            {p?.map((txt, i) => (
              <p key={i}>{txt}</p>
            ))}
          </div>
          {childSet?.[i] ? (
            <div className='flex flex-col gap-12 basis-1/2'>{childSet[i]}</div>
          ) : null}
        </section>
      ))}
    </article>
  )
}
