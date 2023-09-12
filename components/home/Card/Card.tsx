import Image, { StaticImageData } from 'next/image'

export const Card: React.FC<{
  heading: string
  sub: string
  description: string[]
  image: StaticImageData
  button: JSX.Element
  alt?: string
}> = ({ heading, sub, button, description, image, alt = '' }) => {
  return (
    <article>
      <h3 className='text-5xl font-bold'>{heading}</h3>
      <div className='grid grid-cols-2 bg-white mt-14 rounded-3xl px-14 py-24 relative overflow-hidden'>
        <div className='flex flex-col gap-14 tracking-wide'>
          <h4 className='text-lg font-medium'>{sub}</h4>
          <ul className='flex flex-col gap-5 text-sm font-medium text-zinc-700'>
            {description.map((item) => (
              <li className='flex gap-8 items-center' key={item}>
                <span className='w-[1.125rem] h-[.125rem] rounded-full bg-[#827E7E]' />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {button}
        </div>

        <div className='ml-auto'>
          <figure className='absolute bottom-0 right-0 left-1/2 overflow-hidden'>
            <Image
              src={image}
              alt={alt}
              className='object-contain max-w-full max-h-full'
            />
          </figure>
        </div>
      </div>
    </article>
  )
}
