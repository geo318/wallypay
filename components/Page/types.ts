import { StaticImageData } from 'next/image'
import { PageText } from '/types'

export type PageProps = {
  texts: PageText
  childSet?: React.ReactNode[]
}
