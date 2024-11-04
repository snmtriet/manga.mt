import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  border?: boolean
}

const Card = (props: Props) => {
  const { children, className, border = true } = props
  return (
    <div
      className={cn(
        'overflow-hidden rounded border-light-grey-3/10 bg-dark-3 p-2 shadow-md',
        { border: border },
        className,
      )}
    >
      {children}
    </div>
  )
}

export default Card
