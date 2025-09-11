"use client";

import React from "react";
import Badge from "../ui/Badge";
import Container from "../layout/Container";
import { Variants, motion } from "framer-motion";
import { Heading } from "../layout/Heading";
import Image from "next/image";

const Story = () => {
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

  return (
    <section className="py-16 sm:py-12">
      <Container>
        <div>
          <div className="flex justify-between flex-col md:flex-row items-start gap-5">
            <div>
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Badge title="Our Story" />
              </motion.div>
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-4"
              >
                <Heading className="text-3xl text-primaryBlack sm:text-4xl md:text-5xl leading-snug">
                  Our Story.{" "}
                  <span className="italic text-primaryBlack font-secondaryFont">
                    Our Mission
                  </span>
                </Heading>
              </motion.div>
            </div>

            <motion.div
              custom={0}
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base text-gray-600 sm:text-lg text-start mt-4 max-w-xl">
                We believe that every young person has the potential to lead. At
                TYIL, we&apos;re dedicated to transforming that potential into
                purpose by providing a platform for growth, collaboration, and
                innovation. Discover how we&apos;re building a network of
                empowered leaders who are ready to shape a better future.
              </p>
            </motion.div>
          </div>

          {/* card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {/* First card spanning full height */}
            <motion.div
              custom={0}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:row-span-2"
            >
              <Image
                src="/story_img.svg"
                alt="story image"
                width={100}
                height={100}
                className="h-auto w-auto rounded-xl"
                priority={true}
              />
            </motion.div>

            {/* Two images below side by side */}
            <motion.div
              custom={1}
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-gray-200 bg-gradient-to-br from-primaryRed/15 via-primaryWhite to-primaryWhite px-5 md:px-10 pt-5 md:pt-10 rounded-xl"
            >
              <div className="flex md:flex-row flex-col gap-8 items-start mb-8">
                <Image
                  src="/icons/story_mission_icon.svg"
                  alt="mission icon"
                  width={70}
                  height={70}
                  priority={true}
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="uppercase font-bold text-lg sm:text-2xl text-center text-primaryBlack">
                    Our Mission
                  </h3>
                  <p className="text-base sm:text-lg text-start text-primaryBlack/60">
                    To educate all African youth in the area of leadership,
                    empower them through the provision of resources to be
                    change-makers in their communities, foster collaboration
                    among youth, and build a community of leaders.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border bg-gradient-to-br from-primaryRed/15 via-primaryWhite to-primaryWhite border-gray-200 px-5 md:px-10 pt-5 md:pt-10 rounded-xl"
            >
              <div className="flex md:flex-row flex-col gap-8 items-start mb-10">
                <Image
                  src="/icons/story_vision_icon.svg"
                  alt="mission icon"
                  width={70}
                  height={70}
                  priority={true}
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="uppercase font-bold text-lg sm:text-2xl text-center text-primaryBlack">
                    Our Vision
                  </h3>
                  <p className="text-base sm:text-lg text-start text-primaryBlack/60">
                    The vision of TYIL is to raise leaders who embody
                    transformational leadership as they occupy every sector of
                    Africa by 2050.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Story;
