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
          'pl-2 pr-1': before,
          'pl-1 pr-2': after,
        },
        className,
      )}
    >
      {before}
      <input
        className={cn('h-[36px] w-full bg-transparent outline-none', {
          'ml-1': before,
          'mr-1': after,
        })}
        onChange={(e) => onChange?.(e.target.value)}
        {...rest}
      />
      {after}
    </div>
  )
}

export default Input
