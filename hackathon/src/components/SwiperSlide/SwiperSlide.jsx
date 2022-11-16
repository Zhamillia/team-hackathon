import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={swiper => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/iphone-14-pro-14-pro-max-pc_NUj2mj7.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/iphone-14-14-plus.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/ipad-pro-2022-pc_YrCeGV1.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/ultra-pc_axAJ2XH.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
