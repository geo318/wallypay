import { Locale } from '/types'

const dictionaries = {
  en: () => import('/dictionaries/en.json').then((m) => m.default),
  ka: () => import('/dictionaries/ka.json').then((m) => m.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
