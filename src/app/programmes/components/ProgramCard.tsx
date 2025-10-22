"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { program_content } from "@/constants/program";
import { IoArrowRedo } from "react-icons/io5";

type ProgrammeCardProps = program_content;

const ProgrammeCard = ({
  title,
  description,
  imageUrl,
  section,
  slug,
}: ProgrammeCardProps) => {
  // Convert section and slug to lowercase for URL
  const sectionSlug = section.toLowerCase().replace(/\s+/g, "-");
  const slugLower = slug.toLowerCase();

  return (
    <Link
      href={`/programmes/${sectionSlug}/${slugLower}`}
      className="group relative rounded-3xl overflow-hidden h-full transition-all hover:shadow-2xl duration-500"
    >
      {/* Background Image with Overlay */}
      <div className="relative h-full min-h-[300px] sm:min-h-[350px] overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-col items-start">
            {/* Badge */}
            <div className="mb-3">
              <span className="inline-block px-4 py-1.5 bg-primaryRed/90 text-white text-xs font-semibold rounded-full backdrop-blur-sm">
                {section}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-white mb-3 leading-tight text-left">
              {title}
            </h3>

            {/* Description */}
            <p className="text-gray-200 text-base leading-relaxed mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300 text-left">
              {description}
            </p>

            {/* Button - Desktop (hover to show) */}
            <div className="hidden sm:block transform translate-y-4 mb-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 w-full sm:w-auto">
              <button
                className="gap-2 bg-primaryRed px-4 py-3 w-full sm:w-auto bg-opacity-0 text-white hover:underline cursor-pointer transition-all duration-300 inline-flex items-center font-medium text-base"
                aria-label="programme details button"
              >
                Explore Programmes <IoArrowRedo />
              </button>
            </div>

            {/* Helper Text - Mobile (always visible) */}
            <div className="sm:hidden flex items-center hover:underline hover:translate-x-1 transition-all duration-300 gap-2 text-white/80 text-base mt-3">
              <span>Tap to view more</span>
              <IoArrowRedo className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProgrammeCard;
