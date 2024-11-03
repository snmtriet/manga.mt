import { GoBookmarkFill } from 'react-icons/go'
import { Heading, Tag, Text } from '../ui'
import Card from './Card'

type Props = {
  index: number
}

const BannerCard = (props: Props) => {
  const { index } = props
  return (
    <Card className="before:bg-red-1 group relative flex cursor-pointer items-center overflow-hidden p-0 before:absolute before:left-0 before:top-0 before:block before:h-full before:w-1">
      <div className="bg-dark-6 border-red-1 absolute right-2 top-2 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 opacity-0 shadow-lg transition-all duration-150 group-hover:opacity-100">
        <GoBookmarkFill size={20} className="text-red-1" />
      </div>
      <div className="relative z-10 w-2/3 p-4 pr-8">
        <Text className="text-light-grey-1">Releasing</Text>
        <Heading as="h2" className="mt-2">
          One Piece
        </Heading>
        <Text className="text-light-grey-3 mt-8 !line-clamp-2 hidden leading-4 md:block">
          Gol D. Roger, a man referred to as the "Pirate King," is set to be
          executed by the World Government. But just before his demise, he
          confirms the exist
        </Text>
        <Text className="text-light-grey-1 mt-2">Chap 100 - Vol 24</Text>
        <div className="mt-2 flex items-center gap-md">
          <Tag className="border-light-grey-3" color="white">
            <Text>Action</Text>
          </Tag>
          <Tag className="border-light-grey-3" color="white">
            <Text>Comedy</Text>
          </Tag>
          <Tag className="border-light-grey-3" color="white">
            <Text>Drama</Text>
          </Tag>
        </div>
      </div>
      <div className="absolute right-0 flex h-full rotate-[16deg] scale-[1.35] justify-end opacity-60 transition-all duration-200 group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100">
        <img
          src={`/images/banner/${index}.png`}
          alt=""
          className="object-contain"
        />
      </div>
    </Card>
  )
}

export default BannerCard
