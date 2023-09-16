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
  { name: 'app', link: 'link', image: app },
  { name: 'register', link: 'link', image: register },
  { name: 'topUp', link: 'link', image: topUp },
  { name: 'utilities', link: 'link', image: utilities },
  { name: 'wallet', link: 'link', image: wallet },
  { name: 'crypto', link: 'link', image: crypto },
  { name: 'offer', link: 'link', image: offer },
  { name: 'unistream', link: 'link', image: unistream },
] as const
