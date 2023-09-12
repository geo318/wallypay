import {
  app,
  crypto,
  offer,
  register,
  topUp,
  wallet,
  unistream,
  utilities,
} from '/public'

export const products = [
  { name: 'Downloading app from stores', link: 'link', image: app },
  { name: 'Online registration', link: 'link', image: register },
  { name: 'Top up e-wallet balance', link: 'link', image: topUp },
  { name: 'Paying utility bills online', link: 'link', image: utilities },
  { name: 'E-wallet capabilities', link: 'link', image: wallet },
  { name: 'Crypto-Friendly e-wallet', link: 'link', image: crypto },
  { name: 'Additional online loan', link: 'link', image: offer },
  { name: 'Individual exclusive offers', link: 'link', image: unistream },
]
