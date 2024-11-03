import { cn } from '@/utils'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  bold?: boolean
}

const Heading = (props: Props) => {
  const { children, className, as: Component = 'h3', bold } = props
  return (
    <Component className={cn({ 'font-bold': bold }, className)}>
      {children}
    </Component>
  )
}

export default Heading
