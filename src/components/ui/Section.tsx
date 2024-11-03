import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

const Section = (props: Props) => {
  const { children, className } = props
  return <section className={cn('my-10', className)}>{children}</section>
}

export default Section
