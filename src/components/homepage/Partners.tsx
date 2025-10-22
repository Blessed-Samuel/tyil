"use client";

import React, { useRef } from "react";
import Container from "../layout/Container";
import { Heading } from "../layout/Heading";
import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

const Partners = () => {
  const swiperRef = useRef<SwiperRef>(null);

  const partners = [
    { name: "Cinqtech Nigeria Limited", image: "/partners/IMG_3715.PNG" },
    { name: "Global GreenGrants Fund", image: "/partners/IMG_3716.PNG" },
    { name: "When Teens Worship", image: "/partners/IMG_3717.PNG" },
    { name: "Kaiser Foundation", image: "/partners/IMG_3718.JPG" },
  ];

  // Duplicate for seamless infinite loop
  const infinitePartners = [...partners, ...partners, ...partners];

  const handleMouseEnter = () => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current?.swiper?.autoplay) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <section className="relative py-12 sm:py-20 bg-white overflow-hidden">
      {/* Header inside container */}
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <Heading className="text-2xl sm:text-3xl lg:text-4xl text-primaryBlack font-bold mb-2">
            Our Partners
          </Heading>
          <p className="text-primaryBlack/60 max-w-md mx-auto text-base">
            Collaborating with industry leaders to deliver exceptional results.
          </p>
        </div>
      </Container>

      {/* Full-width Slider */}
      <div
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView="auto"
          freeMode
          loop
          loopAddBlankSlides={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          breakpoints={{
            320: {
              spaceBetween: 16,
              slidesPerView: 1.5,
            },
            480: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            768: {
              spaceBetween: 28,
              slidesPerView: 3,
            },
            1024: {
              spaceBetween: 32,
              slidesPerView: 4,
            },
            1280: {
              spaceBetween: 40,
              slidesPerView: 5,
            },
          }}
          className="!overflow-visible"
        >
          {infinitePartners.map((partner, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <div className="bg-white px-3 sm:px-6 py-4 sm:py-6 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 w-40 sm:w-48 lg:w-56">
                <div className="flex justify-center items-center mb-3 sm:mb-4 h-20 sm:h-24">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    width={100}
                    height={100}
                    quality={100}
                    className="w-16 sm:w-20 lg:w-24 h-auto object-contain"
                  />
                </div>
                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-neutral-900 line-clamp-2">
                  {partner.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Faint edge overlays for fade effect */}
        <div className="absolute top-0 left-0 h-full w-12 sm:w-20 md:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 h-full w-12 sm:w-20 md:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
      </div>
    </section>
  );
};

export default Partners;
