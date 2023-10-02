import Image from 'next/image'
import { type PageProps } from './types'
import { twMerge } from 'tailwind-merge'
import { Anima } from '../Anima'

export function Page({ texts, childSet, className }: PageProps) {
  return (
    <article
      className={twMerge(
        className,
        'text-black lg:text-lg text-base fade-in lg:py-20 py-10 flex flex-col'
      )}
    >
      <h1 className='lg:text-6xl text-3xl leading-normal font-bold lg:px-16 px-5'>
        {texts.h1}
      </h1>
      {texts.sections.map(({ h2, p, li }, i) => (
        <section
          className={twMerge(
            'flex lg:flex-row flex-col lg:gap-32 gap-10 lg:p-16 p-5 py-10 relative',
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
            {h2 && <h2 className='lg:text-3xl text-xl font-bold'>{h2}</h2>}
            {li && (
              <ul className='flex flex-col gap-5 list-disc ml-5'>
                {li.map((txt) => (
                  <Anima key={txt}>
                    <li>{txt}</li>
                  </Anima>
                ))}
              </ul>
            )}
            {p?.map((txt) => (
              <Anima key={txt}>
                <p key={txt}>{txt}</p>
              </Anima>
            ))}
          </div>
          {childSet?.[i] ? (
            <div className='flex flex-col items-center gap-12 basis-1/2'>
              {childSet[i]}
            </div>
          ) : null}
        </section>
      ))}
    </article>
  )
}
