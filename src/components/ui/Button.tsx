import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  before?: ReactNode
  after?: ReactNode
  className?: string
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  justifyContent?: 'start' | 'center' | 'end'
  variant?: 'primary' | 'secondary' | 'tertiary' | 'green' | 'rounded' | 'red'
  square?: boolean
}

const Button = (props: Props) => {
  const {
    children,
    className,
    size = 'md',
    justifyContent = 'center',
    before,
    after,
    variant = 'primary',
    square,
  } = props

  const sizeClass = `text-${size}`
  const justifyClass = `justify-${justifyContent}`
  const btnClass = `button-${variant}`

  return (
    <button
      className={cn(
        'flex h-[36px] items-center rounded p-2 font-medium text-dark',
        {
          'px-2 py-1': !square,
        },
        sizeClass,
        justifyClass,
        btnClass,
        className,
      )}
    >
      {before}
      {children}
      {after}
    </button>
  )
}

export default Button