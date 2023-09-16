import { StaticImageData } from 'next/image'
import { products } from '/config'
import { HomeText } from '/types'

export type ItemProps = {
  link: string
  image: StaticImageData
  name: (typeof products)[number]['name']
  text: HomeText['products']
}
