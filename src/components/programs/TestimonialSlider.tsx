"use client";

import { useEffect, useRef } from "react";
import { testimonial_data } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialSlider = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Infinite smooth scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isHovered.current && !isDragging.current) {
        container.scrollLeft += 0.3;

        // Get the width of one complete set of testimonials
        const singleSetWidth = container.scrollWidth / 3;

        // scrolled through one complete set, instantly reset
        if (container.scrollLeft >= singleSetWidth) {
          container.scrollLeft = container.scrollLeft - singleSetWidth;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Drag to scroll (desktop + touch)
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    isDragging.current = true;
    startX.current =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    scrollLeft.current = containerRef.current.scrollLeft;
    document.body.style.userSelect = "none";
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const x =
      "touches" in e ? e.touches[0].pageX : (e as React.MouseEvent).pageX;
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.body.style.userSelect = "";
  };

  return (
    <div className="relative py-10">
      {/* Slider container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: "auto" }}
        onMouseEnter={() => (isHovered.current = true)}
        onMouseLeave={() => {
          isHovered.current = false;
          handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        {/* Triple the testimonials for seamless infinite loop */}
        {[...testimonial_data, ...testimonial_data, ...testimonial_data].map(
          (t, i) => (
            <TestimonialCard key={t.id + "-" + i} testimonial={t} />
          )
        )}
      </div>

      {/* Left overlay */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-r from-white dark:from-gray-900 to-transparent" />

      {/* Right overlay */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 sm:w-32 md:w-48 lg:w-60 bg-gradient-to-l from-white dark:from-gray-900 to-transparent" />
    </div>
  );
};

export default TestimonialSlider;
