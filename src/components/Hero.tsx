"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { heroContent } from "@/constants/hero";
import Button from "./ui/Button";
import { PiHandHeartFill } from "react-icons/pi";
import { HiArrowRight } from "react-icons/hi2";
import { ArrowRightIcon } from "@radix-ui/react-icons";

// type heroContentProps = {
//   title: string;
//   description: string;
//   images: {
//     id: number;
//     url: string;
//     alt: string;
//   }[];
// };

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

  const progressWidth: string = `${
    ((currentSlide + 1) / heroContent.images.length) * 100
  }%`;

  return (
    <>
      {/* Inject CSS animation */}
      <style jsx>{zoomAnimation}</style>

      <section
        className="relative h-screen w-full overflow-hidden flex items-center justify-center"
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
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/70 to-slate-900/100 z-10" />

        {/* Hero Content */}
        <div className="relative mt-0 md:mt-40 z-20 text-center text-white max-w-4xl px-6 md:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            {heroContent.title}
          </h1>
          <p className="text-lg md:text-lg font-light leading-6 mb-8 animate-fade-in-up animation-delay-300 max-w-2xl mx-auto">
            {heroContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-600">
            <Button
              primaryText="Donate Now"
              hoverText="Donate Now"
              icon={PiHandHeartFill}
              iconPosition="left"
              onClick={() => alert("Button Clicked!")}
              className="gap-2 w-full md:w-auto bg-primaryRed hover:bg-primaryRed/90"
              aria-label="Donation button"
              variant="red"
            />
            <Button
              primaryText="Join Our Community"
              hoverText="Join Our Community"
              icon={ArrowRightIcon}
              iconPosition="right"
              onClick={() => alert("Button Clicked!")}
              className="gap-2 w-full md:w-64"
              aria-label="Join button"
              variant="black"
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-6 left-6 z-30 flex gap-4 md:bottom-8 md:left-8">
          <button
            type="button"
            onClick={prevSlide}
            className="w-12 cursor-pointer h-12 md:w-10 md:h-10 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Previous slide"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={nextSlide}
            className="w-12 cursor-pointer h-12 md:w-10 md:h-10 bg-white/20 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white text-xl font-bold hover:bg-white/30 hover:border-white/50 hover:scale-110 active:scale-95 transition-all duration-300"
            aria-label="Next slide"
          >
            ›
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 right-6 z-30 flex gap-2 md:bottom-8 md:right-8">
          {heroContent.images.map((_, index: number) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSlideClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-primaryRed scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-30">
          <div
            className="h-full bg-primaryRed transition-all duration-300 ease-linear"
            style={{
              width: progressWidth,
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
