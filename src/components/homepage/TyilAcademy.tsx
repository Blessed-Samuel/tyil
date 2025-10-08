"use client";

import React from "react";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";
import { motion, Variants } from "framer-motion";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TyilAcademy = () => {
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

  const goToLeadquest = () => {
    router.push("/tyil-academy");
  };

  const handleClick = () => {
    window.location.href = "mailto:tyilcommunity@gmail.com";
  };

  return (
    <section className="py-16 sm:py-5 border-t border-gray-200">
      <Container>
        {/* Flex wrapper with equal columns on desktop */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-5">
          {/* Left side - image */}
          <motion.div
            custom={0}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src="/leadquest_img.svg"
              alt="feature Image"
              width={500}
              height={500}
              className="max-w-full h-auto"
              priority
            />
          </motion.div>

          {/* Right side - text */}
          <div className="flex-1">
            <motion.div
              custom={0}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Tyil Academy" />
            </motion.div>

            <div className="flex flex-col justify-start items-start my-10">
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl sm:text-5xl md:text-6xl font-bold">
                  Register yourself, youth or school for{" "}
                  <span className="italic font-secondaryFont">
                    our annual programs.
                  </span>
                </Heading>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-sm text-start text-gray-600 mt-4 max-w-xl">
                  Connect with your audience: Tailoring experiences to build
                  trust through empathy and effective communication.
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 w-full mt-10">
                <motion.div
                  custom={0}
                  variants={slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative inline-block w-full sm:w-auto"
                >
                  <button
                    onClick={goToLeadquest}
                    className="relative inline-block focus:outline-none w-full sm:w-auto"
                    aria-label="Go to leadquest page"
                  >
                    <Image
                      src="/leadquest_btn_img.svg"
                      alt="leadquest button background"
                      width={220}
                      height={50}
                      className="w-full h-auto hover:opacity-90 transition-opacity"
                      priority
                    />
                    <span className="absolute leading-5 text-left inset-0 gap-3 flex items-center justify-center text-sm sm:text-base font-medium text-white cursor-pointer hover:translate-x-4 transition-all duration-300">
                      JOIN OUR <br />
                      LEADERSHIP ACADEMY
                      <ArrowRightIcon className="ml-3 w-5 h-5" />
                    </span>
                  </button>
                </motion.div>

                <motion.div
                  custom={0}
                  variants={slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative inline-block w-full sm:w-auto"
                >
                  <button
                    onClick={handleClick}
                    className="relative inline-block focus:outline-none w-full sm:w-auto"
                    aria-label="Go to publications page"
                  >
                    <Image
                      src="/contact_img.svg"
                      alt="contact button background"
                      width={220}
                      height={50}
                      className="w-full h-auto hover:opacity-90 transition-opacity"
                      priority
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-sm sm:text-base font-medium text-white cursor-pointer hover:translate-x-4 transition-all duration-300">
                      GET IN TOUCH
                      <ArrowRightIcon className="ml-4 w-5 h-5" />
                    </span>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TyilAcademy;
