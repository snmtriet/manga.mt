import { Link } from 'react-router-dom'
import { Tag, Text } from '../ui'
import Card from './Card'

type Props = {
  isRelease?: boolean
  index: number
  showIndex?: boolean
}

const PosterCard = (props: Props) => {
  const { isRelease, index, showIndex } = props
  return (
    <Link
      to={`/manga/${'sono-bisque-doll-wa-koi-wo-suruu'}?${isRelease ? 'new-release' : 'most-viewed'}=${index}`}
    >
      <Card className="group relative select-none overflow-hidden p-0 transition-all duration-150 hover:bg-dark-2">
        {showIndex && (
          <Tag className="absolute right-2 top-2 z-50 flex h-10 items-center justify-center bg-dark-3 px-2">
            <Text bold size="xl">
              {index}
            </Text>
          </Tag>
        )}

        <div className="h-full w-full overflow-hidden">
          <img
            src={`/images/${isRelease ? 'new-release' : 'most-viewed'}/${index}.png`}
            className="transition-all duration-150 group-hover:scale-110"
          />
        </div>
        <div className="p-2 text-center">
          <Text ellipsis>One Piece</Text>
        </div>
      </Card>
    </Link>
  )
}

export default PosterCard
