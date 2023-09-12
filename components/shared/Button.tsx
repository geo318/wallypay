import { Arrow } from '/components'
import { twMerge } from 'tailwind-merge'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = 'secondary',
  arrowClassName = '',
  ...props
}) => {
  const variants = {
    primary:
      'px-5 py-4 gap-2 rounded-full bg-black hover:bg-slate-700 text-white',
    secondary: 'px-8 py-2 rounded-full',
    general:
      'group flex gap-1 justify-center items-center text-sm font-semibold border border-black',
  }

  return (
    <button
      className={twMerge(variants['general'], variants[variant], className)}
      {...props}
    >
      {children}
      {variant === 'secondary' && (
        <Arrow
          className={twMerge(
            'h-3 group-hover:translate-x-1 transition-transform transition-delay-150 ease-in-out',
            arrowClassName
          )}
        />
      )}
    </button>
  )
}
