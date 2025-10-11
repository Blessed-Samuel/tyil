"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const AdvertSlider = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2 overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 0, // no pause, continuous scroll
          disableOnInteraction: false,
        }}
        loop={true}
        speed={6000} // controls scroll speed
        allowTouchMove={false} // disables dragging
        slidesPerView="auto"
        spaceBetween={50}
        className="!overflow-hidden"
      >
        <SwiperSlide className="!w-auto">
          <p className="text-sm md:text-base font-medium whitespace-nowrap">
            🎓 TYIL Academy — Countdown to 2030: Learn from experts and earn
            your leadership degree and diploma certificates in Foundations of
            Leadership, Non-profit Leadership, and Self Leadership.
          </p>
        </SwiperSlide>

        <SwiperSlide className="!w-auto">
          <p className="text-sm md:text-base font-medium whitespace-nowrap">
            🚀 Empower your journey — Gain practical leadership skills that help
            you influence change and make impact globally.
          </p>
        </SwiperSlide>

        <SwiperSlide className="!w-auto">
          <p className="text-sm md:text-base font-medium whitespace-nowrap">
            💡 Enroll today at TYIL Academy and become a certified leader by
            2030!
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdvertSlider;
