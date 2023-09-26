export const navList = [
  {
    name: 'products',
    link: '',
    menu: [
      { name: 'card', link: '/debit-card' },
      { name: 'wallet', link: '/wallet' },
      { name: 'crypto', link: '/crypto' },
      { name: 'loan', link: '/loan' },
    ],
  },
  { name: 'partnership', link: '/products', menu: [] },
  { name: 'about', link: '/about', menu: [] },
  { name: 'blog', link: '/blog', menu: [] },
  { name: 'contact', link: '/contact', menu: [] },
] as const
