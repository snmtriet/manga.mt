import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  textClassName?: string
  color?: 'yellow' | 'green' | 'red' | 'white'
}

const Tag = (props: Props) => {
  const { children, className, color = 'yellow' } = props
  return (
    <div
      className={cn(
        'cursor-pointer rounded border px-1 py-0.5 transition-all duration-150',
        {
          'hover:border-yellow-1': color === 'yellow',
          'hover:border-green-1': color === 'green',
          'hover:border-red-1': color === 'red',
          'hover:border-light': color === 'white',
        },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Tag
