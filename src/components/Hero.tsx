"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { heroContent } from "@/constants/hero";
import Button from "./ui/Button";
import { PiHandHeartFill } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi2";
import { ArrowRightIcon } from "@radix-ui/react-icons";

// Animation keyframes for zoom effect
const zoomAnimation: string = `
    @keyframes zoomInOut {
      0% { transform: scale(1); }
      50% { transform: scale(1.08); }
      100% { transform: scale(1); }
    }
    .zoom-animation {
      animation: zoomInOut 8s infinite ease-in-out;
    }
  `;

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoSliding, setIsAutoSliding] = useState<boolean>(true);

  // Auto-slide functionality
  const nextSlide = useCallback((): void => {
    setCurrentSlide((prev: number) => (prev + 1) % heroContent.images.length);
  }, []);

  const prevSlide = useCallback((): void => {
    setCurrentSlide(
      (prev: number) =>
        (prev - 1 + heroContent.images.length) % heroContent.images.length
    );
  }, []);

  const goToSlide = useCallback((index: number): void => {
    setCurrentSlide(index);
  }, []);

  // Auto-slide effect
  useEffect((): (() => void) | undefined => {
    if (!isAutoSliding) return;

    const interval: NodeJS.Timeout = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isAutoSliding]);

  // Keyboard navigation
  useEffect((): (() => void) => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [nextSlide, prevSlide]);

  const handleMouseEnter = (): void => {
    setIsAutoSliding(false);
  };

  const handleMouseLeave = (): void => {
    setIsAutoSliding(true);
  };

  const handleSlideClick = (index: number): void => {
    goToSlide(index);
  };

  // const progressWidth: string = `${
  //   ((currentSlide + 1) / heroContent.images.length) * 100
  // }%`;

  return (
    <>
      {/* Inject my CSS animation */}
      <style jsx>{zoomAnimation}</style>

      <section
        className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-center md:justify-start px-4 sm:px-6 md:px-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image Slider */}
        <div className="absolute inset-0 w-full h-full">
          {heroContent.images.map((image, index: number) => (
            <div
              key={image.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 zoom-animation"
                  : "opacity-0"
              }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover"
                priority={index === 0}
                quality={90}
                sizes="100vw"
              />
            </div>
          ))}
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-800/20 via-slate-800/50 to-slate-900 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 text-center md:text-left text-white lg:max-w-8xl max-w-4xl mt-16 md:mt-20">
          <h1 className="text-4xl sm:text-5xl tracking-tight md:text-7xl lg:text-7xl uppercase leading-tight sm:leading-20 font-bold mb-6 animate-fade-in-up">
            {heroContent.title}
          </h1>

          <p className="text-lg md:hidden sm:text-lg md:text-xl font-light leading-relaxed mb-8 animate-fade-in-up animation-delay-300 px-2 sm:px-0">
            {heroContent.description}
          </p>

          <div className="flex flex-col md:mt-10 sm:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in-up animation-delay-600">
            <Button
              primaryText="Donate Now"
              hoverText="Donate Now"
              icon={PiHandHeartFill}
              iconPosition="left"
              onClick={() =>
                window.open(
                  "https://flutterwave.com/donate/lbl9iwpnhpyw",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="gap-2 w-full sm:w-auto bg-primaryRed hover:bg-primaryRed/90"
              aria-label="Donation button"
              variant="red"
            />

            <Button
              primaryText="Join Our Community"
              hoverText="Join Our Community"
              icon={ArrowRightIcon}
              iconPosition="right"
              onClick={() => alert("Button Clicked")}
              className="gap-2 w-full sm:w-64"
              aria-label="Join button"
              variant="black"
            />
          </div>
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-30">
          <div className="flex gap-3 mb-4 justify-end">
            <button
              type="button"
              onClick={prevSlide}
              className="w-12 h-6 sm:w-14 cursor-pointer sm:h-6 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white text-sm sm:text-lg font-bold hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Previous slide"
            >
              ⟵
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="w-12 h-6 sm:w-14 cursor-pointer sm:h-6 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white text-lg sm:text-lg font-bold hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300"
              aria-label="Next slide"
            >
              ⟶
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="flex gap-2 justify-end">
            {heroContent.images.map((_, index: number) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSlideClick(index)}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primaryRed scale-125 w-4"
                    : "bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
