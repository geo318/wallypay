import { locales, products } from '/config'
import { getDictionary } from '/lib'

export type Locale = (typeof locales)[number]
export type Product = (typeof products)[number]

export type Translation = Awaited<ReturnType<typeof getDictionary>>
export type HomeText = Translation['home']
export type SharedText = Translation['shared']
