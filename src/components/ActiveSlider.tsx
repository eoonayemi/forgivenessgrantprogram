import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { reviews } from "../constants";
import ReviewCard from "./ReviewCard";

const ActiveSlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleInteraction = () => {
    // Stop autoplay on interaction
    if (swiperRef.current?.autoplay) {
      swiperRef.current.autoplay.stop();
    }

    // Resume autoplay after 3 seconds of no interaction
    setTimeout(() => {
      if (swiperRef.current?.autoplay) {
        swiperRef.current.autoplay.start();
      }
    }, 3000);
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false, // Don't disable autoplay permanently
        }}
        loop={true}
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-[20rem] lg:w-[45rem]"
        onTouchStart={handleInteraction}
        onSlideChange={handleInteraction}
        onClick={handleInteraction}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="mb-20">
              <ReviewCard {...review} cardStyles={``} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
