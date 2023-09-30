import { routes } from '../routes'

export const terms = [
  { key: 'policy', link: routes.policy },
  { key: 'security', link: routes.security },
  { key: 'rules', link: routes.rules },
  { key: 'confidentiality', link: routes.confidentiality },
  { key: 'agreement', link: routes.agreement },
] as const
