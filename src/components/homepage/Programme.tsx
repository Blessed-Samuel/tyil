"use client";

import React, { useState } from "react";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";
import Image from "next/image";
import Container from "../layout/Container";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion, Variants } from "framer-motion";
import { RxVideo } from "react-icons/rx";
import { useRouter } from "next/navigation";
import VideoModal from "../ui/VideoModal";

const Programme = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    router.push("/programmes");
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
    <section className="py-16 sm:py-5">
      <Container>
        <div className="flex flex-col justify-center items-center">
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Badge title="Our Programmes" />
          </motion.div>
          <div className="flex flex-col justify-center items-center my-8 px-4">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Heading className="text-3xl sm:text-7xl text-center font-bold">
                Our Impactful{" "}
                <span className="italic font-secondaryFont">Programmes</span>
              </Heading>
            </motion.div>
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <p className="text-base sm:text-lg text-center text-gray-600 mt-4 max-w-2xl">
                Our programs are more than just courses - they are immersive
                experiences that provide practical leadership skills through
                education, empowerment, collaboration and community building.
              </p>
            </motion.div>
          </div>

          {/* image grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
            {/* First image spanning full width */}
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="md:col-span-2 border border-gray-200 px-5 md:px-10 pt-5 md:pt-10 rounded-xl"
            >
              <div className="flex md:flex-row flex-col gap-8 items-start mb-8">
                <Image
                  src="/icons/fellowship.svg"
                  alt="fellowship_icon"
                  width={70}
                  height={70}
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="uppercase font-bold text-lg sm:text-2xl text-center text-primaryBlack">
                    Tyil Fellowship
                  </h3>
                  <p className="text-base sm:text-lg text-start text-gray-600">
                    The TYIL Fellowship is an eight-week program designed for
                    post-secondary and college level youth to engage in
                    practice-based leadership, collaborate and connect with
                    other fellows in solving social and community problems.
                  </p>
                </div>
              </div>
              <Image
                src="/card_img_1.svg"
                alt="card_image_1"
                width={100}
                height={100}
                className="h-auto w-full"
                priority
              />
            </motion.div>

            {/* Two images below side by side */}
            <motion.div
              custom={1}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border border-gray-200 bg-gradient-to-br from-primaryRed/15 via-primaryWhite to-primaryWhite px-5 md:px-10 pt-5 md:pt-10 rounded-xl"
            >
              <div className="flex md:flex-row flex-col gap-8 items-start mb-8">
                <Image
                  src="/icons/development.svg"
                  alt="development_icon"
                  width={70}
                  height={70}
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="uppercase font-bold text-lg sm:text-2xl text-center text-primaryBlack">
                    LeadSmart Project
                  </h3>
                  <p className="text-base sm:text-lg text-start text-primaryBlack/60">
                    The LeadSmart Project is a four-week in-school and hands-on
                    leadership development program targeted at educating and
                    empowering secondary school youth.
                  </p>
                </div>
              </div>
              <Image
                src="/card_img_2.svg"
                alt="card_image_2"
                width={100}
                height={100}
                className="h-auto w-full"
                priority
              />
            </motion.div>

            <motion.div
              custom={2}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="border bg-gradient-to-br from-primaryRed/15 via-primaryWhite to-primaryWhite border-gray-200 px-5 md:px-10 pt-5 md:pt-10 rounded-xl"
            >
              <div className="flex md:flex-row flex-col gap-8 items-start mb-10">
                <Image
                  src="/icons/conference.svg"
                  alt="conference_icon"
                  width={70}
                  height={70}
                />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="uppercase font-bold text-lg sm:text-2xl text-center text-primaryBlack">
                    Climate Change Education
                  </h3>
                  <p className="text-base sm:text-lg text-start text-primaryBlack/60">
                    Designed to provide participatory learning experience,
                    hands-on activities and exposure to real-world climate
                    change problems and solutions.
                  </p>
                </div>
              </div>
              <Image
                src="/card_img_3.svg"
                alt="card_image_3"
                width={100}
                height={100}
                className="h-auto w-full"
                priority
              />
            </motion.div>
          </div>

          {/* action buttons*/}
          <motion.div
            custom={3}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="w-full flex justify-center"
          >
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mt-10">
              <Button
                primaryText="Find Out More"
                hoverText="Find Out More"
                icon={ArrowRightIcon}
                iconPosition="right"
                onClick={handleClick}
                className="gap-2 px-8 py-3 text-sm sm:text-base w-full sm:w-auto"
                aria-label="programme button"
                variant="black"
              />
              <Button
                primaryText="Learn More About TYIL"
                hoverText="Learn More About TYIL"
                icon={RxVideo}
                onClick={() => setIsOpen(true)}
                iconPosition="left"
                className="gap-2 px-8 py-3 sm:w-64 text-sm sm:text-base w-full"
                aria-label="youtube video button"
                variant="red"
              />
            </div>
          </motion.div>
        </div>
      </Container>

      {/* video modal */}
      {isOpen && <VideoModal onClick={() => setIsOpen(false)} />}
    </section>
  );
};

export default Programme;
