'use client'

import { useObserver } from '/hooks'

export const Anima: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { ref } = useObserver<HTMLDivElement>()
  return (
    <div ref={ref} className='transition-all duration-300 delay-100'>
      {children}
    </div>
  )
}
