import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { clients } from "../constants";
import ReviewCard from "./ReviewCard";

const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // 3 seconds between slides
          disableOnInteraction: false, // keep autoplaying after user interaction
        }}
        loop={true} // makes it swipe infinitely
        modules={[FreeMode, Pagination, Autoplay]}
        className="w-[20rem] lg:w-[45rem]"
      >
        {clients.map((client, index) => (
          <SwiperSlide key={index}>
            <div className="mb-20">
              <ReviewCard {...client} cardStyles={``} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;
