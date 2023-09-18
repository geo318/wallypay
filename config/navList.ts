export const navList = [
  {
    name: 'products',
    link: '',
    menu: [
      { name: 'card', link: '/debit-card' },
      { name: 'wallet', link: '/' },
      { name: 'crypto', link: '/' },
      { name: 'loan', link: '/' },
    ],
  },
  { name: 'partnership', link: '/products', menu: [] },
  { name: 'about', link: '/about', menu: [] },
  { name: 'blog', link: '/contact', menu: [] },
  { name: 'contact', link: '/contact', menu: [] },
] as const
