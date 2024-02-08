import { locales, products } from '/config'
import { getDictionary } from '/lib'
import { z } from 'zod'
import { complaintSchema, emailSchema } from '/schema'

export type Locale = (typeof locales)[number]
export type Product = (typeof products)[number]

export type Translation = Awaited<ReturnType<typeof getDictionary>>
export type HomeText = Translation['home']
export type SharedText = Translation['shared']
export type PageText = Translation['debit_card']
export type OrderText = Translation['order_card']
export type OrderFormText = OrderText['form']
export type ComplaintFormText = Translation['complaint']['form']

export type PageProps = { params: { lang: Locale } }
export type EmailForm = z.infer<typeof emailSchema>
export type ComplaintForm = z.infer<typeof complaintSchema>
export type Email = 'order' | 'complaint'
