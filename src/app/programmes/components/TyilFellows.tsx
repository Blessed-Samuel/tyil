"use client";

import React, { useState } from "react";
import { Heading } from "@/components/layout/Heading";
// import Container from "@/components/layout/Container";
import { Variants, motion } from "framer-motion";
import { tyilFellowsLists, tyilFellows } from "@/constants/tyil-fellows";
import { HiExternalLink } from "react-icons/hi";
import Image from "next/image";

const TyilFellows = () => {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  const [expandedYears, setExpandedYears] = useState<Record<number, boolean>>(
    {}
  );

  const INITIAL_DISPLAY_COUNT = 6;

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  const toggleYearExpansion = (year: number) => {
    setExpandedYears(prev => ({ ...prev, [year]: !prev[year] }));
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase();
  };

  // Group fellows by year
  const fellowsByYear = tyilFellowsLists.reduce((acc, fellow) => {
    const year = fellow.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(fellow);
    return acc;
  }, {} as Record<number, (typeof tyilFellowsLists)[number][]>);

  // Sort years in descending order
  const sortedYears = Object.keys(fellowsByYear)
    .map(Number)
    .sort((a, b) => b - a);

  // Animation settings (slide up)
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-16 sm:py-12">
      <div>
        {/* Main Header */}
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center my-4 px-4">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading className="text-2xl md:text-5xl text-center font-bold">
                Tyil <span className="italic font-secondaryFont">Fellows</span>
              </Heading>
            </motion.div>
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base text-center text-primaryBlack/60 mt-4 max-w-2xl">
                Meet the fellows who have walked this path and are now shaping
                their world.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Year Sections */}
        <div className="space-y-16 mt-12">
          {sortedYears.map((year, yearIndex) => {
            const yearFellows = fellowsByYear[year];
            const isExpanded = expandedYears[year];
            const displayedFellows = isExpanded
              ? yearFellows
              : yearFellows.slice(0, INITIAL_DISPLAY_COUNT);
            const hasMore = yearFellows.length > INITIAL_DISPLAY_COUNT;

            return (
              <div
                key={year}
                className="border-t border-gray-200 pt-12 first:border-t-0 first:pt-0"
              >
                {/* Year Header */}
                <motion.div
                  custom={yearIndex}
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="mb-10"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {year} Alumni
                  </h2>
                  <p className="text-gray-600 text-sm">
                    {yearFellows.length}{" "}
                    {yearFellows.length === 1 ? "Fellow" : "Fellows"}
                  </p>
                </motion.div>

                {/* Fellows Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                  {displayedFellows.map(
                    (member: tyilFellows, index: number) => (
                      <motion.div
                        key={member.id}
                        custom={index}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-2 text-center max-w-sm w-full"
                      >
                        {/* Image/Initials Container */}
                        <div className="relative flex items-center justify-center mb-4 h-40 w-40 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-red-100 to-red-200">
                          {member.image && !imageErrors[member.id] ? (
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              sizes="160px"
                              className="object-cover"
                              onError={() => handleImageError(member.id)}
                              priority={yearIndex === 0 && index < 3}
                            />
                          ) : (
                            <span className="text-primaryRed font-bold text-4xl sm:text-5xl">
                              {getInitials(member.name)}
                            </span>
                          )}
                        </div>

                        {/* Content */}
                        <div className="pb-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">
                            {member.name}
                          </h3>

                          {/* Link Icon */}
                          <a
                            href={member.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 text-sm cursor-pointer flex flex-col hover:text-primaryRed transition-all duration-100 items-center gap-1"
                            onClick={e => e.stopPropagation()}
                          >
                            <span className="text-center leading-tight">
                              {member.role}
                            </span>
                            <HiExternalLink className="w-5 h-5 text-primaryRed mt-1" />
                          </a>
                        </div>
                      </motion.div>
                    )
                  )}
                </div>

                {/* View All Button */}
                {hasMore && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-10"
                  >
                    <button
                      onClick={() => toggleYearExpansion(year)}
                      className="px-6 py-3 bg-primaryRed text-sm text-white rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer"
                    >
                      {isExpanded
                        ? "Show Less"
                        : `View All ${yearFellows.length} Fellows`}
                    </button>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TyilFellows;
