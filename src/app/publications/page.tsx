"use client";

import React from "react";
import Hero from "@/components/Hero";
import { publicationsHeroContent } from "@/constants/hero";
import { motion, Variants } from "framer-motion";
import { Heading } from "@/components/layout/Heading";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";

const Publications = () => {
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
    <>
      <Hero
        title={publicationsHeroContent.title as string}
        description={publicationsHeroContent.description as string}
      />

      <section className="py-10 sm:py-20">
        <Container>
          <div className="flex flex-col justify-center items-center">
            <motion.div
              custom={0}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Badge title="Our Publications" />
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
                  Publications &{" "}
                  <span className="italic font-secondaryFont">Research</span>
                </Heading>
              </motion.div>
              <motion.div
                custom={0}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <p className="text-base sm:text-lg text-center text-primaryBlack/60 mt-4 max-w-2xl">
                  A complete archive of our articles, reports, and digital
                  content. Find valuable resources to guide your journey and
                  help you grow as a leader.
                </p>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Publications;
