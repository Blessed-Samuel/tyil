"use client";

import React from "react";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";
import { motion, Variants } from "framer-motion";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Publication = () => {
  const router = useRouter();

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 80 },
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

  const handleClick = () => {
    router.push("/publications");
  };

  return (
    <section className="py-16 sm:py-20">
      <Container>
        {/* Flex wrapper with equal columns on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-5">
          {/* Left side - text */}
          <div className="flex-1">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Publications" />
            </motion.div>

            <div className="flex flex-col justify-start items-start my-8">
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl sm:text-5xl md:text-6xl font-bold">
                  Featured{" "}
                  <span className="italic font-secondaryFont">
                    Publications
                  </span>
                </Heading>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-sm text-start text-gray-600 mt-4 max-w-xl">
                  Dive into our latest reports, research papers, and case
                  studies that are shaping the future of youth leadership.
                </p>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="mt-6"
              >
                <Button
                  primaryText="Explore Our Full Library"
                  hoverText="Explore Our Full Library"
                  icon={ArrowRightIcon}
                  iconPosition="right"
                  onClick={handleClick}
                  className="gap-2 px-8 py-3 text-sm w-full sm:w-auto"
                  aria-label="programme button"
                  variant="red"
                />
              </motion.div>
            </div>
          </div>

          {/* Right side - image */}
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-[80%] sm:w-full max-w-[700px] h-72 sm:h-80 md:h-96">
              <Image
                src="/feature_img.svg"
                alt="Feature Image"
                fill
                className="object-contain sm:object-cover duration-300"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Publication;
