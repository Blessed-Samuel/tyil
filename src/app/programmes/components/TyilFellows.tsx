"use client";

import React from "react";
import { Heading } from "@/components/layout/Heading";
import Container from "@/components/layout/Container";
import { Variants, motion } from "framer-motion";
import { tyilFellowsLists, tyilFellows } from "@/constants/tyil-fellows";
import { HiExternalLink } from "react-icons/hi";

const TyilFellows = () => {
  // Animation settings (slide up)
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier "easeOut"
      },
    }),
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-16 sm:py-12 border border-gray-200">
      <Container>
        <div>
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
                  Tyil{" "}
                  <span className="italic font-secondaryFont">Fellows</span>
                </Heading>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-sm text-center text-primaryBlack/60 mt-4 max-w-2xl">
                  Meet the fellows who have walked this path and are now shaping
                  their world.
                </p>
              </motion.div>
            </div>
          </div>

          {tyilFellowsLists.length > 0 && (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center">
              {tyilFellowsLists.map((member: tyilFellows, index: number) => (
                <motion.div
                  key={member.id}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="group overflow-hidden transition-all duration-300 transform hover:-translate-y-2 text-center max-w-sm w-full"
                >
                  {/* Initials Container */}
                  <div className="relative flex items-center justify-center mb-4 h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-red-100 to-red-200 text-primaryRed font-bold text-4xl sm:text-5xl">
                    {member.name
                      .split(" ")
                      .map(word => word[0])
                      .join("")
                      .toUpperCase()}
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
                      className="text-gray-600 text-sm cursor-pointer flex flex-col hover:text-primaryRed transition-all duration-100 items-center -gap-3 uppercase"
                      onClick={e => e.stopPropagation()}
                    >
                      {member.role}
                      <HiExternalLink className="w-5 h-5 text-primaryRed" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TyilFellows;
