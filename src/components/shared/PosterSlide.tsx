import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import PosterCard from './PosterCard'
import {
  NavigationOptions,
  PaginationOptions,
  SwiperModule,
} from 'swiper/types'

type Props = {
  isRelease?: boolean
  showIndex?: boolean
  slidesPerView?: number | 'auto'
  paginationOptions?: PaginationOptions
  navigationOptions?: NavigationOptions
}

const PosterSlide = (props: Props) => {
  const {
    isRelease,
    showIndex,
    slidesPerView,
    paginationOptions,
    navigationOptions,
  } = props

  const modules = [
    navigationOptions && Navigation,
    paginationOptions && Pagination,
  ].filter(Boolean) as SwiperModule[]
  return (
    <div className="relative w-full">
      <Swiper
        className="!pb-6"
        modules={modules}
        spaceBetween={14}
        slidesPerView={slidesPerView || 7}
        slidesPerGroup={1}
        navigation={navigationOptions}
        pagination={paginationOptions}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1300: {
            slidesPerView: 7,
          },
        }}
      >
        {Array.from({ length: isRelease ? 20 : 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <PosterCard
              index={index + 1}
              showIndex={showIndex}
              isRelease={isRelease}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default PosterSlide
