import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { motorSportsImages } from "../constants";
import GradientHeader from "../components/GradientHeader";

const ImageSlider = () => {
  return (
    <div className="h-screen w-full pt-[6.688rem] flex flex-col">
      <div className="flex justify-center items-center pt-12 lg:p-12">
        <GradientHeader label="About Us" className="font-sans" />
      </div>
      <div className="flex-grow">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 200,
            modifier: 1.5,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper"
        >
          {motorSportsImages.map((item) => (
            <SwiperSlide key={item.imgAlt} className="swiper-slide">
              <img
                src={item.img}
                alt={item.imgAlt}
                className="swiper-slide img"
              />
            </SwiperSlide>
          ))}

          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default ImageSlider;
