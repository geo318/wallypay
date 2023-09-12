import { highlights } from '/config'

export const Highlights = () => (
  <div className=''>
    <h3 className='text-5xl font-bold px-16'>WallyPay Journey</h3>
    <div className='grid grid-cols-8 bg-[#EAFAFF] shadow-[0_200rem_0_200rem_#EAFAFF] mt-14 p-16'>
      {highlights.map(({ desc, Icon }) => (
        <div className='flex max-w-[5rem] flex-col gap-4' key={desc}>
          <Icon />
          <p className='balanced text-sm font-semibold text-[#21242E]'>
            {desc}
          </p>
        </div>
      ))}
    </div>
  </div>
)
