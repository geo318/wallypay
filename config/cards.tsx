import { Button, MasterCard } from '/components'
import { card, wallet } from '/public'

export const cards = [
  {
    image: card,
    heading: 'We have a debit card',
    sub: 'Take advantage of our exclusive Mastercard Debit Card offer. Get yours now!',
    description: [
      'Multi-Currency Account (Gel / USD / EUR)',
      'International network - 150 currencies in 210 countries',
      '36 mln merchants and 3.3 mln ATMs',
      'Confidential, safe and secure debit card',
    ],
    button: (
      <Button variant='primary' className='py-2 mr-auto'>
        <MasterCard />
        Order Debit Card
      </Button>
    ),
  },
  {
    image: card,
    heading: 'We have e-wallet',
    sub: 'Experience the future of finance by exploring and using our e-wallet. Get started now!',
    description: [
      'Offers more comfort to each customer',
      'Easy, fast, convenient, safe and secure',
      'Provides access to various cards',
      'Helps to manage daily finances',
    ],
    button: (
      <Button className='py-2 mr-auto bg-app-blue text-white border-transparent hover:bg-[#19B2E6]'>
        Learn More
      </Button>
    ),
  },
  {
    image: card,
    heading: 'We offer loans',
    sub: 'Unlock additional loan opportunities online through our extensive partner network.',
    description: [
      'Secure added funds through our partner loans with a single click',
      'Unlock substantial borrowing potential through partners with raised loan ceilings',
      'Easily secure additional loans online, no complex steps',
      'Easily manage multiple loans with one mobile app',
    ],
    button: (
      <Button className='py-2 mr-auto bg-[#F395F5] text-white border-transparent hover:bg-[#f18cf3]'>
        Learn More
      </Button>
    ),
  },
  {
    image: card,
    heading: 'We’re crypto-friendly',
    sub: 'Unlock crypto potential: Transfer funds instantly to trusted partner platforms.',
    description: [
      'Transfer funds smoothly from your e-wallet to partner crypto platforms',
      'Your funds reach reputable crypto platforms securely',
      'Move funds seamlessly for diversified investments',
      'Monitor transfer history, maintaining transparent records',
    ],
    button: (
      <Button className='py-2 mr-auto bg-[#4ECDC4] text-white border-transparent hover:bg-[#47bbb3]'>
        Learn More
      </Button>
    ),
  },
]
