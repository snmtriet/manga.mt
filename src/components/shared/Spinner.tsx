import { forwardRef } from 'react'
import { CgSpinner } from 'react-icons/cg'
import type { ElementType } from 'react'
import { CommonProps } from '@/@types/common'
import { cn } from '@/utils'

export interface SpinnerProps extends CommonProps {
  color?: string
  enableTheme?: boolean
  indicator?: ElementType
  isSpinning?: boolean
  size?: string | number
}

const Spinner = forwardRef((props: SpinnerProps, ref) => {
  const {
    className,
    indicator: Component = CgSpinner,
    isSpinning = true,
    size = 20,
    style,
    ...rest
  } = props

  const spinnerStyle = {
    height: size,
    width: size,
    ...style,
  }

  const spinnerClass = cn(isSpinning && 'animate-spin text-red-1', className)

  return (
    <Component
      ref={ref}
      style={spinnerStyle}
      className={spinnerClass}
      {...rest}
    />
  )
})

Spinner.displayName = 'Spinner'

export default Spinner
