import { Button, MasterCard } from '/components'
import { card } from '/public'

export const cards = [
  {
    image: card,
    name: 'card',
    button: (text: string) => (
      <Button variant='primary' className='py-2 mr-auto'>
        <MasterCard />
        {text}
      </Button>
    ),
  },
  {
    image: card,
    name: 'wallet',
    button: (text: string) => (
      <Button className='py-2 mr-auto bg-app-blue text-white border-transparent hover:bg-[#19B2E6]'>
        {text}
      </Button>
    ),
  },
  {
    image: card,
    name: 'loan',
    button: (text: string) => (
      <Button className='py-2 mr-auto bg-[#F395F5] text-white border-transparent hover:bg-[#f18cf3]'>
        {text}
      </Button>
    ),
  },
  {
    image: card,
    name: 'crypto',
    button: (text: string) => (
      <Button className='py-2 mr-auto bg-[#4ECDC4] text-white border-transparent hover:bg-[#47bbb3]'>
        {text}
      </Button>
    ),
  },
] as const
