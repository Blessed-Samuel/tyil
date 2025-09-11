"use client";

import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";
import { FAQ_CONTENT } from "@/constants/faq";
import Container from "../layout/Container";
import Badge from "../ui/Badge";
import { Heading } from "../layout/Heading";
import Button from "../ui/Button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Variants, motion } from "framer-motion";

const Faq = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (id: number) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

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

  const handleClick = () => {
    window.location.href = "mailto:tyilcommunity@gmail.com";
  };

  return (
    <section className="mt-16 sm:mt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header Section - Left Side */}
          <div className="text-start">
            <motion.div
              custom={0}
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="FAQs" />
            </motion.div>
            <div className="mt-4 space-y-3">
              <motion.div
                custom={0}
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <Heading className="text-3xl text-primaryRed sm:text-4xl md:text-5xl leading-snug">
                  Frequently Asked <br />
                  <span className="italic text-primaryBlack font-secondaryFont">
                    Questions
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
                <p className="text-base text-gray-600 sm:text-lg text-start mt-4 max-w-xl">
                  Find answers to common questions about TYIL&apos;s services,
                  products, and processes.
                </p>
              </motion.div>
            </div>

            {/* support section */}
            <div className="mt-12 text-start">
              <div className="bg-gray-50 rounded-lg p-8">
                <motion.div
                  custom={0}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Heading className="text-xl font-semibold text-gray-900 mb-3">
                    Still have questions?
                  </Heading>
                </motion.div>

                <motion.div
                  custom={0}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <p className="text-gray-600 mb-4">
                    Can&apos;t find the answer you&apos;re looking for? Our team
                    is here to help.
                  </p>
                </motion.div>
                <motion.div
                  custom={0}
                  variants={slideLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <Button
                    primaryText="Contact Support"
                    hoverText="Contact Support"
                    icon={ArrowRightIcon}
                    iconPosition="right"
                    onClick={handleClick}
                    className="gap-2 px-8 py-3 text-sm sm:text-base"
                    aria-label="Registration button"
                    variant="red"
                  />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Content Section - Right Side */}
          <div className="space-y-4">
            {FAQ_CONTENT.map(faq => (
              <div
                key={faq.id}
                className="bg-white border border-gray-200 rounded-lg"
              >
                {/* Button / Title */}
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer rounded-lg"
                >
                  <h3 className="text-lg font-semibold text-primaryBlack pr-4">
                    {faq.title}
                  </h3>
                  <HiChevronDown
                    className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                      expandedItem === faq.id ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {/* Sliding Content */}
                <div
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedItem === faq.id ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
