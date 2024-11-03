import { IoIosArrowBack } from 'react-icons/io'
import Button from '../Button'
import { cn } from '@/utils'

type Props = {
  className: string
}

const ButtonPrev = (props: Props) => {
  const { className } = props
  return (
    <Button
      className={cn(
        className,
        'hover:border-red-1 hover:text-red-1 absolute -left-2 top-1/2 z-10 h-40 w-40 -translate-y-1/2 rounded-full border-2',
      )}
      variant="secondary"
    >
      <IoIosArrowBack size={16} strokeWidth={20} />
    </Button>
  )
}

export default ButtonPrev