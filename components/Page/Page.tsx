import Image from 'next/image'
import { type PageProps } from './types'
import { twMerge } from 'tailwind-merge'

export function Page({ texts, childSet, className }: PageProps) {
  return (
    <article
      className={twMerge(
        className,
        'text-black text-lg fade-in py-20 flex flex-col'
      )}
    >
      <h1 className='text-6xl leading-normal font-bold px-16'>{texts.h1}</h1>
      {texts.sections.map(({ h2, p, li }, i) => (
        <section
          className={twMerge(
            'flex gap-32 p-16 relative',
            !((i + 1) % 2) && 'bg-app-blue-light'
          )}
          key={h2}
        >
          <div
            className={twMerge(
              'flex flex-col gap-10',
              childSet?.[i] && 'basis-1/2'
            )}
          >
            {h2 && <h2 className='text-3xl font-bold'>{h2}</h2>}
            {li && (
              <ul className='flex flex-col gap-5 list-disc ml-5'>
                {li.map((txt) => (
                  <li key={txt}>{txt}</li>
                ))}
              </ul>
            )}
            {p?.map((txt) => (
              <p key={txt}>{txt}</p>
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
