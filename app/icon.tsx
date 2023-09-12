import { ImageResponse } from 'next/server'
import { Logo } from '/components'

export const runtime = 'edge'

export const size = {
  width: 62,
  height: 50,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <Logo w viewBox='0 -4 66 46'/>,
    {
      ...size,
    }
  )
}
