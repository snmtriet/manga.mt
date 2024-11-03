import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonNext, ButtonPrev } from '../ui/Slide'
import BannerCard from './BannerCard'

const BannerSlide = () => {
  return (
    <div className="relative w-full">
      <Swiper
        className="overflow-hidden rounded"
        modules={[Navigation, Autoplay]}
        spaceBetween={14}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          nextEl: '.swiper-button.next',
          prevEl: '.swiper-button.prev',
        }}
        loop
        autoplay={{ delay: 5000 }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 2,
          },
          1300: {
            slidesPerView: 3,
          },
        }}
      >
        {Array.from({ length: 10 }).map((_, index) => (
          <SwiperSlide key={index}>
            <BannerCard index={index + 1} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ButtonPrev className="swiper-button prev hidden md:flex" />
      <ButtonNext className="swiper-button next hidden md:flex" />
    </div>
  )
}

export default BannerSlide
