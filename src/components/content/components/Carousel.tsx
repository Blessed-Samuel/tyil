"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CarouselItem } from "@/constants/programDetails";

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent(c => (c === items.length - 1 ? 0 : c + 1)),
      10000
    );
    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => setCurrent(c => (c === 0 ? items.length - 1 : c - 1));
  const nextSlide = () => setCurrent(c => (c === items.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full h-64 md:h-96 my-8 mb-10 overflow-hidden">
      <Image
        src={items[current].src}
        alt={items[current].alt}
        fill
        className="object-cover transition-transform duration-500"
        priority
      />

      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute top-1/2 cursor-pointer left-4 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute top-1/2 cursor-pointer right-4 -translate-y-1/2 bg-white/80 p-2 rounded-full"
      >
        &#8594;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full ${
              idx === current ? "bg-primaryRed" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
