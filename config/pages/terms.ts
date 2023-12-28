import { routes } from "../routes";

export const terms = [
  { key: "policy", link: routes.policy, download: false },
  { key: "security", link: routes.security, download: false },
  { key: "rules", link: routes.rules, download: false },
  { key: "confidentiality", link: routes.confidentiality, download: false },
  { key: "agreement", link: routes.agreement, download: false },
  { key: "rates", link: routes.rates, download: true },
] as const;
