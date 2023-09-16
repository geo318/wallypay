import { Anima } from '/components'
import { highlights } from '/config'
import { HomeText } from '/types'

export const Highlights = ({ text }: { text: HomeText['highlights'] }) => (
  <div>
    <h3 className='text-5xl font-bold px-16'>{text.heading}</h3>
    <div className='grid grid-cols-8 bg-[#EAFAFF] shadow-[0_200rem_0_200rem_#EAFAFF] mt-14 p-16'>
      {highlights.map(({ desc, Icon }) => (
        <Anima key={text[desc]}>
          <div className='flex max-w-[5rem] flex-col gap-4'>
            <Icon className='self-center' />
            <p className='balanced text-sm font-semibold text-[#21242E]'>
              {text[desc]}
            </p>
          </div>
        </Anima>
      ))}
    </div>
  </div>
)
