import { Anima } from '/components'
import { highlights } from '/config'
import { HomeText } from '/types'

export const Highlights = ({ text }: { text: HomeText['highlights'] }) => (
  <div>
    <h3 className='xl:text-5xl text-2xl font-bold px-5 md:px-16'>
      {text.heading}
    </h3>
    <div className='grid lg:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-y-5 bg-[#EAFAFF] shadow-[0_200rem_0_200rem_#EAFAFF] lg:mt-14 mt-5 px-5 lg:py-16 py-10 lg:px-16'>
      {highlights.map(({ desc, Icon }) => (
        <Anima key={text[desc]} className='flex justify-center'>
          <div className='flex max-w-[6.5rem] flex-col gap-4'>
            <Icon className='self-center' />
            <p className='balanced text-sm font-semibold text-[#21242E] text-center'>
              {text[desc]}
            </p>
          </div>
        </Anima>
      ))}
    </div>
  </div>
)
