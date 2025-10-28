"use client";

import React from "react";
import { Heading } from "@/components/layout/Heading";
import { Variants, motion } from "framer-motion";
import Image from "next/image";
import { OUTCOMES_CONTENT, Outcomes_content } from "@/constants/outcomes";

const Outcomes = () => {
  const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i: number = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
      opacity: 0.1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="py-10 sm:py-20 bg-[url('/outcomes_bg_img.svg')] bg-no-repeat bg-cover bg-center">
      <div className="pl-4 sm:pl-6 pr-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-20">
          {/* Left column (Text) */}
          <div className="w-full md:w-1/2">
            <motion.div
              custom={0}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="mt-4"
            >
              <Heading className="text-3xl text-white sm:text-4xl md:text-5xl leading-snug">
                Intended{" "}
                <span className="italic text-white font-secondaryFont">
                  Outcomes
                </span>
              </Heading>
            </motion.div>

            {OUTCOMES_CONTENT.map(
              (outcome: Outcomes_content, index: number) => (
                <motion.div
                  key={outcome.id}
                  custom={index}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className="mt-12 sm:mt-18 relative"
                >
                  {/* Large Background Number */}
                  <motion.div
                    custom={index}
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="absolute -top-8 sm:-top-14 -left-2 sm:-left-3 z-0 pointer-events-none"
                  >
                    <span className="text-[60px] sm:text-[80px] md:text-[120px] font-secondaryFont font-black text-white select-none">
                      {outcome.label_number}
                    </span>
                  </motion.div>

                  {/* Content Section */}
                  <div className="relative z-10 pl-3 sm:pl-4">
                    <motion.div
                      custom={index}
                      variants={slideLeft}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h3 className="uppercase font-bold text-lg sm:text-2xl text-white">
                        {outcome.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed max-w-full sm:max-w-md text-base">
                        {outcome.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              )
            )}
          </div>

          {/* Right column (Image) */}
          <motion.div
            custom={0}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full md:w-1/2 mt-3 md:mt-0 flex justify-center md:justify-end"
          >
            <Image
              src="/outcomes_img.png"
              alt="outcomes image"
              width={1000}
              height={1000}
              className="h-auto w-[80%] md:w-full object-contain"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
