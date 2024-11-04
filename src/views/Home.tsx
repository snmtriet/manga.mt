import { BannerSlide, MangaCard, PosterSlide } from '@/components/shared'
import { Button, Heading, Section, Text } from '@/components/ui'
import { IoIosArrowBack } from 'react-icons/io'

const Home = () => {
  return (
    <div>
      <Section className="mt-4">
        <BannerSlide />
      </Section>
      <Section>
        <div className="mb-4 flex items-center justify-between">
          <Heading as="h2" bold>
            Most Viewed
          </Heading>
          <div className="flex items-center gap-lg">
            <Text className="cursor-pointer text-light hover:text-light">
              Day
            </Text>
            <Text className="cursor-pointer text-light-grey-1 hover:text-light">
              Week
            </Text>
            <Text className="cursor-pointer text-light-grey-1 hover:text-light">
              Month
            </Text>
          </div>
        </div>
        <PosterSlide
          showIndex
          paginationOptions={{
            progressbarFillClass:
              'swiper-pagination-progressbar-fill custom-progressbar-fill',
            type: 'progressbar',
          }}
        />
      </Section>
      <Section>
        <div className="mb-4 flex flex-col justify-between gap-lg md:flex-row md:gap-0">
          <Heading as="h2" bold>
            Latest Updates
          </Heading>
          <div className="flex items-center">
            <div className="mr-4 flex items-center gap-lg">
              <Text className="cursor-pointer text-light hover:text-light">
                All
              </Text>
              <Text className="cursor-pointer text-light-grey-3 hover:text-light">
                Manga
              </Text>
              <Text className="cursor-pointer text-light-grey-3 hover:text-light">
                Manhua
              </Text>
              <Text className="cursor-pointer text-light-grey-3 hover:text-light">
                Manhwa
              </Text>
              <Text className="cursor-pointer text-light-grey-3 hover:text-light">
                Trending
              </Text>
            </div>
            <div className="flex items-center gap-md">
              <Button
                className="h-6 w-6 p-0 hover:text-red-1"
                variant="secondary"
              >
                <IoIosArrowBack size={16} />
              </Button>
              <Button
                className="h-6 w-6 p-0 hover:text-red-1"
                variant="secondary"
              >
                <IoIosArrowBack size={16} className="rotate-180" />
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 12 }).map((_, index) => (
            <MangaCard key={index} index={index + 1} />
          ))}
        </div>
      </Section>
      <Section>
        <div className="mb-4 flex items-center justify-between">
          <Heading as="h2" bold>
            New Release
          </Heading>
          <div className="flex items-center gap-md">
            <Button
              className="new-release-prev h-6 w-6 p-0 hover:text-red-1"
              variant="secondary"
            >
              <IoIosArrowBack size={16} />
            </Button>
            <Button
              className="new-release-next h-6 w-6 p-0 hover:text-red-1"
              variant="secondary"
            >
              <IoIosArrowBack size={16} className="rotate-180" />
            </Button>
          </div>
        </div>
        <PosterSlide
          isRelease
          paginationOptions={{
            el: '.new-release-pagination',
            clickable: true,
          }}
          navigationOptions={{
            nextEl: '.new-release-next',
            prevEl: '.new-release-prev',
          }}
        />
        <div className="new-release-pagination flex items-center justify-center"></div>
      </Section>
    </div>
  )
}

export default Home
