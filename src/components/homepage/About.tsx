"use client";

import React from "react";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Container from "../layout/Container";
import { Heading } from "../layout/Heading";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const About = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

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

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
            {/* Heading */}
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative text-center md:text-left"
            >
              <Heading className="text-4xl sm:text-4xl md:text-5xl leading-tight">
                Where Great
                <br /> Leader{" "}
                <span className="italic font-secondaryFont">Grow</span>
              </Heading>
              <Image
                src="/star_1.svg"
                alt="star_Image"
                width={20}
                height={20}
                className="absolute -top-40 md:top-16 right-10"
              />
              <Image
                src="/rectangle.svg"
                alt="star_Image"
                width={100}
                height={100}
                className="absolute top-32 md:top-26 right-3 -z-10"
                draggable={false}
              />
            </motion.div>

            {/* Arrow doodle */}
            <motion.div
              custom={1}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center md:justify-start"
            >
              <Image
                src="/icons/doodle-arrow.svg"
                alt="doodle arrow"
                aria-label="doodle-art-arrow"
                width={100}
                height={100}
                className="w-full h-auto"
                draggable={false}
              />
            </motion.div>

            {/* Text + Avatar + Button */}
            <motion.div
              custom={2}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-center md:text-left"
            >
              <p className="text-sm sm:text-base font-normal text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                Raising young transformational leaders who will occupy every
                sector of Africa by 2050
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-6">
                <Image
                  src="/about-avartar.svg"
                  alt="about avatar"
                  width={120}
                  height={120}
                  className="max-w-[120px] w-full h-auto"
                  draggable={false}
                />
                <Button
                  primaryText="About Us"
                  hoverText="About Us"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={handleClick}
                  className="gap-2 px-8 py-3 text-sm sm:text-base"
                  aria-label="Registration button"
                  variant="red"
                />
              </div>
            </motion.div>
          </div>

          {/* Bottom Image */}
          <motion.div
            custom={3}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 sm:mt-16 flex justify-center"
          >
            <Image
              src="/about-img.svg"
              alt="about Image"
              width={400}
              height={300}
              className="w-full h-auto"
              draggable={false}
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
