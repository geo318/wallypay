'use client'

import { useObserver } from '/hooks'

export function Anima({ children }: { children: React.ReactNode }) {
  const { ref } = useObserver<HTMLDivElement>()
  return (
    <div ref={ref} className='transition-all duration-300 delay-100'>
      {children}
    </div>
  )
}
