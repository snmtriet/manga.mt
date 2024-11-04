import { Link } from 'react-router-dom'
import { Heading, Tag, Text } from '../ui'
import Card from './Card'

type Props = {
  index: number
}

const MangaCard = (props: Props) => {
  const { index } = props
  return (
    <Link
      to={`/manga/${'sono-bisque-doll-wa-koi-wo-suruu'}?recently-updated=${index}`}
    >
      <Card className="relative flex items-start overflow-hidden p-0">
        <div className="relative mr-1 w-32">
          <img src={`/images/recently-updated/${index}.png`} />
        </div>
        <div className="h-full flex-1 overflow-hidden px-2 py-3">
          <Text size="md" className="text-red-1">
            Manga
          </Text>
          <Heading as="h4" className="mt-2 truncate whitespace-nowrap">
            One Piece
          </Heading>
          <div className="mt-3 flex flex-col gap-sm">
            <Tag
              className="flex w-full items-center justify-between border-0 bg-dark-4 hover:bg-dark-5"
              color="white"
            >
              <Text size="xs" className="text-light-grey-3">
                Chap 3 EN
              </Text>
              <Text size="xs" className="text-light-grey-3">
                11 minutes ago
              </Text>
            </Tag>
            <Tag
              className="flex items-center justify-between border-0 bg-dark-4 hover:bg-dark-5"
              color="white"
            >
              <Text size="xs" className="text-light-grey-3">
                Chap 2.3 EN
              </Text>
              <Text size="xs" className="text-light-grey-3">
                Aug 27, 2023
              </Text>
            </Tag>
            <Tag
              className="flex items-center justify-between border-0 bg-dark-4 hover:bg-dark-5"
              color="white"
            >
              <Text size="xs" className="text-light-grey-3">
                Chap 2.2 EN
              </Text>
              <Text size="xs" className="text-light-grey-3">
                Sep 05, 2023
              </Text>
            </Tag>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default MangaCard
