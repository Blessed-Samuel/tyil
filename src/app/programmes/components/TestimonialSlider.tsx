"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { testimonial_data } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
  return (
    <div className="relative py-10">
      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView="auto"
        spaceBetween={10}
        loop={true}
        freeMode={true}
        grabCursor={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="!overflow-hidden group"
      >
        {testimonial_data.map(t => (
          <SwiperSlide
            key={t.id}
            style={{
              width: "auto",
            }}
          >
            <TestimonialCard testimonial={t} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Left Overlay Gradient */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />

      {/* Right Overlay Gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />
    </div>
  );
};

export default TestimonialSlider;
