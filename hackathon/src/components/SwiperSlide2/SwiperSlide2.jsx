import React from "react";
import { useNavigate } from "react-router-dom";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Carousel2 = () => {
  const navigate = useNavigate();
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
        onSwiper={swiper => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}>
        <SwiperSlide>
          <img
            onClick={() => navigate("/products")}
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/iphone-13-pro-alpine-green-pc-price.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            onClick={() => navigate("/products")}
            width="100%"
            src="https://www.istore.kg/media/mainpageslider/iphone-13-green-pc-price.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel2;
