import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Card = (props: Props) => {
  const { children, className } = props
  return (
    <div className={cn('bg-dark-3 rounded p-2 shadow-md', className)}>
      {children}
    </div>
  )
}

export default Card
