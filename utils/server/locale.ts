import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextRequest } from 'next/server'
import { locales } from '/config'

export const getLocale = (request: NextRequest) => {
  const headers: Record<string, string> = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })
  let languages = new Negotiator({ headers }).languages()
  let defaultLocale = 'en'

  return match(languages, locales, defaultLocale)
}
