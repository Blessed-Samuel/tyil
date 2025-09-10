"use client";

import React from "react";
import Container from "../layout/Container";
// import Badge from "./ui/Badge";
import { Heading } from "../layout/Heading";
import { motion, Variants } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Podcast = () => {
  const router = useRouter();

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

  const handleClick = () => {
    router.push("/publications");
  };

  return (
    <section
      className="py-16 sm:py-20 bg-[url('/podcast_bg.svg')] bg-no-repeat bg-cover bg-center"
      //   style={{ backgroundImage: "url('/podcast_bg.svg')" }}
    >
      <Container>
        {/* Flex wrapper with equal columns on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* Left side - text */}
          <div className="flex-1">
            {/* <motion.div
              custom={0}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Publications" />
            </motion.div> */}

            <div className="flex flex-col justify-start items-start my-8">
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl text-white sm:text-5xl md:text-6xl font-bold">
                  Podcast that Ignites. Tune In.{" "}
                  <span className="italic font-secondaryFont">
                    Learn. Grow.
                  </span>
                </Heading>
              </motion.div>

              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-base text-white/50 sm:text-lg text-start mt-4 max-w-xl">
                  Dive into conversations that spark ideas, challenge
                  perspectives, and inspire growth. Our podcast brings together
                  thought leaders, innovators, and everyday people with
                  extraordinary stories to share. Whether it&apos;s insights on
                  technology, business, creativity, or personal development,
                  each episode is designed to help you rise above mediocrity and
                  make better decisions in life and work. Plug in, stay
                  inspired, and join the journey toward becoming your best self.
                </p>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6"
              >
                <Button
                  primaryText="Explore Episodes"
                  hoverText="Explore Episodes"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={handleClick}
                  className="gap-2 px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                  aria-label="podcast button"
                  variant="red"
                />
              </motion.div>
            </div>
          </div>

          {/* Right side - image */}
          <motion.div
            custom={0}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 flex justify-end"
          >
            <Image
              src="/podcast_img.svg"
              alt="feature Image"
              width={450}
              height={450}
              className="max-w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Podcast;
