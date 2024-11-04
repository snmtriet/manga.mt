import { cn } from '@/utils'
import { HTMLProps, ReactNode } from 'react'

type Props = {
  before?: ReactNode
  after?: ReactNode
  variant?: 'rounded'
  onChange?: (newValue: any) => void
} & Omit<HTMLProps<HTMLInputElement>, 'onChange'>

const Input = (props: Props) => {
  const { before, after, className, variant, onChange, ...rest } = props
  return (
    <div
      className={cn(
        'relative flex items-center rounded-md border border-light-grey-3 px-2 text-md',
        {
          'rounded-full': variant === 'rounded',
        },
        className,
      )}
    >
      {before && (
        <div className="absolute left-2 top-1/2 -translate-y-1/2">{before}</div>
      )}
      <input
        className="h-[36px] w-full bg-transparent outline-none"
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {after && (
        <div className="absolute right-2 top-1/2 -translate-y-1/2">{after}</div>
      )}
    </div>
  )
}

export default Input
