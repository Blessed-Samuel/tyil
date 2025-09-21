"use client";

import React from "react";
import Hero from "@/components/Hero";
import { publicationsHeroContent } from "@/constants/hero";
import { motion, Variants } from "framer-motion";
import { Heading } from "@/components/layout/Heading";
import Badge from "@/components/ui/Badge";
import Container from "@/components/layout/Container";
import PublicationCard from "@/components/publicationCard";
import { publications } from "@/constants/publications";

// Animation settings
const slideUp: Variants = {
  hidden: { opacity: 0, y: 50 },
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

const PublicationsPage = () => {
  return (
    <section className="font-primaryFont">
      <Hero
        title={publicationsHeroContent.title as string}
        description={publicationsHeroContent.description as string}
      />

      <section className="py-10 sm:py-20">
        <Container>
          {/* Heading */}
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
            <div className="flex flex-col justify-center items-center my-4 px-4">
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
                <p className="text-sm text-center text-primaryBlack/60 mt-4 max-w-2xl">
                  A complete archive of our articles, reports, and digital
                  content. Find valuable resources to guide your journey and
                  help you grow as a leader.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {publications.map((pub, i) => (
              <motion.div
                key={pub.id}
                custom={i}
                variants={slideUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <PublicationCard {...pub} />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </section>
  );
};

export default PublicationsPage;
